import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Otavio Rosa — AI/ML Researcher",
  description:
    "MS AI @ USF. Researching generative image detection, LLM bias, and computer vision. Building at the intersection of research and production.",
  keywords: ["AI", "Machine Learning", "Computer Vision", "Research", "USF", "Portfolio"],
  authors: [{ name: "Otavio Rosa" }],
  openGraph: {
    title: "Otavio Rosa — AI/ML Researcher",
    description: "MS AI @ USF. CV & GenAI Research.",
    url: "https://otaviorosa.com",
    siteName: "Otavio Rosa",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
