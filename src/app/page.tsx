import { TracingBeam } from "@/components/ui/tracing-beam";
import { InfiniteCarousel } from "./components/InfiniteCarousel";
import { ExpandableCardDemo } from "./components/Projects";
import { H1Typing } from "./components/H1Typing";
import { H2Typing } from "./components/H2Typing";
import {TooltipDemo as Tooltip} from "./components/ToolTip";
import Info from "./components/Info";
import { Contact } from "./components/Contact";

export default function Home() {
  return (
    <div id="topSection">
      <TracingBeam className="px-6">
        <header className="min-h-screen" id="headerSection">
          <h1 className="text-6xl cursor-default m-5">
            <H1Typing/>
          </h1>
          <h2 className="text-4xl m-6">
            <H2Typing />
          </h2>
          <h2 className="text-4xl m-6">
            Visakhapatnam, India
          </h2>
        </header>
        <br />
        <main id="mainSection">
          <section className="min-h-screen max-w-screen" id="about">
            <Info />
          </section>
          <section className="min-h-screen max-w-screen" id="skills">
            <h2 className="text-3xl mb-27">Skills</h2>
            <InfiniteCarousel />
          </section>
          <section className="min-h-screen max-w-screen" id="projects">
            <h2 className="text-3xl mb-27">Projects</h2>
            <ExpandableCardDemo />
          </section>
          <section className="min-h-screen max-w-screen" id="contact">
            <h2 className="text-3xl mb-27">Contact me</h2>
            <Contact />
          </section>
        </main>
      </TracingBeam>
      <footer className="min-h-64 max-w-screen mt-8" id="footSection">
        <article className="text-center">
          <p>Thank you for visiting, I will be happy to hear your reviews 😄.</p>
          <section className="flex flex-col">
            <Tooltip display="Home" hover="Click to go back to top" tag="#topSection"/>
            <Tooltip display="About" hover="Click to scroll to ABOUT section" tag="#about"/>
            <Tooltip display="Skills" hover="Click to scroll to SKILLS section" tag="#skills"/>
            <Tooltip display="Projects" hover="Click to scroll to PROJECT section" tag="#projects"/>
            <Tooltip display="Contact" hover="Click to scroll to CONTACT section" tag="#contact"/>
          </section>
        </article>
      </footer>
    </div>
  )
}
