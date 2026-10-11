import { awardGroups, profile, projects } from './data';

// The public address of the site. Set NEXT_PUBLIC_SITE_URL in Vercel once a
// custom domain is attached; until then Vercel's production URL is used.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000')
).replace(/\/$/, '');

export const siteName = 'Umer Qureshi';

export const siteDescription =
  'Umer Qureshi is a high school student working at the intersection of electrical engineering and neuroscience: project lead of RADIX and Iris AI, developer at Korah, founder of Coffee House and Akoizo, MITES Semester 2026 cohort, and OTIS Made to Move Communities world champion.';

// Short enough for Google to show whole in a search result.
export const metaDescription =
  'Umer Qureshi is a high school engineer and researcher working where electrical engineering meets neuroscience. See his projects, programs and awards.';

export const routes = ['/', '/about', '/mission', '/projects', '/programs', '/awards', '/links'];

// Per-page metadata with a canonical URL and matching social cards.
export function pageMeta({ title, description, path }) {
  const fullTitle = `${title} — Umer Qureshi`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName,
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
  };
}

export const personLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${siteUrl}/#umer-qureshi`,
  name: profile.name,
  givenName: 'Umer',
  familyName: 'Qureshi',
  url: siteUrl,
  image: `${siteUrl}/opengraph-image`,
  email: `mailto:${profile.email}`,
  description: siteDescription,
  jobTitle: 'High school student',
  sameAs: [profile.github],
  knowsAbout: [
    'Electrical engineering',
    'Neuroscience',
    'Robotics',
    'Machine learning',
    'Computer vision',
    'iOS development',
    'Web development',
    'CAD',
    '3D printing',
    'Drone racing',
    'Stem cell biology',
    'Science Olympiad',
  ],
  award: awardGroups.flatMap((g) =>
    g.items.map((a) => `${g.competition} — ${a.name}`.replace(/\s+/g, ' ')),
  ),
  subjectOf: [
    {
      '@type': 'CreativeWork',
      name: 'NBC 6 South Florida coverage of the RADIX InvenTeam',
      url: 'https://www.nbcmiami.com/news/local/education-on-6/mit-recognizes-pembroke-pines-charter-high-schools-inventeam/3746174/',
      publisher: { '@type': 'Organization', name: 'NBC 6 South Florida' },
    },
    {
      '@type': 'CreativeWork',
      name: 'OTIS Made to Move Communities global final',
      url: 'https://www.youtube.com/watch?v=N2019aXD7Yc',
    },
  ],
};

export const websiteLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  url: siteUrl,
  name: siteName,
  description: siteDescription,
  inLanguage: 'en-US',
  about: { '@id': `${siteUrl}/#umer-qureshi` },
  author: { '@id': `${siteUrl}/#umer-qureshi` },
};

export const keywords = [
  'Umer Qureshi',
  'Umer Qureshi portfolio',
  'Umer Qureshi engineer',
  'Umer-Eats',
  ...projects.map((p) => p.name),
  'RADIX robot',
  'Iris AI',
  'Korah',
  'Akoizo',
  'Coffee House study cafe',
  'MITES Semester',
  'Lemelson-MIT InvenTeams',
  'OTIS Made to Move Communities',
  'VEX Robotics Worlds',
  'Science Olympiad',
  'electrical engineering',
  'neuroscience',
];
