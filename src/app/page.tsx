import DisplayAvatar from "./components/my-avatar-component";
import { NameTyping } from "./components/name-typing";
import CobeGlobe from "./components/cobe-globe";
import { Socials } from "./components/socials-hyperlinks";
import { Resume } from "./components/resume-button";

import AboutMe from "./components/about-me";
import { Skills } from "./components/skills-section";
import { Projects } from "./components/projects-section";

import { ReachOut } from "./components/reachout-section"
import { TooltipDemo as Tooltip} from "./components/custom-tooltip";

import { Macondo_Swash_Caps } from "next/font/google";
import { Crimson_Pro } from "next/font/google";
import { Cabin } from "next/font/google";
import Link from "next/link";
import { MapPin } from "lucide-react";

const HandWritten = Macondo_Swash_Caps({
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
    <div className="relative">
      <header className={`min-h-screen ${Serif.className}`} id="top">
        <nav id="nav" className="fixed flex flex-row gap-1.5 justify-center sm:gap-7 top-5">
          <Link href='#top' className="hover:text-amber-300">Home</Link>
          <Link href='#about' className="hover:text-amber-300">About</Link>
          <Link href='#skills' className="hover:text-amber-300">Skills</Link>
          <Link href='#projects' className="hover:text-amber-300">Projects</Link>
          <Link href='#contact' className="hover:text-amber-300">Contact</Link>
        </nav>
        <section className="flex flex-col flex-wrap md:flex-row mt-20">
          <div id="text-content" className="flex-1">
            <DisplayAvatar />
            <h1 className={`text-4xl m-1 cursor-default sm:text-8xl sm:m-5 ${HandWritten.className}`}>
              <NameTyping />
            </h1>
            <h2 className="text-xl m-1 cursor-default sm:text-3xl sm:m-5">
              Senior CS Undergraduate, Data Science and Full Stack Enthusiast
            </h2>
            <h2 className="text-xl m-1 cursor-default sm:text-3xl sm:m-7 flex flex-row gap-2.5">
              <MapPin className="mt-2"/> Visakhapatnam, India
            </h2>
          </div>
          <div id="globe-content" className="flex-1">
            <CobeGlobe/>
          </div>
        </section>
        <section className="mb-0 m-1 sm:m-7 flex flex-col">
          <Socials />
          <Resume />
        </section>
      </header>

      <main id="mainSection" className={`${SansSerif.className}`}>
        <section className="min-h-screen max-w-screen pt-20 sm:mb-0 mb-27" id="about">
          <AboutMe />
        </section>
        <section className="min-h-screen max-w-screen" id="skills">
          <h2 className={`text-3xl mb-27 ${Serif.className} underline text-center`}>Skills</h2>
          <Skills />
        </section>
        <section className={`min-h-screen max-w-screen ${SansSerif.className} text-center`} id="projects">
          <h2 className={`text-3xl mb-27 ${Serif.className} underline`}>Projects</h2>
          <Projects />
        </section>
        <section className="min-h-screen flex flex-col sm:max-w-200 max-w-100 font-inherit mt-27 justify-center items-center" id="contact">
          <h2 className={`text-3xl mb-12 ${Serif.className} underline text-center w-full`}>Contact me</h2>
          <ReachOut />
        </section>
      </main>
    
      <footer className="min-h-64 max-w-screen mt-44" id="footSection">
        <article className="text-center">
          <p>Thank you for visiting, I will be happy to hear your reviews 😄.</p>
          <section className="flex flex-col items-center justify-center">
            <Tooltip location="_parent" display="Home" hover="Click to go back to top" tag="#top"/>
            <Tooltip location="_parent" display="About" hover="Click to scroll to ABOUT section" tag="#about"/>
            <Tooltip location="_parent" display="Skills" hover="Click to scroll to SKILLS section" tag="#skills"/>
            <Tooltip location="_parent" display="Projects" hover="Click to scroll to PROJECT section" tag="#projects"/>
            <Tooltip location="_parent" display="Contact" hover="Click to scroll to CONTACT section" tag="#contact"/>
          </section>
        </article>
      </footer>
    </div>
  )
}
