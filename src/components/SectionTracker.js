import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import classNames from "classnames";
import styles from "./SectionTracker.module.css";

export default function SectionTracker({
  sections,
  currentIndex,
  onSectionClick,
}) {
  const trackerRef = useRef(null);
  const previewRefs = useRef([]);

  useEffect(() => {
    if (previewRefs.current[currentIndex]) {
      gsap.to(previewRefs.current[currentIndex], {
        opacity: 1,
        duration: 0.8, 
        ease: "power2.out",
      });

      sections.forEach((_, index) => {
        if (index !== currentIndex && previewRefs.current[index]) {
          gsap.to(previewRefs.current[index], {
            opacity: 0.3,
            duration: 0.4,
            ease: "power2.out",
          });
        }
      });
    }
  }, [currentIndex]);

  return (
    <div className="absolute top-0 w-full h-full grid-8-column px-16">
      <div
        ref={trackerRef}
        className={classNames(
          "col-start-8 col-span-1",
          styles.previewContainer
        )}
      >
        {sections.map((section, index) => (
          <div
            key={index}
            ref={(el) => (previewRefs.current[index] = el)}
            className={classNames(styles.previewItem, {
              [styles.current]: index === currentIndex,
              [styles.nonCurrent]: index !== currentIndex,
            })}
            onClick={() => onSectionClick(index)}
          >
            {section.src && (
              <Image
                src={section.src}
                alt={`Preview ${index + 1}`}
                width={100}
                height={100}
                className={styles.previewImage}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
