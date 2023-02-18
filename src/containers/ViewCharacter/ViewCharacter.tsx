import { CharacterName } from "../../models/Character.type";
import DescriptionCharacter from "../DescriptionCharacter/DescriptionCharacter";
import ImageCharacter from "../ImageCharacter/ImageCharacter";
import classes from "./ViewCharacter.module.scss";

interface ViewCharacterProps {
  character?: CharacterName;
  characters: CharacterName[];
  players?: number;
  onChangeHandler(): void;
}

const ViewCharacter = (props: ViewCharacterProps) => {
  const { character, characters, players, onChangeHandler } = props;

  return (
    <div className={classes.container}>
      <ImageCharacter
        character={character}
        characters={characters}
        players={players}
        onChangeHandler={onChangeHandler}
      />
      <DescriptionCharacter character={character} />
    </div>
  );
};

export default ViewCharacter;
