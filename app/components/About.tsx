"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  {
    name: "Talent Protocol",
    url: "https://app.talentprotocol.com/profile/2912579",
    icon: "🎯",
  },
  {
    name: "GitHub",
    url: "https://github.com/hebx",
    icon: "💻",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ihab-hormi-552b63219/",
    icon: "🔗",
  },
  {
    name: "Twitter",
    url: "https://x.com/lordheb",
    icon: "X",
  },
  {
    name: "Farcaster",
    url: "https://warpcast.com/lordheb.eth",
    icon: "🪞",
  },
  {
    name: "Lens",
    url: "https://hey.xyz/u/@lordheb",
    icon: "🌿",
  },
  {
    name: "Basename",
    url: "https://www.base.org/name/lordheb",
    icon: "💎",
  },
  {
    name: "Telegram",
    url: "https://t.me/lord_heb",
    icon: "💬",
  }
];

export default function About() {
  return (
    <section id="about" className="relative py-20 bg-white dark:bg-black">
      <div className="absolute bottom-0 right-0 w-full h-96 bg-gradient-to-t from-purple-100/20 dark:from-purple-900/20 via-transparent to-transparent" />
      
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
              <div className="relative rounded-lg overflow-hidden bg-white">
                <Image
                  src="/Images/devcon7.jpg"
                  alt="Hebx Devfolio"
                  width={600}
                  height={700}
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
              About Me
            </h2>

            <div className="space-y-6 text-gray-600 dark:text-gray-300">
              <p>
                I&apos;m a passionate software developer with a deep mastery of software development, 
                cutting-edge tools, and programming languages.
              </p>
              
              <p>
                With extensive expertise in Full Stack Web3 Development, Smart Contract Programming, 
                and Blockchain Research, I bring a proven track record in harnessing AI agents to 
                shape the emerging Crypto x AI landscape.
              </p>

              <p>
                I&apos;m passionate about integrating decentralized systems with intelligent automation, 
                eager to drive innovation at the intersection of blockchain and artificial intelligence.
              </p>
            </div>

            {/* Social Links */}
            <div className="pt-6 space-y-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Connect With Me
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {socialLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-white/50 dark:bg-gray-800/50 
                             border border-gray-200/50 dark:border-gray-700/50 hover:border-purple-500/50 
                             dark:hover:border-purple-500/50 transition-all duration-300"
                  >
                    <span className="text-xl">{link.icon}</span>
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-300 
                                   group-hover:text-purple-600 dark:group-hover:text-purple-400">
                      {link.name}
                    </span>
                  </Link>
                ))}
              </div>

              {/* Calendly Section */}
              <div className="pt-4">
                <div className="flex flex-col items-start space-y-4">
          
                  <p className="text-gray-600 dark:text-gray-300">
                    Want to discuss a collaboration? Let&apos;s schedule a meeting.
                  </p>
                  <Link
                    href="https://calendly.com/ihab-heb/collab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r 
                             from-purple-600 to-indigo-600 text-white font-medium 
                             hover:from-purple-700 hover:to-indigo-700 transition-all duration-300"
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
    </section>
  );
}