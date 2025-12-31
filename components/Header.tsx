
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['about', 'experience', 'skills', 'work', 'publications', 'contact'];
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust threshold based on header height
          if (rect.top <= 120) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#work', id: 'work' },
    { name: 'Publications', href: '#publications', id: 'publications' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0f172a]/90 backdrop-blur-md border-b border-white/10 py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl md:text-2xl font-bold text-slate-100 tracking-tight">
          Hasan Akdeniz<span className="text-cyan-500">, Ph.D.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-medium transition-all duration-300 relative group ${
                activeSection === link.id ? 'text-cyan-400' : 'text-slate-300 hover:text-white'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-[1px] bg-cyan-400 transition-all duration-300 ${
                activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#1e293b] border-b border-white/10 p-6 md:hidden shadow-xl">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-lg font-medium transition-colors ${
                  activeSection === link.id ? 'text-cyan-400' : 'text-slate-300 hover:text-white'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
