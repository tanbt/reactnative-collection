import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Colors } from "../../constants/styles";

import Button from "../ui/Button";
import Input from "./Input";

export type CredentialValidity = {
  email: boolean;
  confirmEmail: boolean;
  password: boolean;
  confirmPassword: boolean;
};

interface Props {
  isLogin: boolean;
  onSubmit: Function;
  credentialsInvalid: CredentialValidity;
}

function AuthForm({ isLogin, onSubmit, credentialsInvalid }: Props) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredConfirmEmail, setEnteredConfirmEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");

  const {
    email: emailIsInvalid,
    confirmEmail: emailsDontMatch,
    password: passwordIsInvalid,
    confirmPassword: passwordsDontMatch,
  } = credentialsInvalid;

  function updateInputValueHandler(inputType: string, enteredValue: any) {
    switch (inputType) {
      case "email":
        setEnteredEmail(enteredValue);
        break;
      case "confirmEmail":
        setEnteredConfirmEmail(enteredValue);
        break;
      case "password":
        setEnteredPassword(enteredValue);
        break;
      case "confirmPassword":
        setEnteredConfirmPassword(enteredValue);
        break;
    }
  }

  function submitHandler() {
    onSubmit({
      email: enteredEmail,
      confirmEmail: enteredConfirmEmail,
      password: enteredPassword,
      confirmPassword: enteredConfirmPassword,
    });
  }

  function googleLoginHandler() {
    // https://github.com/react-native-google-signin/google-signin
    console.log(
      `Pretty complex. Considering having a built-in browser to do the authentication (for Web)
      which can forward the token to app.`
    );
  }

  return (
    <View>
      <View>
        <Input
          label="Email Address"
          onUpdateValue={(text) => updateInputValueHandler("email", text)}
          value={enteredEmail}
          keyboardType="email-address"
          isInvalid={emailIsInvalid}
        />
        {!isLogin && (
          <Input
            label="Confirm Email Address"
            onUpdateValue={(text) =>
              updateInputValueHandler("confirmEmail", text)
            }
            value={enteredConfirmEmail}
            keyboardType="email-address"
            isInvalid={emailsDontMatch}
          />
        )}
        <Input
          label="Password"
          onUpdateValue={(text) => updateInputValueHandler("password", text)}
          secure
          value={enteredPassword}
          isInvalid={passwordIsInvalid}
        />
        {!isLogin && (
          <Input
            label="Confirm Password"
            onUpdateValue={(text) =>
              updateInputValueHandler("confirmPassword", text)
            }
            secure
            value={enteredConfirmPassword}
            isInvalid={passwordsDontMatch}
          />
        )}
        <View style={styles.buttons}>
          <Button onPress={submitHandler}>
            {isLogin ? "Log In" : "Sign Up"}
          </Button>
          <Button style={styles.googleButton} onPress={googleLoginHandler}>
            Google Log In
          </Button>
        </View>
      </View>
    </View>
  );
}

export default AuthForm;

const styles = StyleSheet.create({
  buttons: {
    marginTop: 12,
  },
  googleButton: {
    backgroundColor: Colors.secondary800,
    marginTop: 16,
  },
});
