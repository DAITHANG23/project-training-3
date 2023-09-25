import {
  getUsers,
  getRoles,
  createRoleUpdate,
  createUsers,
  createRoles,
  getRoleItem,
  getUsersSearch,
  getUserItem,
  removeUserItem,
  getRoleUpdateItem,
  editUserItem,
} from "@/api";
import { useQuery, useMutation, useQueryClient } from "react-query";

import { Order } from "@/hooks/useSortingTable";
import { useNavigate } from "react-router-dom";

export type Status = "Active" | "Suspended";

export interface Users {
  id: number;
  tel: string;
  image: string;
  name: string;
  role: string;
  team: string;
  status: string;
  date: string;
  time: string;
}

export interface UsersItem {
  tel?: string;
  image?: string;
  name?: string;
  role?: string;
  team?: string;
  status?: string;
}

export interface Roles {
  id: string;

  role: string;

  describe: string;
}

export interface UseUserSearch {
  searchTerm: string;

  signal?: AbortSignal;
}

export interface UseUser {
  signal?: AbortSignal;

  page: number;

  rowPerPage: number;

  oneOderDirection: Order;
}

export interface UserItem {
  signal?: AbortSignal;
  id?: string;
}

const QUERY_KEY = {
  useGetUsers: "fetchData",

  useGetRoles: ["fetchDataRoles"],

  useGetRoleUpdate: "fetchDataRoleUpdate",

  useGetUserSearch: "fetchUserSearch",
};

export const useUsers = (
  page: number,

  rowPerPage: number,

  oneOderDirection: Order
) => {
  const { data, isLoading, error, isFetching, refetch } = useQuery<Users[]>(
    [
      (QUERY_KEY.useGetUsers,
      {
        page: page,

        rowPerPage: rowPerPage,

        oneOderDirection: oneOderDirection,
      }),
    ],

    ({ signal }) => getUsers({ signal, page, rowPerPage, oneOderDirection }),

    {
      keepPreviousData: true,
    }
  );

  return { data, isLoading, error, isFetching, refetch };
};

export const useUsersSearch = (searchTerm: string) => {
  const { data, isLoading, error, isFetching, refetch } = useQuery<Users[]>(
    [QUERY_KEY.useGetUserSearch, { search: searchTerm }],

    ({ signal }) => getUsersSearch({ signal, searchTerm }),

    {
      enabled: searchTerm !== undefined,

      keepPreviousData: true,

      staleTime: 6 * 1000,

      cacheTime: 5000,
    }
  );

  return { data, isLoading, error, isFetching, refetch };
};

export const useCreateUser = () => {
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  return useMutation(createUsers, {
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.useGetUsers],
        exact: true,
      });

      navigate("../");
    },
  });
};

export const useUser = (id?: string) => {
  const { data, isLoading, error, isFetching, refetch } = useQuery<Users>(
    [QUERY_KEY.useGetUsers, id],
    ({ signal }) => getUserItem({ signal, id }),

    {
      enabled: id !== undefined,
      keepPreviousData: true,
    }
  );

  return { data, isLoading, error, isFetching, refetch };
};

export const useRemoveUser = () => {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { mutate, isError, isLoading, error } = useMutation({
    mutationFn: removeUserItem,

    onSuccess: (_, id) => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.useGetUsers],
        exact: true,
        refetchActive: true,
      });

      navigate("../");
    },
  });

  return { mutate, isError, isLoading, error };
};

export const useUpdateUser = (idUser?: string) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: editUserItem,
    onSuccess: (data) => {
      queryClient.setQueryData([QUERY_KEY.useGetUsers, idUser], data);
    },
  });
  return { mutate };
};

export const useRoles = () => {
  const { data, isLoading, error, refetch } = useQuery<Roles[]>(
    QUERY_KEY.useGetRoles,
    getRoles,

    {
      keepPreviousData: true,

      staleTime: 5000,
    }
  );

  return { data, isLoading, error, refetch };
};

export const useRole = (id?: string) => {
  const { data, isLoading, error, isFetching, refetch } = useQuery<Users[]>(
    [
      (QUERY_KEY.useGetRoles,
      {
        id: id,
      }),
    ],
    ({ signal }) => getRoleItem({ signal, id }),

    {
      enabled: id !== undefined,
      keepPreviousData: true,
    }
  );

  return { data, isLoading, error, isFetching, refetch };
};

export const useCreateRole = () => {
  const queryClient = useQueryClient();

  return useMutation(createRoles, {
    onSuccess: (data) => {
      // queryClient.setQueryData("fetchDataRoles", (oldQueryData: any) => {
      //   return [...oldQueryData, data];
      // });

      queryClient.invalidateQueries("fetchDataRoles");
    },
  });
};

export const useRoleUpdateItem = (id?: string, role?: string) => {
  const { data, isLoading, error, isFetching, refetch } = useQuery<{
    [key: string]: string;
  }>(
    [
      (QUERY_KEY.useGetRoleUpdate,
      {
        id: id,
        role: role,
      }),
    ],

    ({ signal }) => getRoleUpdateItem({ signal, id, role }),

    {
      keepPreviousData: true,
      staleTime: 10 * 1000,
      enabled: role !== null,
    }
  );

  return { data, isLoading, error, isFetching, refetch };
};

export const useRoleUpdate = (id?: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createRoleUpdate,

    onSuccess: (data) => {
      queryClient.invalidateQueries([QUERY_KEY.useGetRoleUpdate, id]);
    },
  });
};
