type Pages = {
  slug: string;
  priority: number;
  changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
};

export const pages: Pages[] = [
  { slug: 'dashboard', priority: 0.5, changefreq: 'daily' },
  { slug: 'sign-in', priority: 0.5, changefreq: 'daily' },
  { slug: 'cookies', priority: 0.5, changefreq: 'daily' },
  { slug: 'privacy', priority: 0.5, changefreq: 'daily' },
  { slug: 'terms', priority: 0.5, changefreq: 'daily' }
];
