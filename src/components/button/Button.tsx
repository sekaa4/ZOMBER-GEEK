import { FC } from "react";
import ConstantsString from "../../models/ConstantsString";
import classes from "./Button.module.scss";

interface ButtonProps {
  title?: string;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const { title = ConstantsString.BUTTON, disabled } = props;

  return (
    <button type="button" className={classes.button} disabled={disabled}>
      {title}
    </button>
  );
};

export default Button;
