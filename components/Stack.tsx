
import React, { useEffect, useRef } from 'react';
import { SKILLS } from '../constants.tsx';

export const Stack: React.FC = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const width = target.getAttribute('data-width');
            if (width) {
              // Small delay to ensure the transition is noticeable
              setTimeout(() => {
                target.style.width = `${width}%`;
              }, 100);
            }
            observerRef.current?.unobserve(target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const bars = document.querySelectorAll('.skill-bar');
    bars.forEach((bar) => observerRef.current?.observe(bar));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#000000]">
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="flex items-baseline gap-4 mb-20">
          <span className="text-cyan-500 font-mono text-xl">03 /</span>
          <h2 className="text-5xl font-bold text-white tracking-tighter uppercase">Research & Tech</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((skill, index) => (
            <div 
              key={index} 
              className="group p-8 bg-[#0a0a0a] border border-white/5 hover:border-cyan-500/30 rounded-sm transition-all duration-500"
            >
              <div className="flex flex-col gap-6">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-white text-lg tracking-tight uppercase">{skill.name}</h3>
                  <span className="text-xs font-mono text-cyan-500">{skill.level}%</span>
                </div>
                <div className="w-full bg-white/5 h-[2px] overflow-hidden">
                  <div 
                    className="skill-bar bg-cyan-500 h-full transition-all duration-1000 ease-out" 
                    style={{ width: '0%' }} 
                    data-width={skill.level}
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
