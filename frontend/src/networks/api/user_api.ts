import { User } from "../../models/user";
import api from "../axiosInstance";

export async function getAuthenticatedUser() {
  const response = await api.get<User>("/api/users/authenticated-user");
  return response.data;
}

export interface SignUpCredentials {
  name: string;
  email: string;
  password: string;
  verificationCode: string;
}

export async function signUp(credentials: SignUpCredentials) {
  const response = await api.post<User>("api/users/signup", credentials);
  return response.data;
}


export async function getVerificationCode(email: string) {
  await api.post("api/users/verification-code", { email });
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export async function login(credentials: LoginCredentials) {
  const response = await api.post<User>("api/users/login", credentials);
  return response.data;
}

export async function logout() {
  await api.post("api/users/logout");
}

// interface GoogleLoginBody{
//   name: string;
//   email: string;
// }

// export async function loginGoogle(credentials: GoogleLoginBody): Promise<User> {
//   const response = await fetchData("/api/users/login-google", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(credentials),
//   });
//   return response.json();
// }