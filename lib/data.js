// Single source of truth for everything on the site.
// Edit here and every page updates.

export const profile = {
  name: 'Umer Qureshi',
  tagline: 'inquiry & impact, for everyone',
  headline:
    'High school student working at the intersection of electrical engineering and neuroscience.',
  email: 'umerqure475@gmail.com',
  github: 'https://github.com/Umer-Eats',
};

export const stats = [
  { value: '100,000+', label: 'people reached by Korah' },
  { value: '$35,000', label: 'OTIS global win for Iris AI' },
  { value: '900+', label: 'practice tests on Akoizo' },
  { value: '< 3%', label: 'acceptance rate, MITES Semester' },
];

export const projects = [
  {
    id: 'korah',
    name: 'korah',
    doodle: 'paper',
    role: 'AI / developer',
    kicker: 'free standardized education tool',
    summary:
      'A free standardized education tool, open to any student with a browser.',
    points: [
      'Built the Essay Annotator in JavaScript, HTML and CSS.',
      'Hosted on Firebase and Vercel, reaching more than 100,000 people.',
      'Spearheaded the College Prep and Marketing internship.',
    ],
    tags: ['JavaScript', 'HTML', 'CSS', 'Firebase', 'Vercel'],
    links: [{ label: 'korah.app', href: 'https://www.korah.app/' }],
  },
  {
    id: 'iris',
    name: 'iris AI',
    doodle: 'eye',
    role: 'project lead · 2025',
    kicker: 'OTIS Made to Move Communities',
    summary:
      'An iOS app that helps visually impaired people navigate their surroundings, running entirely on the device.',
    points: [
      'Programmed in Swift using machine learning, computer vision and LiDAR.',
      'Runs locally on the phone rather than in the cloud.',
      'Global winner with a $35,000 investment, ahead of the continental winning teams from Japan, China and Turkey.',
    ],
    tags: ['Swift', 'Machine Learning', 'Computer Vision', 'LiDAR'],
    links: [
      { label: 'source on github', href: 'https://github.com/mariovpereira/Iris' },
      { label: 'watch the final', href: 'https://www.youtube.com/watch?v=N2019aXD7Yc' },
    ],
  },
  {
    id: 'radix',
    name: 'RADIX',
    doodle: 'robot',
    role: 'project lead · 2026',
    kicker: 'Lemelson-MIT InvenTeams',
    summary:
      'An autonomous all-terrain robot invented to eliminate the invasive Brazilian peppertree.',
    points: [
      'Provisional patent approved, patent pending, with a $7,500 investment.',
      'Built on Linux, Raspberry Pi, MAVLink and the ArduPilot architecture.',
      'Field research conducted with the botany team at FIU and Professor Joe Redwine.',
    ],
    tags: ['Linux', 'Raspberry Pi', 'MAVLink', 'ArduPilot'],
    links: [
      {
        label: 'NBC Miami coverage',
        href: 'https://www.nbcmiami.com/news/local/education-on-6/mit-recognizes-pembroke-pines-charter-high-schools-inventeam/3746174/',
      },
    ],
  },
  {
    id: 'coffee-house',
    name: 'coffee house',
    doodle: 'cup',
    role: 'founder',
    kicker: 'community study cafe',
    summary:
      'An online cafe where students from the same school sit down and focus on studying together.',
    points: [
      'Shipped and built in HTML, CSS and JavaScript.',
      'Enclosed to the school domain, with around 300 users.',
      'Message encryption and local filtering keep the space safe.',
    ],
    tags: ['HTML', 'CSS', 'JavaScript'],
    links: [{ label: 'coffee-house.app', href: 'https://www.coffee-house.app/' }],
  },
  {
    id: 'akoizo',
    name: 'akoizo',
    doodle: 'flask',
    role: 'founder',
    kicker: 'Science Olympiad study & organization',
    summary:
      'A study and team-organization website for Science Olympiad, with more than 900 tests and 70 lessons.',
    points: [
      'More than 500 users on the local school domain.',
      'Programmed in Next.js and enclosed to the school domain.',
      'Autograder, notes generator, ranked tests, instructor analytics and more.',
    ],
    tags: ['Next.js'],
    links: [],
  },
  {
    id: 'binbr',
    name: 'BINBR',
    doodle: 'phage',
    role: 'creator · HOSA',
    kicker: 'bacterial identification & nanobot bacteriophage release',
    summary:
      'A concept created and presented at HOSA to combat antimicrobial resistance.',
    points: [
      'Pairs bacterial identification with nanobot-delivered bacteriophages.',
      'Designed as a response to antimicrobial resistance.',
    ],
    tags: ['Biomedical', 'Research'],
    links: [],
  },
];

