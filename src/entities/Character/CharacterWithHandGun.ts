import IItems from "../../models/Items.type";
import IWeapons from "../../models/Weapons.type";
import CharacterProps from "../../models/CharacterProps";
import Items from "../Items/Items";
import Weapons from "../Weapon/Weapons";
import Character from "./AbstractCharacter";

export default class CharacterWithHandGun extends Character {
  static instance: CharacterWithHandGun;

  weapons: IWeapons | undefined;

  items: IItems | undefined;

  countOfTurns: number | undefined;

  currentPositionId: null | undefined | number;

  constructor(health?: number, items?: IItems, weapons?: IWeapons) {
    if (
      CharacterWithHandGun.instance &&
      CharacterWithHandGun.instance instanceof CharacterWithHandGun
    ) {
      return CharacterWithHandGun.instance;
    }

    const baseHandguns = {
      handguns: 1,
    };

    super(
      CharacterProps.CharacterNameWithHandGun,
      (health = CharacterProps.CharacterDefaultHP),
    );
    this.weapons = new Weapons(weapons ?? baseHandguns);
    this.items = new Items(items);
    this.countOfTurns = 0;
    this.currentPositionId = null;

    this.start();
    CharacterWithHandGun.instance = this;
    return this;
  }
}
