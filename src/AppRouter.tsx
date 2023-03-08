import { Route, Routes } from "react-router-dom";
import Pages from "./models/Pages";
import BoardPage from "./pages/Board/BoardPage";
import CreateGame from "./pages/CreateGame";
import LoginPage from "./pages/Login";
import Main from "./pages/MainPage";
import SignUpPage from "./pages/SignUp";
import Developers from "./pages/Developers/Developers";
import Welcome from "./pages/Welcome";

const AppRouter = () => {
  const token = document.cookie;
  return (
    <Routes>
      <Route path={Pages.notfound} element={<Welcome />} />
      {token !== "isToken=undefined" && token !== "" ? (
        <>
          <Route path={Pages.welcome} element={<Main />} />
          <Route path={Pages.main} element={<Main />} />
          <Route path={Pages.create} element={<CreateGame />} />
          <Route path={Pages.game} element={<BoardPage />} />
          <Route path={Pages.login} element={<Main />} />
          <Route path={Pages.signup} element={<Main />} />
          <Route path={Pages.developers} element={<Developers />} />
        </>
      ) : (
        <>
          <Route path={Pages.welcome} element={<Welcome />} />
          <Route path={Pages.create} element={<Welcome />} />
          <Route path={Pages.main} element={<Welcome />} />
          <Route path={Pages.game} element={<Welcome />} />
          <Route path={Pages.developers} element={<Welcome />} />
          <Route path={Pages.login} element={<LoginPage />} />
          <Route path={Pages.signup} element={<SignUpPage />} />
        </>
      )}
      {/* <Route path={Pages.main} element={<Main />} />
      <Route path={Pages.create} element={<CreateGame />} />
      <Route path={Pages.game} element={<BoardPage />} />
      <Route path={Pages.login} element={<LoginPage />} />
      <Route path={Pages.signup} element={<SignUpPage />} />
      <Route path={Pages.developers} element={<Developers />} /> */}
    </Routes>
  );
};

export default AppRouter;
