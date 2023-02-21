import { Character } from "../models/Character.type";

const addActiveCellToCharacter = (cahrObj: Character, activeCell: number) => {
  const char = { ...cahrObj };
  char.currentPositionId = activeCell;
  return char;
};

export default addActiveCellToCharacter;
