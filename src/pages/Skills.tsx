import React from 'react';
import { Terminal, Database, BarChart2, Globe, Server, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolio';
import { SkillBadge } from '../components/SkillBadge';
import { SectionHeading } from '../components/SectionHeading';
import { PageTransition } from '../components/PageTransition';

export const Skills: React.FC = () => {
  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'PROGRAMMING':
        return <Terminal className="w-4 h-4 text-cyan-400" />;
      case 'DATA ANALYSIS':
        return <Database className="w-4 h-4 text-indigo-400" />;
      case 'VISUALIZATION':
        return <BarChart2 className="w-4 h-4 text-sky-400" />;
      case 'WEB / DEVELOPMENT EXPOSURE':
        return <Globe className="w-4 h-4 text-blue-400" />;
      case 'DATABASE / BACKEND EXPOSURE':
        return <Server className="w-4 h-4 text-purple-400" />;
      case 'CORE STRENGTHS':
      default:
        return <Sparkles className="w-4 h-4 text-emerald-400" />;
    }
  };

  return (
    <PageTransition className="pt-28 sm:pt-36 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-24">
      {/* Hero */}
      <div className="space-y-4">
        <SectionHeading
          tag="Competencies"
          title="Tools, technologies and concepts I'm exploring."
          subtitle="An authentic overview of my practical tools, learning experiments, and team stack exposure."
        />
      </div>

      {/* Legend / Status Levels */}
      <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/40 border border-white/[0.08] backdrop-blur-sm flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
        <div className="text-zinc-400 font-semibold uppercase tracking-wider">
          Experience Indicator:
        </div>
        <div className="flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            Working with
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            Exploring
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-500/10 text-blue-300 border border-blue-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            Project exposure
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Core strength
          </span>
        </div>
      </div>

      {/* Categorized Skills Grid */}
      <div className="space-y-12">
        {SKILL_CATEGORIES.map((category) => (
          <section key={category.title} className="space-y-4">
            <div className="flex items-center gap-2.5 pb-2 border-b border-white/[0.06]">
              {getCategoryIcon(category.title)}
              <h3 className="text-sm font-mono font-bold tracking-wider text-zinc-300 uppercase">
                {category.title}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.skills.map((skill) => (
                <SkillBadge
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  description={skill.description}
                />
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Honest Positioning Footnote */}
      <div className="p-6 rounded-2xl bg-zinc-900/40 border border-white/5 space-y-2 text-xs font-mono text-zinc-400">
        <div className="flex items-center gap-2 text-cyan-400 font-semibold">
          <ShieldCheck className="w-4 h-4" />
          <span>Authentic Skill Disclosure</span>
        </div>
        <p className="leading-relaxed">
          I do not believe in arbitrary percentage bars (e.g. "Python 95%"). As a student, skills grow continuously through applied project problem-solving. Backend and web technologies (Node.js, Express, TypeScript, Prisma, PostgreSQL) represent collaborative team stack exposure and architectural comprehension from the Odoo Hackathon.
        </p>
      </div>
    </PageTransition>
  );
};
