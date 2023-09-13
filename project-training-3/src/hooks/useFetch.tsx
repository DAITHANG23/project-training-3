import {
  getUsers,
  getRoles,
  getRoleUpdate,
  createUsers,
  createRoles,
  getRoleItem,
  getUsersSearch,
} from "@/api";
import { useQuery, useMutation, useQueryClient } from "react-query";
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
  page?: number;
  rowPerPage?: number;
}

const QUERY_KEY = {
  useGetUsers: "fetchData",
  useGetRoles: ["fetchDataRoles"],
  useGetRoleUpdate: "fetchDataRoleUpdate",
  useGetUserSearch: "fetchUserSearch",
};

export const useUsers = (page: number, rowPerPage: number) => {
  const { data, isLoading, error, isFetching, refetch } = useQuery<Users[]>(
    [QUERY_KEY.useGetUsers, { page: page, rowPerPage: rowPerPage }],
    ({ signal }) => getUsers({ signal, page, rowPerPage }),
    {
      keepPreviousData: true,
      staleTime: 10 * 1000,
    }
  );

  return { data, isLoading, error, isFetching, refetch };
};

export const useUsersSearch = (searchTerm: string) => {
  const { data, isLoading, error, isFetching, refetch } = useQuery<Users[]>(
    [QUERY_KEY.useGetUserSearch, { search: searchTerm }],
    ({ signal }) => getUsersSearch({ signal, searchTerm }),

    {
      //enabled: searchTerm !== undefined,
      keepPreviousData: true,
      // refetchOnMount: true,
      // refetchOnReconnect: false,
      // staleTime: Infinity,
      staleTime: 6 * 1000,
      cacheTime: 10000,
    }
  );

  return { data, isLoading, error, isFetching, refetch };
};

export const useCreateUser = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation(createUsers, {
    onSuccess: (data) => {
      // queryClient.setQueryData(QUERY_KEY.useGetUsers, (oldQueryData: any) => {
      //   return [...oldQueryData, data];
      // });
      queryClient.invalidateQueries("fetchData");
    },
  });
};

export const useRoles = () => {
  const { data, isLoading, error, refetch } = useQuery<Roles[]>(
    QUERY_KEY.useGetRoles,
    getRoles,
    {
      keepPreviousData: true,
      // refetchOnMount: false,
      // refetchOnReconnect: false,
      staleTime: 5000,
    }
  );
  return { data, isLoading, error, refetch };
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

export const useRoleUpdateItem = (id: string | undefined) => {
  const { data, isLoading, error, refetch } = useQuery<string[]>(
    [QUERY_KEY.useGetRoleUpdate, id],
    () => getRoleItem(id),
    {
      keepPreviousData: true,
      // refetchOnMount: false,
      // refetchOnReconnect: false,
      staleTime: 5000,
    }
  );
  return { data, isLoading, error, refetch };
};

export const useRoleUpdate = (idRole: string | undefined) => {
  const queryClient = useQueryClient();
  return useMutation(getRoleUpdate, {
    onSuccess: (data) => {
      queryClient.invalidateQueries([QUERY_KEY.useGetRoleUpdate, idRole], data);
    },
  });
};

// export const useRoleUpdate = (idRole: string | undefined) => {
//   const queryClient = useQueryClient();

//   return useMutation(getRoleUpdate, {
//     onMutate: async (data) => {
//       const newEvent = data;

//       await queryClient.cancelQueries([QUERY_KEY.useGetRoleUpdate, idRole]);
//       const previousEvent = queryClient.getQueryData([
//         QUERY_KEY.useGetRoleUpdate,
//         idRole,
//       ]);

//       queryClient.setQueryData([QUERY_KEY.useGetRoleUpdate, idRole], newEvent);

//       return { previousEvent };
//     },
//     onError: (error, data, context) => {
//       queryClient.setQueryData(
//         [QUERY_KEY.useGetRoleUpdate, idRole],
//         context?.previousEvent
//       );
//     },
//     onSettled: () => {
//       queryClient.invalidateQueries([QUERY_KEY.useGetRoleUpdate, idRole]);
//     },
//   });
// };
