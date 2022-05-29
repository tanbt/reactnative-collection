import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useState } from "react";

export interface AppState {
  token: string;
  isAuthenticated: boolean;
  authenticate: Function;
  logout: Function;
}

const emptyAppState: AppState = {
  token: "",
  isAuthenticated: false,
  authenticate: () => {},
  logout: () => {},
};

export const AppContext = createContext(emptyAppState);

export function AppContextProvider(props: any) {
  const [appState, setAppState] = useState<AppState>(emptyAppState);

  function authenticate(token: string) {
    setAppState({ ...appState, token });
    AsyncStorage.setItem("token", token);
  }
  function logout() {
    setAppState(emptyAppState);
    AsyncStorage.removeItem("token");
  }

  const value: AppState = {
    token: appState.token,
    isAuthenticated: !!appState.token,
    authenticate,
    logout,
  };
  return <AppContext.Provider value={value} {...props} />;
}
