import React from 'react';

interface SectionHeadingProps {
  tag?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  tag,
  title,
  subtitle,
  align = 'left',
  className = ''
}) => {
  return (
    <div className={`space-y-3 ${align === 'center' ? 'text-center max-w-2xl mx-auto' : 'max-w-3xl'} ${className}`}>
      {tag && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-300 text-xs font-mono tracking-wider uppercase ${align === 'center' ? 'mx-auto' : ''}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span>{tag}</span>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};
