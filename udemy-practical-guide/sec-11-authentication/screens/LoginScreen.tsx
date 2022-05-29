import { useState } from "react";
import { Alert } from "react-native";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { login } from "../util/auth";
import { AuthEntity } from "./SignupScreen";

function LoginScreen() {
  const [isSending, setIsSending] = useState<boolean>(false);

  async function signinHandler({ email, password }: AuthEntity) {
    setIsSending(true);
    try {
      await login(email, password);
    } catch (err) {
      Alert.alert("Login failed", "Wrong email or password! Please try again.");
    }
    setIsSending(false);
  }

  if (isSending) {
    return <LoadingOverlay message="Loging in..." />;
  }
  return <AuthContent isLogin onAuthenticate={signinHandler} />;
}

export default LoginScreen;
