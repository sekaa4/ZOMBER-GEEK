import FieldCell from "./FieldCell.type";
import FieldProhibidations from "./FieldProhibidations.type";

type CreateEmptyCellsArrayFunction = (
  cellsCount: number,
  cellTemplate: FieldCell<number>,
  movesProhibidations: FieldProhibidations,
) => FieldCell<number>[];

export default CreateEmptyCellsArrayFunction;
