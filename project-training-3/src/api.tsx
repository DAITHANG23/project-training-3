import axios from "axios";

export const getUsers = async () => {
  const res = await axios.get("/user");
  return res.data.users;
};
