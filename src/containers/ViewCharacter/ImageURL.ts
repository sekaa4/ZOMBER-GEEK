import CharacterProps from "../../models/CharacterProps";
import imgDefault from "../../assets/images/default.png";

const ImageURL = {
  [CharacterProps.CharacterNameWithKnife]: imgDefault,
  [CharacterProps.CharacterNameWithHeal]: imgDefault,
  [CharacterProps.CharacterNameFastest]: imgDefault,
  [CharacterProps.CharacterNameWithHandGun]: imgDefault,
  [CharacterProps.CharacterNameWithBigHP]: imgDefault,
  default: imgDefault,
} as const;

export default ImageURL;
