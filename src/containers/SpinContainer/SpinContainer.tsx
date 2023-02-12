import { useState } from "react";
import RollSpin from "../../components/roll-spin/RollSpin";
import StateButton from "../../components/roll-spin/StateButton.type";
import randomNumber from "../../utils/randomNumber";

const actionsArr = [
  [1, "teeth"],
  [2, "runner"],
  [3, "mellee weapon"],
  [4, "firearm"],
  [1, "teeth"],
  [2, "runner"],
];

interface SpinContainerProps {
  setAction(param: string | number): void;
  setCountOfTurn(param: string | number): void;
}

const SpinContainer = (props: SpinContainerProps) => {
  const { setAction, setCountOfTurn } = props;
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
    setAction("Wait result...");
    setCountOfTurn("Wait result...");
    setTimeout(() => {
      setAction(res[1]);
      setCountOfTurn(res[0]);
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
