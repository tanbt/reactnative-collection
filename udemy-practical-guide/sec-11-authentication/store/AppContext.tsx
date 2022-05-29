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
  }
  function logout() {
    setAppState(emptyAppState);
  }

  const value: AppState = {
    token: appState.token,
    isAuthenticated: !!appState.token,
    authenticate,
    logout,
  };
  return <AppContext.Provider value={value} {...props} />;
}
