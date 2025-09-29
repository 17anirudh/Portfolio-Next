import { TracingBeam } from "@/components/ui/tracing-beam";
import { InfiniteCarousel } from "./components/InfiniteCarousel";
import { ExpandableCardDemo } from "./components/Projects";
import { H1Typing } from "./components/H1Typing";
import { H2Typing } from "./components/H2Typing";
import {TooltipDemo as Tooltip} from "./components/ToolTip";
import Info from "./components/Info";
import { Socials } from "./components/Socials";
import { Contact } from "./components/Contact";
import { ResumeCard } from "./components/ResumeCard";

import { Pangolin } from "next/font/google";
import { Crimson_Pro } from "next/font/google";
import { Cabin } from "next/font/google";

const HandWritten = Pangolin({
  subsets: ['latin'],
  weight: '400',
});
const Serif = Crimson_Pro({
  subsets: ['latin'],
  weight: '300'
});
const SansSerif = Cabin({
  subsets: ['latin'],
  weight: '400'
});

export default function Home() {
  return (
    <>
      <TracingBeam className="px-6">
        <header className={`min-h-screen ${Serif.className} mb-96`} id="headerSection">
          <h1 className={`text-7xl cursor-default m-5 ${HandWritten.className}`}>
            <H1Typing/>
          </h1>
          <h2 className="text-4xl m-6">
            <H2Typing />
          </h2>
          <h2 className={`text-4xl m-6`}>
            Visakhapatnam, India
          </h2>
          <section>
            <Socials />
          </section>
          <section>
            <ResumeCard />
          </section>
        </header>

        <main id="mainSection" className={`${SansSerif.className}`}>
          <section className="min-h-screen max-w-screen" id="about">
            <Info />
          </section>
          <section className="min-h-screen max-w-screen flex flex-col items-center" id="skills">
            <h2 className={`text-3xl mb-27 ${Serif.className} underline`}>Skills</h2>
            <InfiniteCarousel />
          </section>
          <section className={`min-h-screen max-w-screen ${SansSerif.className}`} id="projects">
            <h2 className={`text-3xl mb-27 ${Serif.className} underline`}>Projects</h2>
            <ExpandableCardDemo />
          </section>
          <section className="min-h-screen max-w-screen font-inherit" id="contact">
            <h2 className={`text-3xl mb-27 ${Serif.className} underline`}>Contact me</h2>
            <Contact />
          </section>
        </main>
      
        <footer className="min-h-64 max-w-screen mt-8" id="footSection">
          <article className="text-center">
            <p>Thank you for visiting, I will be happy to hear your reviews 😄.</p>
            <section className="flex flex-col items-center justify-center">
              <Tooltip location="_parent" display="Home" hover="Click to go back to top" tag="#headerSection"/>
              <Tooltip location="_parent" display="About" hover="Click to scroll to ABOUT section" tag="#about"/>
              <Tooltip location="_parent" display="Skills" hover="Click to scroll to SKILLS section" tag="#skills"/>
              <Tooltip location="_parent" display="Projects" hover="Click to scroll to PROJECT section" tag="#projects"/>
              <Tooltip location="_parent" display="Contact" hover="Click to scroll to CONTACT section" tag="#contact"/>
            </section>
          </article>
        </footer>
      </TracingBeam>
    </>
  )
}
