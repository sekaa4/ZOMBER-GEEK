import { AppDispatch } from "../store";
import { fieldSlice } from "./FieldSlice";

const createField = () => (dispatch: AppDispatch) => {
  try {
    dispatch(fieldSlice.actions.drawField());
    setTimeout(() => dispatch(fieldSlice.actions.drawFieldSuccess([])), 1500);
  } catch (error: any) {
    dispatch(fieldSlice.actions.drawFieldError(error.message));
  }
};

export default createField;
