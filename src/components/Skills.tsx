// import { motion, AnimatePresence } from 'framer-motion';
// import { skillCategories } from '../data';
// import { useState } from 'react';
// import { useTheme } from '../context/ThemeContext';
// import { useTranslation } from 'react-i18next';

// export const Skills = () => {
//   const [openCategory, setOpenCategory] = useState<number | null>(null);
//   const { theme } = useTheme();
//   const { t } = useTranslation();

  // const logoMap: Record<string, string> = {
  //   "JavaScript": "/logos/javascript.svg",
  //   "TypeScript": "/logos/typescript.svg",
  //   "Python": "/logos/python.svg",
  //   "Java": "/logos/java.svg",
  //   "C++": "/logos/cpp.svg",
  //   "C#": "/logos/csharp.svg",
  //   "C/C++": "/logos/cpp.svg",
  //   "Matlab": "/logos/matlab.svg",
  //   "PHP": "/logos/php.svg",
  //   "Assembly": "/logos/assembly.svg",
  //   "React": "/logos/react.svg",
  //   "Vue": "/logos/vue.svg",
  //   "Angular": "/logos/angular.svg",
  //   "Node.js": "/logos/nodejs.svg",
  //   "Express": "/logos/express.svg",
  //   "Next.js": "/logos/nextjs.svg",
  //   "Django": "/logos/django.svg",
  //   "Flask": "/logos/flask.svg",
  //   "Docker": "/logos/docker.svg",
  //   "Kubernetes": "/logos/kubernetes.svg",
  //   "AWS": "/logos/aws.svg",
  //   "Azure": "/logos/azure.svg",
  //   "Google Cloud": "/logos/gcp.svg",
  //   "Jenkins": "/logos/jenkins.svg",
  //   "Git": "/logos/git.svg",
  //   "GitHub": "/logos/github.svg",
  //   "GitLab": "/logos/gitlab.svg",
  //   "ROS2": "/logos/ros2.svg",
  //   "TIA Portal V14": "/logos/tiaportal.svg",
  //   "Automates Programmables": "/logos/plc.svg",
  //   "Render": "/logos/render.svg",
  //   "SQL": "/logos/sql.svg",
  //   "MongoDB": "/logos/mongodb.svg",
  //   "Redis": "/logos/redis.svg",
  //   "GraphQL": "/logos/graphql.svg",
  //   "RESTful APIs": "/logos/api.svg",
  // };

//   const getLogoPath = (skillName: string) => {
//     return logoMap[skillName] || "/logos/default-tech.svg";
//   };

//   const toggleCategory = (index: number) => {
//     setOpenCategory(openCategory === index ? null : index);
//   };

//   return (
//     <section id="skills" className={`${theme === 'dark' ? 'bg-background-dark' : 'bg-gray-50'} py-20 relative min-h-screen`}>
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
//             {t('skills.title')} <span className="text-primary">{t('skills.subtitle')}</span>
//           </h2>
//           <div className={`w-20 h-1 ${theme === 'dark' ? 'bg-accent' : 'bg-primary'} mx-auto rounded-full`} />
//         </motion.div>

//         <motion.div 
//           className="flex flex-wrap justify-center gap-6 mb-16"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5, staggerChildren: 0.1 }}
//         >
//           {skillCategories.map((category, index) => (
//             <motion.div
//               key={index}
//               onClick={() => toggleCategory(index)}
//               className={`
//                 cursor-pointer px-6 py-4 rounded-full font-semibold text-lg
//                 transition-all duration-300 shadow-lg
//                 ${openCategory === index 
//                   ? 'bg-primary text-white scale-110' 
//                   : theme === 'dark' 
//                   ? 'bg-gray-800 text-white hover:bg-gray-700' 
//                   : 'bg-gray-200 text-gray-900 hover:bg-gray-300'}
//               `}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               layout
//             >
//               {t(`skills.categories.${category.name.toLowerCase().replace(/\s+/g, '')}`)}
//             </motion.div>
//           ))}
//         </motion.div>

