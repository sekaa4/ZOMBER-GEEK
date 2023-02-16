import templateCell from "../../entities/FieldCell/fieldCell";
import { cellMovesProhibidationsIDs } from "../../constants/CellsToMoves";
import CreateFieldFunction from "../../models/CreateFieldBoardFunction.type";
import createEmptyCellsArray from "../createEmptyCellsArray";
import shuffleArrayWithNumbers from "../shuffleArrayWithNumbers";
import getIDValuesWithoutCharactersPosition from "./getIdValuesWithoutCharactersPositions";
import transformItemsObjToArray from "./transformItemsToArray";
import pastZombiesAndItemsToBoard from "./pastZombiesAndItemsToBoard";

const createFieldBoard: CreateFieldFunction = (
  cellsCount,
  zombies,
  items,
  weapons,
) => {
  const field = createEmptyCellsArray(
    cellsCount,
    templateCell,
    cellMovesProhibidationsIDs,
  );
  const cellsIDsToSorting = getIDValuesWithoutCharactersPosition(field);
  const itemsNamesArr = transformItemsObjToArray(items);
  const weaponsNamesArr = transformItemsObjToArray(weapons);
  const shuffledCellsArray = shuffleArrayWithNumbers(cellsIDsToSorting);
  const itemsAndZombiesCards = [
    ...zombies,
    ...itemsNamesArr,
    ...weaponsNamesArr,
  ];

  return pastZombiesAndItemsToBoard(
    field,
    shuffledCellsArray,
    itemsAndZombiesCards,
  );
};

export default createFieldBoard;
