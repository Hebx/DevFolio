"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Blockchain",
    skills: ["Smart Contracts", "Web3", "DeFi", "Solidity", "zk-SNARKS", "Ethereum"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Development",
    skills: ["Full Stack", "TypeScript", "Node.js", "React", "Next.js", "REST APIs"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
  },
  {
    title: "AI & Research",
    skills: ["AI Integration", "ML Models", "Research", "Data Analysis", "GPU Computing", "Autonomous Agents"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 bg-white dark:bg-black">
      <div className="absolute top-0 right-0 w-full h-96 bg-gradient-to-b from-purple-100/20 dark:from-purple-900/20 via-transparent to-transparent" />
      
      <div className="container max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400"
          >
            Technical Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-gray-600 dark:text-gray-300"
          >
            A showcase of my technical skills and proficiency levels across different domains
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
              className="group relative p-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl 
                         border border-gray-200/50 dark:border-gray-700/50 shadow-xl dark:shadow-gray-900/10 
                         hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="relative">
                <div className="flex items-center gap-4 mb-8">
                  <motion.span 
                    whileHover={{ scale: 1.1 }}
                    className="p-3 bg-purple-500/10 dark:bg-purple-500/20 rounded-xl 
                             text-purple-600 dark:text-purple-400 ring-1 ring-purple-500/20 
                             dark:ring-purple-500/30"
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
                      className="px-3 py-1 bg-purple-500/5 dark:bg-purple-500/10 
                               text-purple-600 dark:text-purple-400 rounded-lg text-sm 
                               border border-purple-500/10 dark:border-purple-500/20"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}