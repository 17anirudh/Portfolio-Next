import React from "react";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import Link from "next/link";

export function ResumeCard() {
  return (
    <div className="border border-white/[0.2] flex flex-col items-start w-68 sm:w-fit mx-auto p-4 relative h-[30rem]">
      <Icon className="absolute h-4 w-fit -top-3 -left-3 text-white " />
      <Icon className="absolute h-4 w-fit -bottom-3 -left-3 text-white " />
      <Icon className="absolute h-4 w-fit -top-3 -right-3 text-white " />
      <Icon className="absolute h-4 w-fit -bottom-3 -right-3 text-white " />

      <EvervaultCard text="Resume" />
      <Link 
      className="text-sm border font-light border-white/[0.2] rounded-full mt-4  text-white px-2 py-0.5 hover:text-amber-400"
      href="https://raw.githubusercontent.com/17anirudh/media/refs/heads/main/resume.pdf"
      download>Download</Link>
    </div>
  );
}
