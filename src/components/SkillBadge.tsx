import React from 'react';

interface SkillBadgeProps {
  name: string;
  level: 'Working with' | 'Exploring' | 'Project exposure' | 'Core strength';
  description?: string;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ name, level, description }) => {
  const getLevelBadge = () => {
    switch (level) {
      case 'Working with':
        return 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30';
      case 'Exploring':
        return 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30';
      case 'Project exposure':
        return 'bg-blue-500/10 text-blue-300 border-blue-500/30';
      case 'Core strength':
        return 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30';
      default:
        return 'bg-zinc-800 text-zinc-300 border-white/10';
    }
  };

  return (
    <div className="group rounded-xl bg-zinc-900/60 border border-white/[0.07] hover:border-cyan-500/30 transition-all duration-200 p-3.5 flex flex-col justify-between shadow-sm">
      <div className="flex items-center justify-between gap-2 mb-1.5">
        <span className="font-semibold text-sm text-white group-hover:text-cyan-200 transition-colors">
          {name}
        </span>
        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md border font-medium whitespace-nowrap ${getLevelBadge()}`}>
          {level}
        </span>
      </div>
      {description && (
        <p className="text-xs text-zinc-400 leading-relaxed mt-1">
          {description}
        </p>
      )}
    </div>
  );
};
