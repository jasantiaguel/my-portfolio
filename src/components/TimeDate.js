"use client";

import { useState, useEffect } from "react";
import styles from "./TimeDate.module.css";

export default function TimeDate() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    const options = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
      timeZone: 'America/Los_Angeles' // PST
    };
    const timeString = date.toLocaleTimeString('en-US', options);
    const timeZoneAbbr = 'PST';
    return `${timeString} ${timeZoneAbbr}`;
  };

  return (
    <div className="time stacked">
      <div className={`${styles.text} stacked-top`} suppressHydrationWarning>GREATER VANCOUVER</div>
      <div className={styles.text} suppressHydrationWarning>{formatTime(currentTime)}</div>
    </div>
  );
}