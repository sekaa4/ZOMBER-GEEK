import { ChangeEvent, PropsWithChildren } from "react";
import classes from "./labelInput.module.scss";

interface LabelInputProps {
  onChangeHandler(e: ChangeEvent<HTMLInputElement>): void;
  type: string;
  value: string;
  id: string;
  name: string;
  classNames?: string;
  disabled?: boolean;
}

const LabelInput = (props: PropsWithChildren<LabelInputProps>) => {
  const {
    onChangeHandler,
    type,
    value,
    id,
    name,
    disabled,
    classNames = "",
  } = props;

  return (
    <label
      htmlFor={id}
      className={[classes.label, classes[classNames]].join(" ")}
    >
      <span className={classes.title}>{value}</span>
      <input
        type={type}
        value={value}
        id={id}
        name={name}
        disabled={disabled}
        onChange={onChangeHandler}
      />
    </label>
  );
};

export default LabelInput;
