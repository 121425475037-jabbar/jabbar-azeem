import React, { useState } from 'react';
import {
  Code,
  Database,
  Sparkles,
  Layout,
  Terminal,
  BarChart2,
  Cpu,
  Activity,
  Compass,
  Layers,
  Eye,
  Maximize2,
  X,
  Globe,
  Radio,
  Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const DigitalWorkbench: React.FC = () => {
  const [viewMode, setViewMode] = useState<'vision' | 'workbench'>('vision');
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <div className="relative w-full max-w-2xl mx-auto flex flex-col items-center">
      {/* View Switcher Controls */}
      <div className="mb-3 flex items-center gap-1.5 p-1 rounded-full bg-zinc-900/90 border border-white/10 backdrop-blur-md shadow-lg z-30">
        <button
          type="button"
          onClick={() => setViewMode('vision')}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer ${
            viewMode === 'vision'
              ? 'bg-cyan-500/20 text-cyan-200 border border-cyan-400/40 shadow-sm'
              : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
          }`}
        >
          <Eye className="w-3.5 h-3.5 text-cyan-400" />
          <span>Vision Command Deck</span>
        </button>

        <button
          type="button"
          onClick={() => setViewMode('workbench')}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer ${
            viewMode === 'workbench'
              ? 'bg-indigo-500/20 text-indigo-200 border border-indigo-400/40 shadow-sm'
              : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
          }`}
        >
          <Terminal className="w-3.5 h-3.5 text-indigo-400" />
          <span>Interactive Workbench</span>
        </button>
      </div>

      {/* Main Display Container */}
      <div className="relative w-full h-[460px] sm:h-[500px] flex items-center justify-center select-none overflow-hidden rounded-2xl border border-white/[0.08] bg-[#07070a]/95 backdrop-blur-xl shadow-2xl shadow-black/90 group">
        <AnimatePresence mode="wait">
          {viewMode === 'vision' ? (
            /* VIEW 1: VISION COMMAND DECK (Featuring the user's uploaded portfolio image) */
            <motion.div
              key="vision-deck"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full flex flex-col justify-between overflow-hidden"
            >
              {/* Background Portfolio Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src="/assets/tech-vision.jpg"
                  alt="Syed Abdul Jabbar Azeem - Data Science and Futuristic Analytics Command Center"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Vignette & Sci-Fi Tint Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07070a] via-transparent to-[#07070a]/60 pointer-events-none" />
                <div className="absolute inset-0 bg-cyan-950/20 mix-blend-overlay pointer-events-none" />
              </div>

              {/* Top HUD Telemetry Bar */}
              <div className="relative z-10 p-4 sm:p-5 flex items-center justify-between backdrop-blur-[2px] bg-gradient-to-b from-black/60 to-transparent">
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
                  </span>
                  <span className="text-[11px] font-mono tracking-wider text-cyan-300 font-semibold uppercase">
                    DATA MATRIX // LIVE TELEMETRY
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsLightboxOpen(true)}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/60 hover:bg-cyan-950/80 border border-white/10 hover:border-cyan-400/40 text-[10px] font-mono text-cyan-300 transition-all cursor-pointer backdrop-blur-md"
                    title="Expand View"
                  >
                    <Maximize2 className="w-3 h-3" />
                    <span className="hidden sm:inline">EXPAND</span>
                  </button>
                </div>
              </div>

              {/* Interactive Telemetry Hotspots */}
              <div className="relative z-10 px-4 py-2 my-auto">
                {/* Hotspot 1: Holographic Globe Network */}
                <div
                  className="absolute right-8 sm:right-16 top-2 cursor-pointer group/spot"
                  onMouseEnter={() => setActiveHotspot('globe')}
                  onMouseLeave={() => setActiveHotspot(null)}
                >
                  <div className="relative flex items-center justify-center">
                    <div className="w-5 h-5 rounded-full bg-cyan-400/20 border border-cyan-400 animate-pulse flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-cyan-400" />
                    </div>
                  </div>

                  <div className={`absolute top-6 right-0 w-48 p-2.5 rounded-xl bg-black/90 border border-cyan-500/40 text-left shadow-xl transition-all duration-200 pointer-events-none backdrop-blur-md ${
                    activeHotspot === 'globe' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                  }`}>
                    <div className="flex items-center gap-1 text-[10px] font-mono text-cyan-300 font-bold uppercase">
                      <Globe className="w-3 h-3" />
                      Global Data Sphere
                    </div>
                    <p className="text-[10px] text-zinc-300 font-mono mt-1 leading-snug">
                      Spatial telemetry, interconnected nodes, and graph analytics.
                    </p>
                  </div>
                </div>

                {/* Hotspot 2: Analytical Dashboard Screens */}
                <div
                  className="absolute left-8 sm:left-14 top-4 cursor-pointer group/spot"
                  onMouseEnter={() => setActiveHotspot('dash')}
                  onMouseLeave={() => setActiveHotspot(null)}
                >
                  <div className="relative flex items-center justify-center">
                    <div className="w-5 h-5 rounded-full bg-indigo-400/20 border border-indigo-400 animate-pulse flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-indigo-400" />
                    </div>
                  </div>

                  <div className={`absolute top-6 left-0 w-48 p-2.5 rounded-xl bg-black/90 border border-indigo-500/40 text-left shadow-xl transition-all duration-200 pointer-events-none backdrop-blur-md ${
                    activeHotspot === 'dash' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                  }`}>
                    <div className="flex items-center gap-1 text-[10px] font-mono text-indigo-300 font-bold uppercase">
                      <BarChart2 className="w-3 h-3" />
                      Statistical Telemetry
                    </div>
                    <p className="text-[10px] text-zinc-300 font-mono mt-1 leading-snug">
                      Frequency modeling, multi-stream data pipelines & algorithms.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom HUD Information Strip */}
              <div className="relative z-10 p-4 sm:p-5 backdrop-blur-[4px] bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-t border-white/[0.08]">
                <div>
                  <div className="text-xs font-mono font-bold text-white tracking-wide">
                    SYED ABDUL JABBAR AZEEM
                  </div>
                  <div className="text-[11px] font-mono text-cyan-300">
                    B.Sc. Data Science // AI, Analytics & Systems Exploration
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-zinc-400 bg-zinc-900/80 px-2.5 py-1 rounded border border-white/10">
                    HUD MODE: ACTIVE
                  </span>
                </div>
              </div>
            </motion.div>
          ) : (
            /* VIEW 2: INTERACTIVE DIGITAL WORKBENCH (Code, formulas, and mock nodes) */
            <motion.div
              key="workbench-deck"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full flex items-center justify-center p-4"
            >
              {/* Background blueprint grid */}
              <svg className="absolute inset-0 w-full h-full stroke-white/[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="workbench-grid-pattern" width="32" height="32" patternUnits="userSpaceOnUse">
                    <path d="M 32 0 L 0 0 0 32" fill="none" strokeWidth="0.75" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#workbench-grid-pattern)" />
                <path d="M 120 140 L 260 210 L 390 150" fill="none" stroke="rgba(56, 189, 248, 0.2)" strokeWidth="1" strokeDasharray="4 4" />
                <path d="M 260 210 L 320 330 L 170 340" fill="none" stroke="rgba(129, 140, 248, 0.2)" strokeWidth="1" strokeDasharray="4 4" />
                <path d="M 260 210 L 460 270" fill="none" stroke="rgba(6, 182, 212, 0.2)" strokeWidth="1" strokeDasharray="4 4" />
              </svg>

              <div className="absolute w-72 h-72 rounded-full bg-cyan-500/10 blur-[90px] pointer-events-none" />

              {/* Centerpiece Hub */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
                className="relative z-10 flex flex-col items-center justify-center p-5 rounded-2xl bg-zinc-900/90 border border-cyan-500/30 shadow-xl shadow-cyan-950/40 text-center max-w-[210px]"
              >
                <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-400/40 mb-2.5">
                  <Activity className="w-6 h-6 text-cyan-300 animate-pulse" />
                  <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-zinc-900" />
                </div>
                <div className="text-[10px] font-mono tracking-widest text-cyan-400 font-semibold uppercase">
                  DIGITAL WORKBENCH
                </div>
                <div className="text-xs text-zinc-300 font-medium mt-0.5">
                  Hands-on Exploration
                </div>
                <div className="mt-2.5 flex items-center gap-1 text-[9px] font-mono text-zinc-500 bg-black/40 px-2 py-0.5 rounded border border-white/5">
                  <span>STATUS:</span>
                  <span className="text-emerald-400 font-semibold">ACTIVE LEARNING</span>
                </div>
              </motion.div>

              {/* Element 1: Mini Python Code Terminal */}
              <motion.div
                animate={{ y: [3, -5, 3] }}
                transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut', delay: 0.2 }}
                className="absolute top-6 left-4 sm:left-8 z-20 w-48 sm:w-56 rounded-xl bg-zinc-950/95 border border-white/10 p-3 shadow-lg hover:border-cyan-400/60 transition-all cursor-default backdrop-blur-md"
              >
                <div className="flex items-center justify-between pb-2 border-b border-white/5 text-[10px] font-mono text-zinc-500">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500/70" />
                    <span className="w-2 h-2 rounded-full bg-amber-500/70" />
                    <span className="w-2 h-2 rounded-full bg-emerald-500/70" />
                  </div>
                  <span className="text-cyan-300 font-medium flex items-center gap-1">
                    <Terminal className="w-2.5 h-2.5" />
                    logic.py
                  </span>
                </div>
                <div className="mt-2 text-[10px] font-mono text-zinc-400 space-y-0.5 leading-tight">
                  <p><span className="text-pink-400">def</span> <span className="text-cyan-300">explore</span>(data):</p>
                  <p className="pl-2 text-zinc-300">insights = [x <span className="text-indigo-300">for</span> x <span className="text-indigo-300">in</span> data]</p>
                  <p className="pl-2"><span className="text-pink-400">return</span> <span className="text-emerald-300">solve</span>(insights)</p>
                </div>
                <div className="mt-2 pt-1.5 border-t border-white/5 flex items-center justify-between text-[9px] font-mono">
                  <span className="text-zinc-500">PYTHON 3.x</span>
                  <span className="text-cyan-400 font-medium">PROBLEM SOLVING</span>
                </div>
              </motion.div>

              {/* Element 2: Mini Data Chart Card */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ repeat: Infinity, duration: 6.5, ease: 'easeInOut', delay: 0.5 }}
                className="absolute top-8 right-4 sm:right-8 z-20 w-44 sm:w-48 rounded-xl bg-zinc-950/95 border border-white/10 p-3 shadow-lg hover:border-indigo-400/60 transition-all cursor-default backdrop-blur-md"
              >
                <div className="flex items-center justify-between pb-1.5 border-b border-white/5 text-[10px] font-mono text-zinc-400">
                  <span className="flex items-center gap-1 text-indigo-300 font-medium">
                    <BarChart2 className="w-3 h-3 text-indigo-400" />
                    Distribution
                  </span>
                  <span className="text-[9px] text-zinc-500">EXP(λ)</span>
                </div>
                <div className="mt-2.5 h-10 flex items-end justify-between gap-1 px-1">
                  <div className="w-3 bg-indigo-500/80 rounded-t h-[90%]" />
                  <div className="w-3 bg-indigo-500/65 rounded-t h-[70%]" />
                  <div className="w-3 bg-indigo-500/50 rounded-t h-[52%]" />
                  <div className="w-3 bg-indigo-500/35 rounded-t h-[35%]" />
                  <div className="w-3 bg-cyan-500/40 rounded-t h-[20%]" />
                  <div className="w-3 bg-cyan-500/30 rounded-t h-[12%]" />
                </div>
                <div className="mt-2 flex items-center justify-between text-[9px] font-mono text-zinc-500">
                  <span>DATA POINTS</span>
                  <span className="text-indigo-300 font-semibold">PANDAS / NUMPY</span>
                </div>
              </motion.div>

              {/* Element 3: Interactive Project Concept Wireframe */}
              <motion.div
                animate={{ y: [-3, 4, -3] }}
                transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut', delay: 0.7 }}
                className="absolute bottom-6 left-4 sm:left-10 z-20 w-44 sm:w-52 rounded-xl bg-zinc-950/95 border border-white/10 p-3 shadow-lg hover:border-cyan-400/50 transition-all cursor-default backdrop-blur-md"
              >
                <div className="flex items-center justify-between pb-1.5 border-b border-white/5 text-[10px] font-mono text-zinc-400">
                  <span className="flex items-center gap-1 text-cyan-300">
                    <Layout className="w-3 h-3" />
                    Virtual Mirror UI
                  </span>
                  <span className="text-[9px] text-zinc-500">CONCEPT</span>
                </div>
                <div className="mt-2 space-y-1.5">
                  <div className="h-1.5 w-3/4 rounded bg-cyan-500/40" />
                  <div className="h-1.5 w-1/2 rounded bg-zinc-700" />
                  <div className="flex gap-1 pt-1">
                    <div className="h-5 flex-1 rounded bg-zinc-900 border border-cyan-500/20 flex items-center justify-center text-[8px] font-mono text-cyan-200">
                      Try-on
                    </div>
                    <div className="h-5 flex-1 rounded bg-zinc-900 border border-white/10 flex items-center justify-center text-[8px] font-mono text-zinc-400">
                      Accessories
                    </div>
                  </div>
                </div>
                <div className="mt-2 pt-1 border-t border-white/5 text-[9px] font-mono text-zinc-500 flex justify-between">
                  <span>RETAIL TECH</span>
                  <span className="text-cyan-300">01 PROJECT</span>
                </div>
              </motion.div>

              {/* Element 4: TransitOps Fleet Node */}
              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ repeat: Infinity, duration: 7.5, ease: 'easeInOut', delay: 0.9 }}
                className="absolute bottom-6 right-4 sm:right-10 z-20 w-44 sm:w-52 rounded-xl bg-zinc-950/95 border border-white/10 p-3 shadow-lg hover:border-blue-400/50 transition-all cursor-default backdrop-blur-md"
              >
                <div className="flex items-center justify-between pb-1.5 border-b border-white/5 text-[10px] font-mono text-zinc-400">
                  <span className="flex items-center gap-1 text-blue-300">
                    <Layers className="w-3 h-3" />
                    TransitOps Log
                  </span>
                  <span className="text-[9px] text-zinc-500">ODOO</span>
                </div>
                <div className="mt-2 text-[10px] font-mono text-zinc-300 space-y-1">
                  <div className="flex items-center justify-between text-[9px]">
                    <span className="text-zinc-500">ROLE:</span>
                    <span className="text-blue-300 font-semibold">Docs Contributor</span>
                  </div>
                  <div className="flex items-center justify-between text-[9px]">
                    <span className="text-zinc-500">STACK:</span>
                    <span className="text-zinc-300">Node / TS / Prisma</span>
                  </div>
                </div>
                <div className="mt-2 pt-1 border-t border-white/5 flex items-center justify-between text-[9px] font-mono">
                  <span className="text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Verified Spec
                  </span>
                  <span className="text-zinc-500">02 PROJECT</span>
                </div>
              </motion.div>

              {/* Floating badges */}
              <div className="absolute top-16 left-1/3 text-xs font-mono text-zinc-600/70 select-none">
                ∫ f(x)dx
              </div>
              <div className="absolute bottom-20 left-1/3 text-xs font-mono text-zinc-600/70 select-none">
                σ² = ∑ (x - μ)² / N
              </div>
              <div className="absolute top-20 right-1/3 text-xs font-mono text-zinc-600/70 select-none">
                λ e^(-λx)
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Lightbox Modal for High-Def Inspection */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsLightboxOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-xl cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full rounded-2xl overflow-hidden border border-cyan-500/40 shadow-2xl bg-zinc-950"
            >
              <div className="p-4 bg-zinc-900 border-b border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white font-mono">
                    Syed Abdul Jabbar Azeem // Futuristic Data Science Visual
                  </h4>
                  <p className="text-xs text-zinc-400 font-mono">
                    Visual representation of data telemetry, machine learning, and digital horizons
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsLightboxOpen(false)}
                  className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative">
                <img
                  src="/assets/tech-vision.jpg"
                  alt="Futuristic Data Science Visual Preview"
                  referrerPolicy="no-referrer"
                  className="w-full max-h-[75vh] object-contain bg-black"
                />
              </div>

              <div className="p-4 bg-zinc-900/90 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
                <span>PORTFOLIO DIGITAL ASSET</span>
                <span className="text-cyan-400 font-semibold">READY & INTEGRATED</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
