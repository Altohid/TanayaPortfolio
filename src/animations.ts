import type { MotionProps } from 'framer-motion';

export const sectionReveal: MotionProps = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12 },
  transition: { duration: 0.56, ease: [0.22, 1, 0.36, 1] },
};

export const cardReveal: MotionProps = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.14 },
  transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] },
};
