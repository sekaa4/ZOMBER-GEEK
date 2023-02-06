import { FC } from "react";
import ConstantsString from "../../models/ConstantsString";
import classes from "./Button.module.scss";

interface ButtonProps {
  title?: string;
}

const Button: FC<ButtonProps> = ({
  title = ConstantsString.BUTTON,
}) => {
  return (
    <button type="button" className={classes.button}>
      {title}
    </button>
  );
}

export default Button;
