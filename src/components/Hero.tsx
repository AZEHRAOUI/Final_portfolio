import { motion } from 'framer-motion';
import { Download, ChevronRight, CircuitBoard, Cpu, Microwave as Microchip } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';

export const Hero = () => {
  const { theme } = useTheme();
  const { t,i18n } = useTranslation();

  return (
    <section id="home" className={`min-h-screen flex items-center relative overflow-hidden ${theme === 'dark' ? 'bg-background-dark' : 'bg-white animate-pulseBackground'}`}>
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className={`absolute w-[800px] h-[800px] border-2 ${theme === 'dark' ? 'border-primary/20' : 'border-primary/10'} rounded-full`}
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className={`absolute w-[600px] h-[600px] border-2 ${theme === 'dark' ? 'border-accent/20' : 'border-accent/10'} rounded-full`}
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center md:text-left"
          >
            <div className={`inline-flex items-center px-4 py-2 rounded-full ${theme === 'dark' ? 'bg-primary/10 border border-primary/20 text-primary' : 'bg-primary/5 border border-primary text-primary'} mb-6`}>
              <Microchip className="w-4 h-4 mr-2" />
              {t('hero.role')}
            </div>
            <h1 className={`text-4xl md:text-6xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              ZEHRAOUI
              <span className="text-primary"> Anas</span>
            </h1>
            <p className={`text-lg mb-8 max-w-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              {t('hero.description')}
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a 
                href="#contact"
                className={`inline-flex items-center px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-all transform hover:scale-105`}
              >
                {t('hero.cta.contact')}
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
              <a 
              href={i18n.language === 'fr' ? "/cv-francais.pdf" : "/cv-english.pdf"}
              download
              className={`inline-flex items-center px-6 py-3 border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-all transform hover:scale-105`}
            >
              {t('hero.cta.cv')}
              <Download className="ml-2 h-5 w-5" />
            </a>
              {/* <a 
                href="# "
                className={`inline-flex items-center px-6 py-3 border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-all transform hover:scale-105`}
              >
                {t('hero.cta.cv')}
                <Download className="ml-2 h-5 w-5" />
              </a> */}
            </div>
          </motion.div>
                
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className={`absolute inset-0 rounded-full ${theme === 'dark' ? 'bg-gradient-to-r from-primary to-accent opacity-20' : 'bg-gradient-to-r from-primary to-accent opacity-10'} blur-3xl animate-pulse`} />
              <img
                src="/Anas Zehraoui.jpg"
                alt="Professional logos"
                className="rounded-full object-cover shadow-xl relative z-10"
              />
              <div className={`absolute inset-0 rounded-full border-4 ${theme === 'dark' ? 'border-primary/20' : 'border-primary/10'} animate-pulse`} />
              
              <motion.div
                animate={{ y: [-10, 10] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                className={`absolute -right-4 top-10 ${theme === 'dark' ? 'bg-background-light' : 'bg-background-light/70'} p-3 rounded-full shadow-lg`}
              >
                <CircuitBoard className="w-6 h-6 text-accent" />
              </motion.div>
              <motion.div
                animate={{ y: [-10, 10] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
                className={`absolute -left-4 bottom-20 ${theme === 'dark' ? 'bg-background-light' : 'bg-background-light/70'} p-3 rounded-full shadow-lg`}
              >
                <Cpu className="w-6 h-6 text-primary" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
