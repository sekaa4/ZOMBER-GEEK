import { ChangeEvent } from "react";
import LabelInput from "../../components/labelInput/LabelInput";
import SimpleText from "../../components/simpleText/SimpleText";
import classes from "./LabelContainer.module.scss";

interface LabelContainerProps {
  onChangeHandler(e: ChangeEvent<HTMLInputElement>): void;
}

const LabelContainer = (props: LabelContainerProps) => {
  const { onChangeHandler } = props;

  return (
    <div className={classes["label-container"]}>
      <SimpleText text="Number of Players: " />
      <LabelInput
        id="Players1"
        name="players"
        value="1"
        type="radio"
        onChangeHandler={onChangeHandler}
      />
      <LabelInput
        id="Players2"
        name="players"
        value="2"
        type="radio"
        onChangeHandler={onChangeHandler}
      />
      <LabelInput
        id="Players3"
        name="players"
        value="3"
        type="radio"
        onChangeHandler={onChangeHandler}
      />
      <LabelInput
        id="Players4"
        name="players"
        value="4"
        type="radio"
        onChangeHandler={onChangeHandler}
      />
      <LabelInput
        id="Players5"
        name="players"
        value="5"
        type="radio"
        onChangeHandler={onChangeHandler}
      />
      {/* <button type="button">{CreateGameConstants.SELECT}</button> */}
    </div>
  );
};

export default LabelContainer;
