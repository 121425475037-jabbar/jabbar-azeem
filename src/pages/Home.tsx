import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  Linkedin,
  MapPin,
  Sparkles,
  Compass,
  Terminal,
  Layers,
  BarChart2,
  Code2
} from 'lucide-react';
import { motion } from 'motion/react';
import {
  PERSONAL_INFO,
  PROJECTS,
  ACHIEVEMENTS,
  CURRENTLY_EXPLORING,
  SKILL_CATEGORIES
} from '../data/portfolio';
import { DigitalWorkbench } from '../components/DigitalWorkbench';
import { ProjectCard } from '../components/ProjectCard';
import { AchievementCard } from '../components/AchievementCard';
import { SkillBadge } from '../components/SkillBadge';
import { SectionHeading } from '../components/SectionHeading';
import { CopyEmailButton } from '../components/CopyEmailButton';
import { PageTransition } from '../components/PageTransition';

export const Home: React.FC = () => {
  // Featured projects for the home page: Virtual Mirror, TransitOps, Python Problem Solving
  const featuredProjects = PROJECTS.slice(0, 3);

  // Home skills snapshot (sample from categories)
  const homeSkills = [
    { name: 'Python', level: 'Working with' as const, description: 'Core logic, data structures & algorithms' },
    { name: 'Pandas', level: 'Working with' as const, description: 'Dataframe manipulation & analytics' },
    { name: 'NumPy', level: 'Working with' as const, description: 'Numerical arrays & scientific computing' },
    { name: 'Matplotlib', level: 'Working with' as const, description: 'Statistical charting & visual plots' },
    { name: 'React', level: 'Project exposure' as const, description: 'Modern declarative component interfaces' },
    { name: 'Next.js', level: 'Project exposure' as const, description: 'Full-stack application framework' },
    { name: 'Node.js', level: 'Project exposure' as const, description: 'Runtime backend & package ecosystem' },
    { name: 'Express', level: 'Project exposure' as const, description: 'API server & routing middleware' },
    { name: 'TypeScript', level: 'Project exposure' as const, description: 'Type-safe systems development' },
    { name: 'Prisma', level: 'Project exposure' as const, description: 'Database schema & ORM models' },
    { name: 'PostgreSQL', level: 'Project exposure' as const, description: 'Relational data query concepts' },
  ];

  return (
    <PageTransition className="space-y-24 sm:space-y-32 pb-24">
      {/* 1. HERO SECTION */}
      <section className="relative pt-28 sm:pt-36 lg:pt-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & Bio */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Location & Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-white/10 text-xs text-zinc-300 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>{PERSONAL_INFO.location}</span>
            </div>

            {/* Main Name & Stacked Titles */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-none">
                SYED ABDUL <br />
                <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
                  JABBAR AZEEM
                </span>
              </h1>
              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono font-semibold tracking-wider text-cyan-400/90 uppercase">
                <span>DATA SCIENCE STUDENT</span>
                <span className="text-zinc-600">•</span>
                <span>PROBLEM SOLVER</span>
                <span className="text-zinc-600">•</span>
                <span>AI & TECHNOLOGY ENTHUSIAST</span>
              </div>
            </div>

            {/* Primary Statement */}
            <p className="text-xl sm:text-2xl font-semibold text-zinc-200 tracking-tight leading-snug">
              "{PERSONAL_INFO.primaryStatement}"
            </p>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base text-zinc-400 max-w-xl leading-relaxed font-normal">
              {PERSONAL_INFO.heroBio}
            </p>

            {/* Buttons & Socials */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/projects"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-lg shadow-cyan-950/50 flex items-center gap-2 group cursor-pointer"
              >
                <span>VIEW MY WORK</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/contact"
                className="px-6 py-3 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 border border-white/10 hover:border-cyan-500/40 text-white font-semibold text-xs tracking-wider transition-all duration-200 flex items-center gap-2 group cursor-pointer"
              >
                <span>LET'S CONNECT</span>
                <ArrowUpRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>

            {/* Social & Contact Strip */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400 border-t border-white/[0.06]">
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-zinc-400 hover:text-cyan-300 transition-colors py-1"
              >
                <Linkedin className="w-4 h-4 text-cyan-400" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-zinc-600" />
              </a>

              <span className="text-zinc-700">•</span>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <CopyEmailButton />
              </div>
            </div>
          </div>

          {/* Right Column: Custom Interactive Visual "THE DIGITAL WORKBENCH" */}
          <div className="lg:col-span-6 w-full">
            <DigitalWorkbench />
          </div>
        </div>
      </section>

      {/* 2. SHORT INTRODUCTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-2xl bg-zinc-900/40 border border-white/[0.08] backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-950/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PHILOSOPHY</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Learning by building.
            </h2>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              I’m interested in understanding how technology can turn ideas into practical solutions.
              My journey so far has included programming, data analysis, AI-oriented experimentation, web technologies, competitions and project work.
            </p>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group"
              >
                <span>More about me</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED PROJECTS ("Selected Work") */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <SectionHeading
            tag="Selected Work"
            title="Projects & Practical Exploration"
            subtitle="A few projects and learning experiences that represent what I'm exploring."
          />
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 transition-colors shrink-0 group"
          >
            <span>View all projects</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Project Grid: Virtual Mirror as prominent / featured */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Card 1: Virtual Mirror (prominent) */}
          <ProjectCard project={featuredProjects[0]} featured={true} />

          {/* Card 2: TransitOps */}
          <ProjectCard project={featuredProjects[1]} />

          {/* Card 3: Python Problem Solving */}
          <ProjectCard project={featuredProjects[2]} />
        </div>
      </section>

      {/* 4. ACHIEVEMENT HIGHLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <SectionHeading
            tag="Milestones"
            title="Moments that shaped the journey."
            subtitle="Participating in college competitions, exhibitions, and hackathons."
          />
          <Link
            to="/achievements"
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 transition-colors shrink-0 group"
          >
            <span>View all achievements</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACHIEVEMENTS.map((ach, idx) => (
            <AchievementCard key={ach.id} achievement={ach} featured={idx === 0} />
          ))}
        </div>
      </section>

      {/* 5. SKILLS SNAPSHOT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <SectionHeading
            tag="Technical Toolkit"
            title="Tools I'm working with"
            subtitle="Hands-on practice and project exposure across programming, analytics, and web stacks."
          />
          <Link
            to="/skills"
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 transition-colors shrink-0 group"
          >
            <span>Explore full skills breakdown</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {homeSkills.map((skill) => (
            <SkillBadge
              key={skill.name}
              name={skill.name}
              level={skill.level}
              description={skill.description}
            />
          ))}
        </div>

        <div className="p-4 rounded-xl bg-zinc-900/30 border border-white/5 flex items-center justify-between text-xs text-zinc-500 font-mono">
          <span>* Technologies related to TransitOps reflect team project stack exposure.</span>
          <span className="text-cyan-400">Authentic Learning Record</span>
        </div>
      </section>

      {/* 6. CURRENTLY EXPLORING */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <SectionHeading
          tag="Active Focus"
          title="Currently exploring"
          subtitle="Areas where I invest my curiosity and practice."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CURRENTLY_EXPLORING.map((item) => (
            <div
              key={item.number}
              className="p-6 rounded-2xl bg-zinc-900/50 border border-white/[0.08] hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-cyan-400 bg-cyan-950/50 border border-cyan-500/30 px-2.5 py-0.5 rounded">
                    {item.number}
                  </span>
                  <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-cyan-200 transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-b from-zinc-900/80 to-[#07070a] border border-white/10 p-8 sm:p-12 lg:p-16 text-center overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-radial from-cyan-900/20 via-transparent to-transparent opacity-50 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>COLLABORATION & LEARNING</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Let's build something interesting.
            </h2>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              I'm always interested in learning, collaborating and exploring ideas that connect technology with real-world problems.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-lg shadow-cyan-950/60 flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Email Me</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-white/10 hover:border-cyan-400 text-white font-semibold text-xs tracking-wider transition-all duration-200 flex items-center gap-2"
              >
                <Linkedin className="w-4 h-4 text-cyan-400" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
              </a>
            </div>

            <div className="pt-6">
              <CopyEmailButton />
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
