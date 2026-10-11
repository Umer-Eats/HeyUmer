import Doodle from './Doodle';

// The "who are we?" block that opens every inner page.
export default function PageIntro({ title, lede, doodle }) {
  return (
    <section className="page-intro wrap">
      <div>
        <h1 className="hand page-title">{title}</h1>
        {lede ? <p className="page-lede">{lede}</p> : null}
      </div>
      {doodle ? <Doodle name={doodle} size={150} className="page-intro-doodle boil" /> : null}
    </section>
  );
}
