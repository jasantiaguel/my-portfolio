"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import Image from "next/image";
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
    "Insights",
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
      <div
        className={classNames(
          "fixed w-full grid grid-cols-8 px-16",
          styles.sectionHeaderContainer
        )}
      >
        <div
          ref={headerRef}
          className={classNames(
            "w-full bottom-0 mb-7 col-start-1 col-span-6 self-end",
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
        {/* <div
          className={classNames(
            "col-start-2 col-span-6",
            styles.titleContainer
          )}
        >
          <h1 className={classNames("flex flex-col", styles.header)}>Aether</h1>
        </div> */}
        <div
          className={classNames(
            "col-start-2 col-span-6",
            styles.titleDescContainer
          )}
        >
          <div className="w-full grid grid-cols-6">
            <h1 className={classNames("flex flex-col", styles.projectTitle)}>
              Aether
            </h1>
            <div className="col-start-1 col-span-3">
              <h4 className={styles.descriptionHeader}>My Role</h4>
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
              <h4 className={styles.descriptionHeader}>Overview</h4>
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

      {/* Problem */}
      <div
        className={classNames(
          styles.container,
          "w-full grid grid-cols-8 px-16 py-7"
        )}
      >
        <div className="grid grid-cols-6 col-start-2 col-span-6 gap-y-20">
          <p className={classNames("col-start-1 col-span-5", styles.largeText)}>
            Caregivers spend up to an average of{" "}
            <span className="font-light italic">15 hours a week</span> managing
            forms and paperwork.
          </p>
          <p
            className={classNames(
              "col-start-2 col-span-5 text-right",
              styles.largeText
            )}
          >
            This equates to nearly{" "}
            <span className="font-light italic">30 days a year</span> spent away
            from things that{" "}
            <span className="font-light italic">matter most</span>.
          </p>
        </div>
      </div>

      {/* Research */}
      <div
        className={classNames(
          styles.container,
          "w-full grid grid-cols-8 px-16 py-7"
        )}
      >
        <div className="col-start-2 col-span-6">
          <Image
            src="/images/user_persona.jpg"
            alt="User Persona"
            layout="responsive"
            width={700}
            height={475}
            className={classNames("w-full", styles.userPersona)}
          />
        </div>
        <div className="col-start-2 col-span-3">
          <h4 className={styles.descriptionHeader}>
            Connecting with our audience
          </h4>
          <div className="flex flex-col">
            <p className={styles.descriptionBody}>
              To understand <span className="italic">how</span> and{" "}
              <span className="italic">why</span> this time was spent, a handful
              of caregivers were interviewed to uncover their daily struggles.
              With the data collected, user personas were formed.
            </p>
          </div>
        </div>
      </div>

      {/* Insights */}
      <div
        className={classNames(
          styles.container,
          "w-full grid grid-cols-8 px-16 py-7"
        )}
      >
        <div className="col-start-2 col-span-6 gap-y-12">
          <div className="w-full flex flex-col gap-y-12">
            <p className={classNames("", styles.largerText)}>Tiring</p>
            <p className={classNames("text-center", styles.largerText)}>
              Overwhelming
            </p>
            <p className={classNames("text-right", styles.largerText)}>
              Confusing
            </p>
          </div>
        </div>
        <div className="col-start-2 col-span-3">
          <h4 className={styles.descriptionHeader}>
            Empathizing with our audience
          </h4>
          <div className="flex flex-col">
            <p className={styles.descriptionBody}>
              Based on research, three key challenges were identified: the
              repetitive nature of form-filling was{" "}
              <span className="italic">tiring</span>, understanding and
              remembering complex jargon was{" "}
              <span className="italic">overwhelming</span>, and managing volumes
              of information was <span className="italic">confusing</span>.
            </p>
          </div>
        </div>
      </div>

      {/* Ideation */}
      <div
        className={classNames(
          styles.container,
          "w-full grid grid-cols-8 px-16 py-7"
        )}
      >
        <h1>Aether Project</h1>
      </div>

      {/* Wireframing */}
      <div
        className={classNames(
          styles.container,
          "w-full grid grid-cols-8 px-16 py-7"
        )}
      >
        <h1>Aether Project</h1>
      </div>

      {/* Refinement */}
      <div
        className={classNames(
          styles.container,
          "w-full grid grid-cols-8 px-16 py-7"
        )}
      >
        <h1>Aether Project</h1>
      </div>

      {/* Final Product */}
      <div
        className={classNames(
          styles.container,
          "w-full grid grid-cols-8 px-16 py-7"
        )}
      >
        <h1>Aether Project</h1>
      </div>

      {/* Key Takeaways */}
      <div
        className={classNames(
          styles.container,
          "w-full grid grid-cols-8 px-16 py-7"
        )}
      >
        <h1>Aether Project</h1>
      </div>

      {/* Final Notes */}
      <div
        className={classNames(
          styles.container,
          "w-full grid grid-cols-8 px-16 py-7"
        )}
      >
        <h1>bla bla</h1>
      </div>

      {/* Last */}
      <div
        className={classNames(
          styles.container,
          "w-full grid grid-cols-8 px-16 py-7"
        )}
      >
        <h1>footer</h1>
      </div>
    </main>
  );
}
