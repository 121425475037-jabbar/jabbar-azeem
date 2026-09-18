import React from 'react';

export const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-[#050507]">
      {/* Subtle top subtle ambient radial glows */}
      <div className="absolute -top-40 left-1/4 w-[600px] h-[500px] bg-cyan-900/10 rounded-full blur-[140px] opacity-70 animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-indigo-950/15 rounded-full blur-[160px] opacity-60" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-sky-950/10 rounded-full blur-[150px] opacity-50" />

      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.035]" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px'
        }}
      />

      {/* Subtle noise grain simulation */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-transparent via-[#050507]/60 to-[#050507]" />
    </div>
  );
};
