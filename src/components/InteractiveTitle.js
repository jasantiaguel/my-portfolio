"use client";

// Imports
import { useState , useEffect } from "react";
import classNames from "classnames";
import styles from "./InteractiveTitle.module.css";
// Components
import AnimationRiseUp from "../animations/AnimationRiseUp";

const AnimatedText = ({ text, handleClick, baseDelay = 0, className }) => {
  return (
    <div className={classNames("row", className)} onClick={handleClick}>
      {text.split("").map((letter, index) => (
        <AnimationRiseUp
          key={`${text}-${index}`}
          className={letter === "/" ? styles.slash : styles.letter}
          duration={1.6}
          delay={baseDelay + index * 0.1}
        >
          {letter}
        </AnimationRiseUp>
      ))}
    </div>
  );
};

export default function InteractiveTitle() {
  const [mainText, setMainText] = useState("DIGITAL");
  const [subText, setSubText] = useState("DESIGN/R");
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    setIsFirstLoad(false);
  }, []);

  const handleMainTextClick = () => {
    setMainText((prevText) => (prevText === "DIGITAL" ? "VISUAL" : "DIGITAL"));
  };

  const handleSubTextClick = () => {
    setSubText((prevText) => (prevText === "DESIGN/R" ? "ENTHUSIAST" : "DESIGN/R"));
  };

  return (
    <div className={classNames("grid-8-column", styles.titleContainer)}>
      <div className={classNames("col-start-1 col-span-full", styles.title)}>
        <div className={classNames("col", styles.titleText)}>
          <AnimatedText
            text={mainText}
            handleClick={handleMainTextClick}
            className={styles.text}
          />
          <AnimatedText
            text={subText}
            handleClick={handleSubTextClick}
            baseDelay={isFirstLoad ? 0.8 : 0}
            className={styles.text}
          />
        </div>
      </div>
    </div>
  );
}