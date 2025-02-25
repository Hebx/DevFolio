"use client";

import { motion } from "framer-motion";
import SectionBackground from "./SectionBackground";

const skillCategories = [
  {
    title: "Blockchain",
    skills: ["Smart Contracts Development & Security", "Web3", "DeFi", "Solidity", "zk-Rollups", "EVM", "Teal", "Algorand", "Cairo", "Starknet", "Cosmos IBC", "Solana Programs", "Rust", "NFTs", "DAOs", "RWA"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Software",
    skills: ["Full Stack Web Development & Security", "TypeScript", "Node.js", "React", "Next.js", "REST APIs", "MongoDB", "Supabase", "GraphQL", "Docker", "Vercel", "CI/CD", "AWS", "TEE", "Tailwind CSS", "shadcn/ui" , "C" ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
  },
  {
    title: "AI & Research",
    skills: ["LLM Integration", "RAG", "Agentic Frameworks", "Decentralized Computing [GPU]", "Autonomous Agents", "Decentralized Infrastructure [Nodes]", "AI Inference", "Decentralized AI"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
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

      <div className="grid gap-8 lg:grid-cols-3">
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