import { ENG } from "../../i18n/translate";
import { CharacterName } from "../../models/Character.type";
import classes from "./DescriptionCharacter.module.scss";

interface DescriptionCharacterProps {
  character?: CharacterName;
}

const DescriptionCharacter = (props: DescriptionCharacterProps) => {
  const { character = "default" } = props;

  return <div className={classes.container}>{ENG[character]}</div>;
};

export default DescriptionCharacter;
