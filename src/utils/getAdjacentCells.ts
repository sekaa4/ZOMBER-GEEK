import Directions from "../models/Directions.type";

const getAdjacentCells = (direction: Directions, cellID: number) => {
  switch (direction) {
    case "left": {
      return cellID - 1;
      break;
    }
    case "right": {
      return cellID + 1;
      break;
    }
    case "top": {
      return cellID - 12;
      break;
    }
    case "bottom": {
      return cellID + 12;
      break;
    }
    default:
      return "";
  }
  return "";
};

export default getAdjacentCells;
