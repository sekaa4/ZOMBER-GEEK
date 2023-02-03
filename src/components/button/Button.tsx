import ConstantsString from "../../models/ConstantsString";
import classes from "./Button.module.scss";

interface ButtonProps {
  title?: string;
}

export default function Button({
  title = ConstantsString.BUTTON,
}: ButtonProps): JSX.Element {
  return (
    <button type="button" className={classes.button}>
      {title}
    </button>
  );
}
