
import React from 'react';
import { EDUCATION, EXPERIENCE } from '../constants.tsx';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-[#0f172a] border-t border-white/5 scroll-mt-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-baseline gap-4 mb-20">
          <span className="text-cyan-500 font-mono text-xl">02 /</span>
          <h2 className="text-5xl font-bold text-white tracking-tighter uppercase">Background</h2>
        </div>

        <div className="grid md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
             <p className="text-xl text-slate-400 font-light leading-relaxed sticky top-32">
               Bridging the gap between academic rigor and technological innovation to redefine gifted education for the AI era.
             </p>
          </div>
          
          <div className="md:col-span-8 space-y-24">
            {/* Experience */}
            <div id="experience" className="space-y-12 scroll-mt-32">
              <h3 className="text-xs font-mono text-cyan-500 uppercase tracking-widest border-b border-white/10 pb-4">Experience</h3>
              <div className="space-y-12">
                {EXPERIENCE.map((item) => (
                  <div key={item.id} className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                    <span className="sm:col-span-3 text-sm font-mono text-slate-500 uppercase">{item.period}</span>
                    <div className="sm:col-span-9">
                      <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-slate-400 mb-2 font-medium">{item.organization}</p>
                      <p className="text-slate-500 text-sm font-light leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div id="education" className="space-y-12 scroll-mt-32">
              <h3 className="text-xs font-mono text-cyan-500 uppercase tracking-widest border-b border-white/10 pb-4">Education</h3>
              <div className="space-y-12">
                {EDUCATION.map((item) => (
                  <div key={item.id} className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                    <span className="sm:col-span-3 text-sm font-mono text-slate-500 uppercase">{item.period}</span>
                    <div className="sm:col-span-9">
                      <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-slate-400 font-medium">{item.organization}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
