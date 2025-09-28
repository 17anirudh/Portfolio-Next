"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export function H2Typing() {
  const words = [
    {
      text: "Engineering",
      className: "text-amber-400"
    },
    {
      text: "Student.",
      className: "text-neutral-100"
    },
  ];
  return (
    <>
      <TypewriterEffectSmooth words={words} />
    </>
  );
}
