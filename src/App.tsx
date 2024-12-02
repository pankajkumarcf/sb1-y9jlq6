import React from 'react';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Timeline } from './components/Timeline/Timeline';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Timeline type="experience" />
      <Timeline type="education" />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;