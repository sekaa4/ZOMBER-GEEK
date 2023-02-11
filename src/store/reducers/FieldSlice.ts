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
      state.isLoading = true;
    },
    drawFieldSuccess(state, action: PayloadAction<[]>) {
      state.isLoading = false;
      state.field = action.payload;
    },
    drawFieldError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default fieldSlice.reducer;
