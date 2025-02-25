"use client";

import { motion } from "framer-motion";
import SectionBackground from "./SectionBackground";

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
    <SectionBackground id="education" className="py-24">
      <div className="container max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold text-purple-600 dark:text-purple-400 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400"
          >
            Education
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-gray-700 dark:text-gray-200"
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
              className="group relative p-8 bg-white dark:bg-gray-800 rounded-2xl 
                       border border-gray-200 dark:border-gray-700 shadow-xl dark:shadow-none 
                       hover:border-purple-500 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-shrink-0">
                  <span className="flex items-center justify-center w-12 h-12 bg-purple-100 dark:bg-purple-900 
                                 text-purple-600 dark:text-purple-300 rounded-xl text-2xl">
                    {edu.icon}
                  </span>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {edu.school}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <span className="px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900 
                                   text-purple-700 dark:text-purple-300">
                        {edu.degree}
                      </span>
                      <span className="dark:text-gray-400">•</span>
                      <span>{edu.period}</span>
                      <span className="dark:text-gray-400">•</span>
                      <span>{edu.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-200 mb-4">
                    {edu.description}
                  </p>
                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, i) => (
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