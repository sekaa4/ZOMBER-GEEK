import CharacterProps from "../../models/CharacterProps";
import imgDefault from "../../assets/images/char-cards/default.png";
import imgCharBigHP from "../../assets/images/char-cards/card-big-hp.webp";
import imgCharDoctor from "../../assets/images/char-cards/card-healer.webp";
import imgCharPoliceman from "../../assets/images/char-cards/card-policeman.webp";
import imgCharRunner from "../../assets/images/char-cards/card-runner.webp";
import imgCharKnife from "../../assets/images/char-cards/card-with-knife.webp";

const ImageURL = {
  [CharacterProps.CharacterNameWithKnife]: imgCharKnife,
  [CharacterProps.CharacterNameWithHeal]: imgCharDoctor,
  [CharacterProps.CharacterNameFastest]: imgCharRunner,
  [CharacterProps.CharacterNameWithHandGun]: imgCharPoliceman,
  [CharacterProps.CharacterNameWithBigHP]: imgCharBigHP,
  default: imgDefault,
} as const;

export default ImageURL;
