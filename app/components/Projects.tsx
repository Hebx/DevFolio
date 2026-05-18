"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionBackground from "./SectionBackground";

const projects = [
  {
    name: "Glorian Labs",
    type: "Agentic Agency / Startup",
    status: "Early Stage",
    description:
      "An early-stage agentic agency and AI \u00d7 Web3 startup building autonomous systems, verifiable coordination tools, and infrastructure experiments for the next machine-native economy.",
    link: "https://glorianlabs.com",
    tags: ["AI Agents", "Web3 Infra", "Agentic Economy"],
    icon: "\u26a1",
  },
  {
    name: "Hedron",
    type: "Flagship Project",
    status: "Alpha / Grant Recipient",
    description:
      "A Hedera-native SDK for agentic commerce, enabling autonomous agents to coordinate, negotiate, settle payments, and produce verifiable receipts.",
    link: "https://github.com/Glorian-Labs/Hedron",
    tags: ["Hedera", "Agents", "HCS", "x402"],
    icon: "\ud83d\udd2e",
  },
  {
    name: "Proof0G",
    type: "Founder-Led Prototype",
    status: "Active R&D",
    description:
      "An active experiment exploring proof networks, decentralized AI infrastructure, and verification primitives for autonomous systems.",
    link: "https://github.com/Hebx/proof0g",
    tags: ["0G", "Proof Networks", "Decentralized AI"],
    icon: "\ud83e\uddea",
  },
  {
    name: "LiquidMind",
    type: "DeFi / Agentic Liquidity Research",
    status: "Prototype",
    description:
      "A research prototype exploring autonomous liquidity, Uniswap v4 hooks, Chainlink-powered market intelligence, and strategy automation.",
    link: "https://github.com/Hebx/liquidmind-ai",
    tags: ["Uniswap v4", "Chainlink", "DeFi"],
    icon: "\ud83c\udf0a",
  },
  {
    name: "Proof of Verdict",
    type: "Verification / Trust Prototype",
    status: "Prototype",
    description:
      "A founder-led experiment around verifiable decision-making, trust signals, and proof-oriented workflows for decentralized systems.",
    link: "https://github.com/Hebx/proof-of-verdict",
    tags: ["Verification", "Trust", "Proof Systems"],
    icon: "\u2696\ufe0f",
  },
  {
    name: "Agentic Prototypes",
    type: "Personal R&D Bench",
    status: "Active",
    description:
      "A living stream of experiments across autonomous agents, payment rails, DeFi infrastructure, Web3 security, and machine-native coordination.",
    link: "https://github.com/Hebx",
    tags: ["AI Agents", "Hackathons", "Protocol R&D"],
    icon: "\ud83d\udee0\ufe0f",
  },
];

export default function Projects() {
  return (
    <SectionBackground id="projects" className="py-24">
      <div className="container max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold text-purple-600 dark:text-purple-400 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400"
          >
            Active Builds & Research
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-gray-700 dark:text-gray-200"
          >
            Selected projects, prototypes, and research directions across Web3 infrastructure, AI agents, protocol systems, and security.
          </motion.p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => {
            const CardWrapper: React.ElementType = project.link ? Link : "div";
            const wrapperProps = project.link
              ? { href: project.link, target: "_blank", rel: "noopener noreferrer" }
              : {};
            return (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <CardWrapper
                  {...wrapperProps}
                  className="group flex h-full flex-col p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl dark:shadow-none hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{project.icon}</span>
                      <h3 className="font-semibold text-lg text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {project.name}
                      </h3>
                    </div>
                    <span className="shrink-0 whitespace-nowrap px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                      {project.status}
                    </span>
                  </div>
                  <p className="text-xs font-medium uppercase tracking-wide text-purple-600 dark:text-purple-400 mb-3">
                    {project.type}
                  </p>
                  <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-200 mb-4">
                    {project.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs rounded-md bg-purple-100/70 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardWrapper>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionBackground>
  );
}
