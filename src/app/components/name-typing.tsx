"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export function NameTyping() {
  const words = [
    {
      text: "Vedala",
      className: "text-neutral-50"
    },
    {
      text: "Anirudh.",
      className: "text-blue-500 underline"
    },
  ];
  return (
    <>
      <TypewriterEffectSmooth words={words} />
    </>
  );
}
