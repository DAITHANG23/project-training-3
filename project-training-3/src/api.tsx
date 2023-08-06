import axios from "axios";

export const getUsers = async () => {
  const res = await axios.get("http://localhost:8080/api/user");
  return res.data.users;
};
