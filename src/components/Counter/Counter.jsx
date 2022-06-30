import { useEffect, useState } from "react";
import "./Counter.css";

function Counter() {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;
    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <div className="stopwatch-container">
      <div id="timerDisplay">
        <p>
          <span id="min">{"0" + ((time / 60000) % 60).toFixed(0)}</span>:
          <span id="sec">{"0" + ((time / 1000) % 60).toFixed(0)}</span>:
          <span id="ms">{"0" + ((time / 10) % 100)} </span>
        </p>
      </div>
      <div className="buttons">
        {timerOn && (
          <button id="pause" onClick={() => setTimerOn(false)}>
            pause
          </button>
        )}
        {!timerOn && (
          <button id="start" onClick={() => setTimerOn(true)}>
            start
          </button>
        )}
        <button id="reset" onClick={() => setTime(0)}>
          reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
