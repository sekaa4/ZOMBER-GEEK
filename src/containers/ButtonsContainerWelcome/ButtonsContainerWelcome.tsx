import { FC } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import Pages from "../../models/Pages";
import classes from "./ButtonsContainerWelcome.module.scss";

const ButtonsContainerWelcome: FC = () => {
  const navigate = useNavigate();

  const navigateHandlerToLogin = () => {
    navigate(Pages.login);
  };

  const navigateHandlerToSignup = () => {
    navigate(Pages.signup);
  };
  return (
    <div className={classes.buttons}>
      <Button title="LOGIN" onClickHandler={navigateHandlerToLogin} />
      <Button title="SIGNUP" onClickHandler={navigateHandlerToSignup} />
    </div>
  );
};

export default ButtonsContainerWelcome;
