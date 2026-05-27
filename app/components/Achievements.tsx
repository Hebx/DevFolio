"use client";

import { motion } from "framer-motion";
import SectionBackground from "./SectionBackground";

const awards = [
  {
    title: "Hedron — Hedera Africa Hackathon Top 3 AI & DePIN",
    organization: "Hedera · Hashgraph",
    icon: "🏆",
  },
  {
    title: "Mode AI Founders Incubation Top 3",
    organization: "Mode Network",
    icon: "🏆",
  },
  {
    title: "CARE-X Trail of Bits Echidna Top 7",
    organization: "Secureum",
    icon: "🛡️",
  },
  {
    title: "HackTheBox Cysec Global CTF Winner",
    organization: "HackTheBox",
    icon: "🔥",
  },
  {
    title: "EthGlobal SuperHack Zora Best Use",
    organization: "EthGlobal · Ethereum Foundation",
    icon: "💫",
  },
  {
    title: "ETHOnline Tableland & Unstoppable Domains Pool Prize",
    organization: "EthGlobal · Ethereum Foundation",
    icon: "🌟",
  },
  {
    title: "HackMoney WorldCoinID, Coinbase & Transak Pool Prize",
    organization: "EthGlobal · Ethereum Foundation",
    icon: "🎉",
  },
  {
    title: "FutureHack Gitex Top Creative Concept",
    organization: "Hackmasters & EmiratesNBD",
    icon: "🎯",
  },
];

const certifications = [
  {
    title: "Kernel Fellow KB8",
    organization: "Gitcoin",
    icon: "🌱",
  },
  {
    title: "RektOff Rust Security Bootcamp",
    organization: "RektOff",
    icon: "🦀",
  },
  {
    title: "Uniswap Hook Incubator Cohort 8",
    organization: "Atrium Academy / Uniswap Ecosystem",
    icon: "🦄",
  },
  {
    title: "Certified Expert Solidity & ZK Developer",
    organization: "Encode Club",
    icon: "💻",
  },
  {
    title: "Certificate of Completion \u201CQuantum Computing\u201D",
    organization: "IBM Quantum & The Coding School by Qubit",
    icon: "⚛️",
  },
  {
    title: "Certificates of Honor",
    organization: "42 Abu Dhabi",
    icon: "🏆",
  },
  {
    title: "Certificate of Appreciation as a guest speaker",
    organization: "Blockchain & Web3 Workshop · Abu Dhabi University",
    icon: "🎓",
  },
  {
    title: "Certificate of Contribution as a guest speaker",
    organization: "UTAS Blockchain Event · University of Oman",
    icon: "📜",
  },
];

export default function Achievements() {
  return (
    <SectionBackground id="achievements" className="py-20">
      <div className="container max-w-7xl mx-auto px-6 lg:px-10">
        {/* Awards / Recognition */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold text-center text-purple-600 dark:text-purple-400 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 mb-4"
          >
            Recognition
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center text-lg text-gray-700 dark:text-gray-200 mb-12"
          >
            Hackathons, Grants and Contests where the work spoke for itself.
          </motion.p>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {awards.map((award, index) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group p-5 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300 h-full"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">{award.icon}</span>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors text-sm leading-snug">
                      {award.title}
                    </h3>
                    <p className="text-xs text-gray-700 dark:text-gray-300 mt-1.5 leading-relaxed">
                      {award.organization}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold text-center text-purple-600 dark:text-purple-400 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 mb-4"
          >
            Certifications
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center text-lg text-gray-700 dark:text-gray-200 mb-12"
          >
            Bootcamps, Fellowships and Events that sharpened the craft.
          </motion.p>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group p-5 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300 h-full"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">{cert.icon}</span>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors text-sm leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-gray-700 dark:text-gray-300 mt-1.5 leading-relaxed">
                      {cert.organization}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionBackground>
  );
}
