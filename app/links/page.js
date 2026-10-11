import Doodle, { Arrow } from '@/components/Doodle';
import PageIntro from '@/components/PageIntro';
import Reveal from '@/components/Reveal';
import { links, profile } from '@/lib/data';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Links & Contact',
  path: '/links',
  description:
    'Find Umer Qureshi online: GitHub (Umer-Eats), the websites he has built (Korah, Coffee House), press coverage and email.',
});

export default function Links() {
  return (
    <>
      <PageIntro
        title="more information here"
        lede="Umer Qureshi's GitHub, the websites he has built, and where his work has been covered"
        doodle="code"
      />

      <section className="section wrap" style={{ paddingTop: 24 }}>
        <div className="link-groups">
          {links.map((g) => (
            <Reveal key={g.group}>
              <h2 className="hand link-group-title">{g.group}</h2>
              <ul className="link-list">
                {g.items.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="link-card" target="_blank" rel="noreferrer me">
                      <Doodle name={l.doodle} size={56} />
                      <span style={{ minWidth: 0 }}>
                        <span className="hand link-label">{l.label}</span>
                        <span className="link-detail">{l.detail}</span>
                      </span>
                      <Arrow />
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section-tint" id="contact">
        <Reveal className="wrap hello">
          <Doodle name="mail" size={110} className="boil" />
          <h2 className="hand hello-title">say hello</h2>
          <a className="hello-mail" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </Reveal>
      </section>
    </>
  );
}
