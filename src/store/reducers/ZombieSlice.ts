import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ZombieObj from "../../models/Zombie.type";

interface Zombies {
  zombies: ZombieObj[] | null;
}

// interface ActionPayload {
//   id: number;
//   name: string;
//   value: number | string | boolean | Stage;
// }

// interface ActionPayloadNew {
//   name: CharacterName;
//   zombhieObj: ZombieObj;
// }

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
    // initPosition(state: Zombies, action: PayloadAction<ActionPayload>) {
    //   const currentState = state;
    //   const { name, value } = action.payload;
    //   if (currentState.zombies) {
    //     const currentZombieObj = currentState.zombies.name;
    //     currentZombieObj.currentPositionId = value as number;
    //   }
    // },
    // changeCountOfTurns(
    //   state: Characters,
    //   action: PayloadAction<ActionPayload>,
    // ) {
    //   const currentState = state;
    //   const { name, value } = action.payload;
    //   if (currentState.characters) {
    //     const currentCharacterObj = currentState.characters[name];
    //     currentCharacterObj.countOfTurns = value as number;
    //   }
    // },
    // changeCountOfHealth(
    //   state: Characters,
    //   action: PayloadAction<ActionPayloadNew>,
    // ) {
    //   const currentState = state;
    //   const { name, characterObj } = action.payload;
    //   if (currentState.characters) {
    //     currentState.characters[name] = characterObj;
    //   }
    // },
    // changeStage(state: Characters, action: PayloadAction<ActionPayloadNew>) {
    //   const currentState = state;
    //   const { name, characterObj } = action.payload;
    //   if (currentState.characters) {
    //     currentState.characters[name] = characterObj;
    //   }
    // },
    // changeStatus(state: Characters, action: PayloadAction<ActionPayloadNew>) {
    //   const currentState = state;
    //   const { name, characterObj } = action.payload;
    //   if (currentState.characters) {
    //     currentState.characters[name] = characterObj;
    //   }
    // },
  },
});

export default zombieSlice.reducer;
