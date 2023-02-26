import FieldCell from "../models/FieldCell.type";

const changeActiveCellFlip = (
  cellsArr: FieldCell<number>[],
  cellId: number,
) => {
  return cellsArr.map((item) => {
    const cell = item;
    if (cell.id === cellId) {
      return { ...cell, flipCell: !cell.flipCell };
    }
    return cell;
  });
};

export default changeActiveCellFlip;
