import Items from "../entities/Items/Items";
import Weapons from "../entities/Weapon/Weapons";
import FieldCell from "./FieldCell.type";
import ZombieObj from "./Zombie.type";

type CreateFieldFunction = (
  cellsCount: number,
  zombies: ZombieObj[],
  items: Items,
  weapons: Weapons,
) => FieldCell<number>[];

export default CreateFieldFunction;
