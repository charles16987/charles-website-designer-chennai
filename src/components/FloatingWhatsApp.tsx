import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://wa.me/917598825487"
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-2xl glow-whatsapp"
    >
      <MessageCircle size={32} fill="white" />
      
      {/* Tooltip */}
      <div className="absolute right-20 bg-white text-dark-bg px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none md:block hidden">
        Chat with Charles
      </div>
      
      {/* Ping effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
    </motion.a>
  );
};
