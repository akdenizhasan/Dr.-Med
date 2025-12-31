
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { PERSONAL_INFO } from '../constants.tsx';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 bg-[#000000]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="space-y-6 animate-slide-up">
          <div className="flex items-center gap-4 text-cyan-500 font-mono text-sm tracking-widest uppercase">
            <span className="w-12 h-[1px] bg-cyan-500"></span>
            {PERSONAL_INFO.role}
          </div>
          
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white leading-[0.9]">
            HASAN <br />
            <span className="text-slate-500">AKDENIZ</span>
          </h1>
          
          <div className="max-w-xl space-y-8">
            <p className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed">
              Curriculum Development & Educational Technology & Gifted Education Expert.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <a 
                href="#work"
                className="group flex items-center gap-3 text-white font-bold text-lg hover:text-cyan-400 transition-colors"
              >
                SELECTED WORKS
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-cyan-400 group-hover:translate-x-2 transition-all">
                  <ArrowDown className="w-5 h-5" />
                </div>
              </a>
              <span className="hidden sm:block w-[1px] h-8 bg-white/10"></span>
              <p className="text-sm text-slate-500 font-mono uppercase tracking-tighter">
                Based in Ankara, Turkey <br /> Operating Worldwide
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 right-10 hidden md:block animate-pulse">
        <div className="w-px h-24 bg-gradient-to-b from-transparent via-cyan-500 to-transparent"></div>
      </div>
    </section>
  );
};
