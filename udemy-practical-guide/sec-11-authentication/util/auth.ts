import axios from "axios";

const API_KEY = "AIzaSyCZ4njMN1XAcSgJSL4zUgjEXFc8akWclzU";
const BASE_URL = "https://identitytoolkit.googleapis.com/v1";

export enum AuthMode {
  SignInWithPass = "signInWithPassword",
  SignUp = "signUp",
}

async function authenticate(
  mode: AuthMode,
  email: string,
  password: string
): Promise<string> {
  const response = await axios.post(
    `${BASE_URL}/accounts:${mode}?key=${API_KEY}`,
    {
      email,
      password,
      returnSecureToken: true,
    }
  );
  return response.data.idToken;
}

export async function createUser(email: string, password: string) {
  return authenticate(AuthMode.SignUp, email, password);
}

export async function login(email: string, password: string) {
  return authenticate(AuthMode.SignInWithPass, email, password);
}
