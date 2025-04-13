export const enTranslations = {
  nav: {
    home: 'Home',
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    skills: 'Skills',
    contact: 'Contact'
  },
  hero: {
    role: 'Embedded Systems Engineer',
    description: 'Passionate about developing innovative embedded solutions, specialized in IoT and advanced electronic systems.',
    cta: {
      projects: 'View my projects',
      contact:'Contact Me',
      cv: 'Download CV'
    }
  },
  about: {
    title: "About",
    me: "me",
    intro: {
      title: "Who am I?",
      description: "A passionate Embedded Systems Engineer with a drive for innovation and technical excellence. I specialize in creating sophisticated solutions that bridge the gap between hardware and software.",
      highlights: [
        "Embedded Systems Specialist",
        "IoT Solutions Architect",
        "Full Stack Developer",
        "Automation Expert"
      ]
    },
    articles: {
      passion: {
        title: "My Passion",
        description: "I'm driven by the challenge of creating intelligent systems that make a real impact. From industrial automation to IoT solutions, I love bringing ideas to life through technology."
      },
      approach: {
        title: "My Approach",
        description: "I believe in combining theoretical knowledge with practical implementation. Every project is an opportunity to innovate and push the boundaries of what's possible."
      },
      vision: {
        title: "My Vision",
        description: "I aim to contribute to the evolution of smart technologies, making them more accessible and efficient for everyone. The future of technology is interconnected, and I want to be part of building it."
      }
    },
    education: {
      title: "Education",
      degree1: "Engineering degree in Embedded Systems",
      school1: "Polytech Lille, 2022-2025",
      degree2: "Preparatory classes in Technology and Industrial Sciences (TSI)",
      school2: "CPGE Salmane Al Farissi, 2020-2022",
      degree3: "Electrical Science and Technology Baccalaureate (High Honors)",
      school3: "Lycée Moulay Abdellah, 2020-2022"
    },
    specialization: {
      title: "Specialization",
      skill1: "IoT & Connected Systems",
      skill2: "Advanced Electronics",
      skill3: "Firmware & Low-Level Development",
      skill4: "Industrial Energy"
    },
    languages: {
      title: "Languages",
      arabic:"Arabic",
      french: "French",
      english: "English",
      german: "German",
      native: "Native",
      fluent: "Fluent",
      intermediate: "Intermediate"
    }
  },
  experience: {
    title: "Professional",
    subtitle: "Experience",
    positions: {
      airbus: {
        date: "Feb 2025 - Aug 2025",
        title: "Full Stack Developer / Data Analyst / Automation Engineer Intern",
        achievements: [
          "End-to-End development of an application to manage complex data (A320 electrical systems).",
          "Back-end: Python, Django.",
          "Front-end: HTML, CSS, React.",
          "Management and optimization of complex databases (SQL, Python, JavaScript).",
          "Collaboration with multidisciplinary teams (designers, developers).",
          "Implementation of automation solutions to improve process efficiency."
        ]
      },
      cetim: {
        date: "Apr 2024 - Aug 2024",
        title: "Connectivity and Maintenance Engineering Intern",
        achievements: [
          "Set up a local network to connect laboratory machines and transfer files to a central PC using .bat files and PowerShell scripts (.ps1) with task schedulers.",
          "Optimization of conditional preventive maintenance through sensor installation, real-time data integration into CMMS, and maintenance plan creation.",
          "Collection and storage of electrical data in InfluxDB, dashboard creation (Node-RED and GRAFANA) to visualize consumption and associated cost for each machine, and monitoring of continuous improvement projects.",
          "Management and optimization of complex databases (SQL, Python, JavaScript).",
          "Collaboration with multidisciplinary teams (designers, developers).",
          "Implementation of automation solutions to improve process efficiency."
        ]
      },
      junior: {
        date: "Feb 2022 - May 2022",
        title: "Business Manager at Junior Enterprise",
        achievements: [
          "Coordination of a 5-student team",
          "Establishment and maintenance of client relationships",
          "Regular monitoring of performance and results"
        ]
      }
    }
  },
  skills: {
    title: "My",
    subtitle: "Skills",
    categories: {
      programming: "Programming Languages",
      frameworks: "Frameworks & Libraries",
      devops: "DevOps & Cloud",
      version: "Version Control & Collaboration",
      automation: "Automation & Robotics",
      databases: "Databases",
      tools: "Tools & Platforms"
    }
  },
  // projects: {
  //   title: "My",
  //   subtitle: "Projects",
  //   viewProject: "View Project",
  //   viewGithub: "View on GitHub",
  //   categories: {
  //     all: "All",
  //     web: "Web",
  //     embedded: "Embedded",
  //     automation: "Automation",
  //     iot: "IoT"
  //   }
  // },
  projects: {
    title: "My",
    subtitle: "Projects",
    viewProject: "View Project",
    viewGithub: "View on GitHub",
    visitDemo: "Visit Demo",
    missionTitle: "Mission",
    categoryTitle: "Category",
    technologiesTitle: "Technologies",
    impactTitle: "Impact",
    categories: {
      all: "All",
      web: "Web",
      embedded: "Embedded",
      automation: "Automation",
      iot: "IoT",
      energy: "Energy",
      robotics: "Robotics",
      aeronautics: "Aeronautics"
    },
    items: {
      presentia: {
        title: "Presentia – Automated Attendance Management",
        description: "Automate attendance tracking using NFC and facial recognition.",
        mission: "Develop an embedded system for real-time identification and recording of students.",
        category: "Automation Project",
        impact: "Optimized the attendance process with a 50% reduction in student registration time."
      },
      mes: {
        title: "MES Open Source – Industrial Supervision",
        description: "Develop an open-source system to supervise industrial machines.",
        mission: "Create a real-time system to collect and analyze data from production machines.",
        category: "Automation Project",
        impact: "Real-time visualization of performance and optimization of production flows."
      },
      hydrogen: {
        title: "Multisource Hydrogen Station",
        description: "Design a hybrid hydrogen production system from renewable sources.",
        mission: "Model and simulate a hybrid hydrogen system to optimize energy efficiency using renewable energy sources.",
        category: "Energy Project",
        impact: "Improved energy efficiency of a hybrid system through accurate simulation and better resource management."
      },
      ballast: {
        title: "Electronic Ballast for Fluorescent Lamps",
        description: "Enhance the lifespan and efficiency of fluorescent lamps with an intelligent electronic ballast.",
        mission: "Design an electronic ballast to regulate the power supply of fluorescent lamps, reducing energy consumption and extending their lifespan.",
        category: "Energy Project",
        impact: "Reduced energy consumption and improved durability of fluorescent lamps through finer regulation."
      },
      presentia_web: {
        title: "Presentia (Web Interface)",
        description: "Develop a web interface for attendance management and export.",
        mission: "Design a dynamic dashboard for real-time attendance data access. The application is deployed on Render for cloud accessibility.",
        category: "Web Project",
        impact: "Simplified user interface for efficient attendance management with real-time interactions."
      },
      portfolio: {
        title: "My Portfolio",
        description: "Create an interactive website to showcase my projects.",
        mission: "Design a responsive platform to highlight my career and projects.",
        category: "Web Project",
        impact: "Increased visibility of my projects through an ergonomic interface."
      },
      bf_matcher: {
        title: "BF Matcher – Visual Recognition Algorithm",
        description: "Detect and compare objects from images.",
        mission: "Develop an object matching algorithm based on feature descriptors to improve visual recognition accuracy.",
        category: "Robotics Project",
        impact: "Improved the accuracy of visual recognition systems in image analysis applications."
      },
      gmao: {
        title: "Connected GMAO",
        description: "Digitize Computerized Maintenance Management (CMMS).",
        mission: "Integrate industrial sensors for real-time monitoring of equipment and interventions based on collected data.",
        category: "IoT Project",
        impact: "Optimized maintenance processes with real-time management of equipment and interventions based on data."
      },
      dashboard_cost: {
        title: "Cost and Period Dashboard",
        description: "Analyze the impact of machine costs and usage periods.",
        mission: "Create a dashboard to visualize the impact of machine costs and operating periods.",
        category: "IoT Project",
        impact: "Reduced operational costs through precise management of machine operating periods and consumption."
      },
      dashboard_mts: {
        title: "Dashboard – MTS Network",
        description: "Connect and monitor machine performance via an MTS network.",
        mission: "Implement a centralized interface for equipment analysis and management, with task schedulers and real-time log display.",
        category: "IoT Project",
        impact: "Proactive monitoring of machine performance and effective management of scheduled tasks."
      },
      banc_avion: {
        title: "Aircraft Test Bench",
        description: "Test and analyze the performance of an aeronautical system under controlled conditions.",
        mission: "Develop a test bench to assess the performance of aeronautical systems in real flight conditions.",
        category: "Aeronautics Project",
        impact: "Optimized flight parameters through real-world testing, ensuring better safety and efficiency."
      },
      voiture_hybride: {
        title: "Hybrid Car Control",
        description: "Optimize the energy management of a hybrid vehicle.",
        mission: "Model and simulate the energy distribution between the internal combustion engine and the electric motor of a hybrid car.",
        category: "Energy Project",
        impact: "Improved energy performance of a hybrid vehicle through optimized resource management."
      },
      bobs_world: {
        title: "Bob's World – Real & Virtual System Integration",
        description: "Merge a virtual environment with a real system for real-time interaction.",
        mission: "Develop an interactive game where a floating fish reacts to objects manipulated by the user, combining real and virtual environments.",
        category: "Robotics Project",
        impact: "Immersive experience where physical simulation and human-machine interaction are integrated in a real-time virtual environment."
      }
    }
  },  
contact: {
      title: "Contact ",
      subtitle: "Me",
      intro: "If you have any questions, feel free to reach out to us.",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        namePlaceholder: "Enter your full name",
        emailPlaceholder: "Enter your email address",
        messagePlaceholder: "Write your message",
        submit: "Send",
        sending: "Sending...",
        success: {
          title: "Thank you for your message!",
          message: "We have received your message and will get back to you shortly."
        }
      }
    
  },
};

