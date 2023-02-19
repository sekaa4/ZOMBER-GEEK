import { ChangeEvent } from "react";
import LabelInput from "../../components/labelInput/LabelInput";
import SimpleText from "../../components/simpleText/SimpleText";
import CharacterProps from "../../models/CharacterProps";
import classes from "./ChooseCharacters.module.scss";

interface ChooseCharactersProps {
  onChangeHandler(e: ChangeEvent<HTMLInputElement>): void;
}

const ChooseCharacters = (props: ChooseCharactersProps) => {
  const { onChangeHandler } = props;

  return (
    <div className={classes["label-container"]}>
      <SimpleText text="List of Characters: " />
      <LabelInput
        id={`${CharacterProps.CharacterNameWithKnife}`}
        name="characters"
        value={`${CharacterProps.CharacterNameWithKnife}`}
        type="radio"
        onChangeHandler={onChangeHandler}
        classNames="label-line"
      />
      <LabelInput
        id={`${CharacterProps.CharacterNameWithHeal}`}
        name="characters"
        value={`${CharacterProps.CharacterNameWithHeal}`}
        type="radio"
        onChangeHandler={onChangeHandler}
        classNames="label-line"
      />
      <LabelInput
        id={`${CharacterProps.CharacterNameFastest}`}
        name="characters"
        value={`${CharacterProps.CharacterNameFastest}`}
        type="radio"
        onChangeHandler={onChangeHandler}
        classNames="label-line"
      />
      <LabelInput
        id={`${CharacterProps.CharacterNameWithHandGun}`}
        name="characters"
        value={`${CharacterProps.CharacterNameWithHandGun}`}
        type="radio"
        onChangeHandler={onChangeHandler}
        classNames="label-line"
      />
      <LabelInput
        id={`${CharacterProps.CharacterNameWithBigHP}`}
        name="characters"
        value={`${CharacterProps.CharacterNameWithBigHP}`}
        type="radio"
        onChangeHandler={onChangeHandler}
        classNames="label-line"
      />
    </div>
  );
};

export default ChooseCharacters;
