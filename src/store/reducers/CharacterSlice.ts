import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Items from "../../entities/Items/Items";
import Weapons from "../../entities/Weapon/Weapons";
import {
  CharacterName,
  Character,
  Stage,
  Chars,
} from "../../models/Character.type";

interface Characters {
  characters: Chars | null;
}

interface ActionPayload {
  name: CharacterName;
  value: number | Weapons | Items | string | boolean | Stage;
  item?: keyof Items;
  weapon?: keyof Weapons;
}

interface ActionPayloadNew {
  name: CharacterName;
  characterObj: Character;
}

const initialState: Characters = {
  characters: null,
};

export const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    writeCharacters(state: Characters, action: PayloadAction<Chars>) {
      const currentState = state;
      currentState.characters = action.payload;
    },

    initPosition(state: Characters, action: PayloadAction<ActionPayload>) {
      const currentState = state;
      const { name, value } = action.payload;
      if (currentState.characters && currentState.characters[name]) {
        const currentCharacterObj = currentState.characters[name] as Character;
        currentCharacterObj.currentPositionId = value as number;
      }
    },

    changeCountOfTurns(
      state: Characters,
      action: PayloadAction<ActionPayload>,
    ) {
      const currentState = state;
      const { name, value } = action.payload;
      if (currentState.characters && currentState.characters[name]) {
        const currentCharacterObj = currentState.characters[name] as Character;
        currentCharacterObj.countOfTurns = value as number;
      }
    },

    changeCountOfItems(
      state: Characters,
      action: PayloadAction<ActionPayload>,
    ) {
      const currentState = state;
      const { name, value, item } = action.payload;
      if (currentState.characters && item) {
        const currentCharacterObj = currentState.characters[name];
        currentCharacterObj!.items[item] = value as number;
      }
    },

    changeCountOfWeapons(
      state: Characters,
      action: PayloadAction<ActionPayload>,
    ) {
      const currentState = state;
      const { name, value, weapon } = action.payload;
      if (currentState.characters && weapon) {
        const currentCharacterObj = currentState.characters[name];
        currentCharacterObj!.weapons[weapon] = value as number;
      }
    },

    changeCountOfHealth(
      state: Characters,
      action: PayloadAction<ActionPayloadNew>,
    ) {
      const currentState = state;
      const { name, characterObj } = action.payload;
      if (currentState.characters) {
        currentState.characters[name] = characterObj;
      }
    },

    changeStage(state: Characters, action: PayloadAction<ActionPayloadNew>) {
      const currentState = state;
      const { name, characterObj } = action.payload;
      if (currentState.characters) {
        currentState.characters[name] = characterObj;
      }
    },

    changeStatus(state: Characters, action: PayloadAction<ActionPayloadNew>) {
      const currentState = state;
      const { name, characterObj } = action.payload;
      if (currentState.characters) {
        currentState.characters[name] = characterObj;
      }
    },
  },
});

export default characterSlice.reducer;
