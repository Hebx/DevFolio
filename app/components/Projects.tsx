"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionBackground from "./SectionBackground";

const projects = [
  {
    name: "Hedron",
    type: "Hedera-Native Agentic Commerce SDK",
    status: "v0.2 · Alpha",
    description:
      "Router/Broker runtime for autonomous agents on Hedera. Discover → quote → policy → settle → execute → verifiable receipt anchored on HCS. Speaks A2A, AP2, HCS-10, and x402 (Hedera exact scheme).",
    link: "https://github.com/Glorian-Labs/Hedron",
    tags: ["Hedera", "HCS", "x402", "A2A / AP2", "TypeScript"],
    icon: "🔮",
    recognition:
      "Top 3, AI & DePIN — Hedera Africa Hackathon. $30K prize, 1,300+ submissions.",
  },
  {
    name: "AgentGuard",
    type: "WDK Middleware · Self-Custodial Agent Payments",
    status: "Beta · npm",
    description:
      "Tether WDK middleware that gives any wallet (EVM, TON, SOL, BTC, Spark, ERC-4337) a deterministic local policy engine and ed25519-signed receipts on every transaction. One registerMiddleware call, no per-chain forks.",
    link: "https://github.com/Hebx/wdk-wrapper-agentguard",
    tags: ["Tether WDK", "ed25519", "Bare runtime", "Polygon"],
    icon: "🛡️",
    recognition: "Built for Tether WDK Module bounty (Mar 2026).",
  },
  {
    name: "HashTrail",
    type: "Hedera Receipt Agent for Verifiable Rewards",
    status: "Live · Mainnet",
    description:
      "Plain-language tipping agent that leaves a public proof trail — HBAR transfer, HTS Tip Card NFT, and HCS receipt, all linkable on HashScan. Real mainnet run on HCS topic 0.0.10489911.",
    link: "https://github.com/Hebx/hashtrail-hedera-agent",
    tags: ["Hedera Agent Kit v4", "HCS", "HTS", "LangChain"],
    icon: "🧾",
    recognition: "Built for the Hedera AI Studio bounty.",
  },
  {
    name: "LiquidMind",
    type: "Autonomous Liquidity for Uniswap v4",
    status: "Research",
    description:
      "AI-driven liquidity system. A Uniswap v4 hook plus Chainlink CRE and Data Feeds drive rebalancing and dynamic fee curves. Strategy is agent-driven; the hook enforces it on-chain.",
    link: "https://github.com/Hebx/liquidmind-ai",
    tags: ["Solidity", "Uniswap v4 Hooks", "Chainlink CRE", "Foundry"],
    icon: "🌊",
    recognition: "Uniswap Hook Incubator — Atrium Academy 2026.",
  },
  {
    name: "Ascent CLI",
    type: "Agentic Commerce Toolkit on Aptos",
    status: "Beta · npm",
    description:
      "Toolkit for trust-minimized agent commerce: x402 USDC payments with a local facilitator, NFT-based agent identity (AAIS / ARC-8004), and an AgentMesh marketplace demo gated by reputation.",
    link: "https://github.com/Hebx/ascent-cli",
    tags: ["Aptos", "Move", "x402", "USDC", "AAIS"],
    icon: "⚡",
  },
  {
    name: "Proof0G",
    type: "Portable Proof Pages for 0G AI Apps",
    status: "Public · TS",
    description:
      "Create Proof Packs for 0G-native AI apps — store artifacts on 0G Storage, anchor hashes on 0G Chain, and summarize verification with 0G Compute. End-to-end verifiable AI proofs.",
    link: "https://github.com/Hebx/proof0g",
    tags: ["0G Storage", "0G Chain", "0G Compute", "TypeScript"],
    icon: "📦",
  },
  {
    name: "Proof of Verdict",
    type: "Trustless AI Judge for Agent Disputes",
    status: "Public · Solidity",
    description:
      "Agent-to-agent debate arena with verifiable, on-chain verdicts. Two agents debate, the Judge evaluates, verdicts are signed in a TEE and enforced on-chain.",
    link: "https://github.com/Hebx/proof-of-verdict",
    tags: ["Solidity", "TEE", "AI Agents", "On-chain Verdicts"],
    icon: "⚖️",
  },
  {
    name: "TrustScore Oracle",
    type: "Hedera Trust Score Oracle, Paid Per Query",
    status: "v0.1 · Testnet",
    description:
      "Producer agent computes trust scores from Arkhia mirror-node analytics and sells them via an x402-gated REST endpoint. Consumer discovers it through HCS-10, negotiates with AP2, pays in HBAR.",
    link: "https://github.com/Hebx/trustscore-oracle",
    tags: ["Hedera", "HCS-10", "x402", "AP2", "Arkhia"],
    icon: "🔍",
  },
];

export default function Projects() {
  return (
    <SectionBackground id="projects" className="py-24">
      <div className="container max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold text-purple-600 dark:text-purple-400 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400"
          >
            Selected Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-gray-700 dark:text-gray-200"
          >
            Agentic systems, on-chain apps, and verifiable infrastructure I&apos;ve shipped — most with public proofs &amp; open source. Everything else lives on GitHub.
          </motion.p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
                transition={{ delay: index * 0.05 }}
              >
                <CardWrapper
                  {...wrapperProps}
                  className="group flex h-full flex-col p-5 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl dark:shadow-none hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-start gap-2 min-w-0 flex-1">
                      <span className="text-2xl shrink-0 leading-none">{project.icon}</span>
                      <h3 className="font-semibold text-base text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors leading-snug break-words">
                        {project.name}
                      </h3>
                    </div>
                    <span className="shrink-0 whitespace-nowrap px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                      {project.status}
                    </span>
                  </div>
                  <p className="text-[11px] font-medium uppercase tracking-wide text-purple-600 dark:text-purple-400 mb-3 leading-snug">
                    {project.type}
                  </p>
                  <p className="text-[13px] leading-relaxed text-gray-700 dark:text-gray-200 mb-3">
                    {project.description}
                  </p>
                  {project.recognition && (
                    <p className="text-[11px] leading-relaxed text-indigo-700 dark:text-indigo-300 mb-3 font-medium">
                      — {project.recognition}
                    </p>
                  )}
                  <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] rounded-md bg-purple-100/70 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800"
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
