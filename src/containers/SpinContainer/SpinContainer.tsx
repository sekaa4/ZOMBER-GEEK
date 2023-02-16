import { useContext, useState } from "react";
import RollSpin from "../../components/rollSpin/RollSpin";
import StateButton from "../../components/rollSpin/StateButton.type";
import randomNumber from "../../utils/randomNumber";
import ActionContext from "../ActionContainer/ActionContext";

const actionsArr = [
  [1, "teeth"],
  [2, "runner"],
  [3, "mellee weapon"],
  [4, "firearm"],
  [1, "teeth"],
  [2, "runner"],
];

const SpinContainer = () => {
  const { setActionHandler, setCountOfTurnHandler } = useContext(ActionContext);
  const [rotate, setRotate] = useState(0);
  const initStateButton: StateButton = {
    disabled: false,
    userSelect: true,
  };

  const [stateButton, setStateButton] = useState(initStateButton);

  let deg = 0;
  let res: (string | number)[];

  const randomAction = (actions: (string | number)[][]) => {
    const min = 1;
    const max = 6;
    const number = randomNumber(min, max);

    return actions[number - 1];
  };

  const rotateSpin = () => {
    const min = 4;
    const max = 15;
    const newStateButton: StateButton = {
      disabled: true,
      userSelect: false,
    };

    setStateButton(newStateButton);
    const randomNum = randomNumber(min, max);
    res = randomAction(actionsArr);

    switch (res[0]) {
      case 1: {
        deg = 360 * randomNum + 82;
        break;
      }
      case 2: {
        deg = 360 * randomNum + 260;
        break;
      }
      case 3: {
        deg = 360 * randomNum + 170;
        break;
      }
      case 4: {
        deg = 360 * randomNum - 5;
        break;
      }
      default:
        break;
    }

    setRotate(deg);
    setActionHandler("Wait result...");
    setCountOfTurnHandler("Wait result...");
    setTimeout(() => {
      setActionHandler(res[1] as string);
      setCountOfTurnHandler(res[0]);
    }, 3000);
  };

  const changeStatusButton = () => {
    const newStateButton: StateButton = {
      disabled: false,
      userSelect: true,
    };
    setStateButton(newStateButton);
  };

  return (
    <div>
      <RollSpin
        rotate={rotate}
        stateButton={stateButton}
        rotateSpin={rotateSpin}
        changeStatusButton={changeStatusButton}
      />
    </div>
  );
};

export default SpinContainer;
