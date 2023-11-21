import { useEffect, useState } from "react";
import "./clock.css";

export default function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(updateClockTime);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const updateClockTime = () => {
    setTime(new Date().toLocaleTimeString());
  };

  return (
    <div className="clock">
      <p>{time}</p>
    </div>
  );
}
