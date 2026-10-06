export const site = {
  name: 'Aleksandr Ivanov',
  role: 'Game Developer / Artist',
  description: 'Game development, technical art, real-time rendering, tools and production experiments.',
  email: null as string | null,
  github: 'https://github.com/old702',
  avatar: 'https://avatars.githubusercontent.com/u/9538804?v=4',
  artstation: null as string | null,
};

export function withBase(path = '') {
  const base = import.meta.env.BASE_URL;
  return `${base}${path.startsWith('/') ? path.slice(1) : path}`;
}
