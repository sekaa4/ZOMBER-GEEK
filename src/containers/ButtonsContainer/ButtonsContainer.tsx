import { FC } from "react";
import Button from "../../components/button/Button";
import classes from "./ButtonsContainer.module.scss";

const ButtonsContainer: FC = () => {
  return (
    <div className={classes.buttons}>
      <Button title="ENTER" />
      <Button title="SIGNUP" />
    </div>
  );
};

export default ButtonsContainer;
