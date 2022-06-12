import {
  getAuth,
  createUserWithEmailAndPassword,
  UserCredential,
} from "firebase/auth";
import { InputCredential } from "../screens/LoginEmailPassword";

const auth = getAuth();

export const createUser = async (credential: InputCredential) => {
  try {
    return await createUserWithEmailAndPassword(
      auth,
      credential.email,
      credential.password
    );
  } catch (error) {
    console.log(error);
  }
};
