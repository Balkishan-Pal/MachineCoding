import React, { useState, useEffect } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timeout = null;
    if (isRunning) {
      timeout = setTimeout(() => {
        setTime((prev) => prev + 10);
      }, 10);
    } else if (!isRunning && !time) {
      return () => clearTimeout(timeout);
    }
    return () => clearTimeout(timeout);
  }, [time, isRunning]);

  const handleStartStop = () => {
    setIsRunning((prev) => !prev);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (time) => {
    const getMilliseconds = `0${(time % 1000) / 10}`.slice(-2);
    const seconds = Math.floor((time / 1000) % 60);
    const getSeconds = `0${seconds}`.slice(-2);
    const minutes = Math.floor((time / 60000) % 60);
    const getMinutes = `0${minutes}`.slice(-2);

    const hours = Math.floor(time / 3600000);
    const getHours = `0${hours}`.slice(-2);

    return `${getHours}:${getMinutes}:${getSeconds}:${getMilliseconds}`;
  };

  return (
    <div>
      <div>{formatTime(time)}</div>
      <button onClick={handleStartStop}>{isRunning ? "Stop" : "Start"}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Stopwatch;
