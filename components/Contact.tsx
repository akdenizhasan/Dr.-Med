
import React from 'react';
import { SOCIALS, PERSONAL_INFO } from '../constants.tsx';
import { Send, BookText } from 'lucide-react';

export const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("This is a demo form. In a real app, this would send an email.");
  };

  // Extract ResearchGate URL from constants
  const researchGateLink = SOCIALS.find(s => s.platform === "ResearchGate")?.url || "https://www.researchgate.net/profile/Hasan-Akdeniz";

  return (
    <section id="contact" className="py-32 bg-[#0f172a] border-t border-white/5 scroll-mt-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-baseline gap-4 mb-20">
          <span className="text-cyan-500 font-mono text-xl">05 /</span>
          <h2 className="text-5xl font-bold text-white tracking-tighter uppercase">Connect</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-24">
          <div className="space-y-12">
            <h3 className="text-3xl font-bold text-white tracking-tight">Let's redefine education together.</h3>
            
            <div className="space-y-6">
              <div className="block">
                <span className="text-xs font-mono text-slate-500 uppercase tracking-widest block mb-2">Direct Inquiry</span>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-2xl text-white hover:text-cyan-400 transition-colors font-light">
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div className="block">
                <span className="text-xs font-mono text-slate-500 uppercase tracking-widest block mb-2">Academic Research</span>
                <a 
                  href={researchGateLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group inline-flex items-center gap-3 text-2xl text-white hover:text-cyan-400 transition-colors font-light"
                >
                  ResearchGate
                  <BookText className="w-6 h-6 text-cyan-500 group-hover:scale-110 transition-transform" />
                </a>
              </div>
              <div className="block">
                <span className="text-xs font-mono text-slate-500 uppercase tracking-widest block mb-2">Location</span>
                <p className="text-2xl text-white font-light">{PERSONAL_INFO.location}</p>
              </div>
            </div>

            <div className="flex gap-6">
              {SOCIALS.map((social) => (
                <a 
                  key={social.platform}
                  href={social.url}
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:border-cyan-500 hover:text-cyan-500 transition-all"
                  aria-label={social.platform}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-mono text-slate-500 uppercase tracking-widest">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-cyan-500 text-white transition-colors"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-slate-500 uppercase tracking-widest">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-cyan-500 text-white transition-colors"
                  placeholder="Email Address"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-mono text-slate-500 uppercase tracking-widest">Message</label>
              <textarea 
                rows={4}
                className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-cyan-500 text-white transition-colors resize-none"
                placeholder="What can we build?"
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="group flex items-center gap-4 text-white font-bold text-lg uppercase tracking-widest hover:text-cyan-400 transition-colors"
            >
              Send Inquiry
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-cyan-400 group-hover:translate-x-2 transition-all">
                <Send className="w-4 h-4" />
              </div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
