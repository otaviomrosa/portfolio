import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import PageTransition from "@/components/PageTransition";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-space",
  weight: ["300", "400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Otavio Rosa — AI/ML Researcher",
  description:
    "MS CS @ USF. Researching generative image detection, LLM bias, and computer vision. Building at the intersection of research and production.",
  keywords: ["AI", "Machine Learning", "Computer Vision", "Research", "USF", "Portfolio"],
  authors: [{ name: "Otavio Rosa" }],
  openGraph: {
    title: "Otavio Rosa — AI/ML Researcher",
    description: "MS CS @ USF. CV & GenAI Research.",
    url: "https://otaviorosa.com",
    siteName: "Otavio Rosa",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${ibmPlexMono.variable}`}>
      <body className="font-sans">
        <NavBar />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
