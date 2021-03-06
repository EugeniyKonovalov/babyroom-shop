import { $host } from "./index";
import jwt_decode from "jwt-decode";
export const registration = async (email, password) => {
  const { data } = await $host.post(
    "https://babyroom-server.herokuapp.com/api/user/registration",
    {
      email,
      password,
      role: "ADMIN",
    }
  );
  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
};
export const login = async (email, password) => {
  const { data } = await $host.post(
    "https://babyroom-server.herokuapp.com/api/user/login",
    {
      email,
      password,
    }
  );
  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
};
export const check = async () => {
  const { data } = await $host.get(
    "https://babyroom-server.herokuapp.com/api/user/auth"
  );
  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
};
