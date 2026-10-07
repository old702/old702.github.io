export type ProjectLink = {
  label: string;
  href: string;
};

export type DevProject = {
  slug: string;
  title: string;
  group: 'Game Development' | 'Tools & Pipelines' | 'Research & Analysis';
  area: string;
  description: string;
  image: string;
  links: ProjectLink[];
};

export const devProjects: DevProject[] = [
  {
    slug: 'subtransit',
    title: 'Subtransit',
    group: 'Game Development',
    area: 'Environment art / rendering / simulation',
    description: 'An ongoing subway and tram simulation project combining environment production, real-time rendering research, lighting, materials, transit systems and interactive gameplay.',
    image: 'media/projects/subtransit/01.svg',
    links: [
      { label: 'Selected work', href: 'work/subtransit/' },
      { label: 'Forward+ rendering article', href: 'articles/forward-plus-renderer/' },
    ],
  },
  {
    slug: 'texturepacker',
    title: 'TexturePacker',
    group: 'Tools & Pipelines',
    area: 'Texture processing / production tools',
    description: 'A standalone texture-processing application focused on material workflows, channel packing, semantic mip generation, previews, batch processing and practical production tooling.',
    image: 'media/projects/texturepacker/01.svg',
    links: [
      { label: 'Selected work', href: 'work/texturepacker/' },
      { label: 'Semantic mip filtering article', href: 'articles/semantic-mip-filtering/' },
    ],
  },
  {
    slug: 'blender-tools',
    title: 'Blender Tools',
    group: 'Tools & Pipelines',
    area: 'Asset pipeline / content tools',
    description: 'A collection of Blender tools and workflow experiments for asset preparation, export, scene conventions, procedural modeling and production-oriented content processing.',
    image: 'media/projects/blender-tools/01.svg',
    links: [
      { label: 'Selected work', href: 'work/blender-tools/' },
    ],
  },
  {
    slug: 'tf2-tools',
    title: 'TF2 Tools',
    group: 'Research & Analysis',
    area: 'Demo analysis / timing / engine behavior',
    description: 'Tools and experiments for inspecting demo data, command timing, replay behavior and other engine-level details that are difficult to reason about from playback alone.',
    image: 'media/blog/tf2-cover.svg',
    links: [
      { label: 'Demo analysis article', href: 'articles/tf2-demo-analysis/' },
    ],
  },
];