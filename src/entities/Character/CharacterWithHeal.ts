import IItems from "../../models/Items.type";
import IWeapons from "../../models/Weapons.type";
import CharacterProps from "../../models/CharacterProps";
import Items from "../Items/Items";
import Weapons from "../Weapon/Weapons";
import Character from "./AbstractCharacter";

export default class CharacterWithHeal extends Character {
  static instance: CharacterWithHeal;
  weapons: IWeapons | undefined;

  items: IItems | undefined;

  countOfTurns: number | undefined;

  currentPositionId: null | undefined | number;

  constructor(
    health?: number,
    items?: IItems,
    weapons?: IWeapons,
  ) {
    if (CharacterWithHeal.instance && CharacterWithHeal.instance instanceof CharacterWithHeal) {
      return CharacterWithHeal.instance;
    }

    super(CharacterProps.CharacterNameWithHeal, health = CharacterProps.CharacterDefaultHP);
    this.weapons = new Weapons(weapons);
    this.items = new Items(items);
    this.countOfTurns = 0;
    this.currentPositionId = null;

    this.start();
    CharacterWithHeal.instance = this;
    return this;
  }

  incrementHealth() {}
}
