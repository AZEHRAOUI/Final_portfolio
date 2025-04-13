import { Experience, Project, SkillCategory } from '../types';

export const experiences: Experience[] = [
  {
    date: "Févr. 2025 - Août 2025",
    company: "Airbus",
    title: "Stage Ingénieur Développeur full stack/ data analyst / automatisation",
    achievements: [
      "Développement End-to-End d'une application pour gérer des données complexes (systèmes électriques A320).",
      "Back-end : Python, Django.",
      "Front-end : HTML, CSS, React.",
      "Gestion et optimisation des bases de données complexes (SQL, Python, JavaScript).",
      "Collaboration avec des équipes multidisciplinaires (designers, développeurs).",
      "Mise en place de solutions d'automatisation pour améliorer l'efficacité des processus."
    ]
  },
  {
    date: "Avril. 2024 - Août. 2024",
    company: "CETIM",
    title: "Stage ingénieur en Connéctivité et maintenance",
    achievements: [
      "Mise en place d'un réseau local pour connecter les machines d'un laboratoire et transférer des fichiers vers un PC central en utilisant des fichiers .bat et des scripts PowerShell (.ps1) avec les planificateurs de tâches.",
      "Optimisation de la maintenance préventive conditionnelle via l'installation de capteurs, l'intégration des données en temps  réel dans la GMAO, et la création de plans de maintenance.",
      "Récupération et stockage des données électriques dans InfluxDB, création d'un tableau de bord (Node-RED et GRAFANA) pour visualiser la consommation et le coût associé `a chaque machine, et suivi des projets d'amélioration continue.",
      "Gestion et optimisation des bases de données complexes (SQL, Python, JavaScript).",
      "Collaboration avec des équipes multidisciplinaires (designers, développeurs).",
      "Mise en place de solutions d'automatisation pour améliorer l'efficacité des processus."
    ]
  },
  {
    date: "Févr. 2022 - Mai 2022",
    company: "Junior Entreprise POLYTECH LILLE",
    title: "Charges d'affaires au sein de la junior entreprise",
    achievements: [
      "Coordination d'une équipe de 5 étudiants",
      "Établissement et maintien des relations avec les clients",
      "Suivi régulier des performances et des résultats"
    ]
  }
];

