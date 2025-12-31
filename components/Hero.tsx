
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { PERSONAL_INFO } from '../constants.tsx';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-20 bg-[#0f172a] text-center">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="space-y-8 animate-slide-up flex flex-col items-center">
          <div className="flex items-center gap-4 text-cyan-500 font-mono text-sm tracking-widest uppercase">
            <span className="w-8 h-[1px] bg-cyan-500"></span>
            {PERSONAL_INFO.role}
            <span className="w-8 h-[1px] bg-cyan-500"></span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white leading-tight">
            {PERSONAL_INFO.name.split(',')[0].toUpperCase()}
          </h1>
          
          <div className="max-w-2xl space-y-10 flex flex-col items-center">
            <p className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed">
              {PERSONAL_INFO.tagline}
            </p>
            
            <div className="flex flex-col items-center gap-8">
              <a 
                href="#work"
                className="group flex flex-col items-center gap-4 text-white font-bold text-lg hover:text-cyan-400 transition-colors"
              >
                SELECTED WORKS
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-cyan-400 group-hover:translate-y-2 transition-all">
                  <ArrowDown className="w-5 h-5" />
                </div>
              </a>
              
              <div className="pt-4 border-t border-white/5 w-full">
                <p className="text-xs text-slate-500 font-mono uppercase tracking-widest">
                  Based in {PERSONAL_INFO.location} • Operating Worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
