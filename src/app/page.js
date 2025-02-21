"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
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
    description: [
      {
        header: "Jonathan Andrew",
        body: "// Design to express, connect, and inspire.",
      },
      { header: "", body: "" },
    ],
  },
  {
    src: "/images/mobile_mockup_02.png",
    title: "AETHER",
    secondTitle: "",
    description: [
      {
        header: "Project Type:",
        body: "Mobile Application helping caregivers simplify\ntheir form-filling processes.",
      },
      {
        header: "Involvement (Team):",
        body: "- Research & Ideation\n- Wireframing & Prototyping\n- UX/UI Design & Development",
      },
      {
        header: "Tools Used:",
        body: "- Figma\n- Visual Studio Code\n- React / Next.js Framework",
      },
      { header: "Timeline:", body: "Sep—Dec 2024" },
      { header: "", body: "", button: true },
    ],
  },
  {
    src: "/images/poster_mockup_02.png",
    title: "RECKLESS",
    secondTitle: "",
    description: [
      {
        header: "Project Type:",
        body: "Poster Graphic for a dynamic composition\nusing diverse editing techniques.",
      },
      {
        header: "Involvement (Solo):",
        body: "- Art Direction & Concept\n- Graphical Editing",
      },
      {
        header: "Tools Used:",
        body: "- Adobe Photoshop 2024\n- Adobe Illustrator 2024",
      },
      { header: "Timeline:", body: "—Nov 2024" },
      { header: "", body: "", button: true },
    ],
  },
  {
    src: "/images/magazine_mockup_01.png",
    title: "ARASAKA",
    secondTitle: "ESTATE",
    description: [
      {
        header: "Project Type:",
        body: "Magazine Cover for an architectural showcase of\nthe ARASAKA Estate within Cyberpunk 2077.",
      },
      {
        header: "Involvement (Solo):",
        body: "- Art Direction & Concept\n- Graphical Editing",
      },
      { header: "Tools Used:", body: "- Adobe Photoshop 2024" },
      { header: "Timeline:", body: "—Oct 2024" },
      { header: "", body: "", button: true },
    ],
  },
  {
    src: "",
    title: "Website\u00A0currently",
    secondTitle: "in\u00A0development.",
    description: [
      {
        header: "More content coming soon!",
        body: "// Stayed tuned for updates and development.",
      },
    ],
  },
];

const AnimatedText = ({
  text,
  handleClick,
  baseDelay = 0,
  className,
  disablePointerEvents,
}) => {
  return (
    <div
      className={classNames("row", className, {
        "pointer-events-none": disablePointerEvents,
      })}
      onClick={handleClick}
    >
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

const AnimatedParagraph = ({ text, baseDelay = 0, className }) => {
  return (
    <div className={className}>
      {text.split("\n").map((line, index) => (
        <AnimationRiseUp
          key={`${text}-${index}`}
          className={styles.line}
          duration={1.4}
          delay={baseDelay + index * 0.1}
        >
          {line}
        </AnimationRiseUp>
      ))}
    </div>
  );
};

export default function Home() {
  const containerRef = useRef(null);
  const sectionRefs = useRef([]);
  const router = useRouter();
  
  let currentIndex = -1;
  let animating = false;
  const wrap = gsap.utils.wrap(0, sections.length);

  const [mainText, setMainText] = useState(sections[0].title);
  const [subText, setSubText] = useState(sections[0].secondTitle);
  const [description, setDescription] = useState(sections[0].description);
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
  
    // ✅ Reset first section visibility when returning to home
    gsap.set(sectionRefs.current[0], { clipPath: "inset(0% 0% 0% 0%)", zIndex: 2 });
  
    gotoSection(0, 1); // Keep this to trigger the animation
  
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
    );
    
    // ✅ Ensure first section remains visible when navigating back
    if (currentIndex !== 0) {
      tl.set(sectionRefs.current[currentIndex], { clipPath: "inset(100% 0% 0% 0%)" }, "+=0.2");
    }

    // Update text content dynamically
    setMainText(sections[index].title);
    setSubText(sections[index].secondTitle);
    setDescription(sections[index].description);

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

  const handleLearnMoreClick = (title) => {
    let path = "";
    switch (title) {
      case "AETHER":
        path = "/projects/aether";
        break;
      case "RECKLESS":
        path = "/projects/reckless";
        break;
      case "ARASAKA":
        path = "/projects/arasaka";
        break;
      default:
        path = "/";
    }
    router.push(path); // ✅ Correctly navigates using Next.js App Router
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
            {section.src && (
              <Image
                className={styles.image}
                src={section.src}
                alt={`Section ${index + 1}`}
                width={1000}
                height={1000}
              />
            )}
          </div>
          <div
            className={classNames(
              styles.leftContainer,
              "absolute top-0 h-full col-span-3 col-start-2 flex flex-grow flex-col justify-center"
            )}
          >
            <div className={styles.descriptionContainer}>
              {description.map((desc, i) => (
                <div key={`desc-${descKey}-${i}`} className="mb-4">
                  <AnimationRiseUp
                    key={`header-${descKey}-${i}`}
                    className={styles.descriptionHeader}
                    delay={i * 0.1}
                  >
                    <h3>{desc.header}</h3>
                  </AnimationRiseUp>
                  <AnimatedParagraph
                    key={`body-${descKey}-${i}`}
                    className={styles.descriptionBody}
                    text={desc.body}
                    baseDelay={i * 0.1 + 0.05}
                  />
                  {desc.button && (
                    <AnimationRiseUp
                      key={`button-${descKey}-${i}`}
                      className={styles.descriptionButton}
                      delay={i * 0.1 + 0.1}
                    >
                      <button
                        className={styles.learnMoreButton}
                        onClick={() => handleLearnMoreClick(section.title)}
                      >
                        {" "}
                        {section.title.includes("AETHER")
                          ? "Case study available ⬎"
                          : "View showcase ⬎"}
                      </button>
                    </AnimationRiseUp>
                  )}
                </div>
              ))}
            </div>
            <div
              className={classNames(
                styles.titleContainer,
                "absolute bottom-0 mb-7"
              )}
            >
              <AnimatedText
                text={mainText}
                handleClick={handleMainTextClick}
                baseDelay={isFirstLoad ? 0 : 0}
                className={styles.titleText}
                disablePointerEvents={
                  mainText !== "DIGITAL" && mainText !== "VISUAL"
                }
              />
              <AnimatedText
                text={subText}
                handleClick={handleSubTextClick}
                baseDelay={isFirstLoad ? 0.2 : 0.1}
                className={styles.titleText}
                disablePointerEvents={
                  subText !== "DESIGN/R" && subText !== "ENTHUSIAST"
                }
              />
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}