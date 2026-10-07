export type GalleryLayout = 'full' | 'half' | 'third';

export type GalleryItem = {
  src: string;
  title: string;
  layout?: GalleryLayout;
};

export type Project = {
  slug: string;
  title: string;
  meta: string;
  description?: string;
  categories: string[];
  tileCover: string;
  destination: 'gallery' | 'article';
  article?: string;
  gallery?: GalleryItem[];
};

export const projects: Project[] = [
  {
    slug: 'subtransit',
    title: 'Subtransit',
    meta: 'Environment Art',
    description: 'An ongoing subway and tram simulation project with a focus on transit environments, atmosphere, and real-time lighting.',
    categories: ['environment-art'],
    tileCover: 'media/projects/subtransit/tile-cover.svg',
    destination: 'gallery',
    gallery: [
      { src: 'media/projects/subtransit/01.svg', title: 'Station Hall', layout: 'full' },
      { src: 'media/projects/subtransit/02.svg', title: 'Lighting Study', layout: 'half' },
      { src: 'media/projects/subtransit/03.svg', title: 'Model Study', layout: 'half' },
      { src: 'media/projects/subtransit/04.svg', title: 'Material Study', layout: 'full' },
      { src: 'media/projects/subtransit/05.svg', title: 'Platform Sequence', layout: 'half' },
      { src: 'media/projects/subtransit/06.svg', title: 'Final Presentation', layout: 'half' },
    ],
  },
  {
    slug: 'texturepacker',
    title: 'TexturePacker',
    meta: 'Tools',
    description: 'A standalone texture processing application for material workflows, previews, channel packing, and mipmap generation.',
    categories: ['tools'],
    tileCover: 'media/projects/texturepacker/tile-cover.svg',
    destination: 'gallery',
    gallery: [
      { src: 'media/projects/texturepacker/01.svg', title: 'Main UI', layout: 'full' },
      { src: 'media/projects/texturepacker/02.svg', title: 'Material Library', layout: 'half' },
      { src: 'media/projects/texturepacker/03.svg', title: 'Mip Chain', layout: 'half' },
      { src: 'media/projects/texturepacker/04.svg', title: 'Pipeline Graph', layout: 'full' },
    ],
  },
  {
    slug: 'blender-tools',
    title: 'Blender Tools',
    meta: 'Tools',
    description: 'A collection of Blender utilities and workflow experiments for asset preparation, export, and procedural modeling.',
    categories: ['tools'],
    tileCover: 'media/projects/blender-tools/tile-cover.svg',
    destination: 'gallery',
    gallery: [
      { src: 'media/projects/blender-tools/01.svg', title: 'Exporter', layout: 'full' },
      { src: 'media/projects/blender-tools/02.svg', title: 'Asset Tool', layout: 'half' },
      { src: 'media/projects/blender-tools/03.svg', title: 'Procedural Study', layout: 'half' },
    ],
  },
  {
    slug: 'metalhotspot-materials',
    title: 'MetalHotspot Materials',
    meta: 'Environment Art',
    description: 'A material-focused gallery for metal hotspot studies, surface response, wear, and material presentation.',
    categories: ['environment-art'],
    tileCover: 'media/projects/metalhotspot-materials/tile-cover.svg',
    destination: 'gallery',
    gallery: [
      { src: 'media/projects/metalhotspot-materials/01.svg', title: 'Material Overview', layout: 'full' },
      { src: 'media/projects/metalhotspot-materials/02.svg', title: 'Surface Response', layout: 'half' },
      { src: 'media/projects/metalhotspot-materials/03.svg', title: 'Wear Study', layout: 'half' },
    ],
  },
  {
    slug: 'tf2-fan-art',
    title: 'Team Fortress 2 Fan Art',
    meta: 'Fan Art',
    description: 'A gallery for Team Fortress 2 fan-made models, renders, props, and presentation studies.',
    categories: ['fan-art'],
    tileCover: 'media/projects/tf2-fan-art/tile-cover.svg',
    destination: 'gallery',
    gallery: [
      { src: 'media/projects/tf2-fan-art/01.svg', title: 'Model Render', layout: 'third' },
      { src: 'media/projects/tf2-fan-art/02.svg', title: 'Prop Study', layout: 'third' },
      { src: 'media/projects/tf2-fan-art/03.svg', title: 'Presentation Render', layout: 'third' },
    ],
  },
  {
    slug: 'roughness-specular-aa',
    title: 'Roughness / Specular AA',
    meta: 'Research',
    description: 'Visual research into roughness filtering, specular aliasing, highlight stability, and practical anti-aliasing behavior.',
    categories: ['research'],
    tileCover: 'media/projects/roughness-specular-aa/tile-cover.svg',
    destination: 'gallery',
    gallery: [
      { src: 'media/projects/roughness-specular-aa/01.svg', title: 'Specular Response', layout: 'full' },
      { src: 'media/projects/roughness-specular-aa/02.svg', title: 'Roughness Comparison', layout: 'half' },
      { src: 'media/projects/roughness-specular-aa/03.svg', title: 'Highlight Stability', layout: 'half' },
    ],
  },
  {
    slug: 'subtransit-agx-tonemapper',
    title: 'AgX Tonemapper Tuning',
    meta: 'Research',
    description: 'A visual tuning gallery for AgX tone mapping in Subtransit, focused on exposure, highlight roll-off, contrast, and scene response.',
    categories: ['research'],
    tileCover: 'media/projects/subtransit-agx-tonemapper/tile-cover.svg',
    destination: 'gallery',
    gallery: [
      { src: 'media/projects/subtransit-agx-tonemapper/01.svg', title: 'Exposure Study', layout: 'full' },
      { src: 'media/projects/subtransit-agx-tonemapper/02.svg', title: 'Highlight Roll-off', layout: 'half' },
      { src: 'media/projects/subtransit-agx-tonemapper/03.svg', title: 'Final Tuning', layout: 'half' },
    ],
  },
  {
    slug: 'tf2-tools',
    title: 'TF2 Tools',
    meta: 'Research',
    categories: ['research'],
    tileCover: 'media/projects/tf2-tools/tile-cover.svg',
    destination: 'article',
    article: 'tf2-demo-analysis',
  },
  {
    slug: 'realtime-graphics',
    title: 'Realtime Graphics',
    meta: 'Research',
    categories: ['research'],
    tileCover: 'media/projects/realtime-graphics/tile-cover.svg',
    destination: 'article',
    article: 'forward-plus-renderer',
  },
  {
    slug: 'pipeline-tools',
    title: 'Pipeline Tools',
    meta: 'Tools',
    description: 'A selection of small production utilities and experiments focused on asset management and content workflows.',
    categories: ['tools'],
    tileCover: 'media/projects/pipeline-tools/tile-cover.svg',
    destination: 'gallery',
    gallery: [
      { src: 'media/projects/pipeline-tools/01.svg', title: 'Tooling Overview', layout: 'full' },
      { src: 'media/projects/pipeline-tools/02.svg', title: 'Debug Interface', layout: 'half' },
      { src: 'media/projects/pipeline-tools/03.svg', title: 'Asset Flow', layout: 'half' },
    ],
  },
];
