"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./Header.module.css";
// Components
import TimeDate from "./TimeDate";

const textRiseVariants = {
  hidden: { y: "160%", opacity: 1 },
  visible: { y: 0, opacity: 1 },
};

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navBar}>
        <div className={styles.leftSection}>
          <ul className={styles.navList}>
            <div className={styles.logo}>
              <Link href="/">
                <img
                  src="/icons/ja-icon.svg"
                  alt="JA Logo Icon"
                  className="w-10 h-10"
                />
              </Link>
              <div className={`${styles.logoText} stacked`}>
                <div className="masking-container">
                  <motion.div
                    className={styles.navText}
                    initial="hidden"
                    animate="visible"
                    variants={textRiseVariants}
                    transition={{
                      duration: 1.6,
                      ease: [0.1, 0.8, 0.2, 1],
                      delay: 0.2,
                    }}
                  >
                    <Link href="/" className="stacked-top">
                      JONATHAN
                    </Link>
                  </motion.div>
                </div>
                <div className="masking-container">
                  <motion.div
                    className={styles.navText}
                    initial="hidden"
                    animate="visible"
                    variants={textRiseVariants}
                    transition={{
                      duration: 1.6,
                      ease: [0.1, 0.8, 0.2, 1],
                      delay: 0.3,
                    }}
                  >
                    <Link href="/">ANDREW</Link>
                  </motion.div>
                </div>
              </div>
            </div>
            <TimeDate />
          </ul>
        </div>
        <div className={styles.middleSection}>
          <ul className={styles.navList}>
            <li className="stacked">
              <div className="masking-container">
                <motion.div
                  className={styles.navText}
                  initial="hidden"
                  animate="visible"
                  variants={textRiseVariants}
                  transition={{
                    duration: 1.6,
                    ease: [0.1, 0.8, 0.2, 1],
                    delay: 0.6,
                  }}                >
                  <Link href="/" className="stacked-top">
                    INTERACTIVE DESIGN
                  </Link>
                </motion.div>
              </div>
              <div className="masking-container">
                <motion.div
                  className={styles.navText}
                  initial="hidden"
                  animate="visible"
                  variants={textRiseVariants}
                  transition={{
                    duration: 1.6,
                    ease: [0.1, 0.8, 0.2, 1],
                    delay: 0.7,
                  }}                >
                  <Link href="/">GRAPHIC DESIGN</Link>
                </motion.div>
              </div>
            </li>
          </ul>
        </div>
        <div className={styles.middleSection}>
          <ul className={styles.navList}>
            <li className="stacked">
              <div className="masking-container">
                <motion.div
                  className={styles.navText}
                  initial="hidden"
                  animate="visible"
                  variants={textRiseVariants}
                  transition={{
                    duration: 1.6,
                    ease: [0.1, 0.8, 0.2, 1],
                    delay: 0.8,
                  }}                >
                  <Link href="/">ABOUT</Link>
                </motion.div>
              </div>
            </li>
          </ul>
        </div>
        <div className={styles.rightSection}>
          <ul className={styles.navList}>
            <li className="stacked">
              <div className="masking-container">
                <motion.div
                  className={styles.navText}
                  initial="hidden"
                  animate="visible"
                  variants={textRiseVariants}
                  transition={{
                    duration: 1.6,
                    ease: [0.1, 0.8, 0.2, 1],
                    delay: 1,
                  }}                >
                  <Link href="/" className="stacked-top">
                    GET IN TOUCH
                  </Link>
                </motion.div>
              </div>
              <div className="masking-container">
                <motion.div
                  className={styles.navText}
                  initial="hidden"
                  animate="visible"
                  variants={textRiseVariants}
                  transition={{
                    duration: 1.6,
                    ease: [0.1, 0.8, 0.2, 1],
                    delay: 1.1,
                  }}                >
                  <Link href="/">SOCIALS</Link>
                </motion.div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
