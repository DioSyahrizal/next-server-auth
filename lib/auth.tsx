import axios from "axios";

export const loginUser = async (email: string, password: string) => {
  await axios.post("/api/login", { email, password });
};
