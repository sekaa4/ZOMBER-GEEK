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
  holdItemId: ItemsNames | null;
  isActive: boolean;
  isCellToMove: boolean;
  clickHandlerCallback: () => void;
};
const FieldCellComp: FC<FieldCellCompProp> = ({
  flipCell,
  zombieId,
  charName,
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
  if (flipCell && (zombieId || holdItemId)) {
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
  if (!flipCell && zombieId && !charName) {
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
  if (!flipCell && holdItemId && !charName) {
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
  if (!flipCell && charName && (zombieId || holdItemId)) {
    const currentZombie = zombies.filter((item) => item.id === zombieId);
    return (
      <button
        type="button"
        className={classesNames}
        onClick={clickHandlerCallback}
      >
        <img
          src={CharacterPhotos[charName]}
          alt={`${charName} card`}
          className={classes.charImage}
        />
        <img
          src={
            holdItemId
              ? ItemsAndWeaponsPhotos[holdItemId]
              : ZombiePhotos[currentZombie[0].name]
          }
          alt={`${holdItemId} card`}
          className={classes.zombieItemImage}
        />
      </button>
    );
  }
  if (flipCell && charName && !(zombieId || holdItemId)) {
    return (
      <button
        type="button"
        className={classesNames}
        onClick={clickHandlerCallback}
      >
        <img
          src={CharacterPhotos[charName]}
          alt={`${holdItemId} card`}
          className={classes.charImage}
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
