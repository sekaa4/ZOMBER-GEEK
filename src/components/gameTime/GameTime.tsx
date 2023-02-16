import { useEffect, useState } from "react";

const GameTime = () => {
  const [time, setTime] = useState({
    time: 0,
    timeString: `00:00:00`,
  });
  const [timerId, setTimerId] = useState<ReturnType<typeof setInterval>>();

  useEffect(() => {
    const id = setInterval(() => {
      setTime((oldTime: any) => {
        const seconds = `0${oldTime.time % 60}`.slice(-2);

        const minutes = `0${Math.floor(oldTime.time / 60)}`.slice(-2);
        const hours = `0${Math.floor(oldTime.time / 3600)}`.slice(-2);
        const countTime = oldTime.time + 1;

        const newTime = {
          time: countTime,
          timeString: `${hours}:${minutes}:${seconds}`,
        };

        return newTime;
      });
    }, 1000);

    setTimerId(id);
  }, [setTime]);

  setTimeout(() => clearInterval(timerId), 180000);

  return <div>GameTime: {time.timeString}</div>;
};

export default GameTime;
