import Button from "../../components/button/Button";
import { CharacterName } from "../../models/Character.type";
import CreateGameConstants from "../../models/CreateGameConstants";
import ImageURL from "../ViewCharacter/ImageURL";
import classes from "./ImageCharacter.module.scss";

interface ImageCharacterProps {
  character?: CharacterName;
  characters: CharacterName[];
  players?: number;
  onChangeHandler(): void;
}

const ImageCharacter = (props: ImageCharacterProps) => {
  const { character = "default", characters, players, onChangeHandler } = props;
  let disabled = true;

  if (players && players > characters.length && character !== "default") {
    disabled = false;
  }

  if (characters.find((value) => value === character)) {
    disabled = true;
  }

  return (
    <div className={classes.container}>
      <img
        src={ImageURL[character]}
        alt={`Character ${character}`}
        className={classes.image}
      />
      <Button
        title={CreateGameConstants.SELECT}
        disabled={disabled}
        classNames={
          disabled
            ? [classes["select-button"]]
            : [classes["select-button"], classes.visible]
        }
        onClickHandler={onChangeHandler}
      />
    </div>
  );
};

export default ImageCharacter;
