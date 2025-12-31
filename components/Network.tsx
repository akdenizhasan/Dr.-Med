
import React from 'react';
import { Users, Star } from 'lucide-react';
import { COLLABORATORS, PERSONAL_INFO } from '../constants.tsx';

export const Network: React.FC = () => {
  return (
    <section id="network" className="py-32 bg-[#0f172a] border-t border-white/5 scroll-mt-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-baseline gap-4 mb-20">
          <span className="text-cyan-500 font-mono text-xl">06 /</span>
          <h2 className="text-5xl font-bold text-white tracking-tighter uppercase">Global Network</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {COLLABORATORS.map((person) => (
                <div key={person.id} className="bg-[#1e293b] p-10 hover:bg-[#2d3748] transition-colors flex flex-col justify-between h-full group">
                    <div>
                        <div className="w-12 h-12 bg-white/5 text-slate-500 rounded-full flex items-center justify-center font-mono text-lg mb-8 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                            {person.name.charAt(0)}
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2">{person.name}</h4>
                        <p className="text-slate-500 text-sm mb-6 leading-relaxed">{person.role} at <br/>{person.institution}</p>
                    </div>
                    <div className="pt-6 border-t border-white/5">
                        <span className="text-[10px] font-mono text-cyan-500 uppercase tracking-widest">{person.collaborationType}</span>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};
