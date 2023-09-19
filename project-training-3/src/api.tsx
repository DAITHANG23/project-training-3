import axios from "axios";
import {
  Users,
  Roles,
  UseUserSearch,
  UseUser,
  UserItem,
  UsersItem,
} from "@/hooks/useFetch";

export interface GetCreateRoleUpdate {
  id: string | undefined;
  dataForm: any;
  role?: string;
}

interface EditUser {
  id?: string;
  user: UsersItem;
}

axios.defaults.baseURL = "http://localhost:3000";

export const getUsers = async ({
  signal,
  page,
  rowPerPage,
  oneOderDirection,
}: UseUser) => {
  let url = "/users";

  if (page > 0 || rowPerPage !== 10 || oneOderDirection) {
    url +=
      "?page=" +
      page +
      "?rowPerPage=" +
      rowPerPage +
      "?sort=" +
      oneOderDirection;
  }

  const res = await axios.get(url, { signal: signal });
  return res.data?.users;
};

export const getUserItem = async ({ signal, id }: UserItem) => {
  const res = await axios.get(`/users/${id}`, { signal: signal });

  return res.data.userItem;
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

export const removeUserItem = async (id: string) => {
  const res = await axios.delete(`/users/${id}`);

  return res;
};

export const editUserItem = async ({ id, user }: EditUser) => {
  const res = await axios.put(`/users/${id}`, user);

  return res.data.user;
};

export const getRoles = async () => {
  const res = await axios.get("/roles");

  return res.data?.roles;
};

export const getRoleItem = async ({ signal, id }: UserItem) => {
  const res = await axios.get(`/roles/${id}`, { signal: signal });

  return res.data.role;
};

export const createRoles = async (role: Roles) => {
  const res = await axios.post("/roles/new", role);

  return res.data.role;
};

export const getRoleUpdateItem = async ({
  id,
  signal,
  role,
}: {
  id?: string;
  signal?: AbortSignal;
  role?: string;
}) => {
  const res = await axios.get(`/roles/${role}/${id}`, { signal: signal });
  return res.data.roleItemUpdate;
};

export const createRoleUpdate = async ({
  id,
  dataForm,
  role,
}: GetCreateRoleUpdate) => {
  const res = await axios.post(`/roles/${role}/${id}`, dataForm);
  return res.data?.roleUpdates;
};
