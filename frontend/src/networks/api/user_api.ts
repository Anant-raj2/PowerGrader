import { User } from "../../models/user";
import { Grade } from "../../models/grade";
import api from "../axiosInstance";

export async function getAuthenticatedUser() {
  const response = await api.get<User>("/api/users/authenticated-user");
  console.log(response.data.createdAt)
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

interface CreateGradeBody {
  gradeLevel: number,
  
  class1: string,
  credit1: number,
  grade1: number,

  class2: string,
  credit2: number,
  grade2: number,

  class3: string,
  credit3: number,
  grade3: number,

  class4: string,
  credit4: number,
  grade4: number,

  class5: string,
  credit5: number,
  grade5: number,

  class6: string,
  credit6: number,
  grade6: number,

  class7: string,
  credit7: number,
  grade7: number,

  class8: string,
  credit8: number,
  grade8: number,
}

export async function postAcademics(credentials: CreateGradeBody) {
  await api.post<Grade>("api/users/post", credentials);
}