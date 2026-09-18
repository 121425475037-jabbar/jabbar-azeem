import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Terminal, ShoppingBag, Truck, BarChart3, Layers, Sparkles } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, featured = false }) => {
  // Render distinct conceptual UI illustrations for each project
  const renderVisual = () => {
    switch (project.visualType) {
      case 'virtual-mirror':
        return (
          <div className="relative w-full h-48 sm:h-52 bg-gradient-to-b from-cyan-950/30 to-zinc-950 rounded-xl border border-cyan-500/20 overflow-hidden p-4 flex flex-col justify-between">
            {/* Mirror header & controls */}
            <div className="flex items-center justify-between text-[11px] font-mono text-cyan-300 pb-2 border-b border-white/5">
              <span className="flex items-center gap-1.5">
                <ShoppingBag className="w-3.5 h-3.5 text-cyan-400" />
                Virtual Mirror Interactive Mall Kiosk
              </span>
              <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-[9px] text-cyan-300 font-semibold">
                SIMULATION
              </span>
            </div>

            {/* Visualizer wireframe body */}
            <div className="grid grid-cols-3 gap-3 my-auto py-2">
              <div className="col-span-1 rounded-lg bg-zinc-900/80 border border-white/5 p-2 flex flex-col items-center justify-center text-center">
                <div className="w-8 h-8 rounded-full border border-dashed border-cyan-400/50 flex items-center justify-center text-[10px] text-cyan-300 font-mono mb-1">
                  FIT
                </div>
                <span className="text-[10px] text-zinc-300 font-medium">Garment Try-on</span>
                <span className="text-[8px] text-zinc-500 font-mono">Real-time Overlay</span>
              </div>

              <div className="col-span-1 rounded-lg bg-cyan-950/40 border border-cyan-500/30 p-2 flex flex-col items-center justify-center text-center shadow-inner">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-400/60 flex items-center justify-center text-[10px] text-cyan-200 font-mono mb-1">
                  PREV
                </div>
                <span className="text-[10px] text-cyan-200 font-medium">Accessories</span>
                <span className="text-[8px] text-cyan-400 font-mono">Interactive View</span>
              </div>

              <div className="col-span-1 rounded-lg bg-zinc-900/80 border border-white/5 p-2 flex flex-col items-center justify-center text-center">
                <div className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-[10px] text-zinc-400 font-mono mb-1">
                  PAL
                </div>
                <span className="text-[10px] text-zinc-300 font-medium">Palette Match</span>
                <span className="text-[8px] text-zinc-500 font-mono">Dynamic Hue</span>
              </div>
            </div>

            {/* Bottom info strip */}
            <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 pt-2 border-t border-white/5">
              <span>CONCEPT: RETAIL EXPERIENCE</span>
              <span className="text-cyan-300">NO PHYSICAL QUEUE</span>
            </div>
          </div>
        );

      case 'transitops':
        return (
          <div className="relative w-full h-48 sm:h-52 bg-gradient-to-b from-blue-950/25 to-zinc-950 rounded-xl border border-blue-500/20 overflow-hidden p-4 flex flex-col justify-between">
            <div className="flex items-center justify-between text-[11px] font-mono text-blue-300 pb-2 border-b border-white/5">
              <span className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-blue-400" />
                TransitOps Fleet Spec & Documentation
              </span>
              <span className="px-2 py-0.5 rounded bg-blue-500/10 text-[9px] text-blue-300 font-semibold">
                ODOO HACKATHON
              </span>
            </div>

            <div className="space-y-2 my-auto py-2">
              <div className="flex items-center justify-between bg-zinc-900/70 border border-white/5 px-3 py-1.5 rounded-lg text-[10px] font-mono">
                <span className="text-zinc-400">ROLE CONTRIBUTION:</span>
                <span className="text-blue-300 font-semibold">Technical Documentation</span>
              </div>
              <div className="flex items-center justify-between bg-zinc-900/70 border border-white/5 px-3 py-1.5 rounded-lg text-[10px] font-mono">
                <span className="text-zinc-400">STACK EXPOSURE:</span>
                <span className="text-zinc-200">Node / Express / TS / Prisma / Postgres</span>
              </div>
              <div className="flex items-center justify-between bg-zinc-900/70 border border-white/5 px-3 py-1.5 rounded-lg text-[10px] font-mono">
                <span className="text-zinc-400">DOC DELIVERABLES:</span>
                <span className="text-emerald-400">API Architecture & Workflow Logs</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 pt-2 border-t border-white/5">
              <span>HACKATHON TEAM BUILD</span>
              <span className="text-blue-400">COLLABORATIVE</span>
            </div>
          </div>
        );

      case 'python-code':
        return (
          <div className="relative w-full h-48 sm:h-52 bg-gradient-to-b from-indigo-950/20 to-zinc-950 rounded-xl border border-indigo-500/20 overflow-hidden p-4 flex flex-col justify-between font-mono">
            <div className="flex items-center justify-between text-[11px] text-indigo-300 pb-2 border-b border-white/5">
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                python_foundations.py
              </span>
              <span className="text-[9px] text-zinc-500">ACADEMIC PRACTICE</span>
            </div>

            <div className="text-[11px] text-zinc-300 space-y-1 my-auto py-1 leading-snug">
              <p><span className="text-pink-400">def</span> <span className="text-cyan-300">quicksort</span>(arr):</p>
              <p className="pl-3 text-zinc-400"><span className="text-pink-400">if</span> len(arr) &lt;= 1: <span className="text-pink-400">return</span> arr</p>
              <p className="pl-3 text-zinc-400">pivot = arr[len(arr) // 2]</p>
              <p className="pl-3 text-indigo-300"># Lists, Tuples, Slicing & Sorts</p>
            </div>

            <div className="flex items-center justify-between text-[10px] text-zinc-500 pt-2 border-t border-white/5">
              <span>STRUCTURED LOGIC</span>
              <span className="text-indigo-300">ALGORITHMIC THINKING</span>
            </div>
          </div>
        );

      case 'excel-stats':
        return (
          <div className="relative w-full h-48 sm:h-52 bg-gradient-to-b from-emerald-950/20 to-zinc-950 rounded-xl border border-emerald-500/20 overflow-hidden p-4 flex flex-col justify-between">
            <div className="flex items-center justify-between text-[11px] font-mono text-emerald-300 pb-2 border-b border-white/5">
              <span className="flex items-center gap-1.5">
                <BarChart3 className="w-3.5 h-3.5 text-emerald-400" />
                Exponential Distribution Analysis
              </span>
              <span className="text-[9px] text-zinc-500">EXCEL MODELING</span>
            </div>

            {/* Visual frequency bars */}
            <div className="my-auto py-2">
              <div className="flex items-end justify-between gap-1.5 h-16 px-2">
                {[85, 68, 52, 38, 26, 17, 10, 5].map((val, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                    <div
                      className="w-full bg-gradient-to-t from-emerald-600/80 to-teal-400/80 rounded-t"
                      style={{ height: `${val}%` }}
                    />
                    <span className="text-[7px] font-mono text-zinc-500">c{idx + 1}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 pt-2 border-t border-white/5">
              <span>GROUPED FREQUENCY FIT</span>
              <span className="text-emerald-400">EXPONENTIAL CURVE</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <article
      data-cursor="VIEW"
      className={`group relative rounded-2xl bg-zinc-900/60 border border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-lg shadow-black/40 hover:-translate-y-1 ${
        featured ? 'lg:col-span-2 p-6 sm:p-8' : 'p-6'
      }`}
    >
      {/* Top Meta info */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-xs font-bold text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-1 rounded-md">
              {project.number}
            </span>
            <span className="text-xs font-mono tracking-wider uppercase text-zinc-400">
              {project.categoryLabel}
            </span>
          </div>

          {project.role && (
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-blue-300 border border-blue-400/20">
              {project.role}
            </span>
          )}
        </div>

        {/* Visual Conceptual Area */}
        <div className="mb-5">{renderVisual()}</div>

        {/* Title & Description */}
        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-200 transition-colors mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-zinc-400 leading-relaxed line-clamp-3 mb-4">
          {project.shortDescription}
        </p>
      </div>

      {/* Footer / Tech Tags & Link */}
      <div className="pt-4 border-t border-white/[0.06] space-y-4">
        <div className="flex flex-wrap gap-1.5">
          {project.techExposure.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-zinc-800/80 text-zinc-300 border border-white/5"
            >
              {tech}
            </span>
          ))}
          {project.techExposure.length > 4 && (
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md text-zinc-500">
              +{project.techExposure.length - 4}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between pt-1">
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors"
          >
            <span>View Project Details</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
          <span className="text-[10px] font-mono text-zinc-600">
            {project.contextNote ? 'Verified' : ''}
          </span>
        </div>
      </div>
    </article>
  );
};
