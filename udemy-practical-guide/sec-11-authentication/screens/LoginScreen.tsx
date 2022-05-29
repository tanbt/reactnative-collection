import { useContext } from "react";
import { useState } from "react";
import { Alert } from "react-native";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { AppContext, AppState } from "../store/AppContext";
import { login } from "../util/auth";
import { AuthEntity } from "./SignupScreen";

function LoginScreen() {
  const [isSending, setIsSending] = useState<boolean>(false);
  const appCtx = useContext<AppState>(AppContext);

  async function signinHandler({ email, password }: AuthEntity) {
    setIsSending(true);
    try {
      const token = await login(email, password);
      appCtx.authenticate(token);
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
