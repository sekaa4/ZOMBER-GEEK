import { Route, Routes } from "react-router-dom";
import Pages from "./models/Pages";
import Main from "./pages/MainPage";
import Welcome from "./pages/Welcome";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={Pages.welcome} element={<Welcome />} />
      <Route path={Pages.main} element={<Main />} />
    </Routes>
  );
};

export default AppRouter;
