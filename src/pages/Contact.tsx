import React, { useState } from 'react';
import { Mail, Linkedin, MapPin, Send, ArrowUpRight, CheckCircle2, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';
import { SectionHeading } from '../components/SectionHeading';
import { CopyEmailButton } from '../components/CopyEmailButton';
import { PageTransition } from '../components/PageTransition';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build mailto query so message opens in the user's native email client
    const mailtoSubject = encodeURIComponent(
      subject ? `[Portfolio Inquiry] ${subject}` : `[Portfolio Inquiry] Message from ${name || 'Visitor'}`
    );
    const bodyContent = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoBody = encodeURIComponent(bodyContent);

    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSubmitted(true);
  };

  return (
    <PageTransition className="pt-28 sm:pt-36 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-24">
      {/* Hero */}
      <div className="space-y-4">
        <SectionHeading
          tag="Get in Touch"
          title="Let's connect."
          subtitle="Have an idea, project or opportunity to discuss? I'd be happy to connect."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Left Column: Direct Channels */}
        <div className="md:col-span-5 space-y-6">
          <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/[0.08] space-y-6">
            <h3 className="text-sm font-mono uppercase tracking-wider text-zinc-300 font-semibold">
              Direct Channels
            </h3>

            {/* Email Card */}
            <div className="space-y-2">
              <span className="text-xs text-zinc-500 font-mono">PRIMARY EMAIL</span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="group flex items-center justify-between p-3.5 rounded-xl bg-black/40 border border-white/5 hover:border-cyan-500/40 transition-all text-xs"
              >
                <div className="flex items-center gap-2.5 text-zinc-200 group-hover:text-white">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span className="font-mono">{PERSONAL_INFO.email}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-cyan-400" />
              </a>
              <div className="pt-1">
                <CopyEmailButton />
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="space-y-2 pt-2 border-t border-white/5">
              <span className="text-xs text-zinc-500 font-mono">PROFESSIONAL NETWORK</span>
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3.5 rounded-xl bg-black/40 border border-white/5 hover:border-cyan-500/40 transition-all text-xs"
              >
                <div className="flex items-center gap-2.5 text-zinc-200 group-hover:text-white">
                  <Linkedin className="w-4 h-4 text-cyan-400" />
                  <span className="font-mono truncate max-w-[200px]">{PERSONAL_INFO.preferredShortName}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-cyan-400" />
              </a>
            </div>

            {/* Location Card */}
            <div className="space-y-1.5 pt-2 border-t border-white/5">
              <span className="text-xs text-zinc-500 font-mono">BASE LOCATION</span>
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/30 border border-white/5 text-xs text-zinc-400 leading-relaxed font-mono">
            Always excited to discuss student tech initiatives, collaborative hackathon opportunities, data analysis projects, or programming ideas.
          </div>
        </div>

        {/* Right Column: Interactive Contact Form */}
        <div className="md:col-span-7">
          <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/50 border border-white/[0.08] shadow-xl">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-cyan-400" />
              Send a Direct Message
            </h3>
            <p className="text-xs text-zinc-400 mb-6 font-mono">
              Fill out the details below to formulate an email message directly to {PERSONAL_INFO.email}.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs font-mono text-zinc-300 mb-1.5">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex Morgan"
                  className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-zinc-600 transition-all outline-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-mono text-zinc-300 mb-1.5">
                  Your Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. alex@example.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-zinc-600 transition-all outline-none"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-mono text-zinc-300 mb-1.5">
                  Subject (Optional)
                </label>
                <input
                  id="subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g. Project discussion / Collaboration"
                  className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-zinc-600 transition-all outline-none"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono text-zinc-300 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your note or project idea here..."
                  className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-zinc-600 transition-all outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md shadow-cyan-950/40 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>

              {submitted && (
                <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs font-mono flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Email client opened with pre-filled message.</span>
                </div>
              )}

              <p className="text-[11px] text-zinc-500 font-mono text-center pt-2">
                * Initiates direct mailto transmission to {PERSONAL_INFO.email}.
              </p>
            </form>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
