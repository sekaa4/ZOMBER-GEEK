import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CharacterName, Character, Stage } from "../../models/Character.type";
import { characterSlice } from "./CharacterSlice";

type CharacterObj = Record<CharacterName, Character>;

interface Zombies {
  zombies: ZombieObj | null;
}

interface ActionPayload {
  id: number;
  name: string;
  value: number | string | boolean | Stage;
}

interface ActionPayloadNew {
  name: CharacterName;
  zombhieObj: ZombieObj;
}

interface ZombieObj {
  name: string;
  health: number;
  countOfTurns: number;
  currentPositionId: number | null;
  id: number;
}

const initialState: Zombies = {
  zombies: null,
};

export const zombieSlice = createSlice({
  name: "zombie",
  initialState,
  reducers: {
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
