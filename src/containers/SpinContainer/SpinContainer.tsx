import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import RollSpin from "../../components/rollSpin/RollSpin";
import { KindOfWinObj } from "../../entities/Game/AbstractGame";
import StandardGame from "../../entities/Game/StandardGame";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { Character } from "../../models/Character.type";
import CharacterProps from "../../models/CharacterProps";
import ItemsAndWeaponsNames from "../../models/ItemsAndWeaponsNames";
import Pages from "../../models/Pages";
import { gameSlice } from "../../store/reducers/GameSlice";
import randomNumber from "../../utils/randomNumber";
import ActionContext from "../ActionContainer/ActionContext";
import delayTime from "./constants";

const actionsArr = [
  [1, "teeth"],
  [2, "runner"],
  [3, "crossed swords"],
  [1, "teeth"],
  [4, "crosshairs"],
  [2, "runner"],
];

const SpinContainer = () => {
  const { setActionHandler, setCountOfTurnHandler } = useContext(ActionContext);
  const [rotate, setRotate] = useState(0);
  const navigate = useNavigate();

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
        const curDeg = 360 * randomNum + 82;
        deg = curDeg === rotate ? 360 * randomNumber(min, max) + 82 : curDeg;
        break;
      }
      case 2: {
        const curDeg = 360 * randomNum + 260;
        deg = curDeg === rotate ? 360 * randomNumber(min, max) + 260 : curDeg;
        break;
      }
      case 3: {
        const curDeg = 360 * randomNum + 170;
        deg = curDeg === rotate ? 360 * randomNumber(min, max) + 170 : curDeg;
        break;
      }
      case 4: {
        const curDeg = 360 * randomNum - 5;
        deg = curDeg === rotate ? 360 * randomNumber(min, max) - 5 : curDeg;
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
        const updateGame = structuredClone(newGame) as StandardGame;
        const curCharacter = updateGame.currentCharacter as Character;
        const numb = updateGame?.currentCharacter?.currentPositionId;
        const curCell = updateGame?.board.find((cell) => cell.id === numb);
        const lifeListNames = updateGame.usersNamesLifeList;
        const { health, stage, weapons } = curCharacter;
        updateGame.rollDisabled = true;

        setActionHandler(res[1] as string);
        setCountOfTurnHandler(res[0]);
        curCharacter.countOfTurns = res[0] as number;

        if (curCharacter.name === `${CharacterProps.CharacterNameFastest}`) {
          curCharacter.countOfTurns += 1;
        }

        if (
          curCell &&
          curCell.zombieID &&
          curCell.characterName &&
          stage === "fight"
        ) {
          curCharacter.countOfTurns = 0;
          const holdItems = curCell.holdItemID;
          switch (res[1]) {
            case "teeth": {
              curCharacter.health = health > 0 ? health - 1 : 0;
              alert(`You lost ??1 Hp?? press 'SPIN' again`);
              updateGame.kindOfItems = null;

              if (!curCharacter.health) {
                curCharacter.stage = "death";
                updateGame.countLifeCharacters -= 1;

                if (updateGame.winItems[curCharacter.name]) {
                  curCharacter.items[ItemsAndWeaponsNames.GASOLINE] = 0;
                  curCharacter.items[ItemsAndWeaponsNames.KEYS] = 0;
                  curCell.holdItemID = ItemsAndWeaponsNames.GASOLINE;
                  const { dropItems } = updateGame;
                  const curDropItems = updateGame.winItems[
                    curCharacter.name
                  ] as KindOfWinObj[];
                  updateGame.dropItems = dropItems
                    ? [...dropItems, ...curDropItems]
                    : curDropItems;

                  delete updateGame.winItems[curCharacter.name];
                  updateGame.finishGame = false;
                }

                if (!updateGame.countLifeCharacters) {
                  updateGame.finishGame = true;
                  alert("Game finished, you lost");
                  navigate(Pages.main);
                } else {
                  updateGame.nextCharacter = true;
                  updateGame.usersNamesLifeList = lifeListNames.filter(
                    (name) => name !== curCharacter.name,
                  );
                  alert("You died, press 'End of Turn'");
                }

                curCell.characterName = null;
              } else {
                updateGame.nextCharacter = false;
                updateGame.rollDisabled = false;
              }
              break;
            }
            case "runner": {
              curCharacter.stage = "action";
              updateGame.rollDisabled = false;
              updateGame.kindOfItems = null;
              alert(
                `Roll spin and choose fieldCell for step Character - ${curCharacter.name}`,
              );
              break;
            }
            case "crossed swords": {
              const knife = weapons[ItemsAndWeaponsNames.KNIFES];
              const axes = weapons[ItemsAndWeaponsNames.AXES];
              updateGame.kindOfItems = "melee";

              if (curCell.zombieID !== 1 && (knife || axes)) {
                curCharacter.stage = "finish";
                updateGame.nextCharacter = true;
                curCell.zombieID = null;
                curCell.flipCell = true;
                if (holdItems) {
                  const { dropItems, winItems } = updateGame;
                  dropItems!.forEach((holdItemId) => {
                    curCharacter.items[holdItemId] += 1;
                  });
                  const winItemsCharacter = winItems[curCharacter.name];

                  winItems[curCharacter.name] = winItemsCharacter
                    ? [...winItemsCharacter, ...dropItems!]
                    : dropItems!;
                  if (
                    dropItems?.length === 2 ||
                    Object.values(winItems).flat().length === 2
                  )
                    updateGame.finishGame = true;

                  updateGame.dropItems = null;
                  curCell.holdItemID = null;
                }
                alert(
                  `You use ${
                    knife
                      ? ItemsAndWeaponsNames.KNIFES
                      : ItemsAndWeaponsNames.AXES
                  } and killing zombie press 'End of Turn'`,
                );
              } else if (curCell.zombieID === 1 && (knife || axes)) {
                updateGame.rollDisabled = false;
                alert(`You need use BFG to kill the BOSS, press 'SPIN'`);
              } else {
                updateGame.rollDisabled = false;
                alert(`You need roll again, press 'SPIN'`);
              }

              break;
            }
            case "crosshairs": {
              const crossbows = weapons[ItemsAndWeaponsNames.CROSSBOWS];
              const handguns = weapons[ItemsAndWeaponsNames.HANDGUNS];
              const assaultRifles = weapons[ItemsAndWeaponsNames.ASSAULTRIFLES];
              const shotguns = weapons[ItemsAndWeaponsNames.SHOTGUNS];
              const BFG = weapons[ItemsAndWeaponsNames.BFG];
              if (crossbows || handguns || assaultRifles || shotguns || BFG) {
                alert(
                  `You can use "crosshairs" and killing zombie or press 'SPIN'`,
                );
                updateGame.kindOfItems = "crosshairs";
                updateGame.rollDisabled = false;
              } else {
                updateGame.rollDisabled = false;
                alert(`You need roll again, press 'SPIN'`);
              }
              break;
            }
            default:
              break;
          }
        } else {
          curCharacter.stage = "action";
        }

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
