import { useEffect, useState } from "react";
import NoSleep from "@uriopass/nosleep.js";
import "./clock.css";

const noSleep = new NoSleep();

export default function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(updateClockTime);
    noSleep.enable();
    return () => {
      clearInterval(interval);
      noSleep.disable();
    };
  }, []);

  const updateClockTime = () => {
    setTime(new Date().toLocaleTimeString());
  };

  return (
    <div className="clock">
      <p>{time}</p>
      <span className="placeholder">88:88:88</span>
    </div>
  );
}
