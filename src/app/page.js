"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Observer } from "gsap/Observer";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import classNames from "classnames";
import AnimationRiseUp from "../animations/AnimationRiseUp";

gsap.registerPlugin(Observer);

const sections = [
  {
    src: "/images/portrait_01.png",
    title: "DIGITAL",
    secondTitle: "DESIGN/R",
    description: "Design with purpose—",
    secondDescription: "Bridging visuals with meaning as a",
  },
  {
    src: "/images/poster_mockup_01.png",
    title: "POSTER",
    secondTitle: "DESIGN",
    description: "This is the description for Poster Mockup 01.",
    secondDescription: "Exploring the depth of design.",
  },
  {
    src: "/images/magazine_mockup_01.png",
    title: "MAGAZINE",
    secondTitle: "EDITORIAL",
    description: "This is the description for Magazine Mockup 01.",
    secondDescription: "A journey through print and media.",
  },
  {
    src: "/images/poster_mockup_01.png",
    title: "VISUAL",
    secondTitle: "ENTHUSIAST",
    description: "This is the description for Poster Mockup 02.",
    secondDescription: "Emphasizing composition and balance.",
  },
  {
    src: "/images/portrait_01.png",
    title: "PORTRAIT",
    secondTitle: "FOCUSED",
    description: "This is the description for Portrait 02.",
    secondDescription: "Capturing emotion in every frame.",
  },
];

const AnimatedText = ({ text, handleClick, baseDelay = 0, className }) => {
  return (
    <div className={classNames("row", className)} onClick={handleClick}>
      {text.split("").map((letter, index) => (
        <AnimationRiseUp
          key={`${text}-${index}`}
          className={styles.letter}
          duration={1.4}
          delay={baseDelay + index * 0.05}
        >
          {letter}
        </AnimationRiseUp>
      ))}
    </div>
  );
};

export default function Home() {
  const containerRef = useRef(null);
  const sectionRefs = useRef([]);
  let currentIndex = -1;
  let animating = false;
  const wrap = gsap.utils.wrap(0, sections.length);

  const [mainText, setMainText] = useState(sections[0].title);
  const [subText, setSubText] = useState(sections[0].secondTitle);
  const [description, setDescription] = useState(sections[0].description);
  const [secondDescription, setSecondDescription] = useState(
    sections[0].secondDescription
  );
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [descKey, setDescKey] = useState(0);

  useEffect(() => {
    const observer = Observer.create({
      type: "wheel,touch,pointer",
      wheelSpeed: -1,
      onDown: () => !animating && gotoSection(currentIndex - 1, -1),
      onUp: () => !animating && gotoSection(currentIndex + 1, 1),
      tolerance: 10,
      preventDefault: true,
    });

    gotoSection(0, 1);
    setIsFirstLoad(false);
    return () => observer.kill();
  }, []);

  function gotoSection(index, direction) {
    index = wrap(index);
    animating = true;
    let fromTop = direction === -1;

    const tl = gsap.timeline({
      defaults: { duration: 1.6, ease: "power2.out" },
      onComplete: () => {
        animating = false;
      },
    });

    if (currentIndex >= 0) {
      gsap.set(sectionRefs.current[currentIndex], { zIndex: 1 });
    }

    gsap.set(sectionRefs.current[index], { zIndex: 2 });

    tl.fromTo(
      sectionRefs.current[index],
      { clipPath: fromTop ? "inset(0% 0% 100% 0%)" : "inset(100% 0% 0% 0%)" },
      { clipPath: "inset(0% 0% 0% 0%)" }
    ).set(
      sectionRefs.current[currentIndex],
      { clipPath: "inset(100% 0% 0% 0%)" },
      "+=0.2"
    );

    // Update text content dynamically
    setMainText(sections[index].title);
    setSubText(sections[index].secondTitle);
    setDescription(sections[index].description);
    setSecondDescription(sections[index].secondDescription);

    // Force reanimation of both descriptions
    setDescKey((prevKey) => prevKey + 1);

    currentIndex = index;
  }

  const handleMainTextClick = () => {
    if (mainText === "DIGITAL" || mainText === "VISUAL") {
      setMainText(mainText === "DIGITAL" ? "VISUAL" : "DIGITAL");
    }
  };

  const handleSubTextClick = () => {
    if (subText === "DESIGN/R" || subText === "ENTHUSIAST") {
      setSubText(subText === "DESIGN/R" ? "ENTHUSIAST" : "DESIGN/R");
    }
  };

  return (
    <main
      ref={containerRef}
      className={classNames(
        styles.main,
        "relative w-full h-screen overflow-hidden"
      )}
    >
      {sections.map((section, index) => (
        <div
          key={index}
          ref={(el) => (sectionRefs.current[index] = el)}
          className={classNames(
            styles.container,
            "absolute top-0 w-full h-full grid-8-column px-16"
          )}
          style={{
            clipPath:
              index === 0 ? "inset(0% 0% 0% 0%)" : "inset(100% 0% 0% 0%)",
          }}
        >
          <div className="col-span-3 col-start-5 flex items-center justify-center">
            <Image
              className={styles.image}
              src={section.src}
              alt={`Section ${index + 1}`}
              width={1000}
              height={1000}
            />
          </div>
          <div className={classNames(styles.leftContainer, "absolute top-0 h-full col-span-4 col-start-1 flex flex-col justify-center")}>
            <div className={classNames("col-span-3", styles.descriptionContainer)}>
              <AnimationRiseUp
                key={`desc-${descKey}`}
                className={styles.descriptionText}
              >
                <p>{description}</p>
              </AnimationRiseUp>
              <AnimationRiseUp
                key={`desc-second-${descKey}`}
                className={styles.descriptionText}
                delay={0.2}
              >
                <p>{secondDescription}</p>
              </AnimationRiseUp>
            </div>
            <div className={classNames(styles.titleContainer, "absolute bottom-0 mb-7")}>
            <AnimatedText
                text={mainText}
                handleClick={handleMainTextClick}
                baseDelay={isFirstLoad ? 0 : 0}
                className={styles.titleLetter}
              />
              <AnimatedText
                text={subText}
                handleClick={handleSubTextClick}
                baseDelay={isFirstLoad ? 0.2 : 0.2}
                className={styles.titleLetter}
              />
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}
