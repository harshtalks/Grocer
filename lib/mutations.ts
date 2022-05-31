import Fetcher from "./fetcher";

type dataTypeSignIn = {
  email: string;
  password: string;
};

type dataTypeSignUp = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

type dataType = dataTypeSignIn | dataTypeSignUp | undefined;

export const auth = (mode: "signup" | "signin", data: any) =>
  Fetcher(`/${mode}`, data);
