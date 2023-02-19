import Items from "../entities/Items/Items";
import Weapons from "../entities/Weapon/Weapons";
import CharacterProps from "./CharacterProps";

export type CharacterName =
  | `${CharacterProps.CharacterNameWithKnife}`
  | `${CharacterProps.CharacterNameWithHeal}`
  | `${CharacterProps.CharacterNameFastest}`
  | `${CharacterProps.CharacterNameWithHandGun}`
  | `${CharacterProps.CharacterNameWithBigHP}`;

export type Stage = "prepare" | "roll" | "action" | "finish";

export type Chars = {
  [key in CharacterName]?: Character;
};

export interface Character {
  name: CharacterName;
  health: number;
  weapons: Weapons;
  items: Items;
  countOfTurns: number;
  currentPositionId: null | number;
  stage: Stage;
  active: boolean;
  imageAvatar: string;
  imageCart: string;
}
