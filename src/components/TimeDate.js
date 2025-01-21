"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
        <motion.div
          className={styles.navText}
          initial="hidden"
          animate="visible"
          variants={textRiseVariants}
          transition={{
            duration: 1.6,
            ease: [0.1, 0.8, 0.2, 1],
            delay: 0.4,
          }}
        >
          <div
            className={`${styles.text} stacked-top`}
            suppressHydrationWarning
          >
            GREATER VANCOUVER
          </div>
        </motion.div>
      </div>
      <div className="masking-container">
        <motion.div
          className={styles.navText}
          initial="hidden"
          animate="visible"
          variants={textRiseVariants}
          transition={{
            duration: 1.6,
            ease: [0.1, 0.8, 0.2, 1],
            delay: 0.5,
          }}
        >
          <div className={styles.text} suppressHydrationWarning>
            {formatTime(currentTime)}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