export const projects = [
  {
    id: "mes",
    title: "MES Open Source – Supervision industrielle",
    description: "Développer un système open source pour superviser les machines industrielles.",
    mission: "Création d'un système en temps réel pour collecter et analyser les données des machines de production.",
    category: "Projet Automatique",
    image: "/photo/com.webp",
    technologies: ["Node-RED", "InfluxDB", "Grafana", "Modbus"],
    github: "https://github.com/AZEHRAOUI/MES-open-source",
    demoUrl: "",
    impact: "Visualisation en temps réel des performances et optimisations des flux de production."
  },
 
  {
    id: "presentia",
    title: "Presentia – Gestion de présence automatisée",
    description: "Automatiser la prise de présence en utilisant NFC et reconnaissance faciale.",
    mission: "Développement d'un système embarqué permettant l'identification et l'enregistrement des étudiants en temps réel.",
    category: "Projet Automatique",
    image: "/photo/presentia.webp",
    technologies: ["Raspberry Pi", "OpenCV", "Flask", "PostgreSQL"],
    github: "#",
    demoUrl: "#",
    impact: "Optimisation du processus de prise de présence avec une réduction de 50% du temps d'enregistrement des étudiants."
  },
  {
    id: "ballast",
    title: "Ballast électronique pour lampe fluorescente",
    description: "Améliorer la durée de vie et l'efficacité des lampes fluorescentes avec un ballast électronique intelligent.",
    mission: "Conception d'un ballast électronique pour réguler l'alimentation des lampes fluorescentes, réduisant ainsi leur consommation d'énergie et prolongeant leur durée de vie.",
    category: "Projet Energie",
    image: "/photo/voele.webp",
    technologies: ["PSIM"],
    github: "#",
    demoUrl: "#",
    impact: "Réduction de la consommation d'énergie et amélioration de la durabilité des lampes fluorescentes à travers une régulation plus fine."
  },
  {
    id: "presentia_web",
    title: "Presentia (Web Interface)",
    description: "Développer une interface web pour la gestion et l'exportation des présences.",
    mission: "Conception d'un tableau de bord dynamique permettant l'accès aux données de présence en temps réel. L'application est déployée sur Render pour une accessibilité cloud.",
    category: "Projet Web",
    image: "/logos/presentia_site.png",
    technologies: ["Flask", "PostgreSQL", "Figma", "Render"],
    github: "#",
    demoUrl: "#",
    impact: "Interface utilisateur simplifiée permettant une gestion de présence efficace avec des interactions en temps réel."
  },
  {
    id: "portfolio",
    title: "My Portfolio",
    description: "Créer un site web interactif pour présenter mes projets.",
    mission: "Conception d'une plateforme responsive pour mettre en avant mon parcours et mes projets.",
    category: "Projet Web",
    image: "/logos/my_portfolio.png",
    technologies: ["React", "TypeScript", "HTML", "CSS"],
    github: "#",
    demoUrl: "#",
    impact: "Augmentation de la visibilité de mes projets à travers une interface ergonomique."
  },
  {
    id: "bf_matcher",
    title: "BF Matcher – Algorithme de reconnaissance visuelle",
    description: "Détecter et comparer des objets à partir d'images.",
    mission: "Développement d'un algorithme de matching d'objets basé sur des descripteurs de caractéristiques pour améliorer la précision de la reconnaissance visuelle.",
    category: "Projet Robotique",
    image: "/logos/anas_matcher.png",
    technologies: ["OpenCV", "Python"],
    github: "#",
    demoUrl: "#",
    impact: "Amélioration de la précision des systèmes de reconnaissance visuelle dans des applications d'analyse d'images."
  },
  {
    id: "hydrogen",
    title: "Station multisource d'hydrogène",
    description: "Concevoir un système hybride de production d'hydrogène à partir de sources renouvelables.",
    mission: "Modélisation et simulation d'un système hybride d'hydrogène afin d'optimiser l'efficacité énergétique en utilisant des sources d'énergie renouvelables.",
    category: "Projet Energie",
    image: "/photo/hyb.webp",
    technologies: ["PSIM", "MATLAB/Simulink"],
    github: "#",
    demoUrl: "#",
    impact: "Amélioration de l'efficacité énergétique d'un système hybride à travers une simulation précise et une meilleure gestion des ressources."
  },
  {
    id: "gmao",
    title: "GMAO Connectée",
    description: "Digitaliser la gestion de maintenance assistée par ordinateur (GMAO).",
    mission: "Intégration de capteurs industriels pour un suivi en temps réel des équipements et des interventions basées sur les données recueillies.",
    category: "Projet IoT",
    image: "/photo/GMAO_connecte.png",
    technologies: ["Node-RED", "Modbus", "MQTT", "Sensors"],
    github: "#",
    demoUrl: "#",
    impact: "Optimisation des processus de maintenance avec une gestion en temps réel des équipements et interventions basées sur les données."
  },
  {
    id: "dashboard_cost",
    title: "Dashboard Coût et Période",
    description: "Analyser l'impact des coûts et des périodes d'utilisation des machines.",
    mission: "Création d'un tableau de bord permettant de visualiser l'impact des coûts et des périodes de fonctionnement des machines.",
    category: "Projet IoT",
    image: "/photo/price.webp",
    technologies: ["Grafana", "InfluxDB", "Python"],
    github: "#",
    demoUrl: "#",
    impact: "Réduction des coûts opérationnels grâce à une gestion précise des périodes de fonctionnement et de la consommation des machines."
  },
  {
    id: "dashboard_mts",
    title: "Dashboard – Réseau MTS",
    description: "Connecter et surveiller les performances des machines via un réseau MTS.",
    mission: "Mise en place d'une interface centralisée pour l'analyse et la gestion des équipements, avec des planificateurs de tâches et l'affichage des logs en temps réel.",
    category: "Projet IoT",
    image: "/photo/dashboard.webp",
    technologies: ["Node-RED", "InfluxDB", "MQTT"],
    github: "#",
    demoUrl: "#",
    impact: "Surveillance proactive de la performance des machines et gestion efficace des tâches planifiées."
  },
  {
    id: "banc_avion",
    title: "Banc d'essai pour avion",
    description: "Tester et analyser les performances d'un système aéronautique en conditions contrôlées.",
    mission: "Développement d'un banc d'essai pour tester les performances de systèmes aéronautiques dans des conditions réelles de vol.",
    category: "Projet Aéronautique",
    image: "/photo/banc.png",
    technologies: ["MATLAB/Simulink", "Capteurs embarqués", "Automates industriels"],
    github: "#",
    demoUrl: "#",
    impact: "Optimisation des paramètres de vol à travers des tests en conditions réelles, assurant une meilleure sécurité et efficacité."
  },
  {
    id: "voiture_hybride",
    title: "Commande d'une voiture hybride",
    description: "Optimiser la gestion énergétique d'un véhicule hybride.",
    mission: "Modélisation et simulation de la répartition d'énergie entre le moteur thermique et le moteur électrique d'une voiture hybride.",
    category: "Projet Energie",
    image: "/photo/env.webp",
    technologies: ["MATLAB/Simulink", "Algorithmes d'optimisation"],
    github: "#",
    demoUrl: "#",
    impact: "Amélioration de la performance énergétique d'un véhicule hybride à travers une gestion optimisée des ressources d'énergie."
  },
  {
    id: "bobs_world",
    title: "Bob's World – Intégration système réel & virtuel",
    description: "Fusionner un environnement virtuel et un système réel pour une interaction en temps réel.",
    mission: "Développement d'un jeu interactif où un poisson flottant réagit aux objets manipulés par l'utilisateur, combinant un environnement réel et virtuel.",
    category: "Projet Robotique",
    image: "/photo/bob.webp",
    // video: "/photo/Bobs.mov",
    technologies: ["Unreal Engine", "Capteurs de mouvement", "Interfaces embarquées"],
    github: "#",
    demoUrl: "#",
    impact: "Expérience immersive où la simulation physique et l'interaction homme-machine sont intégrées dans un environnement virtuel en temps réel."
  }
];

export interface Skill {
  name: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Langages de Programmation",
    skills: [
      { name: "C/C++" },
      { name: "Python" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "Java" },
      { name: "Matlab" },
      { name: "Assembly" },
    ]
  },
  {
    name: "Frameworks & Bibliothèques",
    skills: [
      { name: "React" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "Django" },
      { name: "Flask" },
      { name: "Next.js" },
    ]
  },
  {
    name: "DevOps & Cloud",
    skills: [
      { name: "Docker" },
      { name: "AWS" },
      { name: "Jenkins" },
      { name: "Kubernetes" },
      { name: "Azure" },
    ]
  },
  {
    name: "Contrôle de Version & Collaboration",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "GitLab" },
    ]
  },
  {
    name: "Automatisation & Robotique",
    skills: [
      { name: "ROS2" },
      { name: "TIA Portal V14" },
      { name: "Automates Programmables" },
    ]
  },
  {
    name: "Bases de Données",
    skills: [
      { name: "SQL" },
      { name: "MongoDB" },
      { name: "Redis" },
    ]
  },
  {
    name: "Outils & Plateformes",
    skills: [
      { name: "Render" },
      { name: "GraphQL" },
      { name: "RESTful APIs" },
    ]
  }
];