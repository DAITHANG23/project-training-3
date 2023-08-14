import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000";

export const getUsers = async () => {
  const res = await axios.get("/user");
  return res.data?.users;
};

export const getRoles = async () => {
  const res = await axios.get("/roles");
  console.log(res.data);
  return res.data?.roles?.listRoles;
};

export const getRoleUpdate = async () => {
  const res = await axios.get("/updaterole");
  console.log(res.data);
  return res.data?.roleItemUpdate?.listNewRoleUpdate;
};
