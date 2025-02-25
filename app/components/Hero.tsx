"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

// Extract background elements into a separate component for reuse
export function BackgroundGradient() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-transparent dark:via-black dark:to-black">
      <motion.div
        className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-purple-500/30 to-transparent rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-indigo-500/30 to-transparent rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
}

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate rotation based on mouse position
      const rotateY = ((clientX - innerWidth / 2) / innerWidth) * 10;
      const rotateX = ((clientY - innerHeight / 2) / innerHeight) * -10;

      setMousePosition({ x: rotateY, y: rotateX });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    controls.start({
      rotateY: mousePosition.x,
      rotateX: mousePosition.y,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 30,
        mass: 0.5
      }
    });
  }, [controls, mousePosition]);

  return (
    <section className="relative min-h-screen flex items-center bg-white dark:bg-black overflow-hidden">
      {/* Use the extracted background component */}
      <BackgroundGradient />
      
      <div className="container max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text content */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <motion.h2
                onClick={() => {
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-5xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-600 via-pink-500 to-indigo-600 dark:from-purple-400 dark:via-pink-400 dark:to-indigo-400 cursor-pointer"
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: 0,
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  backgroundPosition: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear"
                  }
                }}
                whileHover={{
                  scale: 1.05,
                  cursor: "pointer",
                  transition: { duration: 0.2 }
                }}
              >
                Ihab Heb
              </motion.h2>
              
              <motion.h2 
                className="text-5xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
               Blockchain & AI Developer
              </motion.h2>

              <motion.p 
                className="text-xl leading-relaxed text-gray-600 dark:text-gray-300 max-w-2xl tracking-wide"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                Visionary, Futurist and Digital Nomad exploring the fascinating intersection of 
                <span className="text-purple-600 dark:text-purple-400"> Blockchain </span> 
                & 
                <span className="text-indigo-600 dark:text-indigo-400"> Artificial Intelligence</span>.
                Currently focusing on developing and researching autonomous
                <span className="text-indigo-600 dark:text-indigo-400"> AI Agents </span>
                & 
                <span className="text-purple-600 dark:text-purple-400"> Web3 Infrastructure</span>.
              </motion.p>

              <motion.div 
                className="flex flex-wrap gap-4 pt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <motion.a
                  href="https://beige-disgusted-swordfish-225.mypinata.cloud/ipfs/bafybeif2exmukmax6ju6uttf4hultx4ftejc2rhqq7p4zxua4ygveqjer4"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium hover:from-purple-700 hover:to-indigo-700 transition-all duration-300"
                >
                  <span>Download CV</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </motion.a>

                <motion.a
                  href="mailto:Ihab.Hormi@hotmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 rounded-full border border-purple-500/30 text-purple-600 dark:text-purple-400 hover:text-purple-500 dark:hover:text-purple-300 hover:border-purple-500/60 transition-all duration-300"
                >
                  <span>Contact Me</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-1/2 perspective-1000"
          >
            <motion.div 
              className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] mx-auto rounded-[30px] p-6 card-gradient"
              animate={controls}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Card inner shadow/highlight effect */}
              <div className="absolute inset-0 rounded-[30px] bg-gradient-to-br from-purple-600/20 via-transparent to-indigo-600/20 backdrop-blur-sm" />
              
              {/* Image container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-900">
                <Image
                  src="/Images/Hero1.jpg"
                  alt="Hebx Profile"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 300px, 400px"
                />
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Floating gradient orbs with animation */}
              <motion.div
                className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-20 -left-20 w-40 h-40 bg-indigo-500/30 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
