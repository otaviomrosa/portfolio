import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import ThemeToggle from "@/components/ThemeToggle";

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
      <head>
        {/* Prevent flash of wrong theme on load */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('theme')!=='dark')document.documentElement.classList.add('light');}catch(e){}`,
          }}
        />
      </head>
      <body className="font-sans">
        <NavBar />
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
