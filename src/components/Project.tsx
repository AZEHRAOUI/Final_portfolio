import { motion } from 'framer-motion';
import { projects } from '../data';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';
import { Github, ExternalLink, X } from 'lucide-react';

export const Projects = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = ['all', 'web', 'embedded', 'automation', 'iot'];
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category.toLowerCase().includes(selectedCategory));

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; 
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto'; 
  };

  return (
    <section id="projects" className={`py-20 relative ${theme === 'dark' ? 'bg-background-dark' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            {t('projects.title')} <span className="text-primary">{t('projects.subtitle')}</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : theme === 'dark'
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {t(`projects.categories.${category}`)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${
                theme === 'dark'
                  ? 'bg-background-light/30 backdrop-blur-lg border-primary/20'
                  : 'bg-white border-gray-200'
              } rounded-xl overflow-hidden border group hover:border-primary transition-all duration-300`}
            >
              <div className="relative overflow-hidden aspect-video">
                {project.video ? (
                  <video
                    src={project.video}
                    alt={t(`projects.items.${project.id}.title`, project.title)}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                    controls
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={t(`projects.items.${project.id}.title`, project.title)}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                )}
                <div className={`absolute inset-0 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-t from-background-dark/90 to-transparent'
                    : 'bg-gradient-to-t from-gray-900/90 to-transparent'
                }`} />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {t(`projects.items.${project.id}.title`, project.title)}
                  </h3>
                  <p className="text-gray-300 text-sm line-clamp-2">
                    {t(`projects.items.${project.id}.description`, project.description)}
                  </p>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-full text-sm ${
                        theme === 'dark'
                          ? 'bg-primary/10 text-primary'
                          : 'bg-primary/5 text-primary'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center mt-4">
                  <button
                    onClick={() => openProjectModal(project)}
                    className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    {t('projects.viewProject')}
                  </button>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
                    >
                      <Github className="w-5 h-5 mr-2" />
                      {t('projects.viewGithub')}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal détaillé du projet */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className={`relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl ${
              theme === 'dark'
                ? 'bg-background-dark border border-primary/20'
                : 'bg-white'
            } p-6 shadow-xl`}
          >
            <button
              onClick={closeProjectModal}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-800/30 text-gray-200 hover:bg-gray-800/60 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="aspect-video relative rounded-xl overflow-hidden">
                {selectedProject.video ? (
                  <video
                    src={selectedProject.video}
                    alt={t(`projects.items.${selectedProject.id}.title`, selectedProject.title)}
                    className="w-full h-full object-cover"
                    controls
                  />
                ) : (
                  <img
                    src={selectedProject.image}
                    alt={t(`projects.items.${selectedProject.id}.title`, selectedProject.title)}
                    className="w-full h-full object-cover"
                  />
                )}
              </div> 
              
              <div>
                <h2 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {t(`projects.items.${selectedProject.id}.title`, selectedProject.title)}
                </h2>
                
                <p className={`mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  {t(`projects.items.${selectedProject.id}.description`, selectedProject.description)}
                </p>

                <div className={`mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  <h3 className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {t('projects.missionTitle', 'Mission')}
                  </h3>
                  <p>{t(`projects.items.${selectedProject.id}.mission`, selectedProject.mission)}</p>
                </div>

                <div className={`mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  <h3 className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {t('projects.categoryTitle', 'Catégorie')}
                  </h3>
                  <p>{t(`projects.items.${selectedProject.id}.category`, selectedProject.category)}</p>
                </div>

                <div className={`mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  <h3 className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {t('projects.technologiesTitle', 'Technologies')}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 rounded-full text-sm ${
                          theme === 'dark'
                            ? 'bg-primary/10 text-primary'
                            : 'bg-primary/5 text-primary'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={`mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  <h3 className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {t('projects.impactTitle', 'Impact')}
                  </h3>
                  <p>{t(`projects.items.${selectedProject.id}.impact`, selectedProject.impact)}</p>
                </div>

                <div className="flex space-x-4 mt-8">
                  {selectedProject.demoUrl && (
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors"
                    >
                      {t('projects.visitDemo', 'Visiter la démo')}
                    </a>
                  )}
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-800 transition-colors inline-flex items-center"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      {t('projects.viewGithub', 'Voir GitHub')}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};
