import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const cards = [
    { title: 'Clean Code', desc: 'Readable, maintainable, and tested.' },
    { title: 'Performance', desc: 'Fast apps with great UX.' },
    { title: 'DX Focus', desc: 'Tooling that accelerates shipping.' },
  ];
  return (
    <div className="text-center text-slate-300">
      <p className="max-w-3xl mx-auto leading-relaxed">
        I’m a full-stack engineer who loves building immersive, high-performance experiences. From design systems to distributed backends, I enjoy crafting delightful products end-to-end.
      </p>
      <div className="mt-12 grid sm:grid-cols-3 gap-6">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5 + i, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{ y: -10 }}
            className="rounded-xl bg-white/5 border border-white/10 p-6 backdrop-blur shadow-lg"
          >
            <div className="text-white font-semibold">{c.title}</div>
            <div className="text-slate-400 text-sm mt-2">{c.desc}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
