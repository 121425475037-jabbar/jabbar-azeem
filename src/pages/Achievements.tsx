import React from 'react';
import { Trophy, Award, Target, Presentation, Sparkles, CheckCircle2 } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolio';
import { SectionHeading } from '../components/SectionHeading';
import { PageTransition } from '../components/PageTransition';

export const Achievements: React.FC = () => {
  return (
    <PageTransition className="pt-28 sm:pt-36 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-24">
      {/* Hero */}
      <div className="space-y-4">
        <SectionHeading
          tag="Milestones & Recognition"
          title="Things I'm proud to have achieved."
          subtitle="Competitions, exhibitions, and hackathons that encouraged my hands-on technical exploration."
        />
      </div>

      {/* Featured Highlight: AI Meme Competition (1st Prize) */}
      <div className="relative rounded-3xl bg-gradient-to-br from-amber-950/30 via-zinc-900 to-zinc-950 border border-amber-500/40 p-8 sm:p-10 shadow-2xl shadow-amber-950/20 overflow-hidden">
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300 shadow-inner">
                <Trophy className="w-6 h-6" />
              </div>
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/40">
                  1st Prize
                </span>
              </div>
            </div>
            <span className="text-xs font-mono text-amber-400/80 bg-amber-950/40 border border-amber-500/30 px-3 py-1 rounded-full flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Premier Achievement
            </span>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              AI Meme Competition
            </h2>
            <p className="text-sm font-mono text-amber-200/80 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              St. Joseph's Degree & PG College
            </p>
          </div>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-2xl">
            Won 1st Prize in an AI Meme Competition, combining creativity with an understanding of AI concepts. This competition was an exciting test of communicating complex machine learning themes and tech cultural nuances with humor, sharp visual presentation, and conceptual clarity.
          </p>

          <div className="pt-2 flex items-center gap-2 text-xs font-mono text-amber-300/80">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            <span>Official College Event Award</span>
          </div>
        </div>
      </div>

      {/* Timeline of All Achievements */}
      <div className="space-y-6">
        <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 pl-2">
          Chronological Event Records
        </h3>

        <div className="relative border-l-2 border-white/10 pl-6 sm:pl-8 ml-3 space-y-10">
          {ACHIEVEMENTS.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline marker node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#050507] border-2 border-cyan-400 group-hover:scale-125 transition-transform" />

              <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/[0.08] hover:border-cyan-500/30 transition-all duration-300 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">
                    {item.award}
                  </span>
                  {item.institution && (
                    <span className="text-xs font-mono text-zinc-400">
                      {item.institution}
                    </span>
                  )}
                </div>

                <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-200 transition-colors">
                  {item.title}
                </h4>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Integrity Statement */}
      <div className="p-6 rounded-2xl bg-zinc-900/30 border border-white/5 text-xs text-zinc-400 font-mono">
        * Every achievement listed above corresponds directly to verified academic and collegiate participations. No ranks, positions, or awards have been embellished or fabricated.
      </div>
    </PageTransition>
  );
};
