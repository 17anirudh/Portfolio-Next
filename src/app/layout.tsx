import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anirudh - Portfolio",
  description: "Next, Framer-motion primitives, Tailwind and webhooks based portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-y-scroll no-scrollbar">
      <body className="bg-neutral-900 text-neutral-100 min-h-screen min-w-screen">
        {children}
      </body>
    </html>
  );
}
