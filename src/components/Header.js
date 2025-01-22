"use client";

import Link from "next/link";
import styles from "./Header.module.css";
// Components
import TimeDate from "./TimeDate";
import AnimationRiseUp from "../animations/AnimationRiseUp";

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
                  className={styles.logoIcon}
                />
              </Link>
              <div className={`${styles.logoText} stacked`}>
                <AnimationRiseUp className={styles.navText} delay={2.2}>
                  <Link href="/">
                    JONATHAN
                  </Link>
                </AnimationRiseUp>
                <AnimationRiseUp className={styles.navText} delay={2.3}>
                  <Link href="/">ANDREW</Link>
                </AnimationRiseUp>
              </div>
            </div>
            <TimeDate />
          </ul>
        </div>
        <div className={styles.middleSection}>
          <ul className={styles.navList}>
            <li className="stacked">
              <AnimationRiseUp className={styles.navText} delay={2.6}>
                <Link href="/">
                  INTERACTIVE DESIGN
                </Link>
              </AnimationRiseUp>
              <AnimationRiseUp className={styles.navText} delay={2.7}>
                <Link href="/">GRAPHIC DESIGN</Link>
              </AnimationRiseUp>
            </li>
          </ul>
        </div>
        <div className={styles.middleSection}>
          <ul className={styles.navList}>
            <li className="stacked">
              <AnimationRiseUp className={styles.navText} delay={2.8}>
                <Link href="/">ABOUT</Link>
              </AnimationRiseUp>
            </li>
          </ul>
        </div>
        <div className={styles.rightSection}>
          <ul className={styles.navList}>
            <li className="stacked">
              <AnimationRiseUp className={styles.navText} delay={3.0}>
                <Link href="/" className={`${styles.contactText} stacked`}>
                  GET IN TOUCH
                </Link>
              </AnimationRiseUp>
              <AnimationRiseUp className={styles.navText} delay={3.1}>
                <Link href="/">SOCIALS</Link>
              </AnimationRiseUp>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
