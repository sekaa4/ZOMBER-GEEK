import { createContext } from "react";
import { WinItemsObj } from "../../entities/Game/AbstractGame";

interface ActionContextProps {
  setActionHandler(prop: string): void;
  setCountOfTurnHandler(prop: string | number): void;
  changeStatus(): void;
  changeCountItemsHandler(e: React.MouseEvent<HTMLButtonElement>): void;
  action: string;
  countOfTurn: string | number;
  turn: number;
  isDisabled: boolean;
  winItems: WinItemsObj;
}

const ActionContext = createContext({} as ActionContextProps);

export default ActionContext;
