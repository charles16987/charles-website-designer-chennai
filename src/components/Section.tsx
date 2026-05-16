import React from 'react';
import { cn } from '@/src/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  containerClassName?: string;
}

export const Section = ({ children, className, id, containerClassName }: SectionProps) => {
  return (
    <section id={id} className={cn('py-20 px-5', className)}>
      <div className={cn('max-w-7xl mx-auto', containerClassName)}>
        {children}
      </div>
    </section>
  );
};

export const SectionHeader = ({ 
  title, 
  subtitle, 
  align = 'center',
  titleGradient = true 
}: { 
  title: string; 
  subtitle?: string; 
  align?: 'left' | 'center';
  titleGradient?: boolean;
}) => {
  return (
    <div className={cn('mb-16 space-y-4 max-w-3xl', align === 'center' ? 'mx-auto text-center' : 'text-left')}>
      <h2 className={cn('text-3xl md:text-5xl font-bold leading-tight', titleGradient && 'text-gradient')}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
