'use client';

import { motion } from 'framer-motion';

const BlinkingCursor = () => (
  <motion.span
    className="text-2xl text-text-primary"
    animate={{ opacity: [0, 1, 0] }}
    transition={{ duration: 1, repeat: Infinity }}
  >
    _
  </motion.span>
);

const command = './contato --all';
const contactInfo = [
  { icon: '', name: 'GitHub', value: 'github.com/seu-usuario' },
  { icon: '', name: 'LinkedIn', value: 'linkedin.com/in/seu-perfil' },
  { icon: '', name: 'Email', value: 'seu.email@provedor.com' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // Stagger for command typing
    },
  },
};

const charVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const outputVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: command.length * 0.05 + 1, // Delay after command typing
            staggerChildren: 0.3,
        },
    },
};

const lineVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
};

export function FakeTerminal() {
  return (
    <div className="w-full max-w-2xl mx-auto bg-neutral-900 rounded-xl border-2 border-border-subtle shadow-2xl font-mono">
      {/* Terminal Header */}
      <div className="h-10 bg-neutral-800 flex items-center gap-2 px-4 rounded-t-lg border-b-2 border-border-subtle">
        <div className="w-4 h-4 bg-red-500 rounded-full"></div>
        <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
      </div>

      {/* Terminal Body */}
      <div className="p-6 text-lg min-h-[300px]">
        <div className="flex items-center">
          <span className="text-green-400 mr-2">&gt;</span>
          <motion.div
            className="flex"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {command.split('').map((char, i) => (
              <motion.span key={i} variants={charVariants}>
                {char}
              </motion.span>
            ))}
          </motion.div>
          <BlinkingCursor />
        </div>

        <motion.div
            className="mt-4 space-y-2"
            variants={outputVariants}
            initial="hidden"
            animate="visible"
        >
            {contactInfo.map(item => (
                <motion.div key={item.name} variants={lineVariants} className="flex items-center gap-4">
                    <span className='text-2xl text-cta'>{item.icon}</span>
                    <span className='text-text-secondary w-20'>{item.name}:</span>
                    <a href={`https://${item.value}`} target="_blank" rel="noopener noreferrer" className="text-text-primary hover:underline decoration-cta">
                        {item.value}
                    </a>
                </motion.div>
            ))}
        </motion.div>
      </div>
    </div>
  );
}
