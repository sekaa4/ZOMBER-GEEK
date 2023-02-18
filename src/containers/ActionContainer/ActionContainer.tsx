import { useMemo, useState } from "react";
import CharacterDetails from "../../components/characterDetails/CharacterDetails";
import SpinContainer from "../SpinContainer/SpinContainer";
import StateDescription from "../StateDescription/StateDescription";
import ActionContext from "./ActionContext";

const ActionContainer = () => {
  const [action, setAction] = useState<string>("Roll Spin for get action");
  const [countOfTurn, setCountOfTurn] = useState<string | number>(0);

  const setActionHandler = (prop: string) => {
    setAction(prop);
  };

  const setCountOfTurnHandler = (prop: string | number) => {
    setCountOfTurn(prop);
  };

  const defaultProps = useMemo(
    () => ({
      setActionHandler,
      setCountOfTurnHandler,
      action,
      countOfTurn,
    }),
    [action, countOfTurn],
  );

  return (
    <ActionContext.Provider value={defaultProps}>
      <SpinContainer />
      <StateDescription />
      <CharacterDetails />
    </ActionContext.Provider>
  );
};

export default ActionContainer;
