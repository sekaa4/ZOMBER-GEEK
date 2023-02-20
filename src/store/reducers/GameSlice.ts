import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import StandardGame from "../../entities/Game/StandardGame";

interface GameState {
  game: StandardGame | null;
}

const initialState: GameState = {
  game: null,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    writeGameState(state: GameState, action: PayloadAction<StandardGame>) {
      const currentState = state;
      currentState.game = action.payload;
    },
  },
});

export default gameSlice.reducer;
