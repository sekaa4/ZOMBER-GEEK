import { FC } from "react";
import FieldCell from "../../models/FieldCell.type";
import classes from "./field-cell.module.scss";
import CharacterPhotos from "../../constants/CharacterPhotos";
import getAdjacentCells from "../../utils/getAdjacentCells";
import Directions from "../../models/Directions.type";

type FieldCellProp = {
  cell: FieldCell<number>;
  isActive: boolean;
  isCellToMove: boolean;
  changeActiveCellID: (cellID: number) => void;
  setCellsToMoveArray: (arr: (number | "")[]) => void;
};
const directionsValues: Directions[] = ["left", "right", "top", "bottom"];

const FieldCellComp: FC<FieldCellProp> = ({
  cell,
  isActive,
  isCellToMove,
  changeActiveCellID,
  setCellsToMoveArray,
}) => {
  const directions = directionsValues.map((str) =>
    cell[str] ? getAdjacentCells(str, cell.id) : "",
  );
  const classesNames = [
    classes.fieldCell,
    isActive ? classes.fieldCellActive : "",
    isCellToMove ? classes.fieldCellToMove : "",
  ].join(" ");
  const clickHandler = () => {
    if (isCellToMove) {
      changeActiveCellID(cell.id);
      setCellsToMoveArray(directions);
    }
  };
  if (cell.zombieID) {
    return (
      <button type="button" className={classesNames} onClick={clickHandler}>
        {/* <img src={CharacterPhotos.Alex} alt="" className={classes.charImage} /> */}
        <img
          src={CharacterPhotos.Anita}
          alt=""
          className={classes.zombieImage}
        />
      </button>
    );
  }
  return (
    <button
      type="button"
      className={classesNames}
      onClick={clickHandler}
      aria-label="text"
    />
  );
};

export default FieldCellComp;
