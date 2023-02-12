import CharacterDetails from "../../components/character-details/CharacterDetails";
import SpinContainer from "../SpinContainer/SpinContainer";
import StateDescription from "../StateDescription/StateDescription";

const ActionContainer = () => {
  return (
    <>
      <SpinContainer />
      <StateDescription />
      <CharacterDetails />
    </>
  );
};

export default ActionContainer;
