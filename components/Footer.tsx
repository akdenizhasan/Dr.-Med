import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-black/20 border-t border-white/5 text-center">
      <div className="container mx-auto px-6">
        <p className="text-slate-500 text-sm flex items-center justify-center gap-1">
          Hasan Akdeniz, Ph.D. - Researcher & Educator
        </p>
        <p className="text-slate-600 text-xs mt-2">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};