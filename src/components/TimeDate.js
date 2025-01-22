"use client";

import { useState, useEffect } from "react";
import styles from "./TimeDate.module.css";
// Components
import AnimationRiseUp from "../animations/AnimationRiseUp";

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
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone: "America/Los_Angeles", // PST
    };
    const timeString = date.toLocaleTimeString("en-US", options);
    const timeZoneAbbr = "PST";
    return `${timeString} ${timeZoneAbbr}`;
  };

  const textRiseVariants = {
    hidden: { y: "160%", opacity: 1 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="time stacked">
      <div className="masking-container">
        <AnimationRiseUp className={styles.navText} delay={0.4}>
          <div
            className={`${styles.text} stacked-top`}
            suppressHydrationWarning
          >
            GREATER VANCOUVER
          </div>
        </AnimationRiseUp>
      </div>
      <div className="masking-container">
        <AnimationRiseUp className={styles.navText} delay={0.5}>
          <div className={styles.text} suppressHydrationWarning>
            {formatTime(currentTime)}
          </div>
        </AnimationRiseUp>
      </div>
    </div>
  );
}
