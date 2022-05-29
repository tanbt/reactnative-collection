import axios from "axios";

const API_KEY = "AIzaSyCZ4njMN1XAcSgJSL4zUgjEXFc8akWclzU";
const BASE_URL = "https://identitytoolkit.googleapis.com/v1";
const SIGN_UP_ENDPOINT = `${BASE_URL}/accounts:signUp?key=${API_KEY}`;

export async function createUser(email: string, password: string) {
  const response = await axios.post(SIGN_UP_ENDPOINT, {
    email,
    password,
    returnSecureToken: true,
  });

  return response.data;
}
