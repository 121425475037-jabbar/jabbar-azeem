import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Sparkles,
  Compass,
  Cpu,
  Database,
  Code2,
  Terminal,
  Activity,
  Layers,
  CheckCircle2,
  BookOpen
} from 'lucide-react';
import {
  PERSONAL_INFO,
  PERSONAL_JOURNEY,
  INTEREST_AREAS,
  WHAT_I_ENJOY
} from '../data/portfolio';
import { SectionHeading } from '../components/SectionHeading';
import { PageTransition } from '../components/PageTransition';

export const About: React.FC = () => {
  return (
    <PageTransition className="pt-28 sm:pt-36 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 sm:space-y-32 pb-24">
      {/* 1. HERO & INTRO */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-6 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <BookOpen className="w-3.5 h-3.5" />
            <span>ABOUT ME</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Curious about technology. <br />
            <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
              Driven by ideas.
            </span>
          </h1>

          <div className="space-y-4 text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            <p className="p-6 rounded-2xl bg-zinc-900/40 border border-white/[0.08] backdrop-blur-sm">
              {PERSONAL_INFO.aboutIntro}
            </p>
            <p className="text-zinc-400 text-sm sm:text-base">
              {PERSONAL_INFO.aboutApproach}
            </p>
          </div>
        </div>

        {/* Right: Vision Image Visual */}
        <div className="lg:col-span-5 w-full">
          <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30 bg-zinc-950 shadow-2xl group">
            <img
              src="/assets/tech-vision.jpg"
              alt="Data Science and Futuristic AI Vision"
              referrerPolicy="no-referrer"
              className="w-full h-72 sm:h-80 object-cover object-center filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20 pointer-events-none" />
            <div className="absolute bottom-0 inset-x-0 p-4 backdrop-blur-[2px] bg-black/50 border-t border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider block">
                  EXPLORING HORIZONS
                </span>
                <span className="text-xs font-semibold text-white">
                  Data Science, AI & Digital Systems
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 border border-cyan-500/30 text-cyan-300">
                ACTIVE
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PERSONAL JOURNEY (LEARN -> EXPLORE -> EXPERIMENT -> BUILD -> IMPROVE) */}
      <section className="space-y-10">
        <SectionHeading
          tag="Learning Philosophy"
          title="The Continuous Learning Loop"
          subtitle="How I approach new domains, tools, and technical problem solving."
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {PERSONAL_JOURNEY.map((stage, idx) => (
            <div
              key={stage.step}
              className="relative p-6 rounded-2xl bg-zinc-900/50 border border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-2 py-0.5 rounded">
                    {stage.tag}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500">STAGE</span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-200 transition-colors mb-2">
                  {stage.step}
                </h3>
                <h4 className="text-xs font-medium text-cyan-300/90 mb-2">
                  {stage.title}
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {stage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. INTEREST AREAS (DATA, AI, PROGRAMMING, TECHNOLOGY) */}
      <section className="space-y-10">
        <SectionHeading
          tag="Core Focus"
          title="Areas of Active Exploration"
          subtitle="Connecting mathematical foundations with digital software creation."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {INTEREST_AREAS.map((area) => (
            <div
              key={area.tag}
              className="p-8 rounded-2xl bg-zinc-900/40 border border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 space-y-4 group"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-3 py-1 rounded-full uppercase tracking-wider">
                  {area.tag}
                </span>
                <span className="w-2 h-2 rounded-full bg-cyan-400/40 group-hover:bg-cyan-400 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-cyan-200 transition-colors">
                {area.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. WHAT I ENJOY */}
      <section className="space-y-10">
        <SectionHeading
          tag="Personal Character"
          title="What I Enjoy"
          subtitle="The qualities and technical habits that motivate my day-to-day work."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {WHAT_I_ENJOY.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-xl bg-zinc-900/30 border border-white/[0.06] hover:border-cyan-500/30 transition-all duration-200"
            >
              <div className="flex items-center gap-2 mb-2 text-cyan-400">
                <CheckCircle2 className="w-4 h-4" />
                <h3 className="font-semibold text-sm text-white">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA To Projects */}
      <section className="p-8 rounded-2xl bg-zinc-900/50 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">
            Want to see how I apply this?
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400">
            Browse through my hands-on projects, hackathon work, and problem-solving exercises.
          </p>
        </div>
        <Link
          to="/projects"
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-semibold text-xs uppercase tracking-wider flex items-center gap-2 shrink-0 group"
        >
          <span>Explore Projects</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>
    </PageTransition>
  );
};
