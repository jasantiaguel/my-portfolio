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
                  className="w-10 h-10"
                />
              </Link>
              <div className={`${styles.logoText} stacked`}>
                <AnimationRiseUp className={styles.navText} delay={0.2}>
                  <Link href="/" className="stacked-top">
                    JONATHAN
                  </Link>
                </AnimationRiseUp>
                <AnimationRiseUp className={styles.navText} delay={0.3}>
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
              <AnimationRiseUp className={styles.navText} delay={0.6}>
                <Link href="/" className="stacked-top">
                  INTERACTIVE DESIGN
                </Link>
              </AnimationRiseUp>
              <AnimationRiseUp className={styles.navText} delay={0.7}>
                <Link href="/">GRAPHIC DESIGN</Link>
              </AnimationRiseUp>
            </li>
          </ul>
        </div>
        <div className={styles.middleSection}>
          <ul className={styles.navList}>
            <li className="stacked">
              <AnimationRiseUp className={styles.navText} delay={0.8}>
                <Link href="/">ABOUT</Link>
              </AnimationRiseUp>
            </li>
          </ul>
        </div>
        <div className={styles.rightSection}>
          <ul className={styles.navList}>
            <li className="stacked">
              <AnimationRiseUp className={styles.navText} delay={1}>
                <Link href="/" className={`${styles.contactText} stacked`}>
                  GET IN TOUCH
                </Link>
              </AnimationRiseUp>
              <AnimationRiseUp className={styles.navText} delay={1.1}>
                <Link href="/">SOCIALS</Link>
              </AnimationRiseUp>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
