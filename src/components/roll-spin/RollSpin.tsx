import { useEffect, useRef, useState } from "react";
import cls from "./RollSpin.module.scss";

// type OptionObject = (string | number)[];

const RollSpin = () => {
  // const [number, setNumber] = useState(0);
  const [rotate, setRotate] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [action, setAction] = useState<string | number>(
    "Roll Spin for get action",
  );
  const [countOfTurn, setCountOfTurn] = useState<string | number>(0);
  const spinner = useRef<HTMLDivElement>(null);

  const stringArr = [
    [1, "teeth"],
    [2, "runner"],
    [3, "mellee weapon"],
    [4, "firearm"],
    [1, "teeth"],
    [2, "runner"],
  ];

  type Option = "number" | "action";

  function randomNumber(min: number, max: number) {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  function randomAction(): (string | number)[] {
    const min = 1;
    const max = 6;
    const res = randomNumber(min, max);

    return stringArr[res - 1];
  }

  let deg = 0;
  let res: (string | number)[];
  const randomFunction = () => {
    setDisabled(true);
    res = randomAction();
    const min = 4;
    const max = 15;
    const randomNum = randomNumber(min, max);

    console.log(res);
    switch (res[0]) {
      case 1: {
        deg = 360 * randomNum + 190;
        console.log("1:", deg);
        break;
      }
      case 2: {
        deg = 360 * randomNum;
        console.log("2:", deg);
        break;
      }
      case 3: {
        deg = 360 * randomNum + 280;
        console.log("3:", deg);
        break;
      }
      case 4: {
        deg = 360 * randomNum + 100;
        console.log("4:", deg);
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
    setDisabled(false);
  };
  return (
    <div className={cls.mainbox}>
      <button
        type="button"
        className={cls.spin}
        onClick={randomFunction}
        disabled={disabled}
      >
        spin
      </button>
      <span className={cls.arrow} />
      <div
        className={cls.box}
        style={{ transform: `rotate(${rotate}deg)` }}
        onTransitionEnd={changeStatusButton}
        ref={spinner}
      >
        <span className={[cls.segment, cls["segment-one"]].join(" ")}>4</span>
        <span className={[cls.segment, cls["segment-two"]].join(" ")}>2</span>
        <span className={[cls.segment, cls["segment-three"]].join(" ")}>3</span>
        <span className={[cls.segment, cls["segment-four"]].join(" ")}>1</span>
      </div>
      <div>Action: {action}</div>
      <div>Number: {countOfTurn}</div>
    </div>
  );
};

export default RollSpin;
