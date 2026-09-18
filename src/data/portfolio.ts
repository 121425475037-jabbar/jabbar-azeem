import { Project, Achievement, SkillCategory, EducationItem } from '../types';

export const PERSONAL_INFO = {
  name: 'SYED ABDUL JABBAR AZEEM',
  preferredShortName: 'Jabbar Azeem',
  monogram: 'JA',
  title: 'Data Science Student',
  roles: [
    'Data Science Student',
    'Problem Solver',
    'AI & Data Analytics Enthusiast',
    'Technology Explorer'
  ],
  location: 'Hyderabad, Telangana, India',
  email: 'jabbarazeemx@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/syed-abdul-jabbar-azeem-231904421',
  linkedinDisplay: 'linkedin.com/in/syed-abdul-jabbar-azeem-231904421',
  primaryStatement: 'Exploring technology. Building ideas. Learning by doing.',
  heroBio:
    'I’m a B.Sc. Data Science student exploring programming, AI, data analysis and practical technology through projects, challenges and continuous experimentation.',
  learningPhilosophy:
    'I am a student exploring the intersection of data, AI, programming and technology through practical projects, experimentation and problem solving.',
  aboutIntro:
    'I’m Syed Abdul Jabbar Azeem, a B.Sc. Data Science student based in Hyderabad. I’m interested in programming, data analysis, AI-oriented technology and practical problem solving.',
  aboutApproach:
    'My approach is centered around learning through experimentation. I enjoy participating in competitions, exploring different technologies and turning ideas into small practical projects.',
  visionImage: '/assets/tech-vision.jpg'
};

