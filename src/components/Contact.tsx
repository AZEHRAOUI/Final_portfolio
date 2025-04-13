// import { motion } from 'framer-motion';
// import { useTheme } from '../context/ThemeContext';
// import { useTranslation } from 'react-i18next';
// import { Send } from 'lucide-react';

// export const Contact = () => {
//   const { theme } = useTheme();
//   const { t } = useTranslation();

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission
//   };

//   return (
//     <section id="contact" className={`py-20 relative ${theme === 'dark' ? 'bg-background-dark' : 'bg-gray-50'}`}>
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
//             {t('contact.title')} <span className="text-primary">{t('contact.subtitle')}</span>
//           </h2>
//           <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
//         </motion.div>

//         <div className="max-w-2xl mx-auto">
//           <motion.form
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             onSubmit={handleSubmit}
//             className="space-y-6"
//           >
//             <div>
//               <label htmlFor="name" className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
//                 {t('contact.form.name')}
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 required
//                 className={`w-full px-4 py-3 rounded-lg ${
//                   theme === 'dark'
//                     ? 'bg-background-light/30 border-primary/20 text-white'
//                     : 'bg-white border-gray-300 text-gray-900'
//                 } border focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300`}
//               />
//             </div>

//             <div>
//               <label htmlFor="email" className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
//                 {t('contact.form.email')}
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 required
//                 className={`w-full px-4 py-3 rounded-lg ${
//                   theme === 'dark'
//                     ? 'bg-background-light/30 border-primary/20 text-white'
//                     : 'bg-white border-gray-300 text-gray-900'
//                 } border focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300`}
//               />
//             </div>

//             <div>
//               <label htmlFor="message" className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
//                 {t('contact.form.message')}
//               </label>
//               <textarea
//                 id="message"
//                 rows={6}
//                 required
//                 className={`w-full px-4 py-3 rounded-lg ${
//                   theme === 'dark'
//                     ? 'bg-background-light/30 border-primary/20 text-white'
//                     : 'bg-white border-gray-300 text-gray-900'
//                 } border focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300`}
//               />
//             </div>

//             <motion.button
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               type="submit"
//               className="w-full bg-primary text-white py-4 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-primary-dark transition-colors duration-300"
//             >
//               {t('contact.form.send')}
//               <Send className="w-5 h-5" />
//             </motion.button>
//           </motion.form>
//         </div>
//       </div>
//     </section>
//   );
// // };
// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Send, Mail, User, MessageSquare, Cpu, Code, Server, Database, Wifi, Smartphone, Globe, Cloud, HardDrive } from 'lucide-react';
// import { useTheme } from '../context/ThemeContext';
// import { useTranslation } from 'react-i18next';

// export const Contact = () => {
//   const { theme } = useTheme();
//   const { t } = useTranslation();
  
//   const [formState, setFormState] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const [focusedField, setFocusedField] = useState<string | null>(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitted, setSubmitted] = useState(false);

