import Link from 'next/link';
import Doodle, { Arrow } from '@/components/Doodle';
import PageIntro from '@/components/PageIntro';
import Reveal from '@/components/Reveal';
import { programs, talks } from '@/lib/data';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Programs & Talks',
  path: '/programs',
  description:
    'Academic programs and lectures by Umer Qureshi: MITES Semester at MIT, Lemelson-MIT InvenTeams, OTIS Made to Move Communities and HOSA.',
});

export default function Programs() {
  return (
    <>
      <PageIntro
        title="programs"
        lede="where Umer Qureshi has studied, researched and presented"
        doodle="worm"
      />

      <section className="section wrap" style={{ paddingTop: 24 }}>
        <div className="entries">
          {programs.map((p) => (
            <Reveal as="article" className="entry" id={p.id} key={p.id}>
              <div className="entry-art">
                <Doodle name={p.doodle} size={200} />
              </div>
              <div>
                <span className="eyebrow">{p.when}</span>
                <h2 className="hand entry-name">{p.name}</h2>
                <p className="entry-summary">{p.kicker}</p>
                <ul className="entry-points">
                  {p.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                {p.link ? (
                  <div className="entry-links">
                    <Link href={p.link.href} className="text-link">
                      {p.link.label} <Arrow />
                    </Link>
                  </div>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section-tint" id="talks">
        <div className="wrap">
          <Reveal className="section-head">
            <div>
              <h2 className="hand section-title">talks &amp; lectures</h2>
              <p className="section-sub">sharing the work, out loud</p>
            </div>
            <Doodle name="bubble" size={96} className="boil" />
          </Reveal>
          <ol className="talks">
            {talks.map((t, i) => (
              <Reveal as="li" className="talk" key={t.where} delay={i * 70}>
                <span className="talk-num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="hand talk-where">{t.where}</h3>
                <p className="talk-what">
                  {t.what}
                  {t.href ? (
                    <>
                      {' '}
                      <a
                        href={t.href}
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: 'underline wavy 1px', textUnderlineOffset: 6 }}
                      >
                        OTIS leadership
                      </a>
                    </>
                  ) : null}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
