import { FC } from "react";
import {
  CharacterPhotos,
  flipCard,
  ItemsAndWeaponsPhotos,
  ZombiePhotos,
} from "../../constants/Photos";
import zombies from "../../constants/Zombies";
import ItemsNames from "../../models/ItemsNames.type";
import classes from "./field-cell.module.scss";

type FieldCellCompProp = {
  flipCell: boolean;
  zombieId: number | null | undefined;
  charName: string | null;
  currentCharName: string | null;
  holdItemId: ItemsNames | null;
  isActive: boolean;
  isCellToMove: boolean;
  clickHandlerCallback: () => void;
};
const FieldCellComp: FC<FieldCellCompProp> = ({
  flipCell,
  zombieId,
  charName,
  currentCharName,
  holdItemId,
  isActive,
  isCellToMove,

  clickHandlerCallback,
}) => {
  const classesNames = [
    classes.fieldCell,
    isActive ? classes.fieldCellActive : "",
    isCellToMove ? classes.fieldCellToMove : "",
  ].join(" ");
  if (flipCell && (zombieId || charName || holdItemId)) {
    return (
      <button
        type="button"
        className={classesNames}
        onClick={clickHandlerCallback}
      >
        <img src={flipCard} alt="flip card" className={classes.flipCardImage} />
      </button>
    );
  }
  if (!flipCell && zombieId) {
    const currentZombie = zombies.filter((item) => item.id === zombieId);
    return (
      <button
        type="button"
        className={classesNames}
        onClick={clickHandlerCallback}
      >
        <img
          src={ZombiePhotos[currentZombie[0].name]}
          alt=""
          className={classes.zombieItemImage}
        />
      </button>
    );
  }
  if (!flipCell && holdItemId) {
    return (
      <button
        type="button"
        className={classesNames}
        onClick={clickHandlerCallback}
      >
        <img
          src={ItemsAndWeaponsPhotos[holdItemId]}
          alt={`${holdItemId} card`}
          className={classes.zombieItemImage}
        />
      </button>
    );
  }
  if (currentCharName && isActive) {
    return (
      <button
        type="button"
        className={classesNames}
        onClick={clickHandlerCallback}
      >
        <img
          src={CharacterPhotos[currentCharName]}
          alt={`${holdItemId} card`}
          className={classes.zombieItemImage}
        />
      </button>
    );
  }
  return (
    <button
      type="button"
      className={classesNames}
      onClick={clickHandlerCallback}
      aria-label="text"
    />
  );
};

export default FieldCellComp;
