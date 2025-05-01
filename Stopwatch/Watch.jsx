import React, { useState, useEffect } from 'react';
import "./Watch.css"

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => setTime(t => t + 10), 10);
    }
    return () => clearInterval(timer);
  }, [running]);

  const format = (t) => {
    const h = String(Math.floor(t / 3600000)).padStart(2, '0');
    const m = String(Math.floor((t % 3600000) / 60000)).padStart(2, '0');
    const s = String(Math.floor((t % 60000) / 1000)).padStart(2, '0');
    const ms = String(Math.floor((t % 1000) / 10)).padStart(2, '0');
    return h + ":" + m + ":" + s + ":" + ms;

  };

  return (
    <div>
      <h2 id='stop'>Stopwatch</h2>
      <div className="time">{format(time)}</div>
      <div className="buttons">
        <button className="start" onClick={() => setRunning(true)}>Start</button>
        <button className="stop" onClick={() => setRunning(false)}>Stop</button>
        <button className="reset" onClick={() => { setRunning(false); setTime(0); }}>Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch;
