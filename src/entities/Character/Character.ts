import IItems from "../../models/Items.type";
import IWeapons from "../../models/Weapons.type";
import Items from "../Items/Items";
import Weapons from "../Weapon/Weapons";

export default class Character {
  readonly name: string;

  health: number;

  weapons: IWeapons;

  items: IItems;

  countOfTurns: number;

  currentPositionId: null | number;

  constructor(
    name: string,
    health: number,
    items?: IItems,
    weapons?: IWeapons,
  ) {
    this.name = name;
    this.health = health;
    this.weapons = new Weapons(weapons);
    this.items = new Items(items);
    this.countOfTurns = 0;
    this.currentPositionId = null;

    this.start();
  }

  start() {}

  walk() {}

  fight() {}

  useWeapon() {}

  useItems() {}

  incrementHealth() {}

  dicrementHealth() {}

  flipCart() {}

  dropAllItems() {}
}
