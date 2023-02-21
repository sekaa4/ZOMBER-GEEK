import { FC } from "react";
import FieldCell from "../../models/FieldCell.type";
import classes from "./field-cell.module.scss";
import {
  CharacterPhotos,
  flipCard,
  ItemsAndWeaponsPhotos,
  ZombiePhotos,
} from "../../constants/Photos";
import getAdjacentCells from "../../utils/getAdjacentCells";
import Directions from "../../models/Directions.type";
import zombies from "../../constants/Zombies";

type FieldCellProp = {
  cell: FieldCell<number>;
  isActive: boolean;
  isCellToMove: boolean;
  charName: string | null;
  changeActiveCellID: (cellID: number) => void;
  setCellsToMoveArray: (arr: (number | "")[]) => void;
};
const directionsValues: Directions[] = ["left", "right", "top", "bottom"];

const FieldCellComp: FC<FieldCellProp> = ({
  cell,
  isActive,
  isCellToMove,
  charName,
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
  if (
    (cell.flipCell && cell.zombieID) ||
    cell.characterName ||
    cell.holdItemID
  ) {
    return (
      <button type="button" className={classesNames} onClick={clickHandler}>
        <img src={flipCard} alt="flip card" className={classes.flipCardImage} />
      </button>
    );
  }
  if (!cell.flipCell && cell.zombieID) {
    const currentZombie = zombies.filter((item) => item.id === cell.zombieID);
    return (
      <button type="button" className={classesNames} onClick={clickHandler}>
        <img
          src={ZombiePhotos[currentZombie[0].name]}
          alt=""
          className={classes.zombieItemImage}
        />
      </button>
    );
  }
  if (!cell.flipCell && cell.holdItemID) {
    return (
      <button type="button" className={classesNames} onClick={clickHandler}>
        <img
          src={ItemsAndWeaponsPhotos[cell.holdItemID]}
          alt={`${cell.holdItemID} card`}
          className={classes.zombieItemImage}
        />
      </button>
    );
  }
  if (charName && isActive) {
    return (
      <button type="button" className={classesNames} onClick={clickHandler}>
        <img
          src={CharacterPhotos[charName]}
          alt={`${cell.holdItemID} card`}
          className={classes.zombieItemImage}
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
