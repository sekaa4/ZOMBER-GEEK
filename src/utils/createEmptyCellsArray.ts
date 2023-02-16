import CreateEmptyCellsArrayFunction from "../models/CreateEmptyCellsArray.type";
import FieldProhibidations from "../models/FieldProhibidations.type";

const createEmptyCellsArray: CreateEmptyCellsArrayFunction = (
  countOfCells,
  cellTemplate,
  movesProhibidations,
) => {
  try {
    const cellsField = new Array(countOfCells)
      .fill(cellTemplate)
      .map((_, index) => {
        const cell = { ...cellTemplate };
        const startFromOne = 1;
        cell.id = index + startFromOne;
        return cell;
      });

    const moveDirections: Array<keyof FieldProhibidations> = [
      "left",
      "right",
      "top",
      "bottom",
    ];

    moveDirections.forEach((direction) => {
      movesProhibidations[direction].forEach((idValue: number) => {
        const correctionToIndexValue = 1;
        cellsField[idValue - correctionToIndexValue][direction] = false;
      });
    });

    return cellsField;
  } catch (e) {
    throw new Error(`Error with createEmptyCellsArray function - ${e}`);
  }
};

export default createEmptyCellsArray;
