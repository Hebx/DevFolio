import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from 'next-themes';

const inter = Inter({ subsets: ["latin"], display: "swap" });

const SITE_URL = "https://lordheb.com";
const SITE_TITLE = "Ihab Heb — Agentic AI & Blockchain Engineer";
const SITE_DESCRIPTION =
  "Ihab Hormi (lordheb · 0xHeb · Hebx) — Agentic AI & Blockchain Engineer. Founder of Glorian Labs. Builds autonomous agents, agentic commerce, smart contracts, and verifiable on-chain infrastructure across Hedera, Ethereum, Solana, Aptos, 0G and Uniswap v4.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s — lordheb",
  },
  description: SITE_DESCRIPTION,
  applicationName: "lordheb",
  category: "technology",
  keywords: [
    "lordheb",
    "0xHeb",
    "Hebx",
    "Ihab Hormi",
    "Ihab Heb",
    "Agentic AI",
    "AI Agents",
    "Autonomous Agents",
    "Agentic Commerce",
    "Blockchain Engineer",
    "Smart Contract Engineer",
    "Smart Contract Auditing",
    "Security Research",
    "Web3",
    "Solidity",
    "Foundry",
    "Hardhat",
    "Hedera",
    "HCS",
    "x402",
    "A2A",
    "AP2",
    "Uniswap v4 Hooks",
    "Chainlink CRE",
    "Solana",
    "Rust",
    "Aptos",
    "Move",
    "0G Network",
    "DeFi",
    "Protocol R&D",
    "Glorian Labs",
    "Hedron",
    "AgentGuard",
    "Tether WDK",
    "DePIN",
    "Decentralized AI",
    "Verifiable Compute",
    "TEE",
    "ZK",
  ],
  authors: [{ name: "Ihab Hormi", url: SITE_URL }],
  creator: "Ihab Hormi",
  publisher: "Ihab Hormi",
  alternates: {
    canonical: "/",
    languages: { "en-US": "/" },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "lordheb",
    title: SITE_TITLE,
    description:
      "Founder of Glorian Labs. Building autonomous agents, agentic commerce protocols, and verifiable on-chain infrastructure across Hedera, Ethereum, Solana, Aptos and 0G.",
    locale: "en_US",
    images: [
      {
        url: "/Images/preview-v2.png",
        width: 1200,
        height: 630,
        alt: SITE_TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description:
      "Founder of Glorian Labs. Building autonomous agents, agentic commerce, and verifiable on-chain infrastructure.",
    creator: "@lordheb",
    site: "@lordheb",
    images: ["/Images/preview-v2.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    other: {
      "x-author": "Ihab Hormi",
    },
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark light" as const,
};

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ihab Hormi",
  alternateName: ["lordheb", "0xHeb", "Hebx", "Ihab Heb"],
  url: SITE_URL,
  image: `${SITE_URL}/Images/preview-v2.png`,
  jobTitle: "Agentic AI & Blockchain Engineer",
  description: SITE_DESCRIPTION,
  worksFor: {
    "@type": "Organization",
    name: "Glorian Labs",
    url: "https://github.com/Glorian-Labs",
  },
  hasOccupation: {
    "@type": "Occupation",
    name: "Agentic AI & Blockchain Engineer",
    occupationLocation: { "@type": "Place", name: "Remote" },
    skills:
      "Agentic AI, Autonomous Agents, Smart Contracts, Solidity, Foundry, Hedera, Uniswap v4 Hooks, Solana, Rust, Aptos, Move, 0G, x402, A2A, AP2, Security Research",
  },
  knowsAbout: [
    "Agentic AI",
    "Autonomous Agents",
    "Agentic Commerce",
    "Smart Contract Engineering",
    "Smart Contract Auditing",
    "Hedera",
    "Ethereum",
    "Uniswap v4 Hooks",
    "Solana",
    "Aptos",
    "0G Network",
    "DeFi",
    "ZK",
    "TEE",
    "DePIN",
  ],
  sameAs: [
    "https://github.com/Hebx",
    "https://github.com/Glorian-Labs",
    "https://x.com/lordheb",
    "https://www.linkedin.com/in/ihab-hormi-552b63219/",
    "https://www.base.org/name/lordheb",
  ],
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "lordheb",
  url: SITE_URL,
  inLanguage: "en",
  author: { "@type": "Person", name: "Ihab Hormi" },
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
      </body>
    </html>
  );
}
