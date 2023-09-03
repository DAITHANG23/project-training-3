import {
  getUsers,
  getRoles,
  getRoleUpdate,
  createUsers,
  createRoles,
} from "@/api";
import { useQuery, useMutation, useQueryClient } from "react-query";
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

const QUERY_KEY = {
  useGetUsers: ["fetchData"],
  useGetRoles: ["fetchDataRoles"],
  useGetRoleUpdate: ["fetchDataRoleUpdate"],
};

export const useUsers = () => {
  const { data, isLoading, error, isFetching, refetch } = useQuery<Users[]>(
    QUERY_KEY.useGetUsers,
    getUsers,
    {
      keepPreviousData: true,
      refetchOnMount: true,
      refetchOnReconnect: false,
      staleTime: Infinity,
    }
  );

  return { data, isLoading, error, isFetching, refetch };
};

export const useCreateUser = () => {
  const queryClient = useQueryClient();
  return useMutation(createUsers, {
    onSuccess: (data) => {
      //queryClient.invalidateQueries("fetchData");

      queryClient.setQueryData("fetchData", (oldQueryData: any) => {
        return [...oldQueryData, data];
      });
    },
  });
};

export const useRoles = () => {
  const { data, isLoading, error, refetch } = useQuery<Roles[]>(
    QUERY_KEY.useGetRoles,
    getRoles,
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnReconnect: false,
      staleTime: Infinity,
    }
  );
  return { data, isLoading, error, refetch };
};
export const useCreateRole = () => {
  const queryClient = useQueryClient();
  return useMutation(createRoles, {
    onSuccess: (data) => {
      queryClient.setQueryData("fetchDataRoles", (oldQueryData: any) => {
        return [...oldQueryData, data];
      });
    },
  });
};
export const useRoleUpdate = () => {
  const { data, isLoading, error, refetch } = useQuery<string[]>(
    QUERY_KEY.useGetRoleUpdate,
    getRoleUpdate,
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnReconnect: false,
      staleTime: Infinity,
    }
  );
  return { data, isLoading, error, refetch };
};
