"use client";

// Imports
import Link from "next/link";
import styles from "./Header.module.css";
import classNames from "classnames";
import { MdArrowRightAlt } from "react-icons/md";
// Components
import TimeDate from "./TimeDate";
import AnimationRiseUp from "../animations/AnimationRiseUp";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className="grid-8-column">
        <div className="col-span-1">
          <div className={classNames(styles.logo, "row")}>
            <AnimationRiseUp className={styles.navText} delay={2.2}>
              <Link href="/">
                <img
                  src="/icons/ja-icon.svg"
                  alt="JA Logo Icon"
                  className={styles.logoIcon}
                />
              </Link>
            </AnimationRiseUp>
            <ul className={classNames(styles.list, "stacked")}>
              <li className={styles.logoText}>
                <AnimationRiseUp className={styles.navText} delay={2.2}>
                  <Link href="/">JONATHAN</Link>
                </AnimationRiseUp>
              </li>
              <li className={styles.logoText}>
                <AnimationRiseUp className={styles.navText} delay={2.3}>
                  <Link href="/">ANDREW</Link>
                </AnimationRiseUp>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-3">
          <TimeDate />
        </div>
        <div className="col-span-2">
          <ul className={classNames(styles.list, "stacked")}>
            <li>
              <AnimationRiseUp className={styles.navText} delay={2.6}>
                <Link href="/" className="row">
                  <MdArrowRightAlt className={styles.icon} />
                  INTERACTIVE DESIGN
                </Link>
              </AnimationRiseUp>
            </li>
            <li>
              <AnimationRiseUp className={styles.navText} delay={2.7}>
                <Link href="/" className="row">
                  <MdArrowRightAlt className={styles.icon} />
                  GRAPHIC DESIGN
                </Link>
              </AnimationRiseUp>
            </li>
          </ul>
        </div>
        <div className="col-span-1">
          <ul className={classNames(styles.list, "stacked")}>
            <li>
              <AnimationRiseUp className={styles.navText} delay={2.8}>
                <Link href="/" className="row">
                  <MdArrowRightAlt className={styles.icon} />
                  ABOUT ME
                </Link>
              </AnimationRiseUp>
            </li>
          </ul>
        </div>
        <div className="col-span-1">
          <ul className={classNames(styles.list, "stacked")}>
            <li>
              <AnimationRiseUp className={styles.navText} delay={3.0}>
                <Link
                  href="/"
                  className={classNames(
                    styles.contactText,
                    "row",
                    "justify-end"
                  )}
                >
                  <MdArrowRightAlt className={styles.icon} />
                  GET IN TOUCH
                </Link>
              </AnimationRiseUp>
            </li>
            <li>
              <AnimationRiseUp className={styles.navText} delay={3.1}>
                <Link href="/" className="row justify-end">
                  <MdArrowRightAlt className={styles.icon} />
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
