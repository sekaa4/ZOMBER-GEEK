import { ENG } from "../../i18n/translate";
import { CharacterName } from "../../models/Character.type";

interface DescriptionCharacterProps {
  character?: CharacterName;
}

const DescriptionCharacter = (props: DescriptionCharacterProps) => {
  const { character = "default" } = props;

  return <div>{ENG[character]}</div>;
};

export default DescriptionCharacter;
