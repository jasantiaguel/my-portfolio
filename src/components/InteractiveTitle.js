"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import classNames from "classnames";
import styles from "./InteractiveTitle.module.css";
// Components
import AnimationRiseUp from "../animations/AnimationRiseUp";

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
          <AnimationRiseUp
            key={selectedText}
            onClick={handleTextClick}
            className={styles.interactiveText}
          >
            INTERACTIVE
          </AnimationRiseUp>
        ) : (
          <AnimationRiseUp
            key={selectedText}
            onClick={handleTextClick}
            className={styles.graphicText}
          >
            GRAPHIC
          </AnimationRiseUp>
        )}
      </div>
      <div className={styles.secondaryText} onClick={handleTextClick}>
        {selectedText === "INTERACTIVE" ? (
          <AnimationRiseUp
            key={selectedText}
            className={styles.graphicSecondaryText}
            delay={0.3}
          >
            GRAPHIC
          </AnimationRiseUp>
        ) : (
          <AnimationRiseUp
            key={selectedText}
            className={styles.interactiveSecondaryText}
            delay={0.3}
          >
            INTERACTIVE
          </AnimationRiseUp>
        )}
      </div>
      <div className={styles.subTextContainer}>
        <AnimationRiseUp className={styles.designText} delay={0.1}>
          DESIGN
        </AnimationRiseUp>
        <AnimationRiseUp className={styles.slash} delay={0.2}>
          //
        </AnimationRiseUp>
        {selectedText === "INTERACTIVE" ? (
          <div className="stacked">
            <div className="masking-container">
              <motion.div
                key={selectedText}
                className={styles.descriptionText}
                initial="hidden"
                animate="visible"
                variants={textRiseVariants}
                transition={{
                  duration: 1.6,
                  ease: [0.1, 0.8, 0.2, 1],
                  delay: 0.3,
                }}
              >
                Innovative and efficient digital experiences
              </motion.div>
            </div>
            <div className="masking-container">
              <motion.div
                key={selectedText}
                className={styles.descriptionText}
                initial="hidden"
                animate="visible"
                variants={textRiseVariants}
                transition={{
                  duration: 1.6,
                  ease: [0.1, 0.8, 0.2, 1],
                  delay: 0.4,
                }}
              >
                that leave a memorable impact.
              </motion.div>
            </div>
          </div>
        ) : (
          <div className="stacked">
            <div className="masking-container">
              <motion.div
                key={selectedText}
                className={styles.descriptionText}
                initial="hidden"
                animate="visible"
                variants={textRiseVariants}
                transition={{
                  duration: 1.6,
                  ease: [0.1, 0.8, 0.2, 1],
                  delay: 0.3,
                }}
              >
                Stories told through art—
              </motion.div>
            </div>
            <div className="masking-container">
              <motion.div
                key={selectedText}
                className={styles.descriptionText}
                initial="hidden"
                animate="visible"
                variants={textRiseVariants}
                transition={{
                  duration: 1.6,
                  ease: [0.1, 0.8, 0.2, 1],
                  delay: 0.4,
                }}
              >
                messages shaped by design.
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
