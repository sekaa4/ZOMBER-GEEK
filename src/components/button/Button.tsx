import { FC } from "react";
import ConstantsString from "../../models/ConstantsString";
import classes from "./Button.module.scss";

interface ButtonProps {
  title?: string;
  disabled?: boolean;
  classNames?: string[];
  value?: string;
  onClickHandler?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const {
    title = ConstantsString.BUTTON,
    disabled,
    classNames = [],
    onClickHandler,
    value = "",
  } = props;

  return (
    <button
      type="button"
      className={[classes.button, ...classNames].join(" ")}
      disabled={disabled}
      onClick={onClickHandler}
      value={value}
    >
      {title}
    </button>
  );
};

export default Button;
