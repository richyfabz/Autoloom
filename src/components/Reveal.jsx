import { motion } from 'framer-motion'

export default function Reveal({ children, delay = 0, className = '', as = 'div', y = 28 }) {
  const Comp = motion[as] || motion.div
  return (
    <Comp
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: [0.16, 0.8, 0.28, 1], delay }}
      className={className}
    >
      {children}
    </Comp>
  )
}
