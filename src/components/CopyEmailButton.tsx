import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';

interface CopyEmailButtonProps {
  className?: string;
  showText?: boolean;
}

export const CopyEmailButton: React.FC<CopyEmailButtonProps> = ({ className = '', showText = true }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      // Fallback
      const textArea = document.createElement('textarea');
      textArea.value = PERSONAL_INFO.email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label="Copy email address"
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-zinc-900/80 hover:bg-zinc-800 border border-white/10 hover:border-cyan-500/40 text-xs font-mono text-zinc-300 hover:text-white transition-all duration-200 cursor-pointer ${className}`}
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-emerald-300 font-medium">Email copied!</span>
        </>
      ) : (
        <>
          <Copy className="w-3.5 h-3.5 text-cyan-400" />
          {showText && <span>{PERSONAL_INFO.email}</span>}
        </>
      )}
    </button>
  );
};
