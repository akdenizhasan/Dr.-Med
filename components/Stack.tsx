import React from 'react';
import { SKILLS } from '../constants';

export const Stack: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Research & Technical Skills</h2>
          <p className="text-slate-400 max-w-2xl">
            Key methodologies, software, and areas of expertise involved in my research and teaching.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {SKILLS.map((skill, index) => (
            <div 
              key={index} 
              className="group p-6 bg-surface hover:bg-white/5 border border-white/5 hover:border-blue-500/30 rounded-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-xl font-bold text-slate-300 group-hover:text-blue-400 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-colors">
                  {skill.name.charAt(0)}
                </div>
                <h3 className="font-semibold text-slate-200">{skill.name}</h3>
                <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 h-full rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};