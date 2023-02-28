import { ChangeEvent } from "react";
import Button from "../../components/button/Button";
import LabelInput from "../../components/labelInput/LabelInput";
import SimpleText from "../../components/simpleText/SimpleText";
import { CharacterName } from "../../models/Character.type";
import CharacterProps from "../../models/CharacterProps";
import CreateGameConstants from "../../models/CreateGameConstants";
import classes from "./ChooseCharacters.module.scss";

interface ChooseCharactersProps {
  onChangeHandler(e: ChangeEvent<HTMLInputElement>): void;
  onChangeButtonHandler(): void;
  players?: number;
  characters: CharacterName[];
  character?: CharacterName;
}

const ChooseCharacters = (props: ChooseCharactersProps) => {
  const {
    character = "default",
    characters,
    players,
    onChangeHandler,
    onChangeButtonHandler,
  } = props;

  let disabled = true;

  if (players && players > characters.length && character !== "default") {
    disabled = false;
  }

  if (characters.find((value) => value === character)) {
    disabled = true;
  }

  return (
    <div className={classes.list}>
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
      <Button
        title={CreateGameConstants.SELECT}
        disabled={disabled}
        classNames={
          disabled
            ? [classes["select-button"]]
            : [classes["select-button"], classes.visible]
        }
        onClickHandler={onChangeButtonHandler}
      />
    </div>
  );
};

export default ChooseCharacters;
