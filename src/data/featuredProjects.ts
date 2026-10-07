export type FeaturedProject = {
  slug: string;
  title: string;
  meta: string;
  description: string;
  image?: string;
  primaryHref?: string;
  links?: { label: string; href: string }[];
};

export const featuredProjects: FeaturedProject[] = [
  {
    slug: 'subtransit',
    title: 'Subtransit',
    meta: 'Game development / environment art / rendering',
    description: 'Subway and tram simulation project focused on transit environments, rendering, materials and interactive systems.',
    image: 'media/projects/subtransit/01.svg',
    primaryHref: 'work/subtransit/',
    links: [
      { label: 'Selected work', href: 'work/subtransit/' },
      { label: 'Rendering article', href: 'articles/forward-plus-renderer/' },
    ],
  },
  {
    slug: 'metrostroi',
    title: 'Metrostroi Subway Simulator',
    meta: 'Source 1 / Garry\'s Mod',
    description: 'Early long-running modding project and entry point into game development.',
  },
];