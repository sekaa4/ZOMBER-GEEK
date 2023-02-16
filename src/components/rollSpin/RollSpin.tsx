import cls from "./RollSpin.module.scss";
import StateButton from "./StateButton.type";

interface RollSpinProps {
  rotate: number;
  stateButton: StateButton;
  rotateSpin(): void;
  changeStatusButton(): void;
}

const RollSpin = (props: RollSpinProps) => {
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
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
};

export default RollSpin;
