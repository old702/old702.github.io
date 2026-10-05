export type Post = {
  number: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  thumbnail: string;
};

export const posts: Post[] = [
  {
    number: '003',
    slug: 'forward-plus-renderer',
    title: 'Designing a Forward+ renderer around MSAA and static GI',
    category: 'Rendering / UE5',
    date: '02 Oct 2026',
    readTime: '12 min read',
    excerpt: 'Clustered lighting, screen-space buffers, shadows and practical trade-offs for a renderer built around MSAA.',
    thumbnail: 'media/blog/forward-plus-cover.svg',
  },
  {
    number: '002',
    slug: 'semantic-mip-filtering',
    title: 'Semantic mip filtering for material pipelines',
    category: 'Texture Processing',
    date: '18 Sep 2026',
    readTime: '9 min read',
    excerpt: 'Why normals, roughness, opacity and tint masks should not share one generic downsampler.',
    thumbnail: 'media/blog/mip-cover.svg',
  },
  {
    number: '001',
    slug: 'tf2-demo-analysis',
    title: 'Reading timing and input behavior from TF2 demos',
    category: 'Tools / Analysis',
    date: '07 Sep 2026',
    readTime: '7 min read',
    excerpt: 'A compact example of demo-analysis notes, timing measurements and visual diagnostics.',
    thumbnail: 'media/blog/tf2-cover.svg',
  },
];
