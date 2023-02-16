import FieldCell from "../../models/FieldCell.type";

const templateCell: FieldCell<number> = {
  id: 0,
  characterName: null,
  zombieID: null,
  holdItemID: null,
  left: true,
  right: true,
  top: true,
  bottom: true,
  flipCell: true,
  active: false,
};

export default templateCell;