//         <AnimatePresence mode="wait">
//           {openCategory !== null && (
//             <motion.div
//               key={`category-${openCategory}`}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.4 }}
//               className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-xl p-8 shadow-xl`}
//             >
//               <h3 className={`text-2xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-8 text-center`}>
//                 {t(`skills.categories.${skillCategories[openCategory].name.toLowerCase().replace(/\s+/g, '')}`)}
//               </h3>
              
//               <motion.div 
//                 className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
//                 initial="hidden"
//                 animate="visible"
//                 variants={{
//                   visible: {
//                     transition: {
//                       staggerChildren: 0.05
//                     }
//                   },
//                   hidden: {}
//                 }}
//               >
//                 {skillCategories[openCategory].skills.map((skill, idx) => (
//                   <motion.div
//                     key={idx}
//                     variants={{
//                       visible: { opacity: 1, scale: 1, y: 0 },
//                       hidden: { opacity: 0, scale: 0.8, y: 20 }
//                     }}
//                     whileHover={{ y: -5, scale: 1.05 }}
//                     className={`flex flex-col items-center rounded-xl p-4 shadow-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}
//                   >
//                     <div className="w-16 h-16 mb-4 flex items-center justify-center">
//                       <img 
//                         src={getLogoPath(skill.name)} 
//                         alt={`${skill.name} logo`} 
//                         className="max-w-full max-h-full object-contain" 
//                       />
//                     </div>
//                     <p className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} font-medium text-center`}>
//                       {skill.name}
//                     </p>
//                   </motion.div>
//                 ))}
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// // };
// import { motion, AnimatePresence } from 'framer-motion';
// import { skillCategories } from '../data';
// import { useState } from 'react';
// import { useTheme } from '../context/ThemeContext';
// import { useTranslation } from 'react-i18next';

// export const Skills = () => {
//   const [openCategory, setOpenCategory] = useState<number | null>(null);
//   const { theme } = useTheme();
//   const { t } = useTranslation();

//  const logoMap: Record<string, string> = {
//     "JavaScript": "/logos/javascript.svg",
//     "TypeScript": "/logos/typescript.svg",
//     "Python": "/logos/python.svg",
//     "Java": "/logos/java.svg",
//     "C++": "/logos/cpp.svg",
//     "C#": "/logos/csharp.svg",
//     "C/C++": "/logos/cpp.svg",
//     "Matlab": "/logos/matlab.svg",
//     "PHP": "/logos/php.svg",
//     "Assembly": "/logos/assembly.svg",
//     "React": "/logos/react.svg",
//     "Vue": "/logos/vue.svg",
//     "Angular": "/logos/angular.svg",
//     "Node.js": "/logos/nodejs.svg",
//     "Express": "/logos/express.svg",
//     "Next.js": "/logos/nextjs.svg",
//     "Django": "/logos/django.svg",
//     "Flask": "/logos/flask.svg",
//     "Docker": "/logos/docker.svg",
//     "Kubernetes": "/logos/kubernetes.svg",
//     "AWS": "/logos/aws.svg",
//     "Azure": "/logos/azure.svg",
//     "Google Cloud": "/logos/gcp.svg",
//     "Jenkins": "/logos/jenkins.svg",
//     "Git": "/logos/git.svg",
//     "GitHub": "/logos/github.svg",
//     "GitLab": "/logos/gitlab.svg",
//     "ROS2": "/logos/ros2.svg",
//     "TIA Portal V14": "/logos/tiaportal.svg",
//     "Automates Programmables": "/logos/plc.svg",
//     "Render": "/logos/render.svg",
//     "SQL": "/logos/sql.svg",
//     "MongoDB": "/logos/mongodb.svg",
//     "Redis": "/logos/redis.svg",
//     "GraphQL": "/logos/graphql.svg",
//     "RESTful APIs": "/logos/api.svg",
//   };

//   const getLogoPath = (skillName: string) => {
//     return logoMap[skillName] || '/logos/default-tech.svg';
//   };

