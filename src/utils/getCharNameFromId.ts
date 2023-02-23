import { Chars } from "../models/Character.type";

const getCharNameFromId = (obj: Chars | null, id: number) => {
  if (obj === null) {
    return null;
  }
  const charactersArr = Object.values(obj);
  const charWithCurrId = charactersArr.find(
    (char) => char.currentPositionId === id,
  );
  if (charWithCurrId) {
    return charWithCurrId.name;
  }
  return null;
};

export default getCharNameFromId;
