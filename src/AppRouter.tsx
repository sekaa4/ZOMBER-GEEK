import { Route, Routes } from "react-router-dom";
import Pages from "./models/Pages";
import BoardPage from "./pages/Board/BoardPage";
import CreateGame from "./pages/CreateGame";
import Main from "./pages/MainPage";
import Welcome from "./pages/Welcome";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={Pages.welcome} element={<Welcome />} />
      <Route path={Pages.main} element={<Main />} />
      <Route path={Pages.create} element={<CreateGame />} />
      <Route path={Pages.game} element={<BoardPage />} />
    </Routes>
  );
};

export default AppRouter;
