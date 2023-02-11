import { FC } from "react";
import classes from "./characterCard.module.scss";

// interface CharacterCardProps {
//   id: number;
//   left: boolean;
//   right: boolean;
//   top: boolean;
//   bottom: boolean;
// }

const CharacterCard: FC = () => {
  return <div className={classes.characterCard} />;
};

export default CharacterCard;
