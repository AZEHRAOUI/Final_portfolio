
import React, { useState, useEffect, ReactNode } from 'react';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

interface ZehraouiLoaderProps {
  children: ReactNode;
}

const ZehraouiLoader: React.FC<ZehraouiLoaderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { theme } = useTheme();

  // Array of welcome messages in different languages
  const welcomeMessages = [
    { lang: 'Arabic', text: 'مرحبا' },
    { lang: 'English', text: 'Welcome' },
    { lang: 'French', text: 'Bienvenue' },
    { lang: 'Deutsch ', text: 'Willkommen' },
    { lang: 'Spanish', text: 'Bienvenido' }
    // { lang: 'Deutsch ', text: 'Willkommen' },
    
    // { lang: 'Berber', text: 'ⴰⵙⵙⴻⴳⵎⴰⵏ' }
  ];

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    // Cycle through welcome messages
    const messageTimer = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % welcomeMessages.length);
    }, 500);

    // Total loading time
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearInterval(messageTimer);
      clearTimeout(loadingTimer);
    };
  }, []);

  if (isLoading) {
    return (
      <AnimatePresence>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`fixed inset-0 flex flex-col items-center justify-center z-50 space-y-8 transition-colors duration-300 ${
            theme === 'dark' 
              ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white' 
              : 'bg-gradient-to-br from-gray-100 via-gray-50 to-white text-gray-900'
          }`}
        >
          <motion.div 
            className="flex items-center justify-center space-x-4"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            {['Z', 'E', 'H', 'R', 'A', 'O', 'U', 'I'].map((letter, index) => (
              <motion.span
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 300
                }}
                className={`text-9xl font-extrabold tracking-wide transform hover:rotate-6 transition-transform duration-300 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-800'
                }`}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            key={currentMessageIndex}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-4xl font-bold tracking-wide text-center"
          >
            <p className="text-2xl mb-2 opacity-70">
              {welcomeMessages[currentMessageIndex].lang}
            </p>
            {welcomeMessages[currentMessageIndex].text}
          </motion.div>

          <motion.div 
            className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 3, ease: "linear" }}
          >
            <motion.div 
              className={`h-full ${
                theme === 'dark' 
                  ? 'bg-blue-600' 
                  : 'bg-blue-400'
              }`}
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              transition={{ duration: 3, ease: "linear" }}
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  }

  return <>{children}</>;
};

export default ZehraouiLoader;