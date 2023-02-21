import ItemsAndWeaponsNames from "../../models/ItemsAndWeaponsNames";
import IWeapons from "../../models/Weapons.type";

const mochaWeapons: IWeapons = {
  [ItemsAndWeaponsNames.GRENADES]: 0,
  [ItemsAndWeaponsNames.KNIFES]: 0,
  [ItemsAndWeaponsNames.CROSSBOWS]: 0,
  [ItemsAndWeaponsNames.AXES]: 0,
  [ItemsAndWeaponsNames.HANDGUNS]: 0,
  [ItemsAndWeaponsNames.ASSAULTRIFLES]: 0,
  [ItemsAndWeaponsNames.SHOTGUNS]: 0,
  [ItemsAndWeaponsNames.BFG]: 0,
};

export default class Weapons {
  [ItemsAndWeaponsNames.GRENADES]?: number;

  [ItemsAndWeaponsNames.KNIFES]?: number;

  [ItemsAndWeaponsNames.CROSSBOWS]?: number;

  [ItemsAndWeaponsNames.AXES]?: number;

  [ItemsAndWeaponsNames.HANDGUNS]?: number;

  [ItemsAndWeaponsNames.ASSAULTRIFLES]?: number;

  [ItemsAndWeaponsNames.SHOTGUNS]?: number;

  [ItemsAndWeaponsNames.BFG]?: number;

  constructor({
    grenades,
    knifes,
    crossbows,
    axes,
    handguns,
    assaultRifles,
    shotguns,
    BFG,
  }: IWeapons = mochaWeapons) {
    this[ItemsAndWeaponsNames.GRENADES] =
      grenades ?? mochaWeapons[ItemsAndWeaponsNames.GRENADES];
    this[ItemsAndWeaponsNames.KNIFES] =
      knifes ?? mochaWeapons[ItemsAndWeaponsNames.KNIFES];
    this[ItemsAndWeaponsNames.CROSSBOWS] =
      crossbows ?? mochaWeapons[ItemsAndWeaponsNames.CROSSBOWS];
    this[ItemsAndWeaponsNames.AXES] =
      axes ?? mochaWeapons[ItemsAndWeaponsNames.AXES];
    this[ItemsAndWeaponsNames.HANDGUNS] =
      handguns ?? mochaWeapons[ItemsAndWeaponsNames.HANDGUNS];
    this[ItemsAndWeaponsNames.ASSAULTRIFLES] =
      assaultRifles ?? mochaWeapons[ItemsAndWeaponsNames.ASSAULTRIFLES];
    this[ItemsAndWeaponsNames.SHOTGUNS] =
      shotguns ?? mochaWeapons[ItemsAndWeaponsNames.SHOTGUNS];
    this[ItemsAndWeaponsNames.BFG] =
      BFG ?? mochaWeapons[ItemsAndWeaponsNames.BFG];
  }
}
