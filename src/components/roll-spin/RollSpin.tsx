import cls from "./RollSpin.module.scss";
import StateButton from "./StateButton.type";

// type OptionObject = (string | number)[];
interface RollSpinProps {
  rotate: number;
  stateButton: StateButton;
  rotateSpin(): void;
  changeStatusButton(): void;
}

const RollSpin = (props: RollSpinProps) => {
  // const [number, setNumber] = useState(0);
  const { rotate, stateButton, rotateSpin, changeStatusButton } = props;

  return (
    <div className={cls.mainbox}>
      <button
        type="button"
        className={[cls.spin, stateButton.userSelect ? "" : cls.disabled].join(
          " ",
        )}
        onClick={rotateSpin}
        disabled={stateButton.disabled}
      >
        spin
      </button>
      <span className={cls.arrow} />
      <div
        className={cls.box}
        style={{ transform: `rotate(${rotate}deg)` }}
        onTransitionEnd={changeStatusButton}
      >
        {/* <span className={[cls.segment, cls["segment-one"]].join(" ")} />
        <span className={[cls.segment, cls["segment-two"]].join(" ")} />
        <span className={[cls.segment, cls["segment-three"]].join(" ")} />
        <span className={[cls.segment, cls["segment-four"]].join(" ")} /> */}
        <span />
        <span />
        <span />
        <span />
      </div>
      {/* <div>Action: {action}</div>
      <div>Number: {countOfTurn}</div> */}
    </div>
  );
};

export default RollSpin;
