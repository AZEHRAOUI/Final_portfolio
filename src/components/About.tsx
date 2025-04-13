import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';
import { GraduationCap, Globe2, Code2, Zap, BookOpen, Target, Lightbulb } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export const About = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <section id="about" className={`min-h-screen relative overflow-hidden ${theme === 'dark' ? 'bg-background-dark' : 'bg-white'}`}>
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

      <div className="container mx-auto px-4 py-20 relative">

        <AnimatedSection className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            {t('about.title')} <span className="text-primary">{t('about.me')}</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </AnimatedSection>

        <AnimatedSection className="mb-16">
          <div className={`${theme === 'dark' ? 'bg-background-light/30 backdrop-blur-lg border-primary/20' : 'bg-white border-gray-200'} rounded-2xl p-8 border`}>
            <h3 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              {t('about.intro.title')}
            </h3>
            <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              {t('about.intro.description')}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {t('about.intro.highlights', { returnObjects: true }).map((highlight: string, index: number) => (
                <div key={index} className={`${theme === 'dark' ? 'bg-background-dark/50' : 'bg-gray-50'} p-4 rounded-lg text-center`}>
                  <span className={`text-sm font-medium ${theme === 'dark' ? 'text-primary' : 'text-primary-dark'}`}>
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <AnimatedSection>
            <div className={`${theme === 'dark' ? 'bg-background-light/30 backdrop-blur-lg border-primary/20' : 'bg-white border-gray-200'} rounded-2xl p-6 border h-full`}>
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-8 h-8 text-accent" />
                <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {t('about.articles.passion.title')}
                </h3>
              </div>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                {t('about.articles.passion.description')}
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className={`${theme === 'dark' ? 'bg-background-light/30 backdrop-blur-lg border-primary/20' : 'bg-white border-gray-200'} rounded-2xl p-6 border h-full`}>
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-8 h-8 text-accent" />
                <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {t('about.articles.approach.title')}
                </h3>
              </div>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                {t('about.articles.approach.description')}
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className={`${theme === 'dark' ? 'bg-background-light/30 backdrop-blur-lg border-primary/20' : 'bg-white border-gray-200'} rounded-2xl p-6 border h-full`}>
              <div className="flex items-center gap-3 mb-6">
                <Lightbulb className="w-8 h-8 text-accent" />
                <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {t('about.articles.vision.title')}
                </h3>
              </div>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                {t('about.articles.vision.description')}
              </p>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            <div className={`${theme === 'dark' ? 'bg-background-light/30 backdrop-blur-lg border-primary/20' : 'bg-white border-gray-200'} rounded-2xl p-6 border h-full`}>
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-6 h-6 text-accent" />
                <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {t('about.education.title')}
                </h3>
              </div>
              <ul className="space-y-4">
                <li>
                  <h4 className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {t('about.education.degree1')}
                  </h4>
                  <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    {t('about.education.school1')}
                  </p>
                </li>
                <li>
                  <h4 className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {t('about.education.degree2')}
                  </h4>
                  <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    {t('about.education.school2')}
                  </p>
                </li>
                <li>
                  <h4 className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {t('about.education.degree3')}
                  </h4>
                  <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    {t('about.education.school3')}
                  </p>
                </li>
              </ul>
            </div>

            <div className={`${theme === 'dark' ? 'bg-background-light/30 backdrop-blur-lg border-primary/20' : 'bg-white border-gray-200'} rounded-2xl p-6 border h-full`}>
              <div className="flex items-center gap-3 mb-6">
                <Code2 className="w-6 h-6 text-accent" />
                <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {t('about.specialization.title')}
                </h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                    {t('about.specialization.skill1')}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                    {t('about.specialization.skill2')}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                    {t('about.specialization.skill3')}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                    {t('about.specialization.skill4')}
                  </span>
                </li>
              </ul>
            </div>

            <div className={`${theme === 'dark' ? 'bg-background-light/30 backdrop-blur-lg border-primary/20' : 'bg-white border-gray-200'} rounded-2xl p-6 border h-full`}>
              <div className="flex items-center gap-3 mb-6">
                <Globe2 className="w-6 h-6 text-accent" />
                <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {t('about.languages.title')}
                </h3>
              </div>
              <ul className="space-y-4">
              <li className="flex justify-between items-center">
  <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
    {t('about.languages.arabic')}
  </span>
  <span className="text-primary font-medium">
    {t('about.languages.native')}
  </span>
</li>

                <li className="flex justify-between items-center">
                  <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                    {t('about.languages.french')}
                  </span>
                  <span className="text-primary font-medium">
                    {t('about.languages.native')}
                  </span>
                </li>
                <li className="flex justify-between items-center">
                  <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                    {t('about.languages.english')}
                  </span>
                  <span className="text-primary font-medium">
                    {t('about.languages.fluent')}
                  </span>
                </li>
                <li className="flex justify-between items-center">
                  <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                    {t('about.languages.german')}
                  </span>
                  <span className="text-primary font-medium">
                    {t('about.languages.intermediate')}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};