import { AppDispatch } from "../store";
import { fieldSlice } from "./FieldSlice";

export const createField = () => (dispatch: AppDispatch) => {
  try {
    dispatch(fieldSlice.actions.drawField());
    // Create Field Cell, wait array field cell, and pass values to function;
    setTimeout(() => dispatch(fieldSlice.actions.drawFieldSuccess([])), 1500);
  } catch (error: any) {
    dispatch(fieldSlice.actions.drawFieldError(error.message));
  }
};
