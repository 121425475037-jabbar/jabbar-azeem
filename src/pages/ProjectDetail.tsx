import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  ShoppingBag,
  Truck,
  Terminal,
  BarChart3,
  CheckCircle2,
  FileText,
  Layers,
  Code2,
  AlertCircle
} from 'lucide-react';
import { PROJECTS } from '../data/portfolio';
import { PageTransition } from '../components/PageTransition';

export const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  // Find next project for quick navigation
  const currentIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  const renderConceptualInterface = () => {
    switch (project.visualType) {
      case 'virtual-mirror':
        return (
          <div className="space-y-6">
            <div className="rounded-2xl bg-zinc-950 border border-cyan-500/30 p-6 sm:p-8 shadow-2xl space-y-6">
              <div className="flex flex-wrap items-center justify-between pb-4 border-b border-white/10 gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-cyan-950 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Virtual Mirror — Interactive Mall Kiosk Concept</h3>
                    <p className="text-xs font-mono text-zinc-400">Conceptual Retail Interface Wireframe</p>
                  </div>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                  Concept Demonstration
                </span>
              </div>

              {/* Conceptual Mirror Frame */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                {/* Visual Mirror Surface */}
                <div className="md:col-span-8 rounded-xl bg-gradient-to-b from-zinc-900 to-black border border-white/10 p-6 relative min-h-[300px] flex flex-col justify-between overflow-hidden">
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
                    <span className="flex items-center gap-1.5 text-cyan-400">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                      LIVE CAMERA VIEWPORT (SIMULATED)
                    </span>
                    <span>1080 x 1920 KIOSK DISPLAY</span>
                  </div>

                  {/* Wireframe Silhouette with overlays */}
                  <div className="my-auto py-8 flex flex-col items-center justify-center text-center space-y-3">
                    <div className="w-32 h-44 rounded-2xl border-2 border-dashed border-cyan-500/40 bg-cyan-950/20 flex flex-col items-center justify-center p-3 relative">
                      <span className="text-[10px] font-mono text-cyan-300">AVATAR FIT</span>
                      <div className="w-24 h-16 rounded bg-cyan-500/20 border border-cyan-400/50 mt-2 flex items-center justify-center text-[9px] font-mono text-cyan-200">
                        Selected Apparel
                      </div>
                      <div className="absolute -top-2 px-2 py-0.5 rounded bg-zinc-900 border border-cyan-500/30 text-[8px] font-mono text-zinc-300">
                        Accessorize: Sunglasses
                      </div>
                    </div>
                    <p className="text-xs text-zinc-400 font-mono">
                      Virtual fit & alignment preview active
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400 border-t border-white/5 pt-3">
                    <span>PALETTE: NAVY / CHARCOAL / SILVER</span>
                    <span className="text-cyan-400">INSTANT SWAP AVAILABLE</span>
                  </div>
                </div>

                {/* Side Selection Controls */}
                <div className="md:col-span-4 space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                    Interactive Controls
                  </h4>
                  <div className="p-3 rounded-xl bg-zinc-900/80 border border-white/5 space-y-2">
                    <span className="text-xs font-semibold text-white">Apparel Categories</span>
                    <div className="flex flex-wrap gap-1.5">
                      {['Blazers', 'Shirts', 'Denim', 'Dresses'].map((cat, i) => (
                        <span key={cat} className={`text-[10px] font-mono px-2 py-1 rounded ${i === 0 ? 'bg-cyan-500/20 text-cyan-200 border border-cyan-400/40' : 'bg-zinc-800 text-zinc-400'}`}>
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-zinc-900/80 border border-white/5 space-y-2">
                    <span className="text-xs font-semibold text-white">Accessories Overlay</span>
                    <div className="flex flex-wrap gap-1.5">
                      {['Watches', 'Eyewear', 'Bags', 'Footwear'].map((acc, i) => (
                        <span key={acc} className={`text-[10px] font-mono px-2 py-1 rounded ${i === 1 ? 'bg-cyan-500/20 text-cyan-200 border border-cyan-400/40' : 'bg-zinc-800 text-zinc-400'}`}>
                          {acc}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-zinc-900/80 border border-white/5 text-[11px] font-mono text-zinc-400">
                    Target outcome: Zero queue friction for mall shoppers.
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-zinc-900/50 border border-white/5 text-xs text-zinc-400 font-mono">
                * Note: This visual illustrates the conceptual interface design and workflow of the Virtual Mirror mall shopping solution.
              </div>
            </div>
          </div>
        );

      case 'transitops':
        return (
          <div className="space-y-6">
            <div className="rounded-2xl bg-zinc-950 border border-blue-500/30 p-6 sm:p-8 shadow-2xl space-y-6">
              <div className="flex flex-wrap items-center justify-between pb-4 border-b border-white/10 gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-950 border border-blue-400/40 flex items-center justify-center text-blue-300">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">TransitOps — Odoo Hackathon Fleet Management</h3>
                    <p className="text-xs font-mono text-zinc-400">Conceptual Fleet Dashboard & Documentation Overview</p>
                  </div>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/30">
                  Team Hackathon Build
                </span>
              </div>

              {/* Conceptual Fleet Dashboard Simulation */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-zinc-900/80 border border-white/5">
                  <span className="text-[10px] font-mono text-zinc-500">FLEET UNITS TRACKED</span>
                  <div className="text-2xl font-bold text-white mt-1">42 Vehicles</div>
                  <span className="text-[10px] font-mono text-emerald-400">Status: Active Log</span>
                </div>
                <div className="p-4 rounded-xl bg-zinc-900/80 border border-white/5">
                  <span className="text-[10px] font-mono text-zinc-500">API SPECIFICATIONS</span>
                  <div className="text-2xl font-bold text-blue-300 mt-1">REST Endpoints</div>
                  <span className="text-[10px] font-mono text-zinc-400">Node / Express / Prisma</span>
                </div>
                <div className="p-4 rounded-xl bg-zinc-900/80 border border-white/5">
                  <span className="text-[10px] font-mono text-zinc-500">MY CONTRIBUTION</span>
                  <div className="text-2xl font-bold text-cyan-300 mt-1">Documentation</div>
                  <span className="text-[10px] font-mono text-cyan-400">Full Architecture Spec</span>
                </div>
              </div>

              {/* Documentation Breakdown */}
              <div className="p-5 rounded-xl bg-zinc-900/60 border border-white/10 space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-blue-300 font-semibold flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Documented System Modules
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-zinc-300">
                  <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                    <span className="font-semibold text-white">Database Models (PostgreSQL & Prisma):</span>
                    <p className="text-zinc-400 text-[11px] mt-1">Documented relations between Vehicle, Route, Driver, and Maintenance logs.</p>
                  </div>
                  <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                    <span className="font-semibold text-white">API Lifecycle & Endpoints:</span>
                    <p className="text-zinc-400 text-[11px] mt-1">Structured request/response contracts for dispatching, status transitions, and GPS pings.</p>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-zinc-900/50 border border-white/5 text-xs text-zinc-400 font-mono">
                * Note: TransitOps was built by a collaborative team during the Odoo Hackathon. My direct contribution was project, development, and technical feature documentation. This dashboard graphic is a conceptual illustration of the fleet system.
              </div>
            </div>
          </div>
        );

      case 'python-code':
        return (
          <div className="space-y-6">
            <div className="rounded-2xl bg-zinc-950 border border-indigo-500/30 p-6 sm:p-8 shadow-2xl space-y-6">
              <div className="flex flex-wrap items-center justify-between pb-4 border-b border-white/10 gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-indigo-950 border border-indigo-400/40 flex items-center justify-center text-indigo-300">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Python Problem Solving — Hands-On Practice</h3>
                    <p className="text-xs font-mono text-zinc-400">Fundamental Programming & Computational Logic</p>
                  </div>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/30">
                  Academic Practice
                </span>
              </div>

              {/* Interactive Code Samples */}
              <div className="rounded-xl bg-black border border-white/10 p-5 font-mono text-xs sm:text-sm text-zinc-300 space-y-3 overflow-x-auto">
                <div className="text-zinc-500 pb-2 border-b border-white/5 flex items-center justify-between">
                  <span># Python Algorithm & Data Structure Exercises</span>
                  <span className="text-cyan-400">Python 3.x</span>
                </div>
                <div className="space-y-1">
                  <p><span className="text-pink-400">def</span> <span className="text-cyan-300">process_sequence</span>(elements):</p>
                  <p className="pl-4 text-zinc-400"># Lists, tuples, sorting and element filtering</p>
                  <p className="pl-4">sorted_items = <span className="text-indigo-300">sorted</span>(elements, key=<span className="text-pink-400">lambda</span> x: x[1])</p>
                  <p className="pl-4">filtered = [item <span className="text-pink-400">for</span> item <span className="text-pink-400">in</span> sorted_items <span className="text-pink-400">if</span> item[0] &gt; 0]</p>
                  <p className="pl-4"><span className="text-pink-400">return</span> filtered</p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-zinc-900/50 border border-white/5 text-xs text-zinc-400 font-mono">
                * Hands-on exploration of arrays, indexing, sorting routines, insertion, and numerical logic in Python.
              </div>
            </div>
          </div>
        );

      case 'excel-stats':
        return (
          <div className="space-y-6">
            <div className="rounded-2xl bg-zinc-950 border border-emerald-500/30 p-6 sm:p-8 shadow-2xl space-y-6">
              <div className="flex flex-wrap items-center justify-between pb-4 border-b border-white/10 gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-950 border border-emerald-400/40 flex items-center justify-center text-emerald-300">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Statistical Data Analysis — Frequency & Exponential Fitting</h3>
                    <p className="text-xs font-mono text-zinc-400">Academic Project with Excel Modeling</p>
                  </div>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                  Academic Investigation
                </span>
              </div>

              {/* Visualized Frequency Table & Curve */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-zinc-900/70 border border-white/5 space-y-2">
                  <h4 className="text-xs font-mono text-emerald-300 font-semibold uppercase">
                    Grouped Frequency Model
                  </h4>
                  <div className="space-y-1.5 text-xs font-mono">
                    <div className="flex justify-between text-zinc-500 pb-1 border-b border-white/5">
                      <span>INTERVAL (CLASS)</span>
                      <span>OBSERVED (fi)</span>
                      <span>EXPECTED (ei)</span>
                    </div>
                    <div className="flex justify-between text-zinc-300">
                      <span>0.0 — 1.5</span>
                      <span>45</span>
                      <span>44.2</span>
                    </div>
                    <div className="flex justify-between text-zinc-300">
                      <span>1.5 — 3.0</span>
                      <span>28</span>
                      <span>29.1</span>
                    </div>
                    <div className="flex justify-between text-zinc-300">
                      <span>3.0 — 4.5</span>
                      <span>16</span>
                      <span>15.8</span>
                    </div>
                    <div className="flex justify-between text-zinc-300">
                      <span>4.5 — 6.0</span>
                      <span>8</span>
                      <span>8.4</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900/70 border border-white/5 space-y-2">
                  <h4 className="text-xs font-mono text-emerald-300 font-semibold uppercase">
                    Mathematical Formulation
                  </h4>
                  <div className="text-xs font-mono text-zinc-300 space-y-2">
                    <p>Probability Density Function: <span className="text-emerald-300">f(x) = λ e^(-λx)</span></p>
                    <p>Parameter Estimation: <span className="text-cyan-300">λ̂ = 1 / x̄</span></p>
                    <p className="text-zinc-400 text-[11px] leading-relaxed">
                      Conducted grouped frequency distribution calculations and analyzed goodness-of-fit using Excel formula modeling.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-zinc-900/50 border border-white/5 text-xs text-zinc-400 font-mono">
                * Note: Academic statistical coursework analyzing continuous probability models and frequency fitting.
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <PageTransition className="pt-28 sm:pt-36 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pb-24">
      {/* Back Link */}
      <div>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono font-medium text-zinc-400 hover:text-cyan-300 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to all projects</span>
        </Link>
      </div>

      {/* Project Header */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-xs font-bold text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-1 rounded">
            PROJECT {project.number}
          </span>
          <span className="text-xs font-mono tracking-wider uppercase text-zinc-400">
            {project.categoryLabel}
          </span>
          {project.role && (
            <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-blue-950/60 text-blue-300 border border-blue-500/30">
              Role: {project.role}
            </span>
          )}
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          {project.title}
        </h1>

        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-3xl">
          {project.shortDescription}
        </p>
      </div>

      {/* Interactive Conceptual Interface Visual */}
      <div>
        {renderConceptualInterface()}
      </div>

      {/* Detailed Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-6 border-t border-white/[0.08]">
        {/* Left Column: Full Description & Specifics */}
        <div className="md:col-span-8 space-y-8">
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white">Project Overview</h2>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Features if available */}
          {project.features && (
            <div className="space-y-3">
              <h3 className="text-base font-bold text-white">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feat) => (
                  <div
                    key={feat}
                    className="p-3 rounded-xl bg-zinc-900/60 border border-white/5 flex items-start gap-2.5 text-xs text-zinc-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Contribution if available (e.g. TransitOps) */}
          {project.contribution && (
            <div className="space-y-3">
              <h3 className="text-base font-bold text-white">My Specific Contribution</h3>
              <div className="space-y-2">
                {project.contribution.map((c) => (
                  <div
                    key={c}
                    className="p-3 rounded-xl bg-zinc-900/60 border border-white/5 flex items-start gap-2.5 text-xs text-zinc-300"
                  >
                    <FileText className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Topics covered if available */}
          {project.topics && (
            <div className="space-y-3">
              <h3 className="text-base font-bold text-white">Topics & Methodologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.topics.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-3 py-1.5 rounded-lg bg-zinc-900/80 border border-white/10 text-zinc-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Meta, Tech Stack Exposure, Integrity */}
        <div className="md:col-span-4 space-y-6">
          <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/[0.08] space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
              Technology & Concept Exposure
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techExposure.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-2.5 py-1 rounded-md bg-zinc-800 text-cyan-200 border border-cyan-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/[0.08] space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-cyan-400" />
              Authenticity Note
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed font-mono">
              {project.contextNote}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="pt-8 border-t border-white/[0.08] flex items-center justify-between">
        <Link
          to="/projects"
          className="text-xs font-mono text-zinc-400 hover:text-cyan-300 transition-colors"
        >
          ← All Projects
        </Link>
        <Link
          to={`/projects/${nextProject.slug}`}
          className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group"
        >
          <span>Next: {nextProject.title}</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </PageTransition>
  );
};
