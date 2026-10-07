export type FeaturedProject = {
  slug: string;
  title: string;
  meta: string;
  description: string;
  image?: string;
  links?: { label: string; href: string }[];
};

export const featuredProjects: FeaturedProject[] = [
  {
    slug: 'subtransit',
    title: 'Subtransit',
    meta: 'Game development / environment art / rendering',
    description: 'An ongoing subway and tram simulation project focused on transit environments, atmosphere, rendering research, materials and interactive systems.',
    image: 'media/projects/subtransit/01.svg',
    links: [
      { label: 'Selected work', href: 'work/subtransit/' },
      { label: 'Rendering article', href: 'articles/forward-plus-renderer/' },
    ],
  },
  {
    slug: 'metrostroi',
    title: 'Metrostroi Subway Simulator',
    meta: 'Source 1 / Garry\'s Mod / volunteer project',
    description: 'An early long-running modding project and entry point into game development, created as part of the Metrostroi Subway Simulator community for Garry\'s Mod.',
  },
];