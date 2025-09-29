import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const webDescription = "Vedala Anirudh is a feverant engineering student, who likes Machine Learning, Deep Learning and Full Stack Web development. He is also a eager learner"; 

export const metadata: Metadata = {
  description: webDescription,
  // metadataBase: new URL("/"),
  keywords: [
    "Vedala", "Veed", "Anirudh", "Vedala Anirudh", "Anirudh Vedala",
    "VEDALA", "VEED", "ANIRUDH", "VEDALA ANIRUDH", "ANIRUDH VEDALA",
    "vedala", "veed", "anirudh", "vedala anirudh", "anirudh vedala",
    "portfolio", "ml", "ai", "data engineering", "nextjs", "framer motion", "shadcn",
  ],
  title: {
    default: "Anirudh",
    template: "%s | Anirudh"
  },
  openGraph: {
    description: webDescription,
    // images: 
  }
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-y-scroll no-scrollbar">
      <body className=" text-neutral-100 min-h-screen min-w-screen">
        {children}
      <Toaster richColors closeButton />
      </body>
    </html>
  );
}
