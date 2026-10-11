import Link from 'next/link';
import Doodle, { Arrow } from '@/components/Doodle';
import PageIntro from '@/components/PageIntro';
import Reveal from '@/components/Reveal';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Mission',
  path: '/mission',
  description:
    'Umer Qureshi’s mission: serving everyone, regardless of economic or social differences, through free tools, accessible technology and open education.',
});

const principles = [
  {
    title: 'free by default',
    body: 'If a tool can be free, it should be. Access to education should never depend on what a family can afford.',
  },
  {
    title: 'built for whoever is left out',
    body: 'Start with the person the existing tools forgot: the student without a tutor, the person who can’t see the curb.',
  },
  {
    title: 'close to the community',
    body: 'Build with and for the people nearby: classmates, teammates, and the local environment they share.',
  },
  {
    title: 'share what you learn',
    body: 'Research and inventions matter more once they are explained, out loud, to anyone willing to listen.',
  },
  {
    title: 'works in the real world',
    body: 'A project is finished when someone is using it, not when it wins a trophy.',
  },
  {
    title: 'no one is the wrong audience',
    body: 'Income, background and ability are not reasons to be served second.',
  },
];

const proof = [
  {
    doodle: 'paper',
    name: 'korah',
    href: '/projects#korah',
    text: 'A free standardized education tool that has reached more than 100,000 people.',
  },
  {
    doodle: 'eye',
    name: 'iris AI',
    href: '/projects#iris',
    text: 'An app that helps visually impaired people navigate their environment, running locally on the phone.',
  },
  {
    doodle: 'flask',
    name: 'akoizo',
    href: '/projects#akoizo',
    text: 'More than 900 tests and 70 lessons, opened up to every Science Olympiad student at school.',
  },
  {
    doodle: 'cup',
    name: 'coffee house',
    href: '/projects#coffee-house',
    text: 'A study cafe where around 300 classmates have somewhere to focus, together.',
  },
  {
    doodle: 'robot',
    name: 'RADIX',
    href: '/projects#radix',
    text: 'A robot that protects a shared local ecosystem from invasive Brazilian peppertree.',
  },
  {
    doodle: 'phage',
    name: 'BINBR',
    href: '/projects#binbr',
    text: 'A concept aimed at antimicrobial resistance, a problem that reaches everyone.',
  },
];

export default function Mission() {
  return (
    <>
      <PageIntro
        title="for everyone."
        lede="serving people regardless of economic or social differences"
        doodle="people"
      />

      <section className="section wrap">
        <div className="two-col">
          <Reveal>
            <span className="eyebrow">the mission</span>
            <h2 className="hand split-title">nobody should be priced out, or left out</h2>
          </Reveal>
          <Reveal className="prose" delay={120}>
            <p>
              Umer&rsquo;s mission is simple to say and hard to do:{' '}
              <strong>serve everyone, regardless of economic or social differences.</strong>
            </p>
            <p>
              A good education, a safe walk down the street and a healthy place to live should not
              depend on how much money someone has, where they grew up, or what their body can and
              can&rsquo;t do. Too often they do. Umer treats that gap as an engineering problem,
              and as his to work on.
            </p>
            <p>
              So the question he asks of every project is the same: who can&rsquo;t reach this
              yet, and what would it take to get it to them?
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section-tint">
        <div className="wrap">
          <Reveal as="blockquote" style={{ margin: 0, maxWidth: '30em' }}>
            <p className="hand pull">
              &quot;Something that I have a hard time doing is privatizing or making a profit off
              of my materials. I am very free and education-access-based.&quot;
            </p>
            <cite className="pull-source" style={{ fontStyle: 'normal' }}>
              umer, in his own words
            </cite>
          </Reveal>
        </div>
      </section>

      <section className="section wrap">
        <Reveal className="section-head">
          <div>
            <h2 className="hand section-title">how it shows up</h2>
            <p className="section-sub">six principles behind the work</p>
          </div>
        </Reveal>
        <div className="cards">
          {principles.map((p, i) => (
            <Reveal className="card" key={p.title} delay={(i % 3) * 90}>
              <span className="card-num">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="hand card-title">{p.title}</h3>
              <p className="card-body">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section-tint">
        <div className="wrap">
          <Reveal className="section-head">
            <div>
              <h2 className="hand section-title">the mission, in practice</h2>
              <p className="section-sub">every project answers to it</p>
            </div>
            <Link href="/projects" className="text-link">
              all projects <Arrow />
            </Link>
          </Reveal>
          <div className="tiles">
            {proof.map((p, i) => (
              <Reveal key={p.name} delay={(i % 3) * 90}>
                <Link href={p.href} className="tile">
                  <span className="tile-art">
                    <Doodle name={p.doodle} />
                  </span>
                  <span className="hand tile-name">{p.name}</span>
                  <span className="tile-kicker">{p.text}</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
