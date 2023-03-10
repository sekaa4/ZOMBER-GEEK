import { CharacterName } from "./Character.type";
import ItemsNames from "./ItemsNames.type";

interface FieldCell<CellIDType> {
  id: CellIDType;
  characterName: CharacterName | null;
  zombieID: number | null | undefined;
  holdItemID: ItemsNames | null;
  left: boolean;
  right: boolean;
  top: boolean;
  bottom: boolean;
  flipCell: boolean;
  active: boolean;
}

export default FieldCell;
