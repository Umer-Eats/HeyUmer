import Link from 'next/link';
import { Arrow } from './Doodle';
import Logo from './Logo';
import { profile } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="site-footer">
      <Link href="/links" className="footer-cta">
        <span className="hand">more information here</span>
        <Arrow />
      </Link>

      <div className="footer-row">
        <Logo size={46} />
        <p className="footer-meta">
          <a href={profile.github} target="_blank" rel="noreferrer">
            github
          </a>
          <span aria-hidden="true">·</span>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <span aria-hidden="true">·</span>
          <span>{profile.location.toLowerCase()}</span>
        </p>
      </div>
    </footer>
  );
}
