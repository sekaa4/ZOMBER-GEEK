import { useAppSelector } from "../../hooks/redux";
import cls from "./RollSpin.module.scss";

interface RollSpinProps {
  rotate: number;
  rotateSpin(): void;
}

const RollSpin = (props: RollSpinProps) => {
  const { rotate, rotateSpin } = props;
  const { game } = useAppSelector((state) => state.gameReducer);
  const isDisabled = game?.rollDisabled as boolean;

  return (
    <div className={cls.mainbox}>
      <button
        type="button"
        className={[cls.spin, isDisabled ? cls.disabled : ""].join(" ")}
        onClick={rotateSpin}
        disabled={isDisabled}
      >
        spin
      </button>
      <span className={cls.arrow} />
      <div className={cls["container-spinner"]}>
        <div
          className={cls.box}
          style={{ transform: `rotate(${rotate}deg)` }}
        />
      </div>
    </div>
  );
};

export default RollSpin;
