
import React from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { Stack } from './components/Stack.tsx';
import { Work } from './components/Work.tsx';
import { Publications } from './components/Publications.tsx';
import { Network } from './components/Network.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';
import { AIChat } from './components/AIChat.tsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 selection:bg-cyan-500/30 font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Stack />
        <Work />
        <Publications />
        <Network />
        <Contact />
      </main>
      <Footer />
      <AIChat />
    </div>
  );
}
