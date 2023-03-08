import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ZombieObj from "../../models/Zombie.type";

interface Zombies {
  zombies: ZombieObj[] | null;
}

const initialState: Zombies = {
  zombies: null,
};

export const zombieSlice = createSlice({
  name: "zombie",
  initialState,
  reducers: {
    writeZombies(state: Zombies, action: PayloadAction<ZombieObj[]>) {
      const currentState = state;
      currentState.zombies = action.payload;
    },
  },
});

export default zombieSlice.reducer;
