import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Anirudh portfolio",
  description: "Next, Shadcn, Accentrain, tailwind and webhooks",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased bg-black text-white h-screen w-screen p-6 px-4`}>
        {children}
      </body>
    </html>
  );
}
