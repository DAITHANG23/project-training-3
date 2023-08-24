import axios from "axios";
import { Users, Roles } from "@/hooks/useFetch";
axios.defaults.baseURL = "http://localhost:3000";

export const getUsers = async () => {
  const res = await axios.get("/users");
  return res.data?.users;
};

export const createUsers = async (user: Users) => {
  const res = await axios.post("/users/new", user);
  return res.data.user;
};

export const getRoles = async () => {
  const res = await axios.get("/roles");
  console.log(res.data);
  return res.data?.roles;
};

export const createRoles = async (role: Roles) => {
  const res = await axios.post("/roles/new", role);
  return res.data.role;
};

export const getRoleUpdate = async () => {
  const res = await axios.get("/updaterole");
  return res.data?.roleUpdates;
};
