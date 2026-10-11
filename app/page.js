import Link from 'next/link';
import Doodle, { Arrow } from '@/components/Doodle';
import Logo from '@/components/Logo';
import Reveal from '@/components/Reveal';
import { awardGroups, programs, projects, stats } from '@/lib/data';

const headlineAwards = [
  { name: 'OTIS Made to Move Communities · World Champion', note: '$35,000' },
  { name: 'Lemelson-MIT · Innovate Award winner', note: '$7,500' },
  { name: 'VEX Robotics Worlds · Innovate Award', note: 'world' },
  { name: 'Harvard Science Olympiad · top ten', note: 'twice' },
];

export default function Home() {
  const awardCount = awardGroups.reduce((n, g) => n + g.items.length, 0);

  return (
    <>
      <section className="hero wrap">
        <Logo size={240} className="hero-mark" />
        <div className="hero-words">
          <h1>
            <span className="hero-name">umer qureshi</span>
            <span className="hand hero-title">
              <span>inquiry &amp; impact,</span>
              <span>for everyone</span>
            </span>
          </h1>
          <span className="hero-scroll">engineer · researcher · builder</span>
        </div>
        <Doodle name="neuron" size={210} className="hero-doodle bob boil" />
      </section>

      <section className="section wrap">
        <div className="intro">
          <Reveal>
            <h2 className="hand section-title">who is umer?</h2>
            <p className="section-sub">
              a high school student building where electrical engineering meets neuroscience
            </p>
          </Reveal>
          <Reveal className="intro-body" delay={120}>
            <p>
              Umer Qureshi builds robots, apps and study tools, with free access as the default.
              His work runs from an autonomous robot that clears invasive trees, to an iOS app
              that helps visually impaired people find their way, to a free education tool that
              has reached more than 100,000 people.
            </p>
            <p>
              Along the way: MIT&rsquo;s MITES Semester, a Lemelson-MIT InvenTeam, a global OTIS
              win and two VEX Robotics Worlds awards.
            </p>
            <div className="btn-row">
              <Link href="/about" className="btn btn-solid">
                about umer
              </Link>
              <Link href="/mission" className="btn">
                the mission
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal as="dl" className="stats">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <dt className="hand stat-value">{s.value}</dt>
              <dd className="stat-label">{s.label}</dd>
            </div>
          ))}
        </Reveal>
      </section>

      <section className="section section-tint">
        <div className="wrap">
          <Reveal className="section-head">
            <div>
              <h2 className="hand section-title">freshly made</h2>
              <p className="section-sub">projects built to be used, not shelved</p>
            </div>
            <Link href="/projects" className="text-link">
              all projects <Arrow />
            </Link>
          </Reveal>

          <div className="tiles">
            {projects.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 90}>
                <Link href={`/projects#${p.id}`} className="tile">
                  <span className="tile-art">
                    <Doodle name={p.doodle} />
                  </span>
                  <span className="hand tile-name">{p.name}</span>
                  <span className="tile-kicker">{p.kicker}</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section wrap">
        <Reveal className="band">
          <Doodle name="people" size={240} className="band-doodle boil" />
          <div>
            <span className="eyebrow">the mission</span>
            <p className="hand band-quote">
              good tools should reach everyone, whatever their circumstances.
            </p>
            <p className="band-body">
              Umer builds for the people who are usually left out: students who can&rsquo;t pay
              for prep, people who can&rsquo;t see the path in front of them, classmates who just
              need somewhere to study.
            </p>
            <div className="btn-row">
              <Link href="/mission" className="btn">
                read the mission
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section section-tint">
        <div className="wrap split">
          <Reveal>
            <h2 className="hand split-title">programs</h2>
            <ul className="menu">
              {programs.map((p) => (
                <li className="menu-row" key={p.id}>
                  <span className="menu-name">{p.name}</span>
                  <span className="menu-dots" aria-hidden="true" />
                  <span className="hand menu-note">{p.when.split(' · ').pop()}</span>
                </li>
              ))}
            </ul>
            <Link href="/programs" className="text-link">
              programs &amp; talks <Arrow />
            </Link>
          </Reveal>

          <Reveal delay={120}>
            <h2 className="hand split-title">awards</h2>
            <ul className="menu">
              {headlineAwards.map((a) => (
                <li className="menu-row" key={a.name}>
                  <span className="menu-name">{a.name}</span>
                  <span className="menu-dots" aria-hidden="true" />
                  <span className="hand menu-note">{a.note}</span>
                </li>
              ))}
            </ul>
            <Link href="/awards" className="text-link">
              all {awardCount} awards <Arrow />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
