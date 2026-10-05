export const site = {
  name: 'Aleksandr Ivanov',
  role: 'Game Developer / Artist',
  description: 'Game development, technical art, real-time rendering, tools and production experiments.',
  email: 'your@email.com',
  github: 'https://github.com/old702',
  artstation: 'https://www.artstation.com/YOUR_USERNAME',
};

export function withBase(path = '') {
  const base = import.meta.env.BASE_URL;
  return `${base}${path.startsWith('/') ? path.slice(1) : path}`;
}
