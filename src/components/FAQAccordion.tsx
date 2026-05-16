import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen?: boolean;
}

const FAQItem = ({ question, answer }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 last:border-0 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className={cn(
          "text-lg font-bold transition-colors",
          isOpen ? "text-primary-yellow" : "text-white group-hover:text-primary-yellow"
        )}>
          {question}
        </span>
        <div className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center border transition-all",
          isOpen ? "bg-primary-yellow border-primary-yellow text-dark-bg rotate-0" : "border-white/10 text-white rotate-90"
        )}>
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="pb-6 text-slate-400 text-sm leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQAccordion = ({ items }: { items: { q: string, a: string }[] }) => {
  return (
    <div className="glass-card bg-white/5 border-white/10 p-8 md:p-12">
      {items.map((item, idx) => (
        <FAQItem key={idx} question={item.q} answer={item.a} />
      ))}
    </div>
  );
};
