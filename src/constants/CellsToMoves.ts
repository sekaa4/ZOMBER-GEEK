import FieldProhibidations from "../models/FieldProhibidations.type";

export const countOfCells = 144;

export const cellMovesProhibidationsIDs: FieldProhibidations = {
  left: [
    39, 63, 75, 99, 111, 41, 53, 65, 44, 68, 80, 104, 116, 48, 72, 84, 108, 120,
  ],
  right: [
    38, 62, 74, 98, 110, 40, 52, 64, 43, 67, 79, 103, 115, 47, 71, 83, 107, 119,
  ],
  top: [
    39, 40, 41, 43, 44, 45, 46, 47, 75, 76, 78, 79, 80, 81, 83, 123, 124, 127,
    128, 130, 131,
  ],
  bottom: [
    27, 28, 29, 31, 32, 33, 34, 35, 63, 64, 66, 67, 68, 69, 71, 111, 112, 115,
    116, 118, 119,
  ],
};
