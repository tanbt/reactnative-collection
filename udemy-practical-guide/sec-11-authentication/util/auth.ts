import axios from "axios";

const API_KEY = "AIzaSyCZ4njMN1XAcSgJSL4zUgjEXFc8akWclzU";
const BASE_URL = "https://identitytoolkit.googleapis.com/v1";

export enum AuthMode {
  SignInWithPass = "signInWithPassword",
  SignUp = "signUp",
}

async function authenticate(mode: AuthMode, email: string, password: string) {
  return axios.post(`${BASE_URL}/accounts:${mode}?key=${API_KEY}`, {
    email,
    password,
    returnSecureToken: true,
  });
}

export async function createUser(email: string, password: string) {
  await authenticate(AuthMode.SignUp, email, password);
}

export async function login(email: string, password: string) {
  const response = await authenticate(AuthMode.SignInWithPass, email, password);
  console.log(response.data);
}
