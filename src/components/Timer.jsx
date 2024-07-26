import { useEffect, useState } from "react";

const Timer = ({ timeout, onTimeout, mode }) => {
  const [remainingTime, setRemainingTimer] = useState(timeout);

  useEffect(() => {
    console.log("timeout");
    const timer = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(timer);
    }
  }, [timeout, onTimeout]);

  useEffect(() => {
    console.log("interval ");

    const interval = setInterval(() => {
      setRemainingTimer((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    }
  }, []);

  return <progress id="question-time" value={remainingTime} max={timeout} className={mode} />
}

export default Timer;