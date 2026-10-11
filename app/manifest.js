import { siteDescription, siteName } from '@/lib/seo';

export default function manifest() {
  return {
    name: siteName,
    short_name: 'Umer',
    description: siteDescription,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    icons: [{ src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' }],
  };
}
