/* eslint-disable no-constructor-return */
import IItems from "../../models/Items.type";
import IWeapons from "../../models/Weapons.type";
import CharacterProps from "../../models/CharacterProps";
import Items from "../Items/Items";
import Weapons from "../Weapon/Weapons";
import Character from "./AbstractCharacter";

export default class CharacterWithKnife extends Character {
  static instance: CharacterWithKnife;

  weapons: IWeapons | undefined;

  items: IItems | undefined;

  countOfTurns: number | undefined;

  currentPositionId: null | undefined | number;

  constructor(health?: number, items?: IItems, weapons?: IWeapons) {
    if (
      CharacterWithKnife.instance &&
      CharacterWithKnife.instance instanceof CharacterWithKnife
    ) {
      return CharacterWithKnife.instance;
    }

    const baseKnife = {
      knifes: 1,
    };

    super(
      CharacterProps.CharacterNameWithKnife,
      health ?? CharacterProps.CharacterDefaultHP,
    );
    this.weapons = new Weapons(weapons ?? baseKnife);
    this.items = new Items(items);
    this.countOfTurns = 0;
    this.currentPositionId = null;

    this.start();
    CharacterWithKnife.instance = this;
  }
}
