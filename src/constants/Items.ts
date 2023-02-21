import Items from "../entities/Items/Items";
import ItemsAndWeaponsNames from "../models/ItemsAndWeaponsNames";

const items = new Items({
  [ItemsAndWeaponsNames.FIRST_AID_KITS]: 6,
  [ItemsAndWeaponsNames.BOARDS]: 8,
  [ItemsAndWeaponsNames.GASOLINE]: 1,
  [ItemsAndWeaponsNames.KEYS]: 1,
});

export default items;
