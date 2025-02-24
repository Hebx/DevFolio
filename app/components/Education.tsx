"use client";

import { motion } from "framer-motion";

const education = [
  {
    school: "42 Abu Dhabi",
    degree: "Software Engineering",
    period: "2021 - 2023",
    location: "Abu Dhabi, UAE",
    description: "Peer-to-peer learning program focused on project-based software development",
    highlights: [
      "Selected among top performers with a proven track record of success, awards and certificates",
      "Secretary and Treasurer of the Student Council",
      "Founder of the 42 Blockchain Alliance DAO"
    ],
    icon: "🎓"
  },
  {
    school: "Hassan II University",
    degree: "Theoretical Physics",
    period: "2013 - 2017",
    location: "Casablanca, Morocco",
    description: "Comprehensive study of mathematical physics, quantum theory, and general relativity",
    highlights: [
      "Independent Research on Conciousness and Entanglement at a Quantum Level",
      "Exploring the Esoteric knowledge of ancient civilizations and it's interconnectedness with the futuristic sciences"
    ],
    icon: "🏛️"
  }
];

export default function Education() {
  return (
    <section id="education" className="relative py-20 bg-white dark:bg-black">
      <div className="absolute top-0 right-0 w-full h-96 bg-gradient-to-b from-purple-100/20 dark:from-purple-900/20 via-transparent to-transparent" />
      
      <div className="container max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400"
          >
            Education
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-gray-600 dark:text-gray-300"
          >
            Academic journey and learning experiences
          </motion.p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative p-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl 
                       border border-gray-200/50 dark:border-gray-700/50 shadow-xl dark:shadow-gray-900/10 
                       hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-shrink-0">
                  <span className="flex items-center justify-center w-12 h-12 bg-purple-500/10 dark:bg-purple-500/20 
                                 text-purple-600 dark:text-purple-400 rounded-xl text-2xl">
                    {edu.icon}
                  </span>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {edu.school}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="px-3 py-1 rounded-full bg-purple-500/5 dark:bg-purple-500/10 
                                   text-purple-600 dark:text-purple-400">
                        {edu.degree}
                      </span>
                      <span>•</span>
                      <span>{edu.period}</span>
                      <span>•</span>
                      <span>{edu.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {edu.description}
                  </p>
                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500/50" />
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
    </section>
  );
} 