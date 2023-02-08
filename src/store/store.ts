import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ConstantsString from "../models/ConstantsString";
import fieldReducer from "./reducers/FieldSlice";

const rootReducer = combineReducers({
  fieldReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore[ConstantsString.DISPATCH];