export const PROJECTS: Project[] = [
  {
    id: 'virtual-mirror',
    slug: 'virtual-mirror',
    number: '01',
    title: 'Virtual Mirror',
    category: 'Technical',
    categoryLabel: 'Technical Project',
    shortDescription:
      'A virtual shopping solution designed to make trying clothes and accessories easier in malls. Users can visualize how different clothes and accessories would look on them without physically trying multiple items.',
    fullDescription:
      'The Virtual Mirror concept addresses the friction of physical fitting rooms in retail mall settings. By allowing shoppers to visualize outfits, garment pairings, and accessories virtually, it explores how interactive digital interfaces can transform modern retail browsing into an effortless, engaging experience.',
    features: [
      'Virtual try-on simulation concept',
      'Clothing visualization & color matching',
      'Accessories visualization & overlay options',
      'Interactive shopping experience workflow'
    ],
    techExposure: ['Interactive UI', 'Visualization Concepts', 'UX Flow Design', 'Computer Vision Concepts'],
    contextNote: 'Conceptual technical project exploring interactive retail technology.',
    visualType: 'virtual-mirror'
  },
  {
    id: 'transitops',
    slug: 'transitops',
    number: '02',
    title: 'TransitOps',
    category: 'Technical',
    categoryLabel: 'Odoo Hackathon',
    shortDescription:
      'TransitOps is a full-stack fleet management project developed during the Odoo Hackathon. I contributed to the project through technical and development documentation.',
    fullDescription:
      'TransitOps was built collaboratively during the fast-paced Odoo Hackathon, tackling end-to-end logistics and fleet operations tracking. As a Documentation Contributor, my core responsibility centered on synthesizing complex technical architectures into coherent documentation, mapping database models, documenting API endpoints, and keeping the development team aligned throughout the competition.',
    role: 'Documentation Contributor',
    contribution: [
      'Project architecture and functional documentation',
      'Development process documentation & sprint logs',
      'Technical feature documentation for REST endpoints',
      'Final project presentation documentation and deliverables'
    ],
    techExposure: [
      'Node.js',
      'Express',
      'TypeScript',
      'Prisma',
      'PostgreSQL',
      'Next.js',
      'React'
    ],
    contextNote:
      'Hackathon team project. Contributed through technical and development documentation. Technologies listed represent collaborative team stack exposure.',
    visualType: 'transitops'
  },
  {
    id: 'python-problem-solving',
    slug: 'python-problem-solving',
    number: '03',
    title: 'Python Problem Solving',
    category: 'Learning',
    categoryLabel: 'Academic / Learning',
    shortDescription:
      'Hands-on Python practice focused on fundamental programming and problem-solving concepts, algorithms, and structured data handling.',
    fullDescription:
      'A collection of hands-on programmatic problem-solving exercises built to establish deep fluency in core computational thinking. Covered systematic algorithmic operations, array and sequence transformations, indexing patterns, sorting mechanisms, and mathematical logic in clean Python.',
    topics: [
      'Lists & Tuples',
      'Sorting algorithms',
      'Insertion & Removal operations',
      'Mathematical calculations',
      'Basic data processing workflows'
    ],
    techExposure: ['Python 3', 'Algorithms', 'Data Structures', 'Logical Problem Solving'],
    contextNote: 'Core foundations in computer programming and algorithmic thinking.',
    visualType: 'python-code'
  },
  {
    id: 'statistical-analysis',
    slug: 'statistical-analysis',
    number: '04',
    title: 'Statistical Data Analysis',
    category: 'Academic',
    categoryLabel: 'Academic',
    shortDescription:
      'Academic analysis involving grouped frequency data and fitting an exponential distribution using Excel formulas and structured data interpretation.',
    fullDescription:
      'A rigorous academic statistical investigation examining grouped frequency data distributions. The work involved calculating continuous frequency distributions, determining theoretical versus observed frequencies, applying statistical formulas, and fitting exponential distributions in Microsoft Excel to interpret underlying probability behaviors.',
    topics: [
      'Grouped data analysis',
      'Frequency distribution tables',
      'Probability distributions (Exponential)',
      'Excel statistical modeling',
      'Data interpretation & variance analysis'
    ],
    techExposure: ['Excel', 'Statistics', 'Probability Distributions', 'Quantitative Analysis'],
    contextNote: 'Academic statistical modeling and distribution fitting project.',
    visualType: 'excel-stats'
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'ai-meme-competition',
    title: 'AI Meme Competition',
    institution: "St. Joseph's Degree & PG College",
    award: '1st Prize',
    description:
      'Won 1st Prize in an AI Meme Competition, combining creativity with an understanding of AI concepts.',
    badgeType: 'gold'
  },
  {
    id: 'webfinity',
    title: 'WEBFINITY',
    award: 'Winning Position',
    description:
      'Secured a winning position in WEBFINITY, demonstrating interest and skills in web development.',
    badgeType: 'cyan'
  },
  {
    id: 'msme-hackathon',
    title: 'MSME Idea Hackathon 5.0',
    award: 'Participant',
    description:
      'Participated through the Center for Innovation and Entrepreneurship in collaboration with the Department of Commerce.',
    badgeType: 'purple'
  },
  {
    id: 'informatique-exhibition',
    title: 'Informatique Exhibition',
    award: 'Idea Presentation',
    description:
      'Presented an innovative idea, demonstrating creativity and technical thinking.',
    badgeType: 'blue'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'PROGRAMMING',
    skills: [
      {
        name: 'Python',
        level: 'Working with',
        description: 'Core logic, data structures, scripting, algorithm practice'
      }
    ]
  },
  {
    title: 'DATA ANALYSIS',
    skills: [
      {
        name: 'Pandas',
        level: 'Working with',
        description: 'Dataframe manipulation, data cleaning, structured analysis'
      },
      {
        name: 'NumPy',
        level: 'Working with',
        description: 'Vectorized operations, numerical computation, arrays'
      }
    ]
  },
  {
    title: 'VISUALIZATION',
    skills: [
      {
        name: 'Matplotlib',
        level: 'Working with',
        description: 'Distribution charts, statistical plotting, exploratory visuals'
      }
    ]
  },
  {
    title: 'WEB / DEVELOPMENT EXPOSURE',
    skills: [
      {
        name: 'React',
        level: 'Project exposure',
        description: 'Modern component-based interfaces and interactive UI states'
      },
      {
        name: 'Next.js',
        level: 'Project exposure',
        description: 'SSR concepts and modern web architecture'
      },
      {
        name: 'Node.js',
        level: 'Project exposure',
        description: 'Backend runtime environment and package ecosystem'
      },
      {
        name: 'Express',
        level: 'Project exposure',
        description: 'REST API routing and server middleware concepts'
      },
      {
        name: 'TypeScript',
        level: 'Project exposure',
        description: 'Type-safe programming and maintainable architecture'
      }
    ]
  },
  {
    title: 'DATABASE / BACKEND EXPOSURE',
    skills: [
      {
        name: 'Prisma',
        level: 'Project exposure',
        description: 'Schema modeling, migrations, and ORM abstractions'
      },
      {
        name: 'PostgreSQL',
        level: 'Project exposure',
        description: 'Relational data concepts, queries, and schemas'
      }
    ]
  },
  {
    title: 'CORE STRENGTHS',
    skills: [
      {
        name: 'Problem Solving',
        level: 'Core strength',
        description: 'Breaking down technical challenges into clear, solvable steps'
      },
      {
        name: 'Technical Documentation',
        level: 'Core strength',
        description: 'Translating code logic into clear architectural guides'
      },
      {
        name: 'Creative Thinking',
        level: 'Core strength',
        description: 'Connecting technology concepts with human-centered applications'
      },
      {
        name: 'Idea Presentation',
        level: 'Core strength',
        description: 'Pitching conceptual solutions and technical proposals clearly'
      },
      {
        name: 'Learning Through Projects',
        level: 'Core strength',
        description: 'Hands-on curiosity, continuous experiments, iterative execution'
      }
    ]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: "St. Joseph's Degree & PG College",
    degree: 'Bachelor of Science — Data Science',
    period: 'July 2025 – May 2029',
    location: 'Hyderabad, Telangana, India',
    status: 'Second-year student',
    highlights: [
      'Focused on core Data Science, statistics, programming, and mathematical modeling.',
      'Active participant in technical exhibitions, hackathons, and college competitions.',
      'Hands-on lab work in Python, statistical modeling, and data analytics.'
    ]
  },
  {
    institution: 'Johnson Grammar School ICSE & IB',
    degree: 'ICSE & IB Curriculum',
    period: 'January 2018 – October 2022',
    location: 'Hyderabad, India',
    highlights: [
      'Strong academic foundation in science, mathematics, and analytical reasoning.',
      'Developed early passion for computers, technology, and systematic problem solving.'
    ]
  },
  {
    institution: 'St Andrews High School, Suchitra',
    degree: 'Primary & Secondary Education',
    period: 'October 2009 – October 2018',
    location: 'Hyderabad, India',
    highlights: [
      'Formative schooling nurturing curiosity, discipline, and team activities.',
      'Participation in school academic events, science fairs, and foundational computing.'
    ]
  }
];

