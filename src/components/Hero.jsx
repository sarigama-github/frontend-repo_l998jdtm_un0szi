import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-slate-950/60" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight text-white"
          >
            I’m Hassen Mosbeh, <span className="text-cyan-300">Full Stack Developer</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-6 text-slate-300 max-w-xl"
          >
            I build fast, delightful, and scalable products across web and mobile with a focus on modern DX and crisp UX.
          </motion.p>

          <div className="mt-10 grid grid-cols-3 gap-4">
            {[{ label: 'Frontend', value: 85 }, { label: 'Backend', value: 90 }, { label: 'Mobile', value: 70 }].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
                className="rounded-xl bg-white/5 border border-white/10 p-4 backdrop-blur text-center"
              >
                <div className="text-2xl font-bold text-white">{s.value}%</div>
                <div className="text-xs uppercase tracking-wider text-cyan-300/80">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="justify-self-center"
        >
          <div className="relative w-48 h-48 md:w-64 md:h-64">
            <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-500 blur-2xl opacity-40" />
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop"
              alt="Profile"
              className="relative rounded-full w-full h-full object-cover border-4 border-white/10 shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
