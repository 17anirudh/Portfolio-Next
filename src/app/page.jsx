"use client";

import { TracingBeam } from "../components/ui/tracing-beam";
import { Quicksand } from "next/font/google";
import { Aleo } from "next/font/google";
import { InfiniteCarousel } from "./components/InfiniteCarousel";
import { Name } from "./components/Name";
import "./globals.css";


const QuicksandFont = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

const AleoFont = Aleo({
  variable: "--font-aleo",
  subsets: ["latin"],
})

export default function Home() {
  return (
    <>
      <TracingBeam className="min-h-screen">
        <div className="h-96"> 
          <Name />
        </div>
        <div className="max-w-2xl mx-auto antialiased pt-4 relative max-h-[100]">
          {Content.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className={`text-white rounded-full text-sm w-fit px-4 py-1 mb-4 antialiased ${AleoFont.className}`}> 
              {item.title}
            </h2>

            <p className={`text-sm prose prose-sm dark:prose-invert h-screen antialiased ${QuicksandFont.className}`}> 
              {item.description} 
            </p>
          </div>
          ))}
        </div>
      </TracingBeam>
    </>
  );
}

const Content = [
  {
    title: "About me",
    description: (
      <>
        <p>
          I love working on enhancing my skills and knowledge in computer science, with a primary focus on Data 
          Engineering, Machine Learning, Deep Learning, and Full Stack Website Development. Currently senior pursuing 
          an undergraduate degree in Computer Science Engineering. Beyond technology, I like maps and entertainment 
          especially movies and music. I have also immersed myself in various extracurricular activities like drawing, 
          swimming, and roller-skating during my school years. A feverant student studying B.Tech Computer Science Engineering 
          in Dr Lankapalli Bullayya College of Engineering graduating by 2026. My curious nature have gotten me involved in 
          more pratical development than theoritical approach. Started with the installation of MinGW compiler to run C 
          programs, I feel to proud to come this far exploring various technical concepts. A major turn came when I started 
          working with Machine Learning when I explored concepts of mathematical coding, algorithmic tuning, etc. My curiosity 
          peaked when I tried a simple ML deployement project repo link when I came across backend and frontend in use.
        </p>
      </>
    ),
    badge: "",
    image: ""
  },
  {
    title: "Skills",
    description: (
      <>
        <InfiniteCarousel />
      </>
    ),
    badge: "",
    image: ""
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
         Hello World 
        </p>
      </>
    ),
    badge: "",
    image: ""
  },
];