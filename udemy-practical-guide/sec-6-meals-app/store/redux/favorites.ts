import { createSlice, SliceCaseReducers } from "@reduxjs/toolkit";

const favoritesSlice = createSlice<
  { ids: string[] },
  SliceCaseReducers<{ ids: string[] }>,
  string
>({
  initialState: {
    ids: [],
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const { id: incomingId } = action.payload;
      const { ids: currentIds } = state;

      if (currentIds.includes(incomingId)) {
        state.ids.splice(currentIds.indexOf(incomingId), 1);
      } else {
        state.ids.push(incomingId);
      }
    },
  },
  name: "favorites",
});

export const toggleFavorite = favoritesSlice.actions.toggleFavorite;
export default favoritesSlice.reducer;
