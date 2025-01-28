"use client";

// Imports
import { useState, useEffect } from "react";
import classNames from "classnames";
import styles from "./HeroSection.module.css";
// Components
import AnimationRiseUp from "../animations/AnimationRiseUp";
import ImageShowcase from "@/components/ImageShowcase";

const AnimatedText = ({ text, handleClick, baseDelay = 0, className }) => {
  const additionalClass = text !== "VISUAL" ? styles.titleAdjusted : "";
  return (
    <div
      className={classNames("row", className, additionalClass)}
      onClick={handleClick}
    >
      {text.split("").map((letter, index) => (
        <AnimationRiseUp
          key={`${text}-${index}`}
          className={letter === "/" ? styles.slash : styles.letter}
          duration={1.4}
          delay={baseDelay + index * 0.1}
        >
          {letter}
        </AnimationRiseUp>
      ))}
    </div>
  );
};
export default function HeroSection() {
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
    setSubText((prevText) =>
      prevText === "DESIGN/R" ? "ENTHUSIAST" : "DESIGN/R"
    );
  };

  return (
    <>
      <div className={classNames("grid-8-column", styles.pageContainer)}>
        <div className={classNames("col-start-1 col-span-full", styles.title)}>
          <div className={classNames("col", styles.descriptionContainer)}>
            <AnimationRiseUp className={styles.descriptionText}>
              DESIGN WITH PURPOSE—
            </AnimationRiseUp>
            <AnimationRiseUp className={styles.descriptionText} delay={0.2}>
              BRIDGING VISUALS WITH MEANING AS A
            </AnimationRiseUp>
          </div>
          <div className={classNames("col", styles.titleText)}>
            <AnimatedText
              text={mainText}
              handleClick={handleMainTextClick}
              className={styles.titleLetter}
            />
            <AnimatedText
              text={subText}
              handleClick={handleSubTextClick}
              baseDelay={isFirstLoad ? 0.8 : 0}
              className={styles.titleLetter}
            />
          </div>
        </div>
      </div>
      <div className={classNames(styles.showcaseContainer, "flex grid-8-column")}>
        <div className={classNames(styles.imageContainer, "col-start-5 col-span-3")}>
          <ImageShowcase />
        </div>
      </div>
    </>
  );
}
