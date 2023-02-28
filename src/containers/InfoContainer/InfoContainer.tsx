import { useRef, useState, useMemo, useEffect } from "react";
import Header from "../../components/boardPageHeader/Header";
import CharacterCard from "../../components/characterCard/CharacterCard";
import { useAppSelector } from "../../hooks/redux";
import { Character, CharacterName } from "../../models/Character.type";
import BoardContext from "../../pages/Board/BoardContext";
import ActionContainer from "../ActionContainer/ActionContainer";
import classes from "./InfoContainer.module.scss";

const InfoContainer = () => {
  const pause = useRef<HTMLButtonElement>(null);
  const resume = useRef<HTMLButtonElement>(null);
  const { game } = useAppSelector((state) => state.gameReducer);
  const characterList = game?.usersNamesList as CharacterName[];

  const [time, setTime] = useState({
    time: 0,
    timeString: `00:00:00`,
  });

  const [timerId, setTimerId] = useState<ReturnType<typeof setInterval>>();

  const defaultProps = useMemo(
    () => ({
      time,
    }),
    [time],
  );

  const stopTimer = () => {
    if (pause.current && resume.current) {
      pause.current.disabled = true;
      resume.current.disabled = false;
    }

    clearInterval(timerId);
  };

  const startTimer = () => {
    if (pause.current && resume.current) {
      pause.current.disabled = false;
      resume.current.disabled = true;
    }
    const id = setInterval(() => {
      setTime((oldTime) => {
        const countTime = oldTime.time + 1;
        const seconds = `0${countTime % 60}`.slice(-2);

        const minutes = `0${Math.floor(countTime / 60)}`.slice(-2);
        const hours = `0${Math.floor(countTime / 3600)}`.slice(-2);

        const newTime = {
          time: countTime,
          timeString: `${hours}:${minutes}:${seconds}`,
        };

        return newTime;
      });
    }, 1000);

    setTimerId(id);
  };

  useEffect(() => {
    startTimer();
  }, []);

  return (
    <BoardContext.Provider value={defaultProps}>
      <div className={classes.boardPageInfo}>
        <Header />
        <div className={classes.boardPageSpinner}>
          <ActionContainer />
        </div>
        <div className={classes.boardPageCharactersContainer}>
          {characterList.map((characterName) => {
            const currentCharacter = game?.usersCharacters[
              characterName
            ] as Character;
            const classesNames: string[] = [classes.default];
            if (currentCharacter?.active) {
              classesNames.push(classes.active);
            }
            if (currentCharacter?.health === 0) {
              classesNames.push(classes.dead);
            }

            return (
              <CharacterCard
                character={currentCharacter}
                classNames={classesNames}
              />
            );
          })}
        </div>
        <div className={classes.buttons}>
          <button
            type="button"
            className={classes.button}
            onClick={stopTimer}
            ref={pause}
          >
            Pause
          </button>
          <button
            type="button"
            className={classes.button}
            onClick={startTimer}
            ref={resume}
          >
            Continue
          </button>
        </div>
      </div>
    </BoardContext.Provider>
  );
};

export default InfoContainer;
