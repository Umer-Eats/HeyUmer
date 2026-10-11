import { routes, siteUrl } from '@/lib/seo';

export default function sitemap() {
  const lastModified = new Date();
  return routes.map((path) => ({
    url: `${siteUrl}${path === '/' ? '' : path}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: path === '/' ? 1 : path === '/awards' || path === '/projects' ? 0.9 : 0.8,
  }));
}
