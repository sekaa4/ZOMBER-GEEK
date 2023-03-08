import StartCellsForCharactersIDs from "../../constants/StartCellsForCharactersIDs";
import FieldCell from "../../models/FieldCell.type";

type CellIDs = number[];
const getIDValuesWithoutCharactersPosition = (
  emptyField: FieldCell<number>[],
) => {
  return emptyField.reduce((accum: CellIDs, cell) => {
    if (!StartCellsForCharactersIDs.includes(cell.id)) {
      accum.push(cell.id);
    }
    return accum;
  }, []);
};

export default getIDValuesWithoutCharactersPosition;
