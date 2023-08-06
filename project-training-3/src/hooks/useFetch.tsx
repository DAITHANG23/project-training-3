import { getUsers } from "@/api";
import { useQuery } from "react-query";

export interface Users {
  id: number;
  numberPhone: string;
  image: string;
  name: string;
  role: string;
  team: string;
  status: string;
  lastActive: { date: string; time: string };
}

const QUERY_KEY = {
  useGetUsers: ["fetchData"],
};

export const useUsers = () => {
  const { data, isLoading, error } = useQuery<Users[]>(
    QUERY_KEY.useGetUsers,
    getUsers
  );
  return { data, isLoading, error };
};
