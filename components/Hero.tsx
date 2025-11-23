import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Background Subtle Effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-slide-up">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-medium tracking-wide uppercase">
            Researcher & Educator
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Bridging the Gap Between <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Education & AI
            </span>
          </h1>
          
          <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
            {PERSONAL_INFO.bio}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#work"
              className="group flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold transition-all shadow-lg shadow-blue-500/20"
            >
              View Research
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a href="https://www.linkedin.com/in/hasan-akdeniz-a71ab453/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-surface hover:bg-slate-700 text-slate-200 border border-white/10 rounded-lg font-semibold transition-all">
              <FileText className="w-4 h-4" />
              LinkedIn Profile
            </a>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-wrap gap-x-8 gap-y-4 text-slate-500 text-sm font-medium">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
              Gifted Education
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              EdTech Implementation
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-500"></span>
              Curriculum Design
            </div>
          </div>
        </div>

        <div className="relative hidden md:block animate-fade-in delay-200">
           {/* Abstract Academic Visual */}
           <div className="relative w-full aspect-square max-w-md mx-auto">
             <div className="absolute inset-0 bg-gradient-to-tr from-slate-700 to-slate-800 rounded-2xl rotate-3 opacity-50 blur-sm border border-white/5"></div>
             <div className="relative w-full h-full bg-surface border border-white/10 rounded-2xl p-8 shadow-2xl flex flex-col justify-center items-center text-center space-y-6">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-4xl font-bold text-white shadow-inner">
                  HA
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Hasan Akdeniz, Ph.D.</h3>
                  <p className="text-cyan-400 font-medium">Educational Technology Expert</p>
                </div>
                <div className="w-full h-px bg-white/10 my-4"></div>
                <div className="grid grid-cols-2 gap-4 w-full text-sm">
                   <div className="bg-background/50 p-3 rounded-lg border border-white/5">
                      <span className="block text-xl font-bold text-white">2</span>
                      <span className="text-slate-500">Ph.D. Degrees</span>
                   </div>
                   <div className="bg-background/50 p-3 rounded-lg border border-white/5">
                      <span className="block text-xl font-bold text-white">15+</span>
                      <span className="text-slate-500">Years Experience</span>
                   </div>
                </div>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};