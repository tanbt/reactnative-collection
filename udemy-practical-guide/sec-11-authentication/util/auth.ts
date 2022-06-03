import axios from "axios";

const API_KEY = "AIzaSyCZ4njMN1XAcSgJSL4zUgjEXFc8akWclzU";
const BASE_URL = "https://identitytoolkit.googleapis.com/v1";

export enum AuthMode {
  SignInWithPass = "signInWithPassword",
  SignUp = "signUp",
}

async function sendEmailVerifycation(token: string) {
  console.log({ authtoken: token });
  return axios.post(
    `${BASE_URL}/accounts:sendOobCode?key=${API_KEY}`,
    {
      requestType: "VERIFY_EMAIL",
      idToken: token,
    },
    { headers: { "content-type": "application/json" } }
  );
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
  // With the idToken, the user can login already.
  // If we want to disable the user until verified, try `firebase` module
  if (mode === AuthMode.SignUp) {
    await sendEmailVerifycation(response.data.idToken);
  }
  return response.data.idToken;
}

export async function createUser(email: string, password: string) {
  return authenticate(AuthMode.SignUp, email, password);
}

export async function login(email: string, password: string) {
  return authenticate(AuthMode.SignInWithPass, email, password);
}
