import Doodle, { Arrow } from '@/components/Doodle';
import JsonLd from '@/components/JsonLd';
import PageIntro from '@/components/PageIntro';
import Reveal from '@/components/Reveal';
import { projects } from '@/lib/data';
import { pageMeta, siteUrl } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Projects',
  path: '/projects',
  description:
    'Projects by Umer Qureshi: Korah, Iris AI, RADIX, Coffee House, Akoizo and BINBR. Robots, apps and free study tools.',
});

const projectsLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Projects by Umer Qureshi',
  itemListElement: projects.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'CreativeWork',
      name: p.name,
      description: p.summary,
      url: `${siteUrl}/projects#${p.id}`,
      contributor: { '@type': 'Person', name: 'Umer Qureshi' },
      ...(p.links.length ? { sameAs: p.links.map((l) => l.href) } : {}),
    },
  })),
};

export default function Projects() {
  return (
    <>
      <JsonLd data={projectsLd} />
      <PageIntro
        title="projects"
        lede="robots, apps and study tools by Umer Qureshi, built to be used"
        doodle="robot"
      />

      <section className="section wrap" style={{ paddingTop: 24 }}>
        <div className="entries">
          {projects.map((p) => (
            <Reveal as="article" className="entry" id={p.id} key={p.id}>
              <div className="entry-art">
                <Doodle name={p.doodle} size={200} />
              </div>
              <div>
                <span className="eyebrow">
                  {p.kicker} · {p.role}
                </span>
                <h2 className="hand entry-name">{p.name}</h2>
                <p className="entry-summary">{p.summary}</p>
                <ul className="entry-points">
                  {p.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                <ul className="chips" aria-label="Built with">
                  {p.tags.map((t) => (
                    <li className="chip" key={t}>
                      {t}
                    </li>
                  ))}
                </ul>
                {p.team ? (
                  <p className="entry-team">
                    <span className="eyebrow">the team</span>
                    Created together by <strong>{p.team.lead}</strong> (team lead),{' '}
                    {p.team.members.slice(0, -1).join(', ')} and {p.team.members.at(-1)}.
                  </p>
                ) : null}
                {p.links.length ? (
                  <div className="entry-links">
                    {p.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        className="text-link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {l.label} <Arrow />
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
