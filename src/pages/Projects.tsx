import React, { useState } from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { SectionHeading } from '../components/SectionHeading';
import { PageTransition } from '../components/PageTransition';
import { PROJECTS } from '../data/portfolio';

type CategoryFilter = 'ALL' | 'TECHNICAL' | 'ACADEMIC' | 'LEARNING';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<CategoryFilter>('ALL');

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'ALL') return true;
    if (filter === 'TECHNICAL') return p.category === 'Technical';
    if (filter === 'ACADEMIC') return p.category === 'Academic';
    if (filter === 'LEARNING') return p.category === 'Learning';
    return true;
  });

  return (
    <PageTransition className="pt-28 sm:pt-36 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-24">
      {/* Hero */}
      <div className="space-y-4 max-w-3xl">
        <SectionHeading
          tag="Portfolio"
          title="Things I've built and explored."
          subtitle="Projects are where I turn curiosity into something tangible."
        />
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-white/[0.08] pb-4">
        {(['ALL', 'TECHNICAL', 'ACADEMIC', 'LEARNING'] as CategoryFilter[]).map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setFilter(tab)}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 cursor-pointer ${
              filter === tab
                ? 'bg-cyan-500/15 border border-cyan-400/40 text-cyan-300 shadow-sm'
                : 'bg-zinc-900/50 border border-white/5 text-zinc-400 hover:text-white hover:bg-zinc-800/50'
            }`}
          >
            {tab}
          </button>
        ))}
        <span className="text-xs text-zinc-500 font-mono ml-auto hidden sm:block">
          Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
        </span>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredProjects.map((project, idx) => (
          <ProjectCard
            key={project.id}
            project={project}
            featured={filter === 'ALL' && idx === 0}
          />
        ))}
      </div>

      {/* Integrity & Authenticity Note */}
      <div className="p-6 rounded-2xl bg-zinc-900/30 border border-white/5 text-xs text-zinc-400 font-mono flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p>
          * All project representations strictly reflect authentic student and team contributions without fabrication.
        </p>
        <span className="text-cyan-400 shrink-0">Ethical Portfolio Standard</span>
      </div>
    </PageTransition>
  );
};
