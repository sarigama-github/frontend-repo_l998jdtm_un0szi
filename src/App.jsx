import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import GradientBG from './components/GradientBG';
import Hero from './components/Hero';
import Section from './components/Section';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative">
      <GradientBG />
      <Navbar />
      <Hero />

      <Section id="about" title="About Me">
        <About />
      </Section>

      <Section id="services" title="My Services">
        <Services />
      </Section>

      <Section id="projects" title="My Projects">
        <Projects />
      </Section>

      <Section id="contact" title="Contact">
        <div className="rounded-2xl bg-white/5 border border-white/10 p-8">
          <p className="text-slate-300">Email: <a className="text-cyan-300 hover:underline" href="mailto:hello@hassen.dev">hello@hassen.dev</a></p>
        </div>
      </Section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
