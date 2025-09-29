import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Anirudh - Portfolio",
  description: "Next, Framer-motion primitives, Tailwind and webhooks based portfolio website",
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
