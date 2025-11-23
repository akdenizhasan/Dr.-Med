import React from 'react';
import { SOCIALS, PERSONAL_INFO } from '../constants';
import { Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("This is a demo form. In a real app, this would send an email.");
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-gradient-to-br from-surface to-background border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Let's work together</h2>
              <p className="text-slate-400 mb-8">
                Have a project in mind? I'm always open to discussing new opportunities, creative ideas, or just having a chat.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="block">
                  <span className="text-sm text-slate-500 uppercase tracking-wider">Email</span>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="block text-lg text-white hover:text-blue-400 transition-colors">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
                <div className="block">
                  <span className="text-sm text-slate-500 uppercase tracking-wider">Address</span>
                  <p className="text-lg text-white">{PERSONAL_INFO.location}</p>
                </div>
              </div>

              <div className="flex gap-4">
                {SOCIALS.map((social) => (
                  <a 
                    key={social.platform}
                    href={social.url}
                    className="p-3 bg-white/5 rounded-full text-slate-300 hover:bg-blue-500 hover:text-white transition-all"
                    aria-label={social.platform}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-slate-600 transition-colors"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-slate-600 transition-colors"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-slate-600 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white rounded-lg font-bold shadow-lg shadow-blue-500/20 transition-all flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
