import IItems from "../../models/Items.type";
import IWeapons from "../../models/Weapons.type";
import CharacterProps from "../../models/CharacterProps";
import Items from "../Items/Items";
import Weapons from "../Weapon/Weapons";
import Character from "./AbstractCharacter";
import policemanImage from "../../assets/images/characters/policemen.webp";

export default class CharacterWithHandGun extends Character {
  static instance: CharacterWithHandGun;

  weapons: IWeapons | undefined;

  items: IItems | undefined;

  countOfTurns: number | undefined;

  currentPositionId: null | undefined | number;

  imageAvatar: string | undefined;

  imageCart: string | undefined;

  constructor(health?: number, items?: IItems, weapons?: IWeapons) {
    if (
      CharacterWithHandGun.instance &&
      CharacterWithHandGun.instance instanceof CharacterWithHandGun
    ) {
      return CharacterWithHandGun.instance;
    }

    super(
      CharacterProps.CharacterNameWithHandGun,
      health ?? CharacterProps.CharacterDefaultHP,
    );
    this.weapons = new Weapons(weapons);
    this.weapons.handguns! += 1;
    this.items = new Items(items);
    this.countOfTurns = 0;
    this.currentPositionId = null;
    this.imageAvatar = policemanImage;
    this.imageCart = "";

    this.start();
    CharacterWithHandGun.instance = this;
    return this;
  }
}
