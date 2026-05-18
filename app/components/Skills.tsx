"use client";

import { motion } from "framer-motion";
import SectionBackground from "./SectionBackground";

const skillCategories = [
  {
    title: "Blockchain & Protocols",
    skills: ["Solidity", "Smart Contracts", "EVM", "Hedera / HCS", "Solana", "Uniswap v4 Hooks", "Chainlink", "Cairo / Starknet", "Cosmos IBC", "Rust", "Huff", "Assembly", "x402", "A2A / MCP", "DeFi", "NFTs", "DAOs", "RWA"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Full-Stack Web",
    skills: ["TypeScript", "React", "Next.js", "Node.js", "TanStack Router", "OpenAPI SDKs", "REST APIs", "GraphQL", "Auth / Authentik", "MongoDB", "Supabase", "Docker", "Vercel", "CI/CD", "AWS", "Tailwind CSS", "shadcn/ui"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
  },
  {
    title: "Agentic AI",
    skills: ["AI Agents", "Agentic Workflows", "Agentic Frameworks", "Autonomous Agents", "LLM Integration", "RAG", "AI Inference", "Azure OpenAI", "Decentralized AI", "Decentralized Compute (GPU)", "Decentralized Infrastructure (Nodes)"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Security Research",
    skills: ["Smart Contract Auditing", "Smart Contract Security", "Rust Security", "Protocol Research", "ZK / Proof Systems", "zk-Rollups", "Fuzzing", "Echidna", "Glider", "DeFi Security", "TEE", "Cryptographic Coordination"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
];

export default function Skills() {
  return (
    <SectionBackground id="skills" className="py-20">
      <div className="max-w-3xl mx-auto text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl lg:text-4xl font-bold text-purple-600 dark:text-purple-400 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400"
        >
          Technical Expertise
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-lg text-gray-700 dark:text-gray-200"
        >
          A showcase of my technical skills and proficiency across different domains
        </motion.p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: categoryIndex * 0.2 }}
            className="group relative p-8 bg-white dark:bg-gray-800 rounded-2xl 
                       border border-gray-200 dark:border-gray-700 shadow-xl dark:shadow-none 
                       hover:border-purple-500/50 transition-all duration-300"
          >
            <div className="relative">
              <div className="flex items-center gap-4 mb-8">
                <motion.span 
                  whileHover={{ scale: 1.1 }}
                  className="p-3 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 ring-1 ring-purple-500/20 dark:ring-purple-400/20"
                >
                  {category.icon}
                </motion.span>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                    className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded-lg text-sm 
                             border border-purple-200 dark:border-purple-800"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionBackground>
  );
}