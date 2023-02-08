import IItems from "../../models/Items.type";
import IWeapons from "../../models/Weapons.type";
import CharacterProps from "../../models/CharacterProps";
import Items from "../Items/Items";
import Weapons from "../Weapon/Weapons";
import Character from "./AbstractCharacter";

export default class CharacterWithBigHP extends Character {
  static instance: CharacterWithBigHP;
  weapons: IWeapons | undefined;

  items: IItems | undefined;

  countOfTurns: number | undefined;

  currentPositionId: null | undefined | number;

  constructor(
    health?: number,
    items?: IItems,
    weapons?: IWeapons,
  ) {
    if (CharacterWithBigHP.instance && CharacterWithBigHP.instance instanceof CharacterWithBigHP) {
      return CharacterWithBigHP.instance;
    }

    super(CharacterProps.CharacterNameWithKnife, health = CharacterProps.CharacterBigHP);
    this.weapons = new Weapons(weapons);
    this.items = new Items(items);
    this.countOfTurns = 0;
    this.currentPositionId = null;

    this.start();
    CharacterWithBigHP.instance = this;
    return this;
  }
}
