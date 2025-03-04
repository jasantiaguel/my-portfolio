import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import styles from "./SectionTracker.module.css";

export default function SectionTracker({
  sections,
  currentIndex,
  onSectionClick,
}) {
  const trackerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    function updateTracker(event) {
      setActiveIndex(event.detail);
    }

    document.addEventListener("sectionChange", updateTracker);

    return () => {
      document.removeEventListener("sectionChange", updateTracker);
    };
  }, []);

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