//   const toggleCategory = (index: number) => {
//     setOpenCategory(openCategory === index ? null : index);
//   };

//   return (
//     <section
//       id="skills"
//       className={`${theme === 'dark' ? 'bg-background-dark' : 'bg-gray-50'} py-20 relative min-h-screen`}
//     >
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h2
//             className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
//           >
//             {t('skills.title')} <span className="text-primary">{t('skills.subtitle')}</span>
//           </h2>
//           <div className={`w-20 h-1 ${theme === 'dark' ? 'bg-accent' : 'bg-primary'} mx-auto rounded-full`} />
//         </motion.div>

//         <motion.div
//           className="flex flex-wrap justify-center gap-6 mb-16"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5, staggerChildren: 0.1 }}
//         >
//           {skillCategories.map((category, index) => (
//             <motion.div
//               key={index}
//               onClick={() => toggleCategory(index)}
//               className={`
//                 cursor-pointer px-6 py-4 rounded-full font-semibold text-lg
//                 transition-all duration-300 shadow-lg
//                 ${openCategory === index
//                   ? 'bg-primary text-white scale-110'
//                   : theme === 'dark'
//                   ? 'bg-gray-800 text-white hover:bg-gray-700'
//                   : 'bg-gray-200 text-gray-900 hover:bg-gray-300'}
//               `}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               layout
//             >
//               {t(`skills.categories.${category.name.toLowerCase().replace(/\s+/g, '')}`)}
//             </motion.div>
//           ))}
//         </motion.div>

//         <AnimatePresence mode="wait">
//           {openCategory !== null && (
//             <motion.div
//               key={`category-${openCategory}`}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.4 }}
//               className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-xl p-8 shadow-xl`}
//             >
//               <h3
//                 className={`text-2xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-8 text-center`}
//               >
//                 {t(`skills.categories.${skillCategories[openCategory].name.toLowerCase().replace(/\s+/g, '')}`)}
//               </h3>

//               <motion.div
//                 className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
//                 initial="hidden"
//                 animate="visible"
//                 variants={{
//                   visible: {
//                     transition: {
//                       staggerChildren: 0.05,
//                     },
//                   },
//                   hidden: {},
//                 }}
//               >
//                 {skillCategories[openCategory].skills.map((skill, idx) => (
//                   <motion.div
//                     key={idx}
//                     variants={{
//                       visible: { opacity: 1, scale: 1, y: 0 },
//                       hidden: { opacity: 0, scale: 0.8, y: 20 },
//                     }}
//                     whileHover={{ y: -5, scale: 1.05 }}
//                     className={`flex flex-col items-center rounded-xl p-4 shadow-lg ${
//                       theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
//                     }`}
//                   >
//                     <div className="w-16 h-16 mb-4 flex items-center justify-center">
//                       <img
//                         src={getLogoPath(skill.name)}
//                         alt={`${skill.name} logo`}
//                         className="max-w-full max-h-full object-contain"
//                       />
//                     </div>
//                     <p
//                       className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} font-medium text-center`}
//                     >
//                       {skill.name}
//                     </p>
//                   </motion.div>
//                 ))}
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// };
import { motion, AnimatePresence } from 'framer-motion';
import { skillCategories } from '../data';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';

