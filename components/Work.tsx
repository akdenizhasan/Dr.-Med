
import React from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../constants.tsx';

export const Work: React.FC = () => {
  return (
    <section id="work" className="py-32 bg-[#0f172a] border-t border-white/5 scroll-mt-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-baseline gap-4 mb-20">
          <span className="text-cyan-500 font-mono text-xl">01 /</span>
          <h2 className="text-5xl font-bold text-white tracking-tighter uppercase">Selected Work</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {PROJECTS.map((project, index) => (
            <div 
              key={project.id} 
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900 rounded-sm mb-6 border border-white/5">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-4 right-4 w-12 h-12 bg-white text-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-300">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono text-slate-500">0{index + 1}</span>
                    <h3 className="text-2xl font-bold text-white tracking-tight">{project.title}</h3>
                  </div>
                  <p className="text-slate-500 font-light max-w-md">{project.description}</p>
                </div>
                <div className="flex gap-2 mt-2">
                  {project.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="text-[10px] font-mono border border-white/10 px-2 py-1 uppercase text-slate-500">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
