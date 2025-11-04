"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "./useOutsideClick";
import Image from "next/image";

export function Projects() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }
    if (active && typeof active === "object") {
      // Prevent body scrolling when the modal is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          // Backdrop for the modal
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm h-full w-full z-10" // Increased opacity and added backdrop-blur-sm
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100] p-4 sm:p-8"> {/* Added padding for small screens */}
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              // Moved the close button to be always visible and more accessible
              className="flex absolute top-4 right-4 items-center justify-center bg-white/90 backdrop-blur-sm rounded-full h-8 w-8 z-50 transition-colors hover:bg-white" 
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              // Improved modal sizing for responsiveness:
              // Full height and width on mobile, constrained size on medium/large screens.
              className="w-full h-full max-w-4xl md:h-fit md:max-h-[95vh] flex flex-col bg-neutral-800 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  width={600} // Increased size for better quality in modal
                  height={400} // Increased size for better quality in modal
                  quality={100}
                  src={active.src}
                  alt={active.title}
                  // Responsive image height:
                  // h-48 on small, h-60 on md, h-80 on lg, then constrained within the modal
                  className="w-full h-48 md:h-60 lg:h-80 object-cover object-top"
                />
              </motion.div>

              <div className="flex-1 overflow-auto p-4 md:p-6 lg:p-8"> {/* Added flex-1 and padding for content area */}
                <div className="flex justify-between items-start mb-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-200 text-xl md:text-2xl" // Larger text for modal
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-400 text-base md:text-lg" // Larger text for modal
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="flex-shrink-0 px-4 py-2 text-sm md:text-base rounded-full font-bold bg-green-500 text-white transition-colors hover:bg-green-600 ml-4" // Added hover effect and margin
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="relative">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    // Content area responsiveness:
                    // Removed fixed height, letting it take available space and scroll
                    className="text-neutral-400 text-sm md:text-base pb-4 flex flex-col items-start gap-4"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      
      {/* Cards Grid Responsiveness */}
      <ul className="max-w-4xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 items-start gap-6 p-4"> {/* Increased max-width and gap, added padding */}
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="font-inherit p-4 flex flex-col bg-neutral-900 hover:bg-neutral-800 transition-colors rounded-xl cursor-pointer shadow-lg" // Added background and shadow
          >
            <div className="flex gap-4 flex-col w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={400}
                  height={300} // Increased height for better aspect ratio on cards
                  quality={100}
                  src={card.src}
                  alt={card.title}
                  // Responsive image height on cards
                  className="h-48 md:h-56 w-full rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col text-center">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-semibold text-neutral-200 text-lg" // Larger font
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-500 text-sm" // Adjusted color and size
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 text-black" // Slightly larger icon
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "CNN + RAG",
    title: "Deepfake Detection",
    src: "https://raw.githubusercontent.com/17anirudh/deepfake-detection/refs/heads/master/landing.png",
    ctaText: "Visit",
    ctaLink: "https://github.com/17anirudh/deepfake-detection",
    content: () => {
      return (
        <p>
          Advanced web application designed to combat the spread of misinformation by detecting Deepfakes in images and videos, and verifying the authenticity of text-based news articles.
        </p>
      );
    },
  },
  {
    description: "Cryptography",
    title: "Hash Bytes",
    src: "https://raw.githubusercontent.com/17anirudh/hash-bytes/master/Landing.png",
    ctaText: "Visit",
    ctaLink: "https://github.com/17anirudh/hash-bytes",
    content: () => {
      return (
        <p>
          Educational tool to quickly encrypt and decrypt any content using different cryptographic algorithms and relevant cipher modes along with explanations.
        </p>
      );
    },
  },
  {
    description: "Hash CRUD",
    title: "Url shortner",
    src: "https://raw.githubusercontent.com/17anirudh/media/refs/heads/main/Url-shortner.png",
    ctaText: "Visit",
    ctaLink: "https://github.com/17anirudh/URL-Shortner",
    content: () => {
      return (
        <p>
          This is a full stack web application built with the SVFM stack (Spring Boot with Thymeleaf, Vanilla JS, Flask with SQLAlchemy, and MySQL). It shortens long URLs into encrypted short links using UUID + Base62 key generation and redirects users to the original URL.
          This can be fully deployed in cloud PaaS Railway, and is cloud-native, containerized microservices having shared persistant mySQL database.
        </p>
      );
    },
  },
  {
    description: "LLMs",
    title: "Ats Score Checker",
    src: "https://raw.githubusercontent.com/17anirudh/media/refs/heads/main/Ats-score.png",
    ctaText: "Visit",
    ctaLink: "https://github.com/17anirudh/ATS-Score",
    content: () => {
      return (
        <p>
          antardvara.ssl is a local and secure ATS analyzer, which takes in job description, qualification and your resume sends it to internal local gemma3n:e2b based custom model (NorthEye), which analyzes and gives you the result
        </p>
      );
    },
  },
  {
    description: "Tree Classifiers",
    title: "NIDS Binary Classifier",
    src: "https://raw.githubusercontent.com/17anirudh/media/refs/heads/main/Nids-classifier.png",
    ctaText: "Visit",
    ctaLink: "https://github.com/17anirudh/NIDS",
    content: () => {
      return (
        <p>
          This application uses machine learning models trained on the NSL-KDD dataset to classify network traffic as either normal or intrusive. Users can input network parameters through a web interface, and the system returns a binary prediction indicating whether the traffic is benign or malicious.
        </p>
      );
    },
  },
];