import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useTheme } from '../context/ThemeContext';

const navItems = [
  { href: '#home', label: 'nav.home' },
  { href: '#about', label: 'nav.about' },
  { href: '#experience', label: 'nav.experience' },
  { href: '#projects', label: 'nav.projects' },
  { href: '#skills', label: 'nav.skills' },
  { href: '#contact', label: 'nav.contact' }
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <header className={`fixed w-full ${theme === 'dark' ? 'bg-background-light/80' : 'bg-dark-blue/80'} backdrop-blur-lg border-b border-primary/10 z-50`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#" className={`text-2xl font-bold ${theme === 'dark' ? 'text-primary' : 'text-dark-blue'}`}>
            <span className="text-accent">&lt;</span>
            AZ
            <span className="text-accent">/&gt;</span>
          </a>
          
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a 
                    href={item.href}
                    className={`relative group ${theme === 'dark' ? 'text-gray-300' : 'text-dark-blue'} hover:font-bold`}
                  >
                    {t(item.label)}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
            <LanguageSwitcher />
          </nav>

          <button 
            className={`md:hidden ${theme === 'dark' ? 'text-gray-300' : 'text-dark-blue'} hover:text-accent transition-colors`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden"
          >
            <ul className="py-4 px-4 space-y-4 bg-background-light/90 backdrop-blur-lg border-t border-primary/10">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a 
                    href={item.href}
                    className={`block ${theme === 'dark' ? 'text-gray-300' : 'text-dark-blue'} hover:font-bold hover:text-accent transition-colors`}
                    onClick={() => setIsOpen(false)}
                  >
                    {t(item.label)}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <LanguageSwitcher />
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
