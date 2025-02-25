"use client";

// Imports
import Link from "next/link";
import styles from "./Header.module.css";
import classNames from "classnames";
import { useRouter , usePathname } from "next/navigation";
import { MdArrowRightAlt } from "react-icons/md";
// Components
import TimeDate from "./TimeDate";
import AnimationRiseUp from "../animations/AnimationRiseUp";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const handleHomeClick = (e) => {
    if (pathname === "/") {
      e.preventDefault();
      window.location.reload();
    } else {
      router.push("/");
    }
  };

  return (
    <header className={styles.header}>
      <nav className="grid-8-column">
        <div className="col-span-1">
          <Link href="/" onClick={handleHomeClick} className={classNames(styles.logo, "row")}>
            <AnimationRiseUp className={styles.navText} delay={2.2}>
              <img
                src="/favicon-dark.svg"
                alt="JA Logo Icon"
                className={styles.logoIcon}
              />
            </AnimationRiseUp>
            <ul className={classNames(styles.logoWordmark, "stacked")}>
              <li className={styles.logoText}>
                <AnimationRiseUp className={styles.navText} delay={2.2}>
                  Jonathan
                </AnimationRiseUp>
              </li>
              <li className={styles.logoText}>
                <AnimationRiseUp className={styles.navText} delay={2.3}>
                  Andrew
                </AnimationRiseUp>
              </li>
            </ul>
          </Link>
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
                  Interactive Design
                </Link>
              </AnimationRiseUp>
            </li>
            <li>
              <AnimationRiseUp className={styles.navText} delay={2.7}>
                <Link href="/" className="row">
                  <MdArrowRightAlt className={styles.icon} />
                  Graphic Design
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
                  About me
                </Link>
              </AnimationRiseUp>
            </li>
          </ul>
        </div>
        <div className="col-span-1">
          <ul className={classNames(styles.endList, "stacked")}>
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
                  Get in touch
                </Link>
              </AnimationRiseUp>
            </li>
            <li>
              <AnimationRiseUp className={styles.navText} delay={3.1}>
                <Link href="/" className="row justify-end">
                  <MdArrowRightAlt className={styles.icon} />
                  Socials
                </Link>
              </AnimationRiseUp>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
