import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 py-10 text-center text-slate-400">
      <div className="flex items-center justify-center gap-6 mb-4">
        <a href="https://github.com/hassen" target="_blank" rel="noreferrer" className="hover:text-cyan-300 transition"><Github /></a>
        <a href="https://linkedin.com/in/hassen" target="_blank" rel="noreferrer" className="hover:text-cyan-300 transition"><Linkedin /></a>
        <a href="mailto:hello@hassen.dev" className="hover:text-cyan-300 transition"><Mail /></a>
      </div>
      <p>© {new Date().getFullYear()} Hassen Mosbeh. All rights reserved.</p>
    </footer>
  );
}
