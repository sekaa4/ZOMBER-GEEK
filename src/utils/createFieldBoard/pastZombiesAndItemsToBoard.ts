import ZombieBoss from "../../entities/Zombie/ZombieBoss";
import ZombieDefault from "../../entities/Zombie/ZombieDefault";
import FieldCell from "../../models/FieldCell.type";
import ItemsNames from "../../models/ItemsNames.type";

const pastZombiesAndItemsToBoard = (
  field: FieldCell<number>[],
  shuffledCellsArray: number[],
  arrayWidthItems: (ZombieDefault | ZombieBoss | ItemsNames)[],
) => {
  const resultField = [...field];
  for (let key = 0; key < arrayWidthItems.length; key += 1) {
    const currentCard = arrayWidthItems[key];
    const fieldCellFromID = shuffledCellsArray[key];
    if (
      currentCard instanceof ZombieDefault ||
      currentCard instanceof ZombieBoss
    ) {
      resultField[fieldCellFromID].zombieID = currentCard.id;
    } else {
      resultField[fieldCellFromID].holdItemID = currentCard;
    }
  }
  return resultField;
};

export default pastZombiesAndItemsToBoard;
