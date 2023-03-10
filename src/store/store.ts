import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userAPI from "../api/UserService";
import ConstantsString from "../models/ConstantsString";
import fieldReducer from "./reducers/FieldSlice";
import boardReducer from "./reducers/BoardSlice";
import characterReducer from "./reducers/CharacterSlice";
import zombieReducer from "./reducers/ZombieSlice";
import gameReducer from "./reducers/GameSlice";

const rootReducer = combineReducers({
  fieldReducer,
  [userAPI.reducerPath]: userAPI.reducer,
  boardReducer,
  characterReducer,
  zombieReducer,
  gameReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoreState: true,
          ignoreActions: true,
        },
      }).concat(userAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore[ConstantsString.DISPATCH];
