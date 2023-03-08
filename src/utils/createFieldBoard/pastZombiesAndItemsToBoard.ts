import ZombieBoss from "../../entities/Zombie/ZombieBoss";
import ZombieDefault from "../../entities/Zombie/ZombieDefault";
import FieldCell from "../../models/FieldCell.type";
import ItemsNames from "../../models/ItemsNames.type";

const pastZombiesAndItemsToBoard = (
  field: FieldCell<number>[],
  shuffledCellsArray: number[],
  arrayWithItems: (ZombieDefault | ZombieBoss | ItemsNames)[],
) => {
  const resultField = field;
  for (let key = 0; key < arrayWithItems.length; key += 1) {
    const correctionToIndex = 1;
    const currentCard = arrayWithItems[key];
    const fieldCellFromIDIndex = shuffledCellsArray[key] - correctionToIndex;
    if (
      currentCard instanceof ZombieDefault ||
      currentCard instanceof ZombieBoss
    ) {
      resultField[fieldCellFromIDIndex].zombieID = currentCard.id;
    } else {
      resultField[fieldCellFromIDIndex].holdItemID = currentCard;
    }
  }
  return resultField;
};

export default pastZombiesAndItemsToBoard;
