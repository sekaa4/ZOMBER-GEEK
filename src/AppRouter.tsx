import { Route, Routes } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import Pages from "./models/Pages";
import BoardPage from "./pages/Board/BoardPage";
import Main from "./pages/MainPage";
import Welcome from "./pages/Welcome";
import { boardSlice } from "./store/reducers/BoardSlice";

const AppRouter = () => {
  // You need use dispatch for push new Data FieldCell after you use your function
  // const dispatch = useAppDispatch();

  // Next line you get current value prop "fieldCells" in the store when you use useAppSelector,
  // const { fieldCells } = useAppSelector((state) => state.boardReducer);

  // Next line you update the value in prop "fieldCells" in the store when you use dispatch you need pass data with type FieldCell[] as parameters function
  // dispatch(boardSlice.actions.writeFieldCells(data));

  return (
    <Routes>
      <Route path={Pages.welcome} element={<Welcome />} />
      <Route path={Pages.main} element={<Main />} />
      <Route path={Pages.game} element={<BoardPage />} />
    </Routes>
  );
};

export default AppRouter;
