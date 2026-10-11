import Link from 'next/link';
import Doodle from '@/components/Doodle';
import PageIntro from '@/components/PageIntro';
import Reveal from '@/components/Reveal';
import { education, skills } from '@/lib/data';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'About',
  path: '/about',
  description:
    'About Umer Qureshi of Pembroke Pines, Florida: a student combining electrical engineering and neuroscience. His skills, thinking and coursework.',
});

export default function About() {
  return (
    <>
      <PageIntro
        title="who is umer?"
        lede="a high school student adjoining the intersections between electrical engineering and neuroscience"
        doodle="neuron"
      />

      <section className="section wrap">
        <div className="two-col">
          <Reveal>
            <span className="eyebrow">the short version</span>
            <h2 className="hand split-title">builder, researcher, team lead</h2>
          </Reveal>
          <Reveal className="prose" delay={120}>
            <p>
              Umer Qureshi is a high school student in Pembroke Pines, Florida. He works where{' '}
              <strong>electrical engineering</strong> and <strong>neuroscience</strong> overlap,
              and he tends to learn a subject by building something real with it.
            </p>
            <p>
              That has meant leading the team behind <strong>RADIX</strong>, an autonomous robot
              that removes invasive Brazilian peppertree; leading <strong>Iris AI</strong>, an iOS
              app that helps visually impaired people navigate; researching stem cell regeneration
              in Planaria worms at MIT&rsquo;s <strong>MITES Semester</strong>; and founding study
              platforms that hundreds of his classmates use.
            </p>
            <div className="btn-row">
              <Link href="/projects" className="btn btn-solid">
                see the projects
              </Link>
              <Link href="/mission" className="btn">
                the mission
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-tint">
        <div className="wrap two-col">
          <Reveal>
            <Doodle name="bulb" size={130} className="boil" />
            <h2 className="hand section-title" style={{ marginTop: 20 }}>
              how i think
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <blockquote style={{ margin: 0 }}>
              <p className="hand pull">
                &quot;I am very task-focused, but that doesn&apos;t mean I ignore group
                dynamics.&quot;
              </p>
              <div className="prose" style={{ marginTop: 28 }}>
                <p>
                  I am extremely group-oriented only when team members share similar work ethics
                  or have different skills. I also stick out in the environment because I usually
                  assume the leader; I take charge first when acceptable.
                </p>
                <p>
                  Something that I have a hard time doing is privatizing or making a profit off of
                  my materials. I am very free and education-access-based.
                </p>
              </div>
              <cite className="pull-source" style={{ fontStyle: 'normal' }}>
                umer, in his own words
              </cite>
            </blockquote>
          </Reveal>
        </div>
      </section>

      <section className="section wrap">
        <Reveal className="section-head">
          <div>
            <h2 className="hand section-title">methods &amp; skills</h2>
            <p className="section-sub">the toolbox, from code to CNC</p>
          </div>
        </Reveal>
        <div className="cards">
          {skills.map((s, i) => (
            <Reveal className="card" key={s.title} delay={(i % 3) * 90}>
              <span className="card-num">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="hand card-title">{s.title}</h3>
              <p className="card-body">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section-tint">
        <div className="wrap">
          <Reveal className="section-head">
            <div>
              <h2 className="hand section-title">education</h2>
              <p className="section-sub">coursework so far</p>
            </div>
          </Reveal>
          <div className="courses">
            <Reveal>
              <h3 className="hand">taking now</h3>
              <ul className="chips">
                {education.current.map((c) => (
                  <li className="chip" key={c}>
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={120}>
              <h3 className="hand">already taken</h3>
              <ul className="chips">
                {education.taken.map((c) => (
                  <li className="chip" key={c}>
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
