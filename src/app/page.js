"use client";

// Components
import { useEffect } from "react";
import InteractiveTitle from "@/components/InteractiveTitle";
import SlidingText from "@/components/SlidingText";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <main className="main">
      <InteractiveTitle />
    </main>
  );
}
