import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../constants';

export const Work: React.FC = () => {
  return (
    <section id="work" className="py-24 bg-surface/30">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Selected Works</h2>
            <div className="h-1 w-20 bg-blue-500 rounded"></div>
          </div>
          <a href="#" className="hidden md:flex items-center text-blue-400 hover:text-blue-300 transition-colors">
            View Github <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="group relative bg-background border border-white/5 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-500"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <button className="p-3 bg-white text-slate-900 rounded-full hover:bg-blue-500 hover:text-white transition-colors">
                    <Github className="w-5 h-5" />
                  </button>
                  <button className="p-3 bg-white text-slate-900 rounded-full hover:bg-blue-500 hover:text-white transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <a href="#" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium">
             View Github <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};
