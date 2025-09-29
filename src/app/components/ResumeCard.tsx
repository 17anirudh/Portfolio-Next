import React from "react";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import Link from "next/link";

export function ResumeCard() {
  return (
    <div className="border border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
      <Icon className="absolute h-4 w-6 -top-3 -left-3 text-white " />
      <Icon className="absolute h-4 w-6 -bottom-3 -left-3 text-white " />
      <Icon className="absolute h-4 w-6 -top-3 -right-3 text-white " />
      <Icon className="absolute h-4 w-6 -bottom-3 -right-3 text-white " />

      <EvervaultCard text="Resume" />

      {/* <h2 className="text-white  mt-4 text-sm font-light">
        Hover over this card to reveal an awesome effect. Running out of copy
        here.
      </h2> */}
      <Link 
      className="text-sm border font-light dark:border-white/[0.2] rounded-full mt-4  dark:text-white px-2 py-0.5"
      href="https://raw.githubusercontent.com/17anirudh/media/refs/heads/main/resume.pdf"
      download>Click me to download</Link>
    </div>
  );
}
