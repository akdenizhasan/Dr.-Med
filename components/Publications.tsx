import React, { useEffect, useRef } from 'react';
import { BookOpen, FileText, ExternalLink } from 'lucide-react';
import { PUBLICATIONS } from '../constants';

export const Publications: React.FC = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Initialize Intersection Observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Remove hidden state classes and add visible state classes
            entry.target.classList.remove('opacity-0', 'translate-y-8');
            entry.target.classList.add('opacity-100', 'translate-y-0');
            // Stop observing once animated
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the item is visible
        rootMargin: '0px 0px -50px 0px', // Offset to trigger slightly before bottom
      }
    );

    // Observe all publication items
    const items = document.querySelectorAll('.pub-item');
    items.forEach((item) => observerRef.current?.observe(item));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <section id="publications" className="py-24 bg-background border-t border-white/5">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Selected Publications</h2>
          <p className="text-slate-400 max-w-2xl">
             A selection of recent peer-reviewed journal articles, book chapters, and ongoing research contributions.
          </p>
        </div>

        <div className="space-y-6">
          {PUBLICATIONS.map((pub, index) => (
            <div 
              key={pub.id} 
              className="pub-item group bg-surface/40 hover:bg-surface/80 border border-white/5 hover:border-cyan-500/30 p-6 rounded-xl transition-all duration-700 ease-out flex gap-6 opacity-0 translate-y-8"
              style={{ transitionDelay: `${index % 4 * 100}ms` }} // Stagger animations slightly
            >
              <div className="hidden sm:flex flex-col items-center gap-2 pt-1 min-w-[60px]">
                <div className={`p-3 rounded-lg ${pub.type === 'Book Chapter' ? 'bg-purple-500/10 text-purple-400' : 'bg-blue-500/10 text-blue-400'}`}>
                  {pub.type === 'Book Chapter' ? <BookOpen size={24} /> : <FileText size={24} />}
                </div>
                <span className="text-xs font-mono text-slate-500">{pub.year}</span>
              </div>

              <div className="flex-1">
                <div className="flex justify-between items-start gap-4">
                    <div>
                        <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider mb-2 ${
                            pub.type === 'Work in Progress' ? 'bg-yellow-500/10 text-yellow-500' :
                            pub.type === 'Book Chapter' ? 'bg-purple-500/10 text-purple-400' : 'bg-blue-500/10 text-blue-400'
                        }`}>
                            {pub.type}
                        </span>
                        <h3 className="text-lg font-bold text-slate-200 leading-snug group-hover:text-cyan-400 transition-colors">
                            {pub.title}
                        </h3>
                    </div>
                    {pub.link && (
                        <a 
                            href={pub.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-slate-500 hover:text-cyan-400 transition-colors"
                        >
                            <ExternalLink size={20} />
                        </a>
                    )}
                </div>
                
                <p className="text-slate-400 mt-2 text-sm leading-relaxed font-serif">
                    {pub.citation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};