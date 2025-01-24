"use client";

// Imports
import Link from "next/link";
import styles from "./Footer.module.css";
import classNames from "classnames";
import { MdArrowRightAlt } from "react-icons/md";
// Components
import AnimationRiseUp from "../animations/AnimationRiseUp";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="grid-8-column">
        <div className="col-start-8">
        <ul className={styles.list}>
            <li className="stacked">
              <AnimationRiseUp className={styles.footerText} delay={3.3}>
                <p className={classNames(styles.qText, "row justify-end")}>
                  CA / DEV J.A.
                </p>
              </AnimationRiseUp>
              <AnimationRiseUp className={styles.footerText} delay={3.4}>
                <p className="row justify-end">
                  ⬐ SCROLL TO EXPLORE
                </p>
              </AnimationRiseUp>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
