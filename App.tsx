
import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Career from './sections/Career';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'career', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && 
            scrollPosition >= element.offsetTop && 
            scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      <Navigation activeSection={activeSection} />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="about" className="py-24 md:py-32">
          <About />
        </section>
        
        <section id="skills" className="py-24 md:py-32 bg-slate-100">
          <Skills />
        </section>

        <section id="career" className="py-24 md:py-32">
          <Career />
        </section>

        <section id="achievements" className="py-24 md:py-32 bg-slate-900 text-white">
          <Achievements />
        </section>
        
        <section id="contact" className="py-24 md:py-32">
          <Contact />
        </section>
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12 text-center border-t border-slate-800">
        <p className="text-sm">© {new Date().getFullYear()} Oh Doo-seong. All rights reserved.</p>
        <p className="mt-2 text-xs opacity-50">"빵을 통해 행복을 전하고 싶습니다."</p>
      </footer>
    </div>
  );
};

export default App;
