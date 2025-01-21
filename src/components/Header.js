import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./Header.module.css";
// Components
import TimeDate from "./TimeDate";

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
                <Link href="/" className="stacked-top">
                  JONATHAN
                </Link>
                <Link href="/">ANDREW</Link>
              </div>
            </div>
            <TimeDate />
          </ul>
        </div>
        <div className={styles.middleSection}>
          <ul className={styles.navList}>
            <li className="stacked">
              <Link href="/" className="stacked-top">
                INTERACTIVE DESIGN
              </Link>
              <Link href="/">GRAPHIC DESIGN</Link>
            </li>
          </ul>
        </div>
        <div className={styles.middleSection}>
          <ul className={styles.navList}>
            <li className="stacked">
              <Link href="/">ABOUT</Link>
            </li>
          </ul>
        </div>
        <div className={styles.rightSection}>
          <ul className={styles.navList}>
            <li className="stacked">
              <Link href="/" className="stacked-top">
                GET IN TOUCH
              </Link>
              <Link href="/">SOCIALS</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
