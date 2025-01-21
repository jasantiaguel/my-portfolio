"use client";

import { useState } from "react";
import styles from "./InteractiveTitle.module.css";

export default function InteractiveTitle() {
  const [selectedText, setSelectedText] = useState("INTERACTIVE");

  const handleTextClick = () => {
    setSelectedText((prevText) =>
      prevText === "INTERACTIVE" ? "GRAPHIC" : "INTERACTIVE"
    );
  };

  return (
    <div className={styles.titleContainer}>
      <div className={styles.mainText}>
        {selectedText === "INTERACTIVE" ? (
          <>
            <span className={styles.interactiveText} onClick={handleTextClick}>
              INTERACTIVE
            </span>
          </>
        ) : (
          <>
            <span className={styles.graphicText} onClick={handleTextClick}>
              GRAPHIC
            </span>
          </>
        )}
      </div>
      <div className={styles.secondaryText} onClick={handleTextClick}>
        {selectedText === "INTERACTIVE" ? (
          <span className={styles.graphicSecondaryText}>GRAPHIC</span>
        ) : (
          <span className={styles.interactiveSecondaryText}>INTERACTIVE</span>
        )}
      </div>
      <div className={styles.subTextContainer}>
        <p className={styles.designText}>DESIGN</p>
        <span className={styles.slash}>//</span>
        {selectedText === "INTERACTIVE" ? (
          <p className={`${styles.descriptionText} stacked`}>
            Innovative and efficient digital experiences
            <br />
            that leave a memorable impact.
          </p>
        ) : (
          <p className={`${styles.descriptionText} stacked`}>
            Stories expressed through art—
            <br />
            messages felt through design.
          </p>
        )}
      </div>
    </div>
  );
}
