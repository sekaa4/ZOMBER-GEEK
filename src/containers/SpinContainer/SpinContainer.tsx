import { useContext, useState } from "react";
import RollSpin from "../../components/rollSpin/RollSpin";
import CharacterFastest from "../../entities/Character/CharacterFastest";
import StandardGame from "../../entities/Game/StandardGame";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { Character } from "../../models/Character.type";
import { gameSlice } from "../../store/reducers/GameSlice";
import randomNumber from "../../utils/randomNumber";
import ActionContext from "../ActionContainer/ActionContext";
import delayTime from "./constants";

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

  const dispatch = useAppDispatch();
  const { game } = useAppSelector((state) => state.gameReducer);
  const newGame = structuredClone(game) as StandardGame;

  let deg = 0;
  let res: (string | number)[];

  const randomAction = (actions: (string | number)[][]) => {
    const min = 1;
    const max = 6;
    const number = randomNumber(min, max);

    return actions[number - 1];
  };

  const rotateSpin = () => {
    newGame.rollDisabled = true;
    dispatch(gameSlice.actions.writeGameState(newGame as StandardGame));

    const min = 4;
    const max = 15;

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
      if (game) {
        const updateGame = structuredClone(game) as StandardGame;
        const curCharacter = updateGame.currentCharacter as Character;
        setActionHandler(res[1] as string);
        setCountOfTurnHandler(res[0]);
        curCharacter.stage = "action";
        curCharacter.countOfTurns = res[0] as number;
        if (curCharacter instanceof CharacterFastest) {
          curCharacter.countOfTurns += 1;
        }

        updateGame.rollDisabled = true;
        dispatch(gameSlice.actions.writeGameState(updateGame));
      }
    }, delayTime);
  };

  return (
    <div>
      <RollSpin rotate={rotate} rotateSpin={rotateSpin} />
    </div>
  );
};

export default SpinContainer;
