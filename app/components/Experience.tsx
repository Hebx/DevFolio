"use client";

import { motion } from "framer-motion";
import SectionBackground from "./SectionBackground";

const experiences = [
  {
    title: "Founder",
    company: "Glorian Labs",
    period: "2026 - Present",
    location: "Remote",
    description:
      "Agentic Intelligence for the Next Economy — an independent research lab exploring the intersection of AI agents and decentralized economies. We build open-source prototypes and tools that enable autonomous coordination, intelligent decision-making, and new economic primitives in Web3 environments.",
    highlights: [
      "Researching and shipping the future of intelligent economies through open-source-first agentic systems R&D.",
      "Building Hedron, a Hedera-native SDK for agentic commerce and verifiable agent coordination — recognized with a grant at the Hedera Africa Hackathon.",
      "Driving research tracks across autonomous coordination, verifiable settlement, multi-agent systems, and security automation for decentralized AI.",
    ],
    icon: "🔮",
  },
  {
    title: "Full-Stack Engineer (Contract)",
    company: "DataPhleet",
    period: "Nov 2025 - Jan 2026 · 3 mos",
    location: "Remote",
    description:
      "DataPhleet — NERC compliance management platform for electric utilities. Manages device inventory, tracks compliance standards (PRC-005, PRC-019, …), processes technical documents with AI, and generates compliance reports.",
    highlights: [
      "Shipped React + TanStack Router product surfaces backed by generated OpenAPI SDKs and DTO-driven contracts.",
      "Integrated platform authentication and access workflows via Authentik against backend API contracts.",
      "Contributed to AI-enabled features for processing technical compliance documents and generating regulatory reports.",
    ],
    icon: "🧩",
  },
  {
    title: "Building Launch.Box Protocol — The Agentic Era of Decentralized Compute",
    company: "Capture Alpha",
    period: "11/2022 - Present",
    location: "Remote",
    description:
      "Launch.Box is a decentralized computing paradigm where autonomous AI agents orchestrate GPU resource allocation and optimization — a marketplace where agents automatically discover, price, and allocate resources, generating compound yields through sophisticated bidding strategies. Includes an AI inference market for cost-effective LLM execution and a node deployment platform, addressing the fragmentation of the thriving compute market.",
    highlights: [
      "Architecting the agentic GPU marketplace: autonomous discovery, dynamic pricing, and allocation strategies that compound yield across decentralized compute supply.",
      "Building the AI inference market layer for cost-effective LLM execution across the network.",
      "Shipping the node deployment platform that turns fragmented compute supply into a unified, agent-orchestrated substrate.",
    ],
    icon: "🔗",
  },
  {
    title: "Blockchain QA & Smart Contract Auditor",
    company: "Exa Market",
    period: "02/2023 - 04/2023",
    location: "Remote",
    description:
      "NFT marketplace on Algorand — hardened the platform’s blockchain layer, marketplace product, and Teal smart contracts for production-grade reliability.",
    highlights: [
      "Engineered test coverage across the blockchain router, Assets API, and NFT collection syncers — building the safety net for high-throughput on-chain operations.",
      "Drove manual and automated QA across the marketplace product surface, surfacing edge-case bugs and optimization paths before production.",
      "Audited the Teal smart contracts powering the marketplace — reviewing on-chain logic for security, correctness, and exploit resistance.",
    ],
    icon: "🔍",
  },
  {
    title: "Web3 Developer",
    company: "Developer DAO",
    period: "10/2022 - 04/2023",
    location: "Remote",
    description: "Contributor to the global distributed community of innovators, shaping the future of the people's internet",
    highlights: [
      "Fostering a decentralized interconnected web, Advocating for transparency and driving a paradigm shift, Building web3 with frens and Contributing to open-source blockchain projects.",
    ],
    icon: "⚡"
  },
  {
    title: "Solidity Bootcamp Mentor",
    company: "Growic",
    period: "06/2022 - 08/2022",
    location: "Remote",
    description: "Growic is an education platform advancing web3 developers training",
    highlights: [
      "Monitor student progress on the assigned subjects, completed tasks and explicit feedbacks while organizing workshops, live-coding and Q&A sessions on the Growic platform.",
    ],
    icon: "👨‍🏫"
  }
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
            Work Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-gray-700 dark:text-gray-200"
          >
            Professional journey across blockchain, AI agent infrastructure, and full-stack engineering
          </motion.p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
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
                  <p className="text-gray-700 dark:text-gray-200 mb-4">
                    {exp.description}
                  </p>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700 dark:text-gray-200">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 dark:bg-purple-400" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionBackground>
  );
} 