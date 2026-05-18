import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from 'next-themes';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://lordheb.com"),
  title: {
    default: "Ihab Heb — Agentic AI & Blockchain Engineer",
    template: "%s — lordheb",
  },
  description:
    "Portfolio of Ihab Hormi (lordheb / 0xHeb / Hebx) — agentic AI and blockchain engineer. Building autonomous agents, secure smart contracts, and decentralized intelligence.",
  keywords: [
    "lordheb",
    "0xHeb",
    "Hebx",
    "Ihab Hormi",
    "Agentic AI",
    "AI Agents",
    "Blockchain Engineer",
    "Smart Contract Auditing",
    "Security Research",
    "Web3",
    "Solidity",
    "Foundry",
    "Solana",
    "DeFi",
    "Protocol R&D",
  ],
  authors: [{ name: "Ihab Hormi", url: "https://lordheb.com" }],
  creator: "Ihab Hormi",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://lordheb.com",
    siteName: "lordheb",
    title: "Ihab Heb — Agentic AI & Blockchain Engineer",
    description:
      "Building autonomous agents, secure smart contracts, and decentralized intelligence.",
    images: [
      {
        url: "/Images/preview.png",
        width: 1200,
        height: 630,
        alt: "Ihab Heb — Agentic AI & Blockchain Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ihab Heb — Agentic AI & Blockchain Engineer",
    description:
      "Building autonomous agents, secure smart contracts, and decentralized intelligence.",
    creator: "@lordheb",
    images: ["/Images/preview.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ihab Hormi",
              alternateName: ["lordheb", "0xHeb", "Hebx"],
              url: "https://lordheb.com",
              image: "https://lordheb.com/Images/preview.png",
              jobTitle: "Agentic AI & Blockchain Engineer",
              sameAs: [
                "https://github.com/Hebx",
                "https://x.com/lordheb",
                "https://www.linkedin.com/in/ihab-hormi-552b63219/",
                "https://www.base.org/name/lordheb",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
