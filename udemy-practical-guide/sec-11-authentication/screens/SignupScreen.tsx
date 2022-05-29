import { useContext } from "react";
import { useState } from "react";
import { Alert } from "react-native";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { AppContext, AppState } from "../store/AppContext";
import { createUser } from "../util/auth";

export type AuthEntity = {
  email: string;
  password: string;
};

function SignupScreen() {
  const [isSending, setIsSending] = useState<boolean>(false);
  const appCtx = useContext<AppState>(AppContext);

  async function signupHandler({ email, password }: AuthEntity) {
    setIsSending(true);
    try {
      const token = await createUser(email, password);
      appCtx.authenticate(token);
    } catch (err) {
      Alert.alert(
        "Sign Up Failed",
        "Could not create the user. Please try again."
      );
    }
    setIsSending(false);
  }

  if (isSending) {
    return <LoadingOverlay message="Signing up a new user..." />;
  }
  return <AuthContent isLogin={false} onAuthenticate={signupHandler} />;
}

export default SignupScreen;
