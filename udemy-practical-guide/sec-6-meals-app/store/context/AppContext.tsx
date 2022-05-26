import React from "react";
import { createContext, useState } from "react";

type AppState = {
  favoriteIds: string[];
};

const AppContext = createContext({});

export function AppContextProvider(props: any) {
  const [appState, setAppState] = useState<AppState>({
    favoriteIds: [],
  });

  function toggleFavorite(id: string) {
    let newFavoriteIds = [];

    if (appState.favoriteIds.includes(id)) {
      newFavoriteIds = appState.favoriteIds.filter(
        (existingId) => existingId !== id
      );
    } else {
      newFavoriteIds.push(id);
    }
    setAppState({
      ...appState,
      favoriteIds: newFavoriteIds,
    });
  }

  return <AppContext.Provider value={[appState, toggleFavorite]} {...props} />;
}

export const useContext = (): [AppState, Function] => {
  const context = React.useContext(AppContext);
  if (!context) {
    throw new Error("Component isn't inside a context.");
  }
  return context as any;
};
