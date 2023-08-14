import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000";

export const getUsers = async () => {
  const res = await axios.get("/user");
  return res.data.users;
};

export const getRoles = async () => {
  const res = await axios.get("/roles");
  console.log(res.data);
  return res.data.roles?.listRoles;
  //return res.data.roles;
};
