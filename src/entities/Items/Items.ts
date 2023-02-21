import IItems from "../../models/Items.type";
import ItemsAndWeaponsNames from "../../models/ItemsAndWeaponsNames";

const mochaItems: IItems = {
  [ItemsAndWeaponsNames.FIRST_AID_KITS]: 0,
  [ItemsAndWeaponsNames.BOARDS]: 0,
  [ItemsAndWeaponsNames.GASOLINE]: 0,
  [ItemsAndWeaponsNames.KEYS]: 0,
};

export default class Items {
  firstAidKits: number;

  boards: number;

  gasoline: number;

  keys: number;

  constructor({ firstAidKits, boards, gasoline, keys }: IItems = mochaItems) {
    this[ItemsAndWeaponsNames.FIRST_AID_KITS] = firstAidKits;
    this[ItemsAndWeaponsNames.BOARDS] = boards;
    this[ItemsAndWeaponsNames.GASOLINE] = gasoline;
    this[ItemsAndWeaponsNames.KEYS] = keys;
  }
}
