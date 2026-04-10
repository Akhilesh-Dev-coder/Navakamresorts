import { motion } from 'framer-motion';

const ScrollReveal = ({ children, className = "", delay = 0, style = {} }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.8, 
        delay: delay, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      style={{ willChange: "transform, opacity", ...style }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
