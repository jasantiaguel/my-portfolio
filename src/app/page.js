"use client";

// Imports
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "@/styles/Home.module.css";
import classNames from "classnames";
// Components
import HeroSection from "@/components/HeroSection";
import ProjectShowcase from "@/components/ProjectShowcase";

export default function Home() {
  
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <main className="main">
      <HeroSection />
      <ProjectShowcase />
      <ProjectShowcase />
      <ProjectShowcase />
      <ProjectShowcase />
    </main>
  );
}
