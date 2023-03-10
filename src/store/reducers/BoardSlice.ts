import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type FieldCell from "../../models/FieldCell.type";

interface BoardState {
  fieldCells: FieldCell<number>[];
}

const initialState: BoardState = {
  fieldCells: [],
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    writeFieldCells(state, action: PayloadAction<FieldCell<number>[]>) {
      const currentState = state;
      currentState.fieldCells = action.payload;
    },
  },
});

export default boardSlice.reducer;
