'use client';

import { AnimatePresence, motion as m } from 'framer-motion';

export default function Container({ children, classNames }) {
  return (
    <AnimatePresence mode="wait">
      <m.div
        animate={{ opacity: 1, scale: 1 }}
        className={`bg-container rounded-3xl w-[1000px] h-[280px] ${classNames}`}
        exit={{ opacity: 0 }}
        initial={{ opacity: 0, scale: 0.5 }}
        transition={{
          default: {
            duration: 0.1,
            ease: [0, 0.71, 0.2, 1.01]
          },
          opacity: {
            type: 'spring',
            damping: 5,
            stiffness: 100,
            restDelta: 0.001
          }
        }}>
        {children}
      </m.div>
    </AnimatePresence>
  );
}
