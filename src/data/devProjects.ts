export type DevProject = {
  title: string;
  group: 'Game Development' | 'Tools & Pipelines' | 'Research & Analysis';
  area: string;
  description: string;
  image: string;
  href: string;
  linkLabel: string;
};

export const devProjects: DevProject[] = [
  {
    title: 'Subtransit',
    group: 'Game Development',
    area: 'Environment art / rendering / simulation',
    description: 'An ongoing subway and tram simulation project combining environment production, real-time rendering research, lighting, materials, transit systems and interactive gameplay.',
    image: 'media/projects/subtransit/tile-cover.svg',
    href: 'work/subtransit/',
    linkLabel: 'View selected work',
  },
  {
    title: 'TexturePacker',
    group: 'Tools & Pipelines',
    area: 'Texture processing / production tools',
    description: 'A standalone texture-processing application focused on material workflows, channel packing, semantic mip generation, previews, batch processing and practical production tooling.',
    image: 'media/projects/texturepacker/tile-cover.svg',
    href: 'work/texturepacker/',
    linkLabel: 'View selected work',
  },
  {
    title: 'Blender Tools',
    group: 'Tools & Pipelines',
    area: 'Asset pipeline / content tools',
    description: 'A collection of Blender tools and workflow experiments for asset preparation, export, scene conventions, procedural modeling and production-oriented content processing.',
    image: 'media/projects/blender-tools/tile-cover.svg',
    href: 'work/blender-tools/',
    linkLabel: 'View selected work',
  },
  {
    title: 'TF2 Tools',
    group: 'Research & Analysis',
    area: 'Demo analysis / timing / engine behavior',
    description: 'Tools and experiments for inspecting demo data, command timing, replay behavior and other engine-level details that are difficult to reason about from playback alone.',
    image: 'media/projects/tf2-tools/tile-cover.svg',
    href: 'articles/tf2-demo-analysis/',
    linkLabel: 'Read related article',
  },
];