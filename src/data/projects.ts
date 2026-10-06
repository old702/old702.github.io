export type GalleryItem = {
  src: string;
  title: string;
};

export type Project = {
  slug: string;
  title: string;
  meta: string;
  categories: string[];
  cover: string;
  destination: 'gallery' | 'article';
  article?: string;
  gallery?: GalleryItem[];
};

export const projects: Project[] = [
  {
    slug: 'subtransit',
    title: 'Subtransit',
    meta: 'Unreal Engine · C++ · Rendering · Simulation',
    categories: ['game', 'rendering'],
    cover: 'media/projects/subtransit/cover.svg',
    destination: 'gallery',
    gallery: [
      { src: 'media/projects/subtransit/01.svg', title: 'Station Hall' },
      { src: 'media/projects/subtransit/02.svg', title: 'Lighting Study' },
      { src: 'media/projects/subtransit/03.svg', title: 'Model Study' },
      { src: 'media/projects/subtransit/04.svg', title: 'Material Study' },
      { src: 'media/projects/subtransit/05.svg', title: 'Platform Sequence' },
      { src: 'media/projects/subtransit/06.svg', title: 'Final Presentation' },
    ],
  },
  {
    slug: 'texturepacker',
    title: 'TexturePacker',
    meta: 'C++ · Dear ImGui · D3D11 · DDS',
    categories: ['tool'],
    cover: 'media/projects/texturepacker/cover.svg',
    destination: 'gallery',
    gallery: [
      { src: 'media/projects/texturepacker/01.svg', title: 'Main UI' },
      { src: 'media/projects/texturepacker/02.svg', title: 'Material Library' },
      { src: 'media/projects/texturepacker/03.svg', title: 'Mip Chain' },
      { src: 'media/projects/texturepacker/04.svg', title: 'Pipeline Graph' },
    ],
  },
  {
    slug: 'blender-tools',
    title: 'Blender Tools',
    meta: 'Python · Export Pipeline · Procedural Utilities',
    categories: ['tool'],
    cover: 'media/projects/blender-tools/cover.svg',
    destination: 'gallery',
    gallery: [
      { src: 'media/projects/blender-tools/01.svg', title: 'Exporter' },
      { src: 'media/projects/blender-tools/02.svg', title: 'Asset Tool' },
      { src: 'media/projects/blender-tools/03.svg', title: 'Procedural Study' },
    ],
  },
  {
    slug: 'tf2-tools',
    title: 'TF2 Tools',
    meta: 'C++ · Demo Analysis · Timing',
    categories: ['tool', 'research'],
    cover: 'media/projects/tf2-tools/cover.svg',
    destination: 'article',
    article: 'tf2-demo-analysis',
  },
  {
    slug: 'realtime-graphics',
    title: 'Realtime Graphics',
    meta: 'Forward+ · MSAA · GI · SSR · GTAO',
    categories: ['rendering', 'research'],
    cover: 'media/projects/realtime-graphics/cover.svg',
    destination: 'article',
    article: 'forward-plus-renderer',
  },
  {
    slug: 'pipeline-tools',
    title: 'Pipeline Tools',
    meta: 'C++ · Python · Unreal Engine',
    categories: ['tool'],
    cover: 'media/projects/pipeline-tools/cover.svg',
    destination: 'gallery',
    gallery: [
      { src: 'media/projects/pipeline-tools/01.svg', title: 'Tooling Overview' },
      { src: 'media/projects/pipeline-tools/02.svg', title: 'Debug Interface' },
      { src: 'media/projects/pipeline-tools/03.svg', title: 'Asset Flow' },
    ],
  },
];
