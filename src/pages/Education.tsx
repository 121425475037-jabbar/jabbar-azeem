import React from 'react';
import { GraduationCap, Calendar, MapPin, CheckCircle2, BookOpen } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolio';
import { SectionHeading } from '../components/SectionHeading';
import { PageTransition } from '../components/PageTransition';

export const Education: React.FC = () => {
  return (
    <PageTransition className="pt-28 sm:pt-36 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-24">
      {/* Hero */}
      <div className="space-y-4">
        <SectionHeading
          tag="Academic Background"
          title="My academic journey."
          subtitle="Foundations in mathematics, data science, scientific inquiry, and technology."
        />
      </div>

      {/* Clean Timeline */}
      <div className="relative border-l-2 border-white/10 pl-6 sm:pl-8 ml-3 space-y-12">
        {EDUCATION_DATA.map((edu, idx) => (
          <div key={edu.institution} className="relative group">
            {/* Indicator Node */}
            <div
              className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#050507] border-2 transition-transform group-hover:scale-125 ${
                idx === 0
                  ? 'border-cyan-400 shadow-[0_0_10px_rgba(56,189,248,0.6)]'
                  : 'border-zinc-500'
              }`}
            />

            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/50 border border-white/[0.08] hover:border-cyan-500/30 transition-all duration-300 space-y-4 shadow-md">
              {/* Status Badge & Period */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1.5 text-xs font-mono text-cyan-400">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.period}
                  </span>
                  {edu.status && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 font-semibold">
                      {edu.status}
                    </span>
                  )}
                </div>

                <span className="flex items-center gap-1 text-xs font-mono text-zinc-400">
                  <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                  {edu.location}
                </span>
              </div>

              {/* Institution & Degree */}
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-200 transition-colors">
                  {edu.institution}
                </h3>
                <p className="text-sm sm:text-base text-cyan-300 font-medium">
                  {edu.degree}
                </p>
              </div>

              {/* Highlights */}
              <div className="pt-2 space-y-2 border-t border-white/[0.06]">
                {edu.highlights.map((item, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-400">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Privacy Guarantee Note */}
      <div className="p-5 rounded-2xl bg-zinc-900/30 border border-white/5 text-xs font-mono text-zinc-400">
        * Standard public academic portfolio presentation. Internal roll numbers, student IDs, and institutional registration details are protected and omitted.
      </div>
    </PageTransition>
  );
};
