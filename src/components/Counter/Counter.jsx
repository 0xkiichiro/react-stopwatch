import "./Counter.css";

function Counter() {
  return (
    <div className="stopwatch-container">
      <div id="timerDisplay">
        <p>
          <span id="min">00</span>:<span id="sec">00</span>:
          <span id="ms">00</span>
        </p>
      </div>
      <div className="buttons">
        <button id="start">start</button>
        <button id="reset">reset</button>
      </div>
    </div>
  );
}

export default Counter;
