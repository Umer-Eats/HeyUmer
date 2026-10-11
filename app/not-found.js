import Link from 'next/link';
import Doodle from '@/components/Doodle';

export const metadata = {
  title: 'Page not found',
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="wrap lost">
      <Doodle name="drone" size={140} className="bob boil" />
      <h1 className="hand section-title">this page flew off</h1>
      <p className="section-sub">nothing lives at this address</p>
      <div className="btn-row" style={{ justifyContent: 'center' }}>
        <Link href="/" className="btn btn-solid">
          back home
        </Link>
      </div>
    </section>
  );
}
