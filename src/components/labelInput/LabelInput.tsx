import { ChangeEvent, PropsWithChildren } from "react";
import classes from "./labelInput.module.scss";

interface LabelInputProps {
  onChangeHandler(e: ChangeEvent<HTMLInputElement>): void;
  type: string;
  value: string;
  id: string;
  name: string;
}

const LabelInput = (props: PropsWithChildren<LabelInputProps>) => {
  const { onChangeHandler, type, value, id, name } = props;

  return (
    <label htmlFor={id} className={classes.label}>
      {value}
      <input
        type={type}
        value={value}
        id={id}
        name={name}
        onChange={onChangeHandler}
      />
    </label>
  );
};

export default LabelInput;
