import CharacterFastest from "./CharacterFastest";
import CharacterWithBigHP from "./CharacterWithBigHP";
import CharacterWithHandGun from "./CharacterWithHandGun";
import CharacterWithHeal from "./CharacterWithHeal";
import CharacterWithKnife from "./CharacterWithKnife";

const createCharacter = () => {
  const Alex = new CharacterWithKnife();
  const Anita = new CharacterWithHeal();
  const Max = new CharacterFastest();
  const Mary = new CharacterWithHandGun();
  const Johnny = new CharacterWithBigHP();
}
