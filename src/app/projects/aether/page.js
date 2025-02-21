"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import styles from "./styles.module.css";
import classNames from "classnames";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AetherPage() {
  const router = useRouter();
  const headerRef = useRef(null);

  const headerTexts = [
    "",
    "Problem",
    "Research",
    "Ideation",
    "Wireframing",
    "Refinement",
    "Final Product",
    "Key Takeaways",
    "Final Notes",
  ];

  useEffect(() => {
    const sections = document.querySelectorAll(`.${styles.container}`);
    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 60%",
        end: "bottom 60%",
        onEnter: () => updateHeader(index),
        onLeaveBack: () => updateHeader(index - 1),
        markers: true,
      });
    });

    function updateHeader(index) {
      const header = headerRef.current;
      if (!header) return;
      if (index < 0) {
        header.style.opacity = 0;
      } else {
        header.style.opacity = 1;
        header.textContent = headerTexts[index];
      }
    }

    updateHeader(0);
  }, []);

  return (
    <main className={classNames(styles.main, "relative w-full")}>
      <div className={classNames("fixed w-full grid grid-cols-8 px-16", styles.sectionHeaderContainer)}>
        <div
          ref={headerRef}
          className={classNames(
            "w-full bottom-0 mb-7 col-start-2 col-span-6 self-end",
            styles.sectionHeader
          )}
        ></div>
      </div>
      <div
        className={classNames(
          styles.container,
          "w-full grid grid-cols-8 px-16"
        )}
      >
        <div className="col-start-1">
          <button
            onClick={() => router.push("/")}
            className={styles.backButton}
          >
            ⬅ Go Back
          </button>
        </div>
        <div
          className={classNames(
            "col-start-2 col-span-6",
            styles.titleContainer
          )}
        >
          <h1 className={classNames("flex flex-col", styles.header)}>Aether</h1>
        </div>
        <div
          className={classNames(
            "col-start-2 col-span-6",
            styles.titleDescContainer
          )}
        >
          <div className="w-full grid grid-cols-6">
            <div className="col-start-1 col-span-3">
              <h3 className={styles.descriptionHeader}>My Role</h3>
              <div className="flex flex-col">
                <p className={styles.descriptionBody}>
                  <span className="font-extrabold">Research & Ideation:</span>{" "}
                  Conducted user research, interviews, and competitive analysis
                  to identify caregiver pain points.
                </p>
                <p className={styles.descriptionBody}>
                  <span className="font-extrabold">
                    Wireframing & Prototyping:
                  </span>{" "}
                  Designed a seamless and accessible experience in Figma,
                  prioritizing clarity and ease of use.
                </p>
                <p className={styles.descriptionBody}>
                  <span className="font-extrabold">Development:</span>{" "}
                  Implemented interactive components and smooth workflows using
                  React and Next.js, ensuring a responsive and high-performance
                  experience.
                </p>
              </div>
            </div>
            <div className="col-start-4 col-span-3">
              <h3 className={styles.descriptionHeader}>Overview</h3>
              <div className="flex flex-col">
                <p className={styles.descriptionBody}>
                  AETHER is a mobile application designed to ease the burden of
                  form-filling for caregivers by streamlining complex
                  documentation into an intuitive and efficient experience.
                </p>
                <p className={styles.descriptionBody}>
                  Built with compassion and accessibility in mind, Aether
                  leverages AI-powered assistance to simplify data entry,
                  reducing stress for those managing critical paperwork.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={classNames(
          styles.container,
          "w-full grid grid-cols-8 px-16 py-7"
        )}
      >
        <h1>Aether Project</h1>
      </div>

      <div
        className={classNames(
          styles.container,
          "w-full grid grid-cols-8 px-16 py-7"
        )}
      >
        <h1>Aether Project</h1>
      </div>

      <div
        className={classNames(
          styles.container,
          "w-full grid grid-cols-8 px-16 py-7"
        )}
      >
        <h1>Aether Project</h1>
      </div>

      <div
        className={classNames(
          styles.container,
          "w-full grid grid-cols-8 px-16 py-7"
        )}
      >
        <h1>Aether Project</h1>
      </div>

      <div
        className={classNames(
          styles.container,
          "w-full grid grid-cols-8 px-16 py-7"
        )}
      >
        <h1>Aether Project</h1>
      </div>

      <div
        className={classNames(
          styles.container,
          "w-full grid grid-cols-8 px-16 py-7"
        )}
      >
        <h1>Aether Project</h1>
      </div>

      <div
        className={classNames(
          styles.container,
          "w-full grid grid-cols-8 px-16 py-7"
        )}
      >
        <h1>Aether Project</h1>
      </div>

      <div
        className={classNames(
          styles.container,
          "w-full grid grid-cols-8 px-16 py-7"
        )}
      >
        <h1>Aether Project</h1>
      </div>

      <div
        className={classNames(
          styles.container,
          "w-full grid grid-cols-8 px-16 py-7"
        )}
      >
        <h1>Aether Project</h1>
      </div>
    </main>
  );
}
