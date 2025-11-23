import React from 'react';
import { GraduationCap, Briefcase, Search } from 'lucide-react';
import { EDUCATION, EXPERIENCE, RESEARCH_FOCUS } from '../constants';

export const About: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-surface/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Research Interests Section */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
               <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400">
                  <Search className="w-6 h-6" />
               </div>
               <h2 className="text-2xl font-bold text-white">Research Focus</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {RESEARCH_FOCUS.map((interest, index) => (
                 <div 
                   key={index} 
                   className="flex items-center gap-3 p-4 bg-background border border-white/5 hover:border-purple-500/30 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/5 group"
                 >
                    <div className="w-2 h-2 rounded-full bg-purple-500 group-hover:scale-125 transition-transform"></div>
                    <span className="text-slate-300 font-medium text-sm">{interest}</span>
                 </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-16">
            
            {/* Education Column */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-white">Education</h2>
              </div>

              <div className="space-y-8 border-l-2 border-white/10 ml-4 pl-8 relative">
                {EDUCATION.map((item) => (
                  <div key={item.id} className="relative group">
                    <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-surface bg-blue-500 transition-transform group-hover:scale-125" />
                    <span className="text-sm font-mono text-cyan-400 mb-1 block">{item.period}</span>
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    <p className="text-slate-400 text-sm mb-2">{item.organization}, {item.location}</p>
                    {item.description && (
                      <p className="text-slate-500 text-sm leading-relaxed bg-white/5 p-3 rounded-lg border border-white/5">
                        {item.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Column */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-white">Professional Experience</h2>
              </div>

              <div className="space-y-10 border-l-2 border-white/10 ml-4 pl-8 relative">
                {EXPERIENCE.map((item) => (
                  <div key={item.id} className="relative group">
                    <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-surface bg-cyan-500 transition-transform group-hover:scale-125" />
                    <span className="text-sm font-mono text-blue-400 mb-1 block">{item.period}</span>
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    <p className="text-slate-400 text-sm mb-2">{item.organization}, {item.location}</p>
                    {item.description && (
                      <p className="text-slate-500 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    )}
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