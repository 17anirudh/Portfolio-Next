"use client";
import { TypewriterEffectSmooth } from "../../components/ui/typewriter-effect";

export function Name() {
  const words = [
    {
      text: "Hello",
      className: "text-white"
    },
    {
      text: "I",
      className: "text-white"
    },
    {
      text: "am",
      className: "text-white"
    },
    {
      text: "Vedala",
      className: "text-blue-500",
    },
    {
      text: "Anirudh.",
      className: "text-red-500",
    },
  ];
  return (
    <>
        <TypewriterEffectSmooth words={words} />
    </>
  )
}