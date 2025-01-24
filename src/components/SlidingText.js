"use client";

// Imports
import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./SlidingText.module.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SlidingText() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  const sliderContainer = useRef(null);
  let yPercent = 1;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      sliderContainer.current,
      { opacity: 0 },
      { 
        opacity: 1, 
        duration: 1.8,
        delay: 4,
        ease: "sine.out" 
      }
    );

    requestAnimationFrame(animation);

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: true,
        onUpdate: (e) => {
          direction = e.direction * 1;
        },
      },
      y: "-=200px",
    });
  }, []);

  const animation = () => {
    if (yPercent <= -100) {
      yPercent = 0;
    }
    if (yPercent > 0) {
      yPercent = -100;
    }
    gsap.set(firstText.current, { yPercent: yPercent });
    gsap.set(secondText.current, { yPercent: yPercent });
    yPercent += 0.025 * direction;
    requestAnimationFrame(animation);
  };

  const TextBlock = ({ barcodeText }) => (
    <>
      PORTFOLIO &nbsp;&nbsp; 2025 &nbsp;&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp; JONATHAN &nbsp;&nbsp; ANDREW &nbsp;&nbsp; Y.97 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className={styles.barcodeText}>{barcodeText}</span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </>
  );

  return (
    <div ref={sliderContainer} className={styles.sliderContainer}>
      <div ref={slider} className={styles.slider}>
      <p ref={firstText}>
          <TextBlock barcodeText="DEFY YOUR LIMITS" />
          <TextBlock barcodeText="PURSUE GREATNESS" />
        </p>
        <p ref={secondText}>
          <TextBlock barcodeText="DEFY YOUR LIMITS" />
          <TextBlock barcodeText="PURSUE GREATNESS" />
        </p>
      </div>
    </div>
  );
}
