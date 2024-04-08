import { getCookie, setCookie } from "./cookies";

export const getToken = (name: string = "access_token") => {
  const token = getCookie(name);
  return token ?? null;
};

export const saveToken = async (token: any, name: string = "access_token") => {
  setCookie(name, token);
};
