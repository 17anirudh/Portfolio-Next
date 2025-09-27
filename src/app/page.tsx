import { Meteors } from "@/components/ui/meteors";
import { CustomTextScramble as CTS } from "./components/CustomTextScramble";
import { GradientScrollProgress as GSP } from "./components/GradientScrollProgress";
import { InfiniteCarousel as IC } from "./components/InfiniteCarousel";
import { ShadTable as ST } from "./components/ShadTable";

export default function Home() {
  return (
    <>
      <GSP>
        <header className="text-center">
          <h1 className="text-6xl text-neutral-50 cursor-default m-5">
            <CTS text = "Vedala Anirudh" />
          </h1>
        </header>
        <main>
          <div className="min-h-screen"></div>
          <div className="min-h-screen"><IC /></div>
          <div className="min-h-screen"><ST /></div>
          <Meteors number={20} />
        </main>
        <footer className="bg-cyan-500 text-center text-5xl">
          Footer
        </footer>
      </GSP>
    </>
  )
}
