import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  const flags = {
    fr: "https://flagcdn.com/w40/fr.png",
    en: "https://flagcdn.com/w40/gb.png"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
    >
      <img
        src={flags[language]}
        alt={`${language === 'fr' ? 'French' : 'English'} flag`}
        className="w-6 h-4 object-cover rounded"
      />
      <span className="text-sm font-medium text-gray-300">
        {language.toUpperCase()}
      </span>
    </motion.button>
  );
};