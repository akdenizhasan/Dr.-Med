
import React, { useEffect, useRef } from 'react';
import { BookOpen, FileText, ExternalLink } from 'lucide-react';
import { PUBLICATIONS } from '../constants.tsx';

export const Publications: React.FC = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-8');
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const items = document.querySelectorAll('.pub-item');
    items.forEach((item) => observerRef.current?.observe(item));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <section id="publications" className="py-32 bg-[#0f172a] border-t border-white/5 scroll-mt-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-baseline gap-4 mb-20">
          <span className="text-cyan-500 font-mono text-xl">04 /</span>
          <h2 className="text-5xl font-bold text-white tracking-tighter uppercase">Selected Publications</h2>
        </div>

        <div className="grid grid-cols-1 gap-1">
          {PUBLICATIONS.map((pub, index) => (
            <div 
              key={pub.id} 
              className="pub-item group border-b border-white/5 py-12 transition-all duration-700 ease-out opacity-0 translate-y-8 flex flex-col md:flex-row md:items-center justify-between gap-8"
              style={{ transitionDelay: `${index % 4 * 100}ms` }}
            >
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-mono text-cyan-500 uppercase tracking-widest">{pub.year}</span>
                  <span className="text-[10px] font-mono border border-white/10 px-2 py-0.5 text-slate-500 uppercase">{pub.type}</span>
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors leading-tight max-w-4xl">
                  {pub.title}
                </h3>
                <p className="text-slate-500 text-sm font-light italic">
                  {pub.citation}
                </p>
              </div>
              
              {pub.link && (
                <a 
                  href={pub.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all shrink-0"
                >
                  <ExternalLink size={24} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
