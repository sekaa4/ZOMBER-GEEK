import Items from "../entities/Items/Items";
import Weapons from "../entities/Weapon/Weapons";
import ZombieBoss from "../entities/Zombie/ZombieBoss";
import ZombieDefault from "../entities/Zombie/ZombieDefault";
import FieldCell from "./FieldCell.type";

type CreateFieldFunction = (
  cellsCount: number,
  zombies: (ZombieBoss | ZombieDefault)[],
  items: Items,
  weapons: Weapons,
) => FieldCell<number>[];

export default CreateFieldFunction;
