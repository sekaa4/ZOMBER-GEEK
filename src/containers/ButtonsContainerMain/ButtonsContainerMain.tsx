import { FC } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import ConstantsString from "../../models/ConstantsString";
import MainPage from "../../models/MainPage";
import Pages from "../../models/Pages";
import classes from "./ButtonsContainerMain.module.scss";

const ButtonsContainerMain: FC = () => {
  const navigate = useNavigate();

  const navigateHandlerToCreate = () => {
    navigate(Pages.create);
  };

  const navigateHandlerToDevelopers = () => {
    navigate(Pages.developers);
  };

  const navigateHandlerToProfile = () => {
    alert("Page in progress");
  };

  const navigateHandlerToHistory = () => {
    alert("Page in progress");
  };

  // const navigateHandlerToRules = () => {};

  return (
    <div className={classes.container}>
      <div className={classes.buttons}>
        <Button
          title={MainPage.MY_PROFILE}
          onClickHandler={navigateHandlerToProfile}
        />
        <Button
          title={MainPage.CREATE_GAME}
          onClickHandler={navigateHandlerToCreate}
        />
      </div>
      <div className={classes.buttons}>
        <Button
          title={MainPage.HISTORY}
          onClickHandler={navigateHandlerToHistory}
        />
        <NavLink
          className={classes.nav}
          to={ConstantsString.RULES_URL}
          target="_blank"
        >
          <Button title={MainPage.RULES} classNames={[classes.nav]} />
        </NavLink>
      </div>
      <div className={classes.button}>
        <Button
          title={MainPage.DEVELOPERS}
          onClickHandler={navigateHandlerToDevelopers}
        />
      </div>
    </div>
  );
};

export default ButtonsContainerMain;