export const Skills = () => {
  const [openCategory, setOpenCategory] = useState<number | null>(null);
  const { theme } = useTheme();
  const { t } = useTranslation();

  // Mapping entre les catégories en français et les clés de traduction
  const categoryMapping: Record<string, string> = {
    "Langages de Programmation": "programming",
    "Frameworks & Bibliothèques": "frameworks",
    "DevOps & Cloud": "devops",
    "Contrôle de Version & Collaboration": "version",
    "Automatisation & Robotique": "automation",
    "Bases de Données": "databases",
    "Outils & Plateformes": "tools"
  };

  const logoMap: Record<string, string> = {
    "JavaScript": "/logos/js.webp",
    "TypeScript": "/logos/typescript_original_logo_icon_146317.webp",
    "Python": "/logos/python.png",
    "Java": "/logos/java.png",
    "C++": "/logos/cpp.svg",
    "C#": "/logos/csharp.svg",
    "C/C++": "/logos/C c++.png",
    "Matlab": "/logos/Matlab_Logo.png",
    "PHP": "/logos/php.svg",
    "Assembly": "/logos/asm.png",
    "React": "/logos/React.webp",
    "Vue": "/logos/vue.svg",
    "Angular": "/logos/angular.svg",
    "Node.js": "/logos/node-red-icon.png",
    "Express": "/logos/express.webp",
    "Next.js": "/logos/nextjs-icon-512x512-y563b8iq.png",
    "Django": "/logos/django-original-icon-2048x874-iws4p6y8.png",
    "Flask": "/logos/flask-logo-svg-vector.svg",
    "Docker": "/logos/docker.webp",
    "Kubernetes": "/logos/Kubernetes_logo_without_workmark.svg.png",
    "AWS": "/logos/aws-logo-logo-png-transparent.png",
    "Azure": "/logos/azure.png",
    "Google Cloud": "/logos/gcp.svg",
    "Jenkins": "/logos/Jenkins_logo.svg.png",
    "Git": "/logos/git-logo.png",
    "GitHub": "/logos/github.png",
    "GitLab": "/logos/gitlab-original-wordmark-icon-512x510-st74ln0o.png",
    "ROS2": "/logos/ros2_logo.png",
    "TIA Portal V14": "/logos/tia.webp",
    "Automates Programmables": "/logos/automate.png",
    "Render": "/logos/render.png",
    "SQL": "/logos/sql.png",
    "MongoDB": "/logos/mongodb-logo.png",
    "Redis": "/logos/redis.png",
    "GraphQL": "/logos/GraphQL_Logo.svg.png",
    "RESTful APIs": "/logos/restful.png",
  };

  const getLogoPath = (skillName: string) => {
    return logoMap[skillName] || "/logos/default-tech.svg";
  };

  const toggleCategory = (index: number) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  return (
    <section id="skills" className={`${theme === 'dark' ? 'bg-background-dark' : 'bg-gray-50'} py-20 relative min-h-screen`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            {t('skills.title')} <span className="text-primary">{t('skills.subtitle')}</span>
          </h2>
          <div className={`w-20 h-1 ${theme === 'dark' ? 'bg-accent' : 'bg-primary'} mx-auto rounded-full`} />
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-6 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              onClick={() => toggleCategory(index)}
              className={`
                cursor-pointer px-6 py-4 rounded-full font-semibold text-lg
                transition-all duration-300 shadow-lg
                ${openCategory === index 
                  ? 'bg-primary text-white scale-110' 
                  : theme === 'dark' 
                  ? 'bg-gray-800 text-white hover:bg-gray-700' 
                  : 'bg-gray-200 text-gray-900 hover:bg-gray-300'}
              `}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              layout
            >
              {t(`skills.categories.${categoryMapping[category.name]}`)}
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          {openCategory !== null && (
            <motion.div
              key={`category-${openCategory}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-xl p-8 shadow-xl`}
            >
              <h3 className={`text-2xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-8 text-center`}>
                {t(`skills.categories.${categoryMapping[skillCategories[openCategory].name]}`)}
              </h3>
              
              <motion.div 
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.05
                    }
                  },
                  hidden: {}
                }}
              >
                {skillCategories[openCategory].skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    variants={{
                      visible: { opacity: 1, scale: 1, y: 0 },
                      hidden: { opacity: 0, scale: 0.8, y: 20 }
                    }}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className={`flex flex-col items-center rounded-xl p-4 shadow-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}
                  >
                    <div className="w-16 h-16 mb-4 flex items-center justify-center">
                      <img 
                        src={getLogoPath(skill.name)} 
                        alt={`${skill.name} logo`} 
                        className="max-w-full max-h-full object-contain" 
                      />
                    </div>
                    <p className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} font-medium text-center`}>
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
