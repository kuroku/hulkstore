import { UserAuthResponse } from "../../../server/types/response";
import { request } from "./request";

export const loginRequest = (email: string, password: string) => {
  return request.post<UserAuthResponse>("/user/login", {
    email,
    password,
  });
};

export const registerRequest = (user: {
  name: string;
  lastname: string;
  email: string;
  password: string;
}) => {
  return request.post<UserAuthResponse>("/user/register", {
    ...user,
  });
};
