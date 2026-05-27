"use client";

import { motion } from "framer-motion";
import SectionBackground from "./SectionBackground";

const experiences = [
  {
    title: "Founder",
    company: "Glorian Labs",
    period: "02/2026 - Present",
    location: "Remote",
    description:
      "Building the execution layer for autonomous agents — coordination protocols, verifiable workflows, and AI-native tools across decentralized networks.",
    icon: "🔮",
  },
  {
    title: "Full-Stack Engineer",
    company: "Data Phleet",
    period: "11/2025 - 01/2026",
    location: "Remote",
    description:
      "AI-powered document processing and compliance workflows for a NERC platform serving regulated electric utilities.",
    icon: "🧩",
  },
  {
    title: "Full-Stack Engineer",
    company: "Capture Alpha",
    period: "11/2022 - 11/2024",
    location: "Remote",
    description:
      "Founding engineer of Launch.Box — an agentic decentralized compute marketplace where AI agents discover, price, and allocate GPU resources.",
    icon: "🔗",
  },
  {
    title: "Blockchain QA Engineer",
    company: "EXA Market",
    period: "02/2023 - 04/2023",
    location: "Remote",
    description:
      "Tested marketplace APIs, blockchain routers, and Teal smart contracts for an Algorand NFT platform.",
    icon: "🔍",
  },
  {
    title: "Web3 Fellow & Community Contributor",
    company: "Developer DAO",
    period: "10/2022 - 04/2023",
    location: "Remote",
    description:
      "Contributor to the global distributed community of innovators shaping the future of the people’s internet.",
    icon: "⚡",
  },
];

export default function Experience() {
  return (
    <SectionBackground id="experience" className="py-24">
      <div className="container max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold text-purple-600 dark:text-purple-400 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400"
          >
            Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-gray-700 dark:text-gray-200"
          >
            Roles across AI systems, blockchain protocols, and security research.
          </motion.p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative p-8 bg-white dark:bg-gray-800 rounded-2xl
                       border border-gray-200 dark:border-gray-700 shadow-xl dark:shadow-none
                       hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-shrink-0">
                  <span className="flex items-center justify-center w-12 h-12 bg-purple-100 dark:bg-purple-900
                                 text-purple-600 dark:text-purple-300 rounded-xl text-2xl">
                    {exp.icon}
                  </span>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <span className="px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900
                                   text-purple-700 dark:text-purple-300">
                        {exp.company}
                      </span>
                      <span className="dark:text-gray-400">•</span>
                      <span>{exp.period}</span>
                      <span className="dark:text-gray-400">•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-200">
                    {exp.description}
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
