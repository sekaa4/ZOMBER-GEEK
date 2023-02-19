import { CharacterName } from "../../models/Character.type";
import CharacterFastest from "./CharacterFastest";
import CharacterWithBigHP from "./CharacterWithBigHP";
import CharacterWithHandGun from "./CharacterWithHandGun";
import CharacterWithHeal from "./CharacterWithHeal";
import CharacterWithKnife from "./CharacterWithKnife";

type Chars = {
  [key in CharacterName]?:
    | CharacterWithKnife
    | CharacterWithHeal
    | CharacterFastest
    | CharacterWithHandGun
    | CharacterWithBigHP;
};

const createCharacter = (keys: CharacterName[]) => {
  const chars: Chars = {
    Alex: new CharacterWithKnife(),
    Anita: new CharacterWithHeal(),
    Max: new CharacterFastest(),
    Mary: new CharacterWithHandGun(),
    Johnny: new CharacterWithBigHP(),
  };
  return keys.reduce((accum: Chars, item: CharacterName) => {
    const result = { ...accum };
    result[item] = chars[item];
    return result;
  }, {});
};

export default createCharacter;
