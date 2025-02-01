"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Observer } from "gsap/Observer";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import HeroSection from "@/components/HeroSection";
import classNames from "classnames";

gsap.registerPlugin(Observer);

const sections = [
  "/images/portrait_01.png",
  "/images/poster_mockup_01.png",
  "/images/magazine_mockup_01.png",
  "/images/poster_mockup_01.png",
  "/images/portrait_01.png"
];

export default function Home() {
  const containerRef = useRef(null);
  const sectionRefs = useRef([]);
  let currentIndex = -1;
  let animating = false;
  const wrap = gsap.utils.wrap(0, sections.length);

  useEffect(() => {
    const observer = Observer.create({
      type: "wheel,touch,pointer",
      wheelSpeed: -1,
      onDown: () => !animating && gotoSection(currentIndex - 1, -1),
      onUp: () => !animating && gotoSection(currentIndex + 1, 1),
      tolerance: 10,
      preventDefault: true
    });

    gotoSection(0, 1);
    return () => observer.kill();
  }, []);

  function gotoSection(index, direction) {
    index = wrap(index);
    animating = true;
    let fromTop = direction === -1;

    const tl = gsap.timeline({
      defaults: { duration: 2, ease: "power2.out" },
      onComplete: () => {
        animating = false;
      }
    });

    if (currentIndex >= 0) {
      gsap.set(sectionRefs.current[currentIndex], { zIndex: 1 });
    }

    gsap.set(sectionRefs.current[index], { zIndex: 2 });
    tl.fromTo(
      sectionRefs.current[index],
      { clipPath: fromTop ? "inset(0% 0% 100% 0%)" : "inset(100% 0% 0% 0%)" },
      { clipPath: "inset(0% 0% 0% 0%)" }
    ).set(sectionRefs.current[currentIndex], { clipPath: "inset(100% 0% 0% 0%)" }, "+=0.2");

    currentIndex = index;
  }

  return (
    <main ref={containerRef} className={classNames(styles.main, "relative w-full h-screen overflow-hidden")}>
      <HeroSection />
      {sections.map((src, index) => (
        <div
          key={index}
          ref={(el) => (sectionRefs.current[index] = el)}
          className={classNames(styles.container, "absolute top-0 w-full h-full grid-8-column")}
          style={{ clipPath: index === 0 ? "inset(0% 0% 0% 0%)" : "inset(100% 0% 0% 0%)" }}
        >
          <div className="col-span-3 col-start-5 flex items-center justify-center">
            <Image className={styles.image} src={src} alt={`Section ${index + 1}`} width={600} height={800} />
          </div>
        </div>
      ))}
    </main>
  );
}
