import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { createUser } from "../util/auth";

type SignupEntity = {
  email: string;
  password: string;
};

function SignupScreen() {
  const [isSending, setIsSending] = useState<boolean>(false);

  async function signupHandler({ email, password }: SignupEntity) {
    setIsSending(true);
    await createUser(email, password);
    setIsSending(false);
  }

  if (isSending) {
    return <LoadingOverlay message="Signing up a new user..." />;
  }
  return <AuthContent isLogin={false} onAuthenticate={signupHandler} />;
}

export default SignupScreen;
