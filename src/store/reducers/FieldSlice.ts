import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FieldState {
  field: [];
  isLoading: boolean;
  error: string;
  countCells: number;
}

const initialState: FieldState = {
  field: [],
  isLoading: false,
  error: '',
  countCells: 0,
};

export const fieldSlice = createSlice({
name: 'field',
initialState,
reducers: {
}

})

export default fieldSlice.reducer;
