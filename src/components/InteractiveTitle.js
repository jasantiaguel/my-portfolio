"use client";

// Imports
import { useState } from "react";
import { motion } from "framer-motion";
import classNames from "classnames";
import styles from "./InteractiveTitle.module.css";
// Components
import AnimationRiseUp from "../animations/AnimationRiseUp";

const BoldText = ({ children }) => {
  return <span className={styles.boldText}>{children}</span>;
};

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
    <div className={classNames("grid-8-column", styles.titleContainer)}>
      <div className="col-start-2 col-span-full">
        <div className={styles.mainText}>
          {selectedText === "INTERACTIVE" ? (
            <AnimationRiseUp
              key={selectedText}
              onClick={handleTextClick}
              className={styles.interactiveText}
              duration={1.8}
            >
              INTERACTIVE
            </AnimationRiseUp>
          ) : (
            <AnimationRiseUp
              key={selectedText}
              onClick={handleTextClick}
              className={styles.graphicText}
              duration={1.8}
            >
              GR<span className={styles.cursiveText}>A</span>PHIC
            </AnimationRiseUp>
          )}
        </div>
        <div className={styles.secondaryText} onClick={handleTextClick}>
          {selectedText === "INTERACTIVE" ? (
            <AnimationRiseUp
              key={selectedText}
              className={styles.graphicSecondaryText}
              duration={1.8}
              delay={0.8}
            >
              GR<span className={styles.cursiveTextSecondary}>A</span>PHIC
            </AnimationRiseUp>
          ) : (
            <AnimationRiseUp
              key={selectedText}
              className={styles.interactiveSecondaryText}
              duration={1.8}
              delay={0.8}
            >
              INTERACTIVE
            </AnimationRiseUp>
          )}
        </div>
        <div className={classNames(styles.subTextContainer, "row")}>
          <AnimationRiseUp
            className={styles.designText}
            delay={0.2}
            duration={1.6}
          >
            DESIGN
          </AnimationRiseUp>
          <AnimationRiseUp className={styles.slash} delay={0.4} duration={1.6}>
            //
          </AnimationRiseUp>
          {selectedText === "INTERACTIVE" ? (
            <div className="stacked-desc">
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
                    delay: 0.6,
                  }}
                >
                  <BoldText>Innovative</BoldText> and{" "}
                  <BoldText>efficient</BoldText> digital experiences
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
                    delay: 0.7,
                  }}
                >
                  that leave a <BoldText>memorable</BoldText> impact.
                </motion.div>
              </div>
            </div>
          ) : (
            <div className="stacked-desc">
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
                    delay: 0.6,
                  }}
                >
                  <BoldText>Stories</BoldText> told through art—
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
                    delay: 0.7,
                  }}
                >
                  <BoldText>messages</BoldText> shaped by design.
                </motion.div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
