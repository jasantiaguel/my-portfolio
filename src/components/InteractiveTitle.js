"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./InteractiveTitle.module.css";

export default function InteractiveTitle() {
  const [selectedText, setSelectedText] = useState("INTERACTIVE");

  const handleTextClick = () => {
    setSelectedText((prevText) =>
      prevText === "INTERACTIVE" ? "GRAPHIC" : "INTERACTIVE"
    );
  };

  const textRiseVariants = {
    hidden: { y: "160%", opacity: 1 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className={styles.titleContainer}>
      <div className={styles.mainText}>
        {selectedText === "INTERACTIVE" ? (
          <div className="masking-container">
            <motion.div
              key={selectedText}
              className={styles.interactiveText}
              onClick={handleTextClick}
              initial="hidden"
              animate="visible"
              variants={textRiseVariants}
              transition={{ duration: 1.6, ease: [0.1, 0.8, 0.2, 1] }}
            >
              INTERACTIVE
            </motion.div>
          </div>
        ) : (
          <div className="masking-container">
            <motion.div
              key={selectedText}
              className={styles.graphicText}
              onClick={handleTextClick}
              initial="hidden"
              animate="visible"
              variants={textRiseVariants}
              transition={{
                duration: 1.6,
                ease: [0.1, 0.8, 0.2, 1],
              }}
            >
              GRAPHIC
            </motion.div>
          </div>
        )}
      </div>
      <div className={styles.secondaryText} onClick={handleTextClick}>
        {selectedText === "INTERACTIVE" ? (
          <span className={styles.graphicSecondaryText}>GRAPHIC</span>
        ) : (
          <span className={styles.interactiveSecondaryText}>INTERACTIVE</span>
        )}
      </div>
      <div className={styles.subTextContainer}>
        <p className={styles.designText}>DESIGN</p>
        <span className={styles.slash}>//</span>
        {selectedText === "INTERACTIVE" ? (
          <p className={`${styles.descriptionText} stacked`}>
            Innovative and efficient digital experiences
            <br />
            that leave a memorable impact.
          </p>
        ) : (
          <p className={`${styles.descriptionText} stacked`}>
            Stories told through art—
            <br />
            messages shaped by design.
          </p>
        )}
      </div>
    </div>
  );
}
