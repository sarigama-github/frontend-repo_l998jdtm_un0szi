import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Section({ id, title, children }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id={id} ref={ref} className="relative scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-6xl mx-auto px-4 py-20"
      >
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            {title}
          </h2>
        )}
        {children}
      </motion.div>
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -inset-x-20 -top-10 h-40 bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-transparent blur-3xl" />
      </div>
    </section>
  );
}
