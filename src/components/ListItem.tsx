import { motion } from 'framer-motion';

type Props = { 
  children: React.ReactNode; 
  className?: string;
  variant?: 'default' | 'experience' | 'skills';
};

const ListItem = ({ children, className = '', variant = 'default' }: Props) => {
  const variants = {
    default: "before:content-['▹'] flex before:mr-3 before:text-accent before:block",
    experience: "relative pl-6 before:content-['✓'] before:absolute before:left-0 before:top-0.5 before:text-accent before:font-bold before:bg-accent/10 before:rounded-full before:w-4 before:h-4 before:flex before:items-center before:justify-center before:text-xs",
    skills: "relative pl-6 before:content-['→'] before:absolute before:left-0 before:top-0.5 before:text-accent before:font-bold before:transition-transform before:duration-200 hover:before:translate-x-1"
  };

  return (
    <motion.li
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className={`${variants[variant]} text-gray-700 dark:text-gray-300 leading-relaxed transition-all duration-200 hover:text-accent/80 hover:translate-x-1 ${className}`}
    >
      <span className="block">{children}</span>
    </motion.li>
  );
};

export default ListItem;
