import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Smartphone } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    desc: 'Modern, accessible, and performant web apps with React, Next.js, and Tailwind.',
  },
  {
    icon: Database,
    title: 'Backend Development',
    desc: 'Robust APIs and microservices with Node.js, Python, and cloud-native tooling.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    desc: 'Native-feel mobile apps with React Native and Expo, optimized for speed.',
  },
];

export default function Services() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {services.map((s, i) => {
        const Icon = s.icon;
        return (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.1, duration: 0.5, ease: 'easeOut' }}
            whileHover={{ y: -6 }}
            className="rounded-2xl bg-slate-900/60 border border-cyan-400/20 p-6 shadow-[0_0_0_0_rgba(0,0,0,0)] hover:shadow-[0_0_40px_-10px_rgba(34,211,238,0.5)] transition-shadow"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-400/30">
                <Icon size={22} />
              </div>
              <h3 className="text-white font-semibold text-lg">{s.title}</h3>
            </div>
            <p className="mt-4 text-slate-400 text-sm">{s.desc}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
