import axios from "axios";
import { Users, Roles, UseUserSearch, UseUser } from "@/hooks/useFetch";

axios.defaults.baseURL = "http://localhost:3000";

export const getUsers = async ({ signal, page, rowPerPage }: UseUser) => {
  let url = "/users";
  if (page || rowPerPage) {
    url += "?page=" + page + "?rowPerPage=" + rowPerPage;
  }

  const res = await axios.get(url, { signal: signal });
  return res.data?.users;
};

export const getUsersSearch = async ({ signal, searchTerm }: UseUserSearch) => {
  let url = "/users";
  if (searchTerm) {
    url += "?search=" + searchTerm;
  }

  const res = await axios.get(url, { signal: signal });
  return res.data?.users;
};

export const createUsers = async (user: Users) => {
  const res = await axios.post("/users/new", user);
  return res.data.user;
};

export const getRoles = async () => {
  const res = await axios.get("/roles");
  return res.data?.roles;
};

export const createRoles = async (role: Roles) => {
  const res = await axios.post("/roles/new", role);
  return res.data.role;
};

export const getRoleItem = async (id: string | undefined) => {
  const res = await axios.get(`/roles/${id}`);
  return res.data?.roleUpdates;
};

export const getRoleUpdate = async (id: string | undefined) => {
  const res = await axios.post(`/roles/${id}`);
  return res.data?.roleUpdates;
};
