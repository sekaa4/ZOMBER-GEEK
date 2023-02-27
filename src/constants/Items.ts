import Items from "../entities/Items/Items";
import ItemsAndWeaponsNames from "../models/ItemsAndWeaponsNames";

const items = new Items({
  [ItemsAndWeaponsNames.FIRST_AID_KITS]: 14,
  [ItemsAndWeaponsNames.BOARDS]: 0,
  [ItemsAndWeaponsNames.GASOLINE]: 1,
  [ItemsAndWeaponsNames.KEYS]: 1,
});

export default items;