export const CURRENTLY_EXPLORING = [
  {
    number: '01',
    tag: 'PROGRAMMING',
    title: 'Python and problem solving.',
    description: 'Algorithmic concepts, array manipulation, and structured programming paradigms.'
  },
  {
    number: '02',
    tag: 'DATA',
    title: 'Analysis and visualization.',
    description: 'Pandas, NumPy, and Matplotlib workflows turning raw tables into clear visual insights.'
  },
  {
    number: '03',
    tag: 'AI',
    title: 'AI concepts and creative applications.',
    description: 'Exploring machine learning fundamentals, creative AI implementations, and practical tools.'
  },
  {
    number: '04',
    tag: 'WEB',
    title: 'Modern web technologies.',
    description: 'Understanding frontend ecosystems, component lifecycles, and modern development tools.'
  },
  {
    number: '05',
    tag: 'BUILDING',
    title: 'Turning ideas into practical projects.',
    description: 'Bridging classroom theory with tangible software prototypes and hackathon experiments.'
  },
  {
    number: '06',
    tag: 'LEARNING',
    title: 'Continuously improving through hands-on work.',
    description: 'Participating in technical exhibitions, coding challenges, and collaborative builds.'
  }
];

export const PERSONAL_JOURNEY = [
  {
    step: 'LEARN',
    tag: '01',
    title: 'Grasping Fundamentals',
    description:
      'Building strong theoretical roots in statistics, mathematical principles, and core Python programming.'
  },
  {
    step: 'EXPLORE',
    tag: '02',
    title: 'Broadening Horizons',
    description:
      'Scanning emerging technologies, new libraries, modern web frameworks, and creative AI tools.'
  },
  {
    step: 'EXPERIMENT',
    tag: '03',
    title: 'Testing Hypotheses',
    description:
      'Writing test scripts, trying out novel libraries, and entering collegiate hackathons and competitions.'
  },
  {
    step: 'BUILD',
    tag: '04',
    title: 'Creating Tangible Work',
    description:
      'Translating concepts into concrete solutions like Virtual Mirror and collaborative hackathon projects.'
  },
  {
    step: 'IMPROVE',
    tag: '05',
    title: 'Refining & Iterating',
    description:
      'Analyzing feedback, improving documentation standards, optimizing code structure, and expanding skills.'
  }
];

export const INTEREST_AREAS = [
  {
    tag: 'DATA',
    title: 'Data Science & Analysis',
    description:
      'Uncovering patterns within structured datasets using Pandas and NumPy. Fascinated by how statistical modeling and clean visualization turn numbers into actionable clarity.'
  },
  {
    tag: 'AI',
    title: 'Artificial Intelligence',
    description:
      'Fascinated by machine learning architectures, automated reasoning, and creative AI. Exploring how intelligent models can enhance everyday human workflows.'
  },
  {
    tag: 'PROGRAMMING',
    title: 'Software & Problem Solving',
    description:
      'Crafting clean, logical code in Python. Enjoying the methodical satisfaction of breaking down algorithmic puzzles, sorting algorithms, and modular logic.'
  },
  {
    tag: 'TECHNOLOGY',
    title: 'Web & Digital Systems',
    description:
      'Understanding how modern full-stack systems interact—from React interfaces to backend APIs, relational databases, and interactive user experiences.'
  }
];

export const WHAT_I_ENJOY = [
  {
    title: 'Problem Solving',
    description: 'Deconstructing tricky logical challenges into bite-sized, addressable components.'
  },
  {
    title: 'Creative Ideas',
    description: 'Finding unexpected intersections between everyday human needs and digital solutions.'
  },
  {
    title: 'Technical Challenges',
    description: 'Tackling new programming concepts and wrestling with edge cases until they work cleanly.'
  },
  {
    title: 'Learning New Tools',
    description: 'Discovering modern libraries, developer utilities, and frameworks that enhance workflows.'
  },
  {
    title: 'Building Projects',
    description: 'The creative satisfaction of moving from a blank screen to a functional prototype.'
  },
  {
    title: 'Collaborating',
    description: 'Working alongside peers during hackathons and sharing insights through documentation.'
  }
];
