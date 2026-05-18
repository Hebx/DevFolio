"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SectionBackground from "./SectionBackground";
import { FaGithub, FaLinkedin, FaTelegram, FaXTwitter } from "react-icons/fa6";

const socialLinks = [

  {
    name: "Telegram",
    url: "https://t.me/lord_heb",
    icon: <FaTelegram className="w-5 h-5" />,
  },
  {
    name: "GitHub",
    url: "https://github.com/Hebx",
    icon: <FaGithub className="w-5 h-5" />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ihab-hormi-552b63219/",
    icon: <FaLinkedin className="w-5 h-5" />,
  },
  {
    name: "X",
    url: "https://x.com/lordheb",
    icon: <FaXTwitter className="w-5 h-5" />,
  },
  {
    name: "Farcaster",
    url: "https://warpcast.com/lordheb.eth",
    icon: "🔮",
  },
  {
    name: "Lens",
    url: "https://hey.xyz/u/@lordheb",
    icon: "🌱",
  },
  {
    name: "Basename",
    url: "https://www.base.org/name/lordheb",
    icon: "💎",
  },
  {
    name: "Talent",
    url: "https://app.talentprotocol.com/profile/2912579",
    icon: "🥷🏻",
  }

];

export default function About() {
  return (
    <SectionBackground id="about" className="py-24">
      <div className="container max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2"
          >
            <div className="relative group">              
              {/* Image Container */}
              <div className="relative rounded-lg overflow-hidden bg-white dark:bg-gray-800">
                <Link href="#hero">
                  <Image
                    src="/Images/devcon7.jpg"
                    alt="Ihab Hormi (lordheb) at Devcon 7"
                    width={600}
                    height={700}
                    sizes="(max-width: 1024px) 90vw, 500px"
                    className="object-cover transition duration-300 group-hover:scale-105 cursor-pointer"
                  />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 space-y-8"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-purple-600 dark:text-purple-400 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">
              About Me
            </h2>

            <div className="space-y-6 text-gray-700 dark:text-gray-200">
              <p>
                I’m <span className="font-semibold text-purple-600 dark:text-purple-400">Hebx (0xHeb)</span>. I architect agentic systems, ship smart contracts, and engineer the full stack around them. I move across protocols, runtimes, and security like one continuous surface.
              </p>
              <p>
                A <span className="text-indigo-600 dark:text-indigo-400">futurist by instinct, a visionary by craft</span> — I translate the next decade of decentralized AI, verifiable coordination, and machine-native economies into working systems: hackathon-winning builds, protocol research, secure smart contracts, and production-grade product surfaces.
              </p>
              <p>
Today, my proof-of-work runs on two tracks. By day, I ship full-stack modern AI-enabled platforms. In parallel, I lead <span className="font-semibold text-indigo-600 dark:text-indigo-400">Glorian Labs</span> as the founder — an early-stage AI agency & Web3 startup engineering the <span className="text-purple-600 dark:text-purple-400">autonomous coordination, agentic commerce, and verifiable infrastructure</span> across decentralized networks.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                Open to senior engineering, protocol research, security audits, Web3 grants, and agentic AI collaborations.
              </p>
            </div>

            {/* Social Links */}
            <div className="pt-6 space-y-8">
              <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-400 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 mb-4">
                Connect With Me
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {socialLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300"
                  >
                    <span className="text-purple-600 dark:text-purple-400">{link.icon}</span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover:text-purple-600 dark:group-hover:text-purple-400">
                      {link.name}
                    </span>
                  </Link>
                ))}
              </div>

              {/* Calendly Section */}
              <div className="pt-4">
                <div className="flex flex-col items-start space-y-4">
          
                  <p className="text-gray-700 dark:text-gray-200">
                    Want to discuss a collaboration? Let&apos;s schedule a meeting.
                  </p>
                  <Link
                    href="https://calendly.com/ihab-heb/collab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r 
                             from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 
                             text-white font-medium transition-all duration-300 dark:text-white-400"
                  >
                    <span>Schedule Time</span>
                    <svg 
                      className="w-5 h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionBackground>
  );
}