"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { BackgroundGradient } from "./Hero";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ihab-hormi-552b63219/",
    icon: <FaLinkedin className="w-5 h-5" />,
  },
  {
    name: "GitHub",
    url: "https://github.com/hebx",
    icon: <FaGithub className="w-5 h-5" />,
  },
  {
    name: "Twitter",
    url: "https://x.com/lordheb",
    icon: <FaTwitter className="w-5 h-5" />,
  },
  {
    name: "Email",
    url: "mailto:Ihab.Hormi@hotmail.com",
    icon: <MdEmail className="w-5 h-5" />,
  },
];

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Achievements", href: "#achievements" },
];

export default function Footer() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  
  return (
    <footer className="relative bg-white dark:bg-black text-gray-800 dark:text-white overflow-hidden">
      {/* Use the same background gradient as Hero */}
      <BackgroundGradient />
      
      {/* Content */}
      <div className="container max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link href="#" className="inline-block">
              <div className="flex items-center">
                <span className="text-2xl mr-2">⚡</span>
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">
                  GM
                </span>
              </div>
            </Link>
            <p className="text-gray-600 dark:text-gray-300 max-w-sm">
             Welcome Anon to Web3 and the Cypherpunk Movement, Join us on this path that very few walk. Join us on the journey to secure the peoples internet. May we soar to new heights and have our name echoed through the decentralized web.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-lg bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-white hover:bg-purple-50 dark:hover:bg-purple-500/20 transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                  {hoverIndex === index && (
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs whitespace-nowrap bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-2 py-1 rounded"
                    >
                      {social.name}
                    </motion.span>
                  )}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500/50 group-hover:bg-purple-400 transition-colors"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-6 relative inline-block">
              Get in Touch
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></span>
            </h3>
            <div className="space-y-4">
              <p className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Ihab.Hormi@hotmail.com
              </p>
              <p className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Casablanca, Morocco
              </p>
            </div>
          </div>

          {/* Newsletter/Calendly Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-6 relative inline-block">
              Schedule a Meeting
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></span>
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Want to discuss a project or collaboration opportunity?
            </p>
            <Link
              href="https://calendly.com/ihab-heb/collab"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium hover:from-purple-700 hover:to-indigo-700 transition-all duration-300"
            >
              <span>Book a Meeting</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-800/50 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              © {new Date().getFullYear()} HEBX LTD. All rights reserved.
            </p>
            <motion.a
              href="#"
              whileHover={{ y: -5 }}
              className="p-3 rounded-full bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-white hover:bg-purple-50 dark:hover:bg-purple-500/20 transition-all duration-300"
              aria-label="Back to top"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}