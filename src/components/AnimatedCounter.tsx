import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'motion/react';

export const AnimatedCounter = ({ value, label, prefix = '', suffix = '' }: { value: number; label: string; prefix?: string; suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const spring = useSpring(0, {
    mass: 1,
    stiffness: 100,
    damping: 30,
  });

  const display = useTransform(spring, (current) => Math.round(current).toLocaleString());

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [spring, value, isInView]);

  return (
    <div ref={ref} className="text-center p-6 glass-card border-white/5 hover:border-primary-yellow/20 transition-all group">
      <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2 group-hover:scale-110 transition-transform">
        {prefix}<motion.span>{display}</motion.span>{suffix}
      </div>
      <div className="text-xs uppercase tracking-[0.2em] font-bold text-slate-500 group-hover:text-primary-yellow transition-colors">{label}</div>
    </div>
  );
};