export const programs = [
  {
    id: 'mites',
    name: 'MITES semester',
    doodle: 'worm',
    when: '2026 cohort',
    kicker: "MIT's most rigorous academic STEM program, with an acceptance rate under 3%",
    points: [
      'Courses in Stem Cell Biology (Karina Ascunce) and Science Communication (Dr. John Aliu).',
      'Conducted PhD-level research on Planaria worms: how caffeine concentrations from Coffea canephora affect stem cell regeneration rates.',
    ],
  },
  {
    id: 'inventeams',
    name: 'Lemelson-MIT InvenTeams',
    doodle: 'robot',
    when: 'project lead · 2026',
    kicker: 'invented RADIX, an autonomous robot against the invasive Brazilian peppertree',
    points: [
      'Provisional patent approved, patent pending, with a $7,500 investment.',
      'Field research with the botany team at FIU and Professor Joe Redwine.',
      'Recognized by NBC Miami.',
    ],
    link: { label: 'see RADIX', href: '/projects#radix' },
  },
  {
    id: 'otis',
    name: 'OTIS Made to Move Communities',
    doodle: 'eye',
    when: 'project lead · 2025',
    kicker: 'built Iris AI to help visually impaired people navigate their environment',
    points: [
      'Global winner with a $35,000 investment.',
      'Placed ahead of the continental winning teams from Japan, China and Turkey.',
    ],
    link: { label: 'see iris AI', href: '/projects#iris' },
  },
];

export const talks = [
  {
    where: 'OTIS Made to Move Communities',
    what: 'Presented Iris AI to the OTIS world executives.',
    href: 'https://www.otis.com/en/us/our-company/our-leadership',
  },
  {
    where: 'Lemelson-MIT',
    what: 'Lecture on the design and purpose of RADIX to an audience of more than 200, including Dr. Michael J. Cima and Dr. Leigh Estabrooks.',
  },
  {
    where: 'MITES',
    what: 'Presented research on stem cells and Planaria worms (Karina Ascunce).',
  },
  {
    where: 'HOSA',
    what: 'Created and presented BINBR (Bacterial Identification and Nanobot Bacteriophage Release) to combat antimicrobial resistance.',
  },
];

export const awardGroups = [
  {
    competition: 'VEX robotics',
    doodle: 'gear',
    items: [
      { name: 'Worlds · Innovate Award', note: 'world' },
      { name: 'Worlds · Judges Award', note: 'world' },
      { name: 'Florida State · Excellence Award', note: 'state' },
    ],
  },
  {
    competition: 'OTIS made to move communities',
    doodle: 'eye',
    items: [{ name: 'World Champion · Iris AI', note: '$35,000' }],
  },
  {
    competition: 'Lemelson-MIT',
    doodle: 'robot',
    items: [{ name: 'Innovate Award winner · RADIX', note: '$7,500' }],
  },
  {
    competition: 'science olympiad',
    doodle: 'flask',
    items: [
      { name: 'Harvard Science Olympiad · top ten', note: 'twice' },
      { name: 'Florida State Science Olympiad · top five', note: 'twice' },
    ],
  },
  {
    competition: 'drones',
    doodle: 'drone',
    items: [{ name: 'Florida Drone State · Innovate Award winner', note: 'state' }],
  },
  {
    competition: 'Samsung solve for tomorrow',
    doodle: 'bulb',
    items: [{ name: 'Semifinalist', note: '$1,000' }],
  },
];

export const skills = [
  {
    title: 'programming',
    body: 'CSS, HTML, JavaScript, Next.js, Swift, C++ and Python.',
  },
  {
    title: 'CAD',
    body: '7 years of CAD in Fusion 360 and Onshape.',
  },
  {
    title: 'making',
    body: 'Materials design and manufacturing, CNC and laser cutting (Makera and OMTech).',
  },
  {
    title: '3D printing',
    body: '6 years of 3D printing with Prusa, Cura and Bambu Studio.',
  },
  {
    title: 'drones',
    body: '2 years of professional drone racing.',
  },
  {
    title: 'security',
    body: 'Certified in CompTIA Cybersecurity IT.',
  },
];

export const education = {
  taken: [
    'AP Biology',
    'AP Chemistry',
    'AP Calculus AB',
    'AP Physics 1',
    'AP U.S. History',
    'AP Psychology',
    'AP Physics C: Mechanics (self-studied)',
    'AICE General Paper',
    'AICE Geography',
    'AICE Marine Science',
    'AICE Marine Science A Level',
    'AICE English Language',
    'AICE International History',
    'AICE Global Perspectives',
    'Dual enrollment',
  ],
  current: [
    'AP Calculus BC',
    'AP Physics 2',
    'AP U.S. Government',
    'AP Statistics',
    'AP Computer Science Principles',
    'Literature 2000',
  ],
};

export const links = [
  {
    group: 'code',
    items: [
      { label: 'github', detail: '@Umer-Eats', href: 'https://github.com/Umer-Eats', doodle: 'code' },
      {
        label: 'iris AI source',
        detail: 'github.com/mariovpereira/Iris',
        href: 'https://github.com/mariovpereira/Iris',
        doodle: 'eye',
      },
    ],
  },
  {
    group: 'websites',
    items: [
      { label: 'korah', detail: 'korah.app', href: 'https://www.korah.app/', doodle: 'paper' },
      {
        label: 'coffee house',
        detail: 'coffee-house.app',
        href: 'https://www.coffee-house.app/',
        doodle: 'cup',
      },
    ],
  },
  {
    group: 'in the news',
    items: [
      {
        label: 'OTIS global final',
        detail: 'youtube',
        href: 'https://www.youtube.com/watch?v=N2019aXD7Yc',
        doodle: 'trophy',
      },
      {
        label: 'RADIX on NBC Miami',
        detail: 'nbcmiami.com',
        href: 'https://www.nbcmiami.com/news/local/education-on-6/mit-recognizes-pembroke-pines-charter-high-schools-inventeam/3746174/',
        doodle: 'robot',
      },
    ],
  },
];
