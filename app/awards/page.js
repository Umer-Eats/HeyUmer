import Doodle from '@/components/Doodle';
import PageIntro from '@/components/PageIntro';
import Reveal from '@/components/Reveal';
import { awardGroups } from '@/lib/data';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Awards & Competitions Won',
  path: '/awards',
  description:
    'Umer Qureshi awards: OTIS Made to Move Communities world champion, VEX Robotics Worlds, Lemelson-MIT, Science Olympiad and Samsung Solve for Tomorrow.',
});

const tally = [
  { value: '$35,000', label: 'OTIS Made to Move Communities, world champion investment' },
  { value: '$7,500', label: 'Lemelson-MIT Innovate Award' },
  { value: '$1,000', label: 'Samsung Solve for Tomorrow, semifinalist' },
];

export default function Awards() {
  return (
    <>
      <PageIntro
        title="awards"
        lede="the awards Umer Qureshi of Pembroke Pines, Florida has won, by competition"
        doodle="trophy"
      />

      <section className="section wrap" style={{ paddingTop: 24 }}>
        <div className="award-groups">
          {awardGroups.map((g) => (
            <Reveal as="article" className="award-group" key={g.competition}>
              <Doodle name={g.doodle} size={96} />
              <div>
                <h2 className="hand award-group-title">{g.competition}</h2>
                <ul className="menu">
                  {g.items.map((a) => (
                    <li className="menu-row" key={a.name}>
                      <span className="menu-name">{a.name}</span>
                      <span className="menu-dots" aria-hidden="true" />
                      <span className="hand menu-note">{a.note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section-tint">
        <div className="wrap">
          <Reveal className="section-head">
            <div>
              <h2 className="hand section-title">invested in the work</h2>
              <p className="section-sub">funding awarded to Umer&rsquo;s teams and projects</p>
            </div>
          </Reveal>
          <Reveal as="dl" className="tally">
            {tally.map((t) => (
              <div className="stat" key={t.value}>
                <dt className="hand stat-value">{t.value}</dt>
                <dd className="stat-label">{t.label}</dd>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
