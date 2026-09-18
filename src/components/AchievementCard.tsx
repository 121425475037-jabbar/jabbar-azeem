import React from 'react';
import { Trophy, Award, Target, Presentation, Sparkles, CheckCircle2 } from 'lucide-react';
import { Achievement } from '../types';

interface AchievementCardProps {
  achievement: Achievement;
  featured?: boolean;
}

export const AchievementCard: React.FC<AchievementCardProps> = ({ achievement, featured = false }) => {
  const getBadgeStyle = () => {
    switch (achievement.badgeType) {
      case 'gold':
        return {
          icon: <Trophy className="w-5 h-5 text-amber-400" />,
          pill: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
          glow: 'from-amber-500/15 via-transparent to-transparent',
          border: 'hover:border-amber-500/50'
        };
      case 'cyan':
        return {
          icon: <Award className="w-5 h-5 text-cyan-400" />,
          pill: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
          glow: 'from-cyan-500/15 via-transparent to-transparent',
          border: 'hover:border-cyan-500/50'
        };
      case 'purple':
        return {
          icon: <Target className="w-5 h-5 text-purple-400" />,
          pill: 'bg-purple-500/10 text-purple-300 border-purple-500/30',
          glow: 'from-purple-500/15 via-transparent to-transparent',
          border: 'hover:border-purple-500/50'
        };
      case 'blue':
      default:
        return {
          icon: <Presentation className="w-5 h-5 text-blue-400" />,
          pill: 'bg-blue-500/10 text-blue-300 border-blue-500/30',
          glow: 'from-blue-500/15 via-transparent to-transparent',
          border: 'hover:border-blue-500/50'
        };
    }
  };

  const style = getBadgeStyle();

  return (
    <div
      className={`relative rounded-2xl bg-zinc-900/60 border border-white/[0.08] ${style.border} transition-all duration-300 p-6 flex flex-col justify-between overflow-hidden shadow-lg shadow-black/40 hover:-translate-y-1 ${
        featured ? 'sm:col-span-2 bg-gradient-to-br from-zinc-900/90 via-zinc-900/50 to-zinc-950 border-amber-500/30 shadow-amber-950/20' : ''
      }`}
    >
      {/* Subtle background glow */}
      <div className={`absolute -right-12 -top-12 w-44 h-44 bg-gradient-to-br ${style.glow} rounded-full blur-2xl pointer-events-none`} />

      <div>
        {/* Top bar with Award Badge */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-zinc-800/80 border border-white/10 flex items-center justify-center">
              {style.icon}
            </div>
            <div>
              <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold font-mono border ${style.pill}`}>
                {achievement.award}
              </span>
            </div>
          </div>
          {featured && (
            <span className="flex items-center gap-1 text-[10px] font-mono font-semibold text-amber-400 uppercase tracking-widest bg-amber-950/40 border border-amber-500/30 px-2 py-0.5 rounded">
              <Sparkles className="w-3 h-3" />
              Highlight
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className={`font-bold text-white mb-1.5 ${featured ? 'text-xl sm:text-2xl text-amber-100' : 'text-lg'}`}>
          {achievement.title}
        </h3>

        {/* Institution if provided */}
        {achievement.institution && (
          <p className="text-xs font-mono text-zinc-400 mb-3 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            {achievement.institution}
          </p>
        )}

        {/* Description */}
        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
          {achievement.description}
        </p>
      </div>

      <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-zinc-500">
        <span className="flex items-center gap-1 text-zinc-400">
          <CheckCircle2 className="w-3 h-3 text-cyan-400" />
          Verified Record
        </span>
        <span>ACADEMIC & EVENT RECOGNITION</span>
      </div>
    </div>
  );
};