//   const techIcons = [
//     { icon: Cpu, id: 'cpu' },
//     { icon: Code, id: 'code' },
//     { icon: Server, id: 'server' },
//     { icon: Database, id: 'database' },
//     { icon: Wifi, id: 'wifi' },
//     { icon: Smartphone, id: 'mobile' },
//     { icon: Globe, id: 'globe' },
//     { icon: Cloud, id: 'cloud' },
//     { icon: HardDrive, id: 'hardware' }
//   ];

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormState({
//       ...formState,
//       [e.target.id]: e.target.value
//     });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     setTimeout(() => {
//       setIsSubmitting(false);
//       setSubmitted(true);
      
//       setTimeout(() => {
//         setSubmitted(false);
//         setFormState({ name: '', email: '', message: '' });
//       }, 3000);
//     }, 1500);
//   };

//   return (
//     <section id="contact" className={`py-20 relative ${theme === 'dark' ? 'bg-background-dark' : 'bg-gray-50'}`}>
//       {/* Fond avec motif de circuit imprimé */}
//       <div className={`absolute inset-0 opacity-5 ${theme === 'dark' ? 'opacity-10' : 'opacity-5'}`} 
//         style={{
//           backgroundImage: "url('/images/circuit-pattern.svg')",
//           backgroundSize: '60%',
//           backgroundRepeat: 'repeat'
//         }}
//       />

//       {/* Icônes flottantes liées à la technologie */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {techIcons.map((TechIcon, index) => (
//           <motion.div
//             key={index}
//             className={`absolute ${theme === 'dark' ? 'text-primary/20' : 'text-primary/30'}`}
//             style={{
//               left: `${Math.random() * 85 + 5}%`,
//               top: `${Math.random() * 85 + 5}%`,
//             }}
//             initial={{ scale: 0.5, opacity: 0 }}
//             animate={{ 
//               scale: [0.7, 1.2, 0.7], 
//               opacity: [0.4, 0.8, 0.4],
//               y: [0, -15, 0]
//             }}
//             transition={{ 
//               repeat: Infinity, 
//               duration: Math.random() * 5 + 5,
//               delay: index * 0.5 
//             }}
//           >
//             <TechIcon.icon size={Math.random() * 30 + 20} strokeWidth={1.5} />
//           </motion.div>
//         ))}
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
//             {t('contact.title')} <span className="text-primary">{t('contact.subtitle')}</span>
//           </h2>
//           <div className="w-20 h-1 bg-accent mx-auto rounded-full mt-6" />
//         </motion.div>

//         <div className="max-w-4xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className={`${theme === 'dark' ? 'bg-gray-900/60' : 'bg-white/90'} backdrop-blur-lg p-8 md:p-10 rounded-2xl border ${theme === 'dark' ? 'border-primary/20' : 'border-gray-200'} shadow-xl`}
//           >
//             {submitted ? (
//               <motion.div 
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 className="text-center py-8"
//               >
//                 <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Send className="w-8 h-8 text-white" />
//                 </div>
//                 <h3 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
//                   {t('contact.success.title')}
//                 </h3>
//                 <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
//                   {t('contact.success.message')}
//                 </p>
//               </motion.div>
//             ) : (
//               <motion.form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <motion.div
//                     whileFocus={{ scale: 1.02 }}
//                     whileHover={{ scale: 1.01 }}
//                     transition={{ type: "spring", stiffness: 400, damping: 17 }}
//                   >
//                     <label htmlFor="name" className={`block text-lg mb-2 flex items-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
//                       <User className="w-5 h-5 mr-2 text-primary" />
//                       {t('contact.form.name')}
//                     </label>
//                     <div className={`relative overflow-hidden rounded-lg ${focusedField === 'name' ? 'ring-2 ring-primary' : ''}`}>
//                       <input 
//                         type="text" 
//                         id="name" 
//                         value={formState.name}
//                         onChange={handleChange}
//                         onFocus={() => setFocusedField('name')}
//                         onBlur={() => setFocusedField(null)}
//                         className={`w-full p-4 border rounded-lg focus:outline-none ${theme === 'dark' ? 'bg-gray-800/50 border-white/10 text-white' : 'bg-white border-gray-200 text-gray-900'}`}
//                         placeholder={t('contact.form.namePlaceholder')} 
//                       />
//                     </div>
//                   </motion.div>

//                   <motion.div
//                     whileFocus={{ scale: 1.02 }}
//                     whileHover={{ scale: 1.01 }}
//                     transition={{ type: "spring", stiffness: 400, damping: 17 }}
//                   >
//                     <label htmlFor="email" className={`block text-lg mb-2 flex items-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
//                       <Mail className="w-5 h-5 mr-2 text-primary" />
//                       {t('contact.form.email')}
//                     </label>
//                     <div className={`relative overflow-hidden rounded-lg ${focusedField === 'email' ? 'ring-2 ring-primary' : ''}`}>
//                       <input 
//                         type="email" 
//                         id="email" 
//                         value={formState.email}
//                         onChange={handleChange}
//                         onFocus={() => setFocusedField('email')}
//                         onBlur={() => setFocusedField(null)}
//                         className={`w-full p-4 border rounded-lg focus:outline-none ${theme === 'dark' ? 'bg-gray-800/50 border-white/10 text-white' : 'bg-white border-gray-200 text-gray-900'}`}
//                         placeholder={t('contact.form.emailPlaceholder')} 
//                       />
//                     </div>
//                   </motion.div>
//                 </div>

//                 <motion.div
//                   whileFocus={{ scale: 1.02 }}
//                   whileHover={{ scale: 1.01 }}
//                   transition={{ type: "spring", stiffness: 400, damping: 17 }}
//                 >
//                   <label htmlFor="message" className={`block text-lg mb-2 flex items-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
//                     <MessageSquare className="w-5 h-5 mr-2 text-primary" />
//                     {t('contact.form.message')}
//                   </label>
//                   <div className={`relative overflow-hidden rounded-lg ${focusedField === 'message' ? 'ring-2 ring-primary' : ''}`}>
//                     <textarea 
//                       id="message" 
//                       value={formState.message}
//                       onChange={handleChange}
//                       onFocus={() => setFocusedField('message')}
//                       onBlur={() => setFocusedField(null)}
//                       className={`w-full p-4 border rounded-lg focus:outline-none min-h-32 ${theme === 'dark' ? 'bg-gray-800/50 border-white/10 text-white' : 'bg-white border-gray-200 text-gray-900'}`}
//                       placeholder={t('contact.form.messagePlaceholder')} 
//                     />
//                   </div>
//                 </motion.div>

//                 <motion.button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className={`w-full py-3 mt-6 rounded-lg text-lg font-semibold ${isSubmitting ? 'bg-gray-500 cursor-not-allowed' : 'bg-primary text-white'}`}
//                   whileHover={{ scale: 1.05 }}
//                   transition={{ type: "spring", stiffness: 300, damping: 20 }}
//                 >
//                   {isSubmitting ? t('contact.form.sending') : t('contact.form.send')}
//                 </motion.button>
//               </motion.form>
//             )}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// // };
// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Send, Mail, User, MessageSquare, Cpu, Code, Server, Database, Wifi, Smartphone, Globe, Cloud, HardDrive } from 'lucide-react';
// import { useTheme } from '../context/ThemeContext';
// import { useTranslation } from 'react-i18next';

// export const Contact = () => {
//   const { theme } = useTheme();
//   const { t } = useTranslation();

//   const [formState, setFormState] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const [focusedField, setFocusedField] = useState<string | null>(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitted, setSubmitted] = useState(false);

//   const techIcons = [
//     { icon: Cpu, id: 'cpu' },
//     { icon: Code, id: 'code' },
//     { icon: Server, id: 'server' },
//     { icon: Database, id: 'database' },
//     { icon: Wifi, id: 'wifi' },
//     { icon: Smartphone, id: 'mobile' },
//     { icon: Globe, id: 'globe' },
//     { icon: Cloud, id: 'cloud' },
//     { icon: HardDrive, id: 'hardware' }
//   ];

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormState({
//       ...formState,
//       [e.target.id]: e.target.value
//     });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     setTimeout(() => {
//       setIsSubmitting(false);
//       setSubmitted(true);

//       setTimeout(() => {
//         setSubmitted(false);
//         setFormState({ name: '', email: '', message: '' });
//       }, 3000);
//     }, 1500);
//   };

//   return (
//     <section id="contact" className={`py-20 relative ${theme === 'dark' ? 'bg-background-dark' : 'bg-gray-50'}`}>
//       {/* Lignes de connexion animées (pour effet de circuit) */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {[...Array(8)].map((_, index) => (
//           <motion.div
//             key={`line-${index}`}
//             className={`absolute h-0.5 rounded-full ${theme === 'dark' ? 'bg-primary/10' : 'bg-primary/15'}`}
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               width: `${Math.random() * 15 + 5}%`,
//               transform: `rotate(${Math.random() * 360}deg)`
//             }}
//             animate={{
//               opacity: [0, 1, 0],
//               width: [`${Math.random() * 5 + 5}%`, `${Math.random() * 20 + 15}%`],
//             }}
//             transition={{
//               repeat: Infinity,
//               duration: Math.random() * 8 + 4,
//               delay: index * 0.7
//             }}
//           />
//         ))}
//       </div>

//       {/* Points de circuit pulsant */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {[...Array(12)].map((_, index) => (
//           <motion.div
//             key={`node-${index}`}
//             className={`absolute w-2 h-2 rounded-full ${theme === 'dark' ? 'bg-accent' : 'bg-primary'}`}
//             style={{
//               left: `${Math.random() * 90 + 5}%`,
//               top: `${Math.random() * 90 + 5}%`,
//             }}
//             animate={{
//               opacity: [0.3, 0.7, 0.3],
//               scale: [0.8, 1.2, 0.8],
//               boxShadow: [
//                 `0 0 0px ${theme === 'dark' ? '#4f46e5' : '#3b82f6'}`,
//                 `0 0 10px ${theme === 'dark' ? '#4f46e5' : '#3b82f6'}`,
//                 `0 0 0px ${theme === 'dark' ? '#4f46e5' : '#3b82f6'}`
//               ]
//             }}
//             transition={{
//               repeat: Infinity,
//               duration: Math.random() * 4 + 3,
//               delay: index * 0.3
//             }}
//           />
//         ))}
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
//             {t('contact.title')} <span className="text-primary">{t('contact.subtitle')}</span>
//           </h2>
//           <p className={`max-w-2xl mx-auto text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
//             {t('contact.intro')}
//           </p>
//           <div className="w-20 h-1 bg-accent mx-auto rounded-full mt-6" />
//         </motion.div>

//         <div className="max-w-4xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className={`${
//               theme === 'dark' ? 'bg-gray-900/60' : 'bg-white/90'
//             } backdrop-blur-lg p-8 md:p-10 rounded-2xl border ${theme === 'dark' ? 'border-primary/20' : 'border-gray-200'} shadow-xl`}
//           >
//             {submitted ? (
//               <motion.div
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 className="text-center py-8"
//               >
//                 <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Send className="w-8 h-8 text-white" />
//                 </div>
//                 <h3 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
//                   {t('contact.success.title')}
//                 </h3>
//                 <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
//                   {t('contact.success.message')}
//                 </p>
//               </motion.div>
//             ) : (
//               <motion.form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <motion.div
//                     whileFocus={{ scale: 1.02 }}
//                     whileHover={{ scale: 1.01 }}
//                     transition={{ type: 'spring', stiffness: 400, damping: 17 }}
//                   >
//                     <label htmlFor="name" className={`block text-lg mb-2 flex items-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
//                       <User className="w-5 h-5 mr-2 text-primary" />
//                       {t('contact.form.name')}
//                     </label>
//                     <div className={`relative overflow-hidden rounded-lg ${focusedField === 'name' ? 'ring-2 ring-primary' : ''}`}>
//                       <input
//                         type="text"
//                         id="name"
//                         value={formState.name}
//                         onChange={handleChange}
//                         onFocus={() => setFocusedField('name')}
//                         onBlur={() => setFocusedField(null)}
//                         className={`w-full p-4 border rounded-lg focus:outline-none ${theme === 'dark' ? 'bg-gray-800/50 border-white/10 text-white' : 'bg-white border-gray-200 text-gray-900'}`}
//                         placeholder={t('contact.form.namePlaceholder')}
//                       />
//                     </div>
//                   </motion.div>

//                   <motion.div
//                     whileFocus={{ scale: 1.02 }}
//                     whileHover={{ scale: 1.01 }}
//                     transition={{ type: 'spring', stiffness: 400, damping: 17 }}
//                   >
//                     <label htmlFor="email" className={`block text-lg mb-2 flex items-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
//                       <Mail className="w-5 h-5 mr-2 text-primary" />
//                       {t('contact.form.email')}
//                     </label>
//                     <div className={`relative overflow-hidden rounded-lg ${focusedField === 'email' ? 'ring-2 ring-primary' : ''}`}>
//                       <input
//                         type="email"
//                         id="email"
//                         value={formState.email}
//                         onChange={handleChange}
//                         onFocus={() => setFocusedField('email')}
//                         onBlur={() => setFocusedField(null)}
//                         className={`w-full p-4 border rounded-lg focus:outline-none ${theme === 'dark' ? 'bg-gray-800/50 border-white/10 text-white' : 'bg-white border-gray-200 text-gray-900'}`}
//                         placeholder={t('contact.form.emailPlaceholder')}
//                       />
//                     </div>
//                   </motion.div>
//                 </div>

//                 <motion.div
//                   whileFocus={{ scale: 1.02 }}
//                   whileHover={{ scale: 1.01 }}
//                   transition={{ type: 'spring', stiffness: 400, damping: 17 }}
//                 >
//                   <label htmlFor="message" className={`block text-lg mb-2 flex items-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
//                     <MessageSquare className="w-5 h-5 mr-2 text-primary" />
//                     {t('contact.form.message')}
//                   </label>
//                   <div className={`relative overflow-hidden rounded-lg ${focusedField === 'message' ? 'ring-2 ring-primary' : ''}`}>
//                     <textarea
//                       id="message"
//                       value={formState.message}
//                       onChange={handleChange}
//                       onFocus={() => setFocusedField('message')}
//                       onBlur={() => setFocusedField(null)}
//                       rows={5}
//                       className={`w-full p-4 border rounded-lg focus:outline-none ${theme === 'dark' ? 'bg-gray-800/50 border-white/10 text-white' : 'bg-white border-gray-200 text-gray-900'}`}
//                       placeholder={t('contact.form.messagePlaceholder')}
//                     />
//                   </div>
//                 </motion.div>

//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className={`w-full py-3 mt-6 rounded-lg text-white ${isSubmitting ? 'bg-gray-400' : 'bg-primary hover:bg-primary/80'}`}
//                 >
//                   {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
//                 </button>
//               </motion.form>
//             )}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// //  };
// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Send, Mail, User, MessageSquare, Cpu, Code, Server, Database, Wifi, Smartphone, Globe, Cloud, HardDrive } from 'lucide-react';
// import { useTheme } from '../context/ThemeContext';
// import { useTranslation } from 'react-i18next';

// export const Contact = () => {
//   const { theme } = useTheme();
//   const { t } = useTranslation();

//   const [formState, setFormState] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const [focusedField, setFocusedField] = useState(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitted, setSubmitted] = useState(false);
//   const [error, setError] = useState(null);

//   const techIcons = [
//     { icon: Cpu, id: 'cpu' },
//     { icon: Code, id: 'code' },
//     { icon: Server, id: 'server' },
//     { icon: Database, id: 'database' },
//     { icon: Wifi, id: 'wifi' },
//     { icon: Smartphone, id: 'mobile' },
//     { icon: Globe, id: 'globe' },
//     { icon: Cloud, id: 'cloud' },
//     { icon: HardDrive, id: 'hardware' }
//   ];

//   const handleChange = (e) => {
//     setFormState({
//       ...formState,
//       [e.target.id]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setError(null);

//     try {
//       // Paramètres de l'email
//       const emailData = {
//         from: 'tv98516@gmail.com',
//         to: 'tv98516@gmail.com',
//         subject: 'Mail de la part de portfolioanas',
//         body: `
//           Nom: ${formState.name}
//           Email: ${formState.email}
//           Message: ${formState.message}
//         `
//       };

//       // Version avec EmailJS (recommandé)
//       // Vous devrez installer EmailJS: npm install @emailjs/browser
//       // Et créer un compte sur emailjs.com
//       const sendEmail = async () => {
//         // Si vous utilisez EmailJS
//         const emailjs = await import('@emailjs/browser');
        
//         // Remplacez ces valeurs par celles de votre compte EmailJS
//         const serviceId = 'service_k3tmywd';
//         const templateId = 'template_j2fxijs';
//         const publicKey = 'wusyl5eEzvPUrv85C';
        
//         const templateParams = {
//           from_name: formState.name,
//           from_email: formState.email,
//           to_email: 'tv98516@gmail.com',
//           message: formState.message,
//           reply_to: formState.email,
//         };
        
//         await emailjs.send(serviceId, templateId, templateParams, publicKey);
//       };

//       // Version avec API personnalisée
//       const sendEmailWithAPI = async () => {
//         // Utilisation d'une API personnalisée (à adapter selon votre backend)
//         const response = await fetch('/api/send-email', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(emailData),
//         });
        
//         if (!response.ok) {
//           throw new Error('Problème lors de l\'envoi de l\'email');
//         }
        
//         return await response.json();
//       };
      
//       // Choisissez l'une des méthodes d'envoi d'email
//       // Décommentez celle que vous souhaitez utiliser
//       await sendEmail();
//       await sendEmailWithAPI();
      
//       setSubmitted(true);
      
//       // Réinitialiser le formulaire après 3 secondes
//       setTimeout(() => {
//         setSubmitted(false);
//         setFormState({ name: '', email: '', message: '' });
//       }, 3000);
      
//     } catch (err) {
//       console.error('Erreur d\'envoi:', err);
//       setError(t('contact.error') || "Une erreur s'est produite lors de l'envoi du message.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section id="contact" className={`py-20 relative ${theme === 'dark' ? 'bg-background-dark' : 'bg-gray-50'}`}>
//       {/* Lignes de connexion animées (pour effet de circuit) */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {[...Array(8)].map((_, index) => (
//           <motion.div
//             key={`line-${index}`}
//             className={`absolute h-0.5 rounded-full ${theme === 'dark' ? 'bg-primary/10' : 'bg-primary/15'}`}
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               width: `${Math.random() * 15 + 5}%`,
//               transform: `rotate(${Math.random() * 360}deg)`
//             }}
//             animate={{
//               opacity: [0, 1, 0],
//               width: [`${Math.random() * 5 + 5}%`, `${Math.random() * 20 + 15}%`],
//             }}
//             transition={{
//               repeat: Infinity,
//               duration: Math.random() * 8 + 4,
//               delay: index * 0.7
//             }}
//           />
//         ))}
//       </div>

//       {/* Points de circuit pulsant */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {[...Array(12)].map((_, index) => (
//           <motion.div
//             key={`node-${index}`}
//             className={`absolute w-2 h-2 rounded-full ${theme === 'dark' ? 'bg-accent' : 'bg-primary'}`}
//             style={{
//               left: `${Math.random() * 90 + 5}%`,
//               top: `${Math.random() * 90 + 5}%`,
//             }}
//             animate={{
//               opacity: [0.3, 0.7, 0.3],
//               scale: [0.8, 1.2, 0.8],
//               boxShadow: [
//                 `0 0 0px ${theme === 'dark' ? '#4f46e5' : '#3b82f6'}`,
//                 `0 0 10px ${theme === 'dark' ? '#4f46e5' : '#3b82f6'}`,
//                 `0 0 0px ${theme === 'dark' ? '#4f46e5' : '#3b82f6'}`
//               ]
//             }}
//             transition={{
//               repeat: Infinity,
//               duration: Math.random() * 4 + 3,
//               delay: index * 0.3
//             }}
//           />
//         ))}
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
//             {t('contact.title')} <span className="text-primary">{t('contact.subtitle')}</span>
//           </h2>
//           <p className={`max-w-2xl mx-auto text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
//             {t('contact.intro')}
//           </p>
//           <div className="w-20 h-1 bg-accent mx-auto rounded-full mt-6" />
//         </motion.div>

//         <div className="max-w-4xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className={`${
//               theme === 'dark' ? 'bg-gray-900/60' : 'bg-white/90'
//             } backdrop-blur-lg p-8 md:p-10 rounded-2xl border ${theme === 'dark' ? 'border-primary/20' : 'border-gray-200'} shadow-xl`}
//           >
//             {submitted ? (
//               <motion.div
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 className="text-center py-8"
//               >
//                 <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Send className="w-8 h-8 text-white" />
//                 </div>
//                 <h3 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
//                   {t('contact.success.title')}
//                 </h3>
//                 <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
//                   {t('contact.success.message')}
//                 </p>
//               </motion.div>
//             ) : (
//               <motion.form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <motion.div
//                     whileFocus={{ scale: 1.02 }}
//                     whileHover={{ scale: 1.01 }}
//                     transition={{ type: 'spring', stiffness: 400, damping: 17 }}
//                   >
//                     <label htmlFor="name" className={`block text-lg mb-2 flex items-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
//                       <User className="w-5 h-5 mr-2 text-primary" />
//                       {t('contact.form.name')}
//                     </label>
//                     <div className={`relative overflow-hidden rounded-lg ${focusedField === 'name' ? 'ring-2 ring-primary' : ''}`}>
//                       <input
//                         type="text"
//                         id="name"
//                         value={formState.name}
//                         onChange={handleChange}
//                         onFocus={() => setFocusedField('name')}
//                         onBlur={() => setFocusedField(null)}
//                         className={`w-full p-4 border rounded-lg focus:outline-none ${theme === 'dark' ? 'bg-gray-800/50 border-white/10 text-white' : 'bg-white border-gray-200 text-gray-900'}`}
//                         placeholder={t('contact.form.namePlaceholder')}
//                         required
//                       />
//                     </div>
//                   </motion.div>

//                   <motion.div
//                     whileFocus={{ scale: 1.02 }}
//                     whileHover={{ scale: 1.01 }}
//                     transition={{ type: 'spring', stiffness: 400, damping: 17 }}
//                   >
//                     <label htmlFor="email" className={`block text-lg mb-2 flex items-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
//                       <Mail className="w-5 h-5 mr-2 text-primary" />
//                       {t('contact.form.email')}
//                     </label>
//                     <div className={`relative overflow-hidden rounded-lg ${focusedField === 'email' ? 'ring-2 ring-primary' : ''}`}>
//                       <input
//                         type="email"
//                         id="email"
//                         value={formState.email}
//                         onChange={handleChange}
//                         onFocus={() => setFocusedField('email')}
//                         onBlur={() => setFocusedField(null)}
//                         className={`w-full p-4 border rounded-lg focus:outline-none ${theme === 'dark' ? 'bg-gray-800/50 border-white/10 text-white' : 'bg-white border-gray-200 text-gray-900'}`}
//                         placeholder={t('contact.form.emailPlaceholder')}
//                         required
//                       />
//                     </div>
//                   </motion.div>
//                 </div>

//                 <motion.div
//                   whileFocus={{ scale: 1.02 }}
//                   whileHover={{ scale: 1.01 }}
//                   transition={{ type: 'spring', stiffness: 400, damping: 17 }}
//                 >
//                   <label htmlFor="message" className={`block text-lg mb-2 flex items-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
//                     <MessageSquare className="w-5 h-5 mr-2 text-primary" />
//                     {t('contact.form.message')}
//                   </label>
//                   <div className={`relative overflow-hidden rounded-lg ${focusedField === 'message' ? 'ring-2 ring-primary' : ''}`}>
//                     <textarea
//                       id="message"
//                       value={formState.message}
//                       onChange={handleChange}
//                       onFocus={() => setFocusedField('message')}
//                       onBlur={() => setFocusedField(null)}
//                       rows={5}
//                       className={`w-full p-4 border rounded-lg focus:outline-none ${theme === 'dark' ? 'bg-gray-800/50 border-white/10 text-white' : 'bg-white border-gray-200 text-gray-900'}`}
//                       placeholder={t('contact.form.messagePlaceholder')}
//                       required
//                     />
//                   </div>
//                 </motion.div>

//                 {error && (
//                   <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
//                     {error}
//                   </div>
//                 )}

//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className={`w-full py-3 mt-6 rounded-lg text-white ${isSubmitting ? 'bg-gray-400' : 'bg-primary hover:bg-primary/80'}`}
//                 >
//                   {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
//                 </button>
//               </motion.form>
//             )}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, User, MessageSquare, Cpu, Code, Server, Database, Wifi, Smartphone, Globe, Cloud, HardDrive, Linkedin, Phone } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';

export const Contact = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  // Information de contact à afficher
  const contactInfo = {
    email: 'an.zehraoui@gmail.com',
    phone: '+33 7 45 58 40 49', // Remplacez par votre numéro de téléphone
    linkedin: 'https://www.linkedin.com/in/zehraoui-anas-%C3%A9tudiant-ing%C3%A9nieur-syst%C3%A8mes-embarques?original_referer=' // Remplacez par votre URL LinkedIn
  };

  const techIcons = [
    { icon: Cpu, id: 'cpu' },
    { icon: Code, id: 'code' },
    { icon: Server, id: 'server' },
    { icon: Database, id: 'database' },
    { icon: Wifi, id: 'wifi' },
    { icon: Smartphone, id: 'mobile' },
    { icon: Globe, id: 'globe' },
    { icon: Cloud, id: 'cloud' },
    { icon: HardDrive, id: 'hardware' }
  ];

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Paramètres de l'email
      const emailData = {
        from: 'an.zehraoui@gmail.com',
        to: 'an.zehraoui@gmail.com',
        subject: 'Mail de la part de portfolioanas',
        body: `
          Nom: ${formState.name}
          Email: ${formState.email}
          Message: ${formState.message}
        `
      };

      // Version avec EmailJS (recommandé)
      // Vous devrez installer EmailJS: npm install @emailjs/browser
      // Et créer un compte sur emailjs.com
      const sendEmail = async () => {
        // Si vous utilisez EmailJS
        const emailjs = await import('@emailjs/browser');
        
        // Remplacez ces valeurs par celles de votre compte EmailJS
        const serviceId = 'service_k3tmywd';
        const templateId = 'template_j2fxijs';
        const publicKey = 'wusyl5eEzvPUrv85C';
        
        const templateParams = {
          from_name: formState.name,
          from_email: formState.email,
          to_email: 'an.zehraoui@gmail.com',
          message: formState.message,
          reply_to: formState.email,
        };
        
        await emailjs.send(serviceId, templateId, templateParams, publicKey);
      };

      // Version avec API personnalisée
      const sendEmailWithAPI = async () => {
        // Utilisation d'une API personnalisée (à adapter selon votre backend)
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(emailData),
        });
        
        if (!response.ok) {
          throw new Error('Problème lors de l\'envoi de l\'email');
        }
        
        return await response.json();
      };
      
      // Choisissez l'une des méthodes d'envoi d'email
      // Décommentez celle que vous souhaitez utiliser
      await sendEmail();
      // await sendEmailWithAPI();
      
      setSubmitted(true);
      
      // Réinitialiser le formulaire après 3 secondes
      setTimeout(() => {
        setSubmitted(false);
        setFormState({ name: '', email: '', message: '' });
      }, 3000);
      
    } catch (err) {
      console.error('Erreur d\'envoi:', err);
      setError(t('contact.error') || "Une erreur s'est produite lors de l'envoi du message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={`py-20 relative ${theme === 'dark' ? 'bg-background-dark' : 'bg-gray-50'}`}>
      {/* Lignes de connexion animées (pour effet de circuit) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, index) => (
          <motion.div
            key={`line-${index}`}
            className={`absolute h-0.5 rounded-full ${theme === 'dark' ? 'bg-primary/10' : 'bg-primary/15'}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 15 + 5}%`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
            animate={{
              opacity: [0, 1, 0],
              width: [`${Math.random() * 5 + 5}%`, `${Math.random() * 20 + 15}%`],
            }}
            transition={{
              repeat: Infinity,
              duration: Math.random() * 8 + 4,
              delay: index * 0.7
            }}
          />
        ))}
      </div>

      {/* Points de circuit pulsant */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, index) => (
          <motion.div
            key={`node-${index}`}
            className={`absolute w-2 h-2 rounded-full ${theme === 'dark' ? 'bg-accent' : 'bg-primary'}`}
            style={{
              left: `${Math.random() * 90 + 5}%`,
              top: `${Math.random() * 90 + 5}%`,
            }}
            animate={{
              opacity: [0.3, 0.7, 0.3],
              scale: [0.8, 1.2, 0.8],
              boxShadow: [
                `0 0 0px ${theme === 'dark' ? '#4f46e5' : '#3b82f6'}`,
                `0 0 10px ${theme === 'dark' ? '#4f46e5' : '#3b82f6'}`,
                `0 0 0px ${theme === 'dark' ? '#4f46e5' : '#3b82f6'}`
              ]
            }}
            transition={{
              repeat: Infinity,
              duration: Math.random() * 4 + 3,
              delay: index * 0.3
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            {t('contact.title')} <span className="text-primary">{t('contact.subtitle')}</span>
          </h2>
          <p className={`max-w-2xl mx-auto text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            {t('contact.intro')}
          </p>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Section des coordonnées personnelles */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`${
              theme === 'dark' ? 'bg-gray-900/60' : 'bg-white/90'
            } backdrop-blur-lg p-8 mb-8 rounded-2xl border ${theme === 'dark' ? 'border-primary/20' : 'border-gray-200'} shadow-xl`}
          >
            <h3 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Email */}
              <div className="flex items-center">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  {/* <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Email</p> */}
                  <a 
                    href={`mailto:${contactInfo.email}`} 
                    className={`text-lg font-medium hover:underline ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>
              
              {/* Téléphone */}
              <div className="flex items-center">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  {/* <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Téléphone</p> */}
                  <a 
                    href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} 
                    className={`text-lg font-medium hover:underline ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
              
              {/* LinkedIn */}
              <div className="flex items-center">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Linkedin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  {/* <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>LinkedIn</p> */}
                  <a 
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-lg font-medium hover:underline ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
                  >
                    ZEHRAOUI Anas
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Formulaire de contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`${
              theme === 'dark' ? 'bg-gray-900/60' : 'bg-white/90'
            } backdrop-blur-lg p-8 md:p-10 rounded-2xl border ${theme === 'dark' ? 'border-primary/20' : 'border-gray-200'} shadow-xl`}
          >
            {submitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {t('contact.success.title')}
                </h3>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  {t('contact.success.message')}
                </p>
              </motion.div>
            ) : (
              <motion.form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  >
                    <label htmlFor="name" className={`block text-lg mb-2 flex items-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      <User className="w-5 h-5 mr-2 text-primary" />
                      {t('contact.form.name')}
                    </label>
                    <div className={`relative overflow-hidden rounded-lg ${focusedField === 'name' ? 'ring-2 ring-primary' : ''}`}>
                      <input
                        type="text"
                        id="name"
                        value={formState.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full p-4 border rounded-lg focus:outline-none ${theme === 'dark' ? 'bg-gray-800/50 border-white/10 text-white' : 'bg-white border-gray-200 text-gray-900'}`}
                        placeholder={t('contact.form.namePlaceholder')}
                        required
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  >
                    <label htmlFor="email" className={`block text-lg mb-2 flex items-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      <Mail className="w-5 h-5 mr-2 text-primary" />
                      {t('contact.form.email')}
                    </label>
                    <div className={`relative overflow-hidden rounded-lg ${focusedField === 'email' ? 'ring-2 ring-primary' : ''}`}>
                      <input
                        type="email"
                        id="email"
                        value={formState.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full p-4 border rounded-lg focus:outline-none ${theme === 'dark' ? 'bg-gray-800/50 border-white/10 text-white' : 'bg-white border-gray-200 text-gray-900'}`}
                        placeholder={t('contact.form.emailPlaceholder')}
                        required
                      />
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <label htmlFor="message" className={`block text-lg mb-2 flex items-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    <MessageSquare className="w-5 h-5 mr-2 text-primary" />
                    {t('contact.form.message')}
                  </label>
                  <div className={`relative overflow-hidden rounded-lg ${focusedField === 'message' ? 'ring-2 ring-primary' : ''}`}>
                    <textarea
                      id="message"
                      value={formState.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      rows={5}
                      className={`w-full p-4 border rounded-lg focus:outline-none ${theme === 'dark' ? 'bg-gray-800/50 border-white/10 text-white' : 'bg-white border-gray-200 text-gray-900'}`}
                      placeholder={t('contact.form.messagePlaceholder')}
                      required
                    />
                  </div>
                </motion.div>

                {error && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 mt-6 rounded-lg text-white ${isSubmitting ? 'bg-gray-400' : 'bg-primary hover:bg-primary/80'}`}
                >
                  {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
                </button>
              </motion.form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};