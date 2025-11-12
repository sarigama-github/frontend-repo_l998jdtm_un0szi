import React from 'react';

export default function GradientBG() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.25),rgba(7,89,133,0)_60%)] blur-3xl" />
      <div className="absolute top-1/3 -left-40 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.25),rgba(67,56,202,0)_60%)] blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.25),rgba(2,132,199,0)_60%)] blur-3xl" />
    </div>
  );
}
