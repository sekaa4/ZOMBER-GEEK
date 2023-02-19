import { FC } from "react";
import ConstantsString from "../../models/ConstantsString";
import classes from "./Button.module.scss";

interface ButtonProps {
  title?: string;
  disabled?: boolean;
  classNames?: string[];
  onClickHandler?: () => void;
}

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const {
    title = ConstantsString.BUTTON,
    disabled,
    classNames = [],
    onClickHandler,
  } = props;

  return (
    <button
      type="button"
      className={[classes.button, ...classNames].join(" ")}
      disabled={disabled}
      onClick={onClickHandler}
    >
      {title}
    </button>
  );
};

export default Button;
