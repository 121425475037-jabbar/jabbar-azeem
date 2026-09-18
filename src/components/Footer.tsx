import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, Linkedin, MapPin, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/[0.08] bg-[#050507] text-zinc-400 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06]">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-950 border border-white/10 flex items-center justify-center shadow-inner">
                <span className="font-mono font-bold text-sm text-cyan-300">
                  {PERSONAL_INFO.monogram}
                </span>
              </div>
              <div>
                <h3 className="text-sm font-bold tracking-wider text-white">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-xs text-zinc-500 font-mono">
                  B.Sc. Data Science Student
                </p>
              </div>
            </div>
            
            <p className="text-sm text-zinc-300 font-medium tracking-wide">
              "Learning. Building. Exploring."
            </p>
            
            <p className="text-xs text-zinc-500 max-w-sm leading-relaxed">
              Exploring the intersection of data, AI, programming and technology through practical projects, experimentation and problem solving.
            </p>

            <div className="flex items-center gap-2 text-xs text-zinc-500 font-mono pt-1">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-300">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <Link to="/" className="text-zinc-400 hover:text-cyan-300 transition-colors py-1">
                Home
              </Link>
              <Link to="/about" className="text-zinc-400 hover:text-cyan-300 transition-colors py-1">
                About
              </Link>
              <Link to="/projects" className="text-zinc-400 hover:text-cyan-300 transition-colors py-1">
                Projects
              </Link>
              <Link to="/achievements" className="text-zinc-400 hover:text-cyan-300 transition-colors py-1">
                Achievements
              </Link>
              <Link to="/skills" className="text-zinc-400 hover:text-cyan-300 transition-colors py-1">
                Skills
              </Link>
              <Link to="/education" className="text-zinc-400 hover:text-cyan-300 transition-colors py-1">
                Education
              </Link>
              <Link to="/contact" className="text-zinc-400 hover:text-cyan-300 transition-colors py-1">
                Contact
              </Link>
            </div>
          </div>

          {/* Connect Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-300">
              Direct Connect
            </h4>
            <div className="space-y-2.5">
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-2.5 rounded-lg bg-zinc-900/60 border border-white/[0.06] hover:border-cyan-500/30 hover:bg-zinc-800/60 transition-all text-xs"
              >
                <div className="flex items-center gap-2 text-zinc-300 group-hover:text-white">
                  <Linkedin className="w-4 h-4 text-cyan-400" />
                  <span>LinkedIn Profile</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="group flex items-center justify-between p-2.5 rounded-lg bg-zinc-900/60 border border-white/[0.06] hover:border-cyan-500/30 hover:bg-zinc-800/60 transition-all text-xs"
              >
                <div className="flex items-center gap-2 text-zinc-300 group-hover:text-white">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span className="truncate max-w-[160px]">{PERSONAL_INFO.email}</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-600 font-mono">
          <p>© 2026 Syed Abdul Jabbar Azeem. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-zinc-400">Open to collaboration & learning</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
