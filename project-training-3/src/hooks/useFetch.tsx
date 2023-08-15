import { getUsers, getRoles, getRoleUpdate } from "@/api";
import { useQuery } from "react-query";
export type Status = "Active" | "Suspended";
export interface Users {
  id: number;
  numberPhone: string;
  image: string;
  name: string;
  role: string;
  team: string;
  status: Status;
  lastActive: { date: string; time: string };
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
  const { data, isLoading, error } = useQuery<Users[]>(
    QUERY_KEY.useGetUsers,
    getUsers
  );
  return { data, isLoading, error };
};

export const useRoles = () => {
  const { data, isLoading, error } = useQuery<Roles[]>(
    QUERY_KEY.useGetRoles,
    getRoles
  );
  return { data, isLoading, error };
};

export const useRoleUpdate = () => {
  const { data, isLoading, error } = useQuery<string[]>(
    QUERY_KEY.useGetRoleUpdate,
    getRoleUpdate
  );
  return { data, isLoading, error };
};
