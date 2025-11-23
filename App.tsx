import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Stack } from './components/Stack';
import { Work } from './components/Work';
import { Publications } from './components/Publications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AIChat } from './components/AIChat';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-slate-200 selection:bg-cyan-500/30">
      <Header />
      <main>
        <Hero />
        <About />
        <Stack />
        <Work />
        <Publications />
        <Contact />
      </main>
      <Footer />
      <AIChat />
    </div>
  );
}