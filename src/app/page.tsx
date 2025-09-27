import { CustomTextScramble as CTS } from "./components/CustomTextScramble";
import { GradientScrollProgress as GSP } from "./components/GradientScrollProgress";
import { InfiniteCarousel as IC } from "./components/InfiniteCarousel";

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
          <div className="fill-amber-50"><IC /></div>
          <div className="bg-amber-700 h-[400px] text-4xl mb-3.5">HELLO</div>
          <div className="bg-amber-700 h-[400px] text-4xl mb-3.5">HELLO</div>
          <div className="bg-amber-700 h-[400px] text-4xl mb-3.5">HELLO</div>
          <div className="bg-amber-700 h-[400px] text-4xl mb-3.5">HELLO</div>
          <div className="bg-amber-700 h-[400px] text-4xl mb-3.5">HELLO</div>
          <div className="bg-amber-700 h-[400px] text-4xl mb-3.5">HELLO</div>
          <div className="bg-amber-700 h-[400px] text-4xl mb-3.5">HELLO</div>
        </main>
        <footer className="bg-cyan-500 text-center text-5xl">
          Footer
        </footer>
      </GSP>
    </>
  )
}
