interface FieldCell {
  id: number;
  characterName: string;
  zombieID: number;
  holdItemID: number;
  left: boolean;
  right: boolean;
  top: boolean;
  bottom: boolean;
  flipCell: boolean;
  active: boolean;
}

export default FieldCell;
