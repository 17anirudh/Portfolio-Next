import DisplayAvatar from "./components/DisplayAvatar";
import { H1Typing } from "./components/H1Typing";
import { H2Typing } from "./components/H2Typing";
import { Socials } from "./components/Socials";
import { Resume } from "./components/Resume";

import AboutMe from "./components/AboutMe";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";

import {TooltipDemo as Tooltip} from "./components/ToolTip";
import { ReachOut } from "./components/ReachOut";

import { Annie_Use_Your_Telescope } from "next/font/google";
import { Crimson_Pro } from "next/font/google";
import { Cabin } from "next/font/google";
import Link from "next/link";
import { MoveUp } from "lucide-react";

const HandWritten = Annie_Use_Your_Telescope({
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
      <Link href='#top' className="absolute bottom-0 right-0 border-4 border-r-sky-10" title="Scroll up"><MoveUp /></Link>
      <header className={`min-h-screen ${Serif.className}`} id="headerSection">
        <section>
          <nav id="top" className="flex flex-row gap-1.5 justify-center sm:gap-7">
            <Link href='#top' className="hover:text-amber-300">Home</Link>
            <Link href='#about' className="hover:text-amber-300">About</Link>
            <Link href='#skills' className="hover:text-amber-300">Skills</Link>
            <Link href='#projects' className="hover:text-amber-300">Projects</Link>
            <Link href='#contact' className="hover:text-amber-300">Contact</Link>
          </nav>
          <DisplayAvatar />
          <h1 className={`text-5xl m-1 cursor-default sm:text-7xl sm:m-5 ${HandWritten.className}`}><H1Typing/></h1>
          <h2 className="text-2xl m-1 cursor-default sm:text-4xl sm:m-5"><H2Typing /></h2>
          <h2 className="text-xl m-1 cursor-default sm:text-3xl sm:m-7">Visakhapatnam, India</h2>
        </section>
        <section className="mb-0 m-1 sm:m-7">
          <Socials />
        </section>
        <section>
          <Resume />
        </section>
      </header>

      <main id="mainSection" className={`${SansSerif.className}`}>
        <section className="min-h-screen max-w-screen pt-20" id="about"><AboutMe /></section>
        <section className="min-h-screen max-w-screen" id="skills">
          <h2 className={`text-3xl mb-27 ${Serif.className} underline text-center`}>Skills</h2>
          <Skills />
        </section>
        <section className={`min-h-screen max-w-screen ${SansSerif.className} text-center`} id="projects">
          <h2 className={`text-3xl mb-27 ${Serif.className} underline`}>Projects</h2>
          <Projects />
        </section>
        <section className="min-h-screen max-w-screen font-inherit mt-44" id="contact">
          <h2 className={`text-3xl mb-12 ${Serif.className} underline`}>Contact me</h2>
          <ReachOut />
        </section>
      </main>
    
      <footer className="min-h-64 max-w-screen mt-44" id="footSection">
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
    </div>
  )
}
