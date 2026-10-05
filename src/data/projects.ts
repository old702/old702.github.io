export type GalleryItem = {
  src: string;
  title: string;
  subtitle: string;
  size?: 'large' | 'tall' | 'medium' | 'wide' | 'full';
};

export type Project = {
  slug: string;
  title: string;
  kicker: string;
  meta: string;
  categories: string[];
  size: 'featured' | 'medium' | 'small' | 'wide';
  cover: string;
  destination: 'gallery' | 'article';
  article?: string;
  gallery?: GalleryItem[];
};

export const projects: Project[] = [
  {
    slug: 'subtransit',
    title: 'Subtransit',
    kicker: 'Game / Engine Project',
    meta: 'Unreal Engine · C++ · Rendering · Simulation',
    categories: ['game', 'rendering'],
    size: 'featured',
    cover: 'media/projects/subtransit/cover.svg',
    destination: 'gallery',
    gallery: [
      { src: 'media/projects/subtransit/01.svg', title: 'Station Hall', subtitle: 'Environment / Lighting', size: 'large' },
      { src: 'media/projects/subtransit/02.svg', title: 'Lighting Study', subtitle: 'Rendering / Vertical Study', size: 'tall' },
      { src: 'media/projects/subtransit/03.svg', title: 'Model Study', subtitle: 'Asset / Model', size: 'medium' },
      { src: 'media/projects/subtransit/04.svg', title: 'Material Study', subtitle: 'Surface / Texture', size: 'medium' },
      { src: 'media/projects/subtransit/05.svg', title: 'Platform Sequence', subtitle: 'Environment / Composition', size: 'wide' },
      { src: 'media/projects/subtransit/06.svg', title: 'Final Presentation', subtitle: 'Project / Hero Shot', size: 'full' },
    ],
  },
  {
    slug: 'texturepacker',
    title: 'TexturePacker',
    kicker: 'Developer Tool',
    meta: 'C++ · Dear ImGui · D3D11 · DDS',
    categories: ['tool'],
    size: 'medium',
    cover: 'media/projects/texturepacker/cover.svg',
    destination: 'gallery',
    gallery: [
      { src: 'media/projects/texturepacker/01.svg', title: 'Main UI', subtitle: 'Application / Workspace', size: 'large' },
      { src: 'media/projects/texturepacker/02.svg', title: 'Material Library', subtitle: 'UI / Assets', size: 'medium' },
      { src: 'media/projects/texturepacker/03.svg', title: 'Mip Chain', subtitle: 'Texture Processing', size: 'medium' },
      { src: 'media/projects/texturepacker/04.svg', title: 'Pipeline Graph', subtitle: 'Runtime / Tooling', size: 'wide' },
    ],
  },
  {
    slug: 'blender-tools',
    title: 'Blender Tools',
    kicker: 'DCC Tooling',
    meta: 'Python · Export Pipeline · Procedural Utilities',
    categories: ['tool'],
    size: 'medium',
    cover: 'media/projects/blender-tools/cover.svg',
    destination: 'gallery',
    gallery: [
      { src: 'media/projects/blender-tools/01.svg', title: 'Exporter', subtitle: 'Pipeline Utility', size: 'large' },
      { src: 'media/projects/blender-tools/02.svg', title: 'Asset Tool', subtitle: 'Blender / Production', size: 'medium' },
      { src: 'media/projects/blender-tools/03.svg', title: 'Procedural Study', subtitle: 'Geometry / Tooling', size: 'wide' },
    ],
  },
  {
    slug: 'tf2-tools',
    title: 'TF2 Tools',
    kicker: 'Analysis / Research',
    meta: 'C++ · Demo Analysis · Timing',
    categories: ['tool', 'research'],
    size: 'small',
    cover: 'media/projects/tf2-tools/cover.svg',
    destination: 'article',
    article: 'tf2-demo-analysis',
  },
  {
    slug: 'realtime-graphics',
    title: 'Realtime Graphics',
    kicker: 'Rendering Research',
    meta: 'Forward+ · MSAA · GI · SSR · GTAO',
    categories: ['rendering', 'research'],
    size: 'wide',
    cover: 'media/projects/realtime-graphics/cover.svg',
    destination: 'article',
    article: 'forward-plus-renderer',
  },
  {
    slug: 'pipeline-tools',
    title: 'Pipeline Tools',
    kicker: 'Production Utilities',
    meta: 'C++ · Python · Unreal Engine',
    categories: ['tool'],
    size: 'small',
    cover: 'media/projects/pipeline-tools/cover.svg',
    destination: 'gallery',
    gallery: [
      { src: 'media/projects/pipeline-tools/01.svg', title: 'Tooling Overview', subtitle: 'Production / Utility', size: 'large' },
      { src: 'media/projects/pipeline-tools/02.svg', title: 'Debug Interface', subtitle: 'Pipeline / UI', size: 'medium' },
      { src: 'media/projects/pipeline-tools/03.svg', title: 'Asset Flow', subtitle: 'Production / Workflow', size: 'wide' },
    ],
  },
];
