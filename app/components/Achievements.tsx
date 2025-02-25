"use client";

import { motion } from "framer-motion";
import SectionBackground from "./SectionBackground";

const awards = [
  {
    title: "Mode AI Founders Incubation Top 3",
    organization: "Mode AI",
    icon: "🏆",
  },
  {
    title: "FutureHack Gitex Top Creative Concept",
    organization: "Hackmasters & EmiratesNBD",
    icon: "🎯",
  },
  {
    title: "EthGlobal SuperHack Zora Best Use",
    organization: "EthGlobal",
    icon: "💫",
  },
  {
    title: "Eth Online Tableland and Unstoppable Domains Pool Prize",
    organization: "Ethereum Foundation",
    icon: "🌟",
  },
  {
    title: "EthSafari WorldCoinID & Coinbase Prize",
    organization: "Ethereum Foundation",
    icon: "🏅",
  },
  {
    title: "HackMoney Transak Pool Prize Winner",
    organization: "HackMoney",
    icon: "🎉",
  },
  {
    title: "HackTheBox Cysec Global CTF Winner",
    organization: "HackTheBox",
    icon: "🔥",
  },
  {
    title: "CARE-X Trail of Bits Echidna Top 7",
    organization: "Secureum",
    icon: "🛡️",
  },
];

const certifications = [
  {
    title: "Certificate of Appreciation as a guest speaker",
    organization: "Blockchain & Web3 Workshop - Abu Dhabi University",
    icon: "🎓",
  },
  {
    title: "Certificate of Appreciation & Proof of Contribution",
    organization: "UTAS Blockchain event - University of Oman",
    icon: "📜",
  },
  {
    title: "Certificate of Honor \"Here's to an MVP\"",
    organization: "42 Abu Dhabi",
    icon: "🏆",
  },
  {
    title: "Certificate of Completion \"Quantum Computing\"",
    organization: "IBM Quantum & The Coding School by Qubit",
    icon: "⚛️",
  },
  {
    title: "Certified Expert Solidity & ZK Developer",
    organization: "Encode Club",
    icon: "💻",
  },
  {
    title: "Kernel Fellow KB8",
    organization: "Gitcoin",
    icon: "🌱",
  },
  {
    title: "Full Stack Engineer",
    organization: "Codecademy",
    icon: "💻",
  },
  {
    title: "Secure Coding",
    organization: "Hack The Box",
    icon: "🔒",
  },
];

export default function Achievements() {
  return (
    <SectionBackground id="achievements" className="py-20">
      {/* Awards Section */}
      <div className="mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl lg:text-4xl font-bold text-center text-purple-600 dark:text-purple-400 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 mb-12"
        >
          Awards & Recognition
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <span className="text-2xl">{award.icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors text-sm">
                    {award.title}
                  </h3>
                  <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">
                    {award.organization}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certifications Section */}
      <div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl lg:text-4xl font-bold text-center text-purple-600 dark:text-purple-400 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 mb-12"
        >
          Certifications
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <span className="text-2xl">{cert.icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors text-sm">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">
                    {cert.organization}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionBackground>
  );
} 