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
  [ItemsAndWeaponsNames.GRENADES]: number;

  [ItemsAndWeaponsNames.KNIFES]: number;

  [ItemsAndWeaponsNames.CROSSBOWS]: number;

  [ItemsAndWeaponsNames.AXES]: number;

  [ItemsAndWeaponsNames.HANDGUNS]: number;

  [ItemsAndWeaponsNames.ASSAULTRIFLES]: number;

  [ItemsAndWeaponsNames.SHOTGUNS]: number;

  [ItemsAndWeaponsNames.BFG]: number;

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
    this[ItemsAndWeaponsNames.GRENADES] = grenades;
    this[ItemsAndWeaponsNames.KNIFES] = knifes;
    this[ItemsAndWeaponsNames.CROSSBOWS] = crossbows;
    this[ItemsAndWeaponsNames.AXES] = axes;
    this[ItemsAndWeaponsNames.HANDGUNS] = handguns;
    this[ItemsAndWeaponsNames.ASSAULTRIFLES] = assaultRifles;
    this[ItemsAndWeaponsNames.SHOTGUNS] = shotguns;
    this[ItemsAndWeaponsNames.BFG] = BFG;
  }
}
