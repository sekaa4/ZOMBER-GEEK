import { useState } from "react";
import CharacterDetails from "../../components/character-details/CharacterDetails";
import SpinContainer from "../SpinContainer/SpinContainer";
import StateDescription from "../StateDescription/StateDescription";

const ActionContainer = () => {
  const [action, setAction] = useState<string | number>(
    "Roll Spin for get action",
  );
  const [countOfTurn, setCountOfTurn] = useState<string | number>(0);

  return (
    <>
      <SpinContainer setAction={setAction} setCountOfTurn={setCountOfTurn} />
      <StateDescription action={action} countOfTurn={countOfTurn} />
      <CharacterDetails />
    </>
  );
};

export default ActionContainer;
