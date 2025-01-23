"use client";

// Imports
import Link from "next/link";
import styles from "./Header.module.css";
import classNames from "classnames";
import { MdOutlineTrendingFlat } from "react-icons/md";
// Components
import TimeDate from "./TimeDate";
import AnimationRiseUp from "../animations/AnimationRiseUp";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className="grid-8-column">
        <div className="col-span-1">
          <ul className={styles.list}>
            <div className={styles.logo}>
              <AnimationRiseUp className={styles.navText} delay={2.2}>
                <Link href="/">
                  <img
                    src="/icons/ja-icon.svg"
                    alt="JA Logo Icon"
                    className={styles.logoIcon}
                  />
                </Link>
              </AnimationRiseUp>
              <div className={`${styles.logoText} stacked`}>
                <AnimationRiseUp className={styles.navText} delay={2.2}>
                  <Link href="/">JONATHAN</Link>
                </AnimationRiseUp>
                <AnimationRiseUp className={styles.navText} delay={2.3}>
                  <Link href="/">ANDREW</Link>
                </AnimationRiseUp>
              </div>
            </div>
          </ul>
        </div>
        <div className="col-span-3">
          <TimeDate />
        </div>

        <div className="col-span-2">
          <ul className={styles.list}>
            <li className="stacked">
              <AnimationRiseUp className={styles.navText} delay={2.6}>
                <Link href="/" className="row">
                  <MdOutlineTrendingFlat className={styles.icon} />
                  INTERACTIVE DESIGN
                </Link>
              </AnimationRiseUp>
              <AnimationRiseUp className={styles.navText} delay={2.7}>
                <Link href="/" className="row">
                  <MdOutlineTrendingFlat className={styles.icon} />
                  GRAPHIC DESIGN
                </Link>
              </AnimationRiseUp>
            </li>
          </ul>
        </div>
        <div className="col-span-1">
          <ul className={styles.list}>
            <li className="stacked">
              <AnimationRiseUp className={styles.navText} delay={2.8}>
                <Link href="/" className="row">
                  <MdOutlineTrendingFlat className={styles.icon} />
                  ABOUT ME
                </Link>
              </AnimationRiseUp>
            </li>
          </ul>
        </div>
        <div className="col-span-1">
          <ul className={styles.list}>
            <li className="stacked">
              <AnimationRiseUp className={styles.navText} delay={3.0}>
                <Link href="/" className={classNames(styles.contactText, "row", "justify-end")}>
                  <MdOutlineTrendingFlat className={styles.icon} />
                  GET IN TOUCH
                </Link>
              </AnimationRiseUp>
              <AnimationRiseUp className={styles.navText} delay={3.1}>
                <Link href="/" className="row justify-end">
                  <MdOutlineTrendingFlat className={styles.icon} />
                  SOCIALS
                </Link>
              </AnimationRiseUp>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
