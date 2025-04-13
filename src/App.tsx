import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Project';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import { useTheme } from './context/ThemeContext';
import CreativeWelcomeLoader from './components/ZehraouiLoader';

function AppContent() {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-background-dark bg-circuit-pattern text-gray-100' 
        : 'bg-gray-50 text-gray-900'
    }`}>
      <div className="relative">
        <div className={`absolute inset-0 bg-gradient-to-b pointer-events-none ${
          theme === 'dark'
            ? 'from-background-dark/80 to-background-dark'
            : 'from-white/80 to-white'
        }`} />
        <Header />
        <main className="relative">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <ThemeSwitcher />
      </div>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <CreativeWelcomeLoader>
          <AppContent />
        </CreativeWelcomeLoader>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;