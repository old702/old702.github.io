export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string;
  details?: string[];
};

export const careerSummary = {
  title: '3D Environment Artist / Texture Artist',
  body: '3D artist with 8+ years of hands-on game-development experience across environment art, texturing, technical problem-solving, real-time rendering optimization for mobile, PC and VR, and production coordination within small teams.',
};

export const professionalExperience: ExperienceEntry[] = [
  {
    company: 'Wagon Software',
    role: 'Environment Artist, Texture Artist, Level Designer',
    period: 'Nov 2019 - Apr 2026 · 6 yrs 6 mos',
    location: 'Saint Petersburg Metropolitan Area',
    description: 'Environment and texture production with a strong technical-art component: modular asset systems, material workflows, shaders, level production and performance-oriented real-time content.',
    details: [
      'Environment art, texturing and level production',
      'Modular assets, material systems and production-oriented visual workflows',
      'Shaders, rendering optimization and technical problem-solving',
      'Planning and coordination within a small production team',
    ],
  },
  {
    company: 'TRACE studio',
    role: 'Freelance 3D Artist',
    period: 'Mar 2019 - May 2019 · 3 mos',
    description: 'Short-term freelance 3D production work.',
  },
  {
    company: 'FoxWorks Aerospace s.r.o.',
    role: '3D Artist, Photogrammetry Artist',
    period: 'Apr 2017 - May 2019 · 2 yrs 2 mos',
    location: 'Czechia',
    description: '3D asset production with photogrammetry-based workflows and environment-oriented content creation.',
  },
  {
    company: 'OBLAKO Group',
    role: '3D Generalist',
    period: 'Jan 2016 - Jan 2017 · 1 yr 1 mo',
    location: 'Moscow',
    description: '3D and level-production work for industrial simulators.',
    details: [
      'Level design for production industrial simulators',
      'High-poly and low-poly modeling',
      'Motion design in Adobe After Effects and Premiere',
    ],
  },
];