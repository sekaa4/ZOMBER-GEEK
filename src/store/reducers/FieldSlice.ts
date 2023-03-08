import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FieldState {
  field: [];
  isLoading: boolean;
  error: string;
  countCells: number;
}

const initialState: FieldState = {
  field: [],
  isLoading: true,
  error: "",
  countCells: 0,
};

export const fieldSlice = createSlice({
  name: "field",
  initialState,
  reducers: {
    drawField(state) {
      const localState = state;
      localState.isLoading = true;
    },
    drawFieldSuccess(state, action: PayloadAction<[]>) {
      const localState = state;
      localState.isLoading = false;
      localState.field = action.payload;
    },
    drawFieldError(state, action: PayloadAction<string>) {
      const localState = state;
      localState.isLoading = false;
      localState.error = action.payload;
    },
  },
});

export default fieldSlice.reducer;
