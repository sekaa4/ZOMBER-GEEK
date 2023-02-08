import IItems from "../../models/Items.type";
import IWeapons from "../../models/Weapons.type";
import CharacterProps from "../../models/CharacterProps";
import Items from "../Items/Items";
import Weapons from "../Weapon/Weapons";
import Character from "./AbstractCharacter";

export default class CharacterFastest extends Character {
  static instance: CharacterFastest;
  weapons: IWeapons | undefined;

  items: IItems | undefined;

  countOfTurns: number | undefined;

  currentPositionId: null | undefined | number;

  constructor(
    health?: number,
    items?: IItems,
    weapons?: IWeapons,
  ) {
    if (CharacterFastest.instance && CharacterFastest.instance instanceof CharacterFastest) {
      return CharacterFastest.instance;
    }

    super(CharacterProps.CharacterNameFastest, health = CharacterProps.CharacterDefaultHP);
    this.weapons = new Weapons(weapons);
    this.items = new Items(items);
    this.countOfTurns = 0;
    this.currentPositionId = null;

    this.start();
    CharacterFastest.instance = this;
    return this;
  }

  move() {}
}
