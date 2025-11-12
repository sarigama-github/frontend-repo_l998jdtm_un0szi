import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Server, Rocket } from 'lucide-react';

const projects = [
  {
    icon: Globe,
    title: 'Realtime Dashboard',
    desc: 'Live analytics dashboard with websockets, charts, and alerts.',
  },
  {
    icon: Server,
    title: 'AI-Powered API',
    desc: 'Scalable API with background jobs, vector search, and auth.',
  },
  {
    icon: Rocket,
    title: 'Mobile Commerce',
    desc: 'High-performance storefront with offline mode and push notifications.',
  },
];

export default function Projects() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {projects.map((p, i) => {
        const Icon = p.icon;
        return (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.1, duration: 0.5, ease: 'easeOut' }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="rounded-2xl bg-slate-900/60 border border-cyan-400/20 p-6 hover:shadow-[0_0_40px_-10px_rgba(34,211,238,0.5)] transition"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-400/30">
                <Icon size={22} />
              </div>
              <h3 className="text-white font-semibold text-lg">{p.title}</h3>
            </div>
            <p className="mt-4 text-slate-400 text-sm">{p.desc}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
