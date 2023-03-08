import { Character, CharacterName, Chars } from "../../models/Character.type";
import CharacterProps from "../../models/CharacterProps";
import CharacterFastest from "./CharacterFastest";
import CharacterWithBigHP from "./CharacterWithBigHP";
import CharacterWithHandGun from "./CharacterWithHandGun";
import CharacterWithHeal from "./CharacterWithHeal";
import CharacterWithKnife from "./CharacterWithKnife";

const createCharacter = (keys: CharacterName[]) => {
  const chars: Chars = {
    [CharacterProps.CharacterNameWithKnife]:
      new CharacterWithKnife() as Character,
    [CharacterProps.CharacterNameWithHeal]:
      new CharacterWithHeal() as Character,
    [CharacterProps.CharacterNameFastest]: new CharacterFastest() as Character,
    [CharacterProps.CharacterNameWithHandGun]:
      new CharacterWithHandGun() as Character,
    [CharacterProps.CharacterNameWithBigHP]:
      new CharacterWithBigHP() as Character,
  };
  return keys.reduce((acc: Chars, item: CharacterName) => {
    const result = { ...acc };
    result[item] = chars[item];
    return result;
  }, {});
};

export default createCharacter;
