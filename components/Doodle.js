// Hand-drawn line doodles. Every shape is plain geometry; the wobble comes
// from the SVG filters defined once in <DoodleDefs />.

const dot = { fill: 'currentColor', stroke: 'none' };

const shapes = {
  robot: (
    <>
      <rect x="20" y="80" width="80" height="20" rx="10" />
      <circle cx="34" cy="90" r="4" />
      <circle cx="60" cy="90" r="4" />
      <circle cx="86" cy="90" r="4" />
      <rect x="30" y="52" width="56" height="28" rx="6" />
      <rect x="44" y="32" width="26" height="20" rx="5" />
      <circle cx="53" cy="42" r="2.4" {...dot} />
      <circle cx="62" cy="42" r="2.4" {...dot} />
      <path d="M57 32V21" />
      <circle cx="57" cy="17" r="3.5" />
      <path d="M86 62l14-9 3-10" />
      <path d="M103 43l-6-4M103 43l6-3" />
      <path d="M98 26q9-11 16-1q-7 9-16 1z" />
    </>
  ),
  eye: (
    <>
      <path d="M12 62Q60 20 108 62Q60 104 12 62Z" />
      <circle cx="60" cy="62" r="17" />
      <circle cx="60" cy="62" r="6.5" {...dot} />
      <path d="M34 38l-5-9M60 30V19M86 38l5-9" />
    </>
  ),
  cup: (
    <>
      <path d="M28 54h54v28q0 18-18 18H46q-18 0-18-18z" />
      <path d="M82 62q18 0 18 12t-18 12" />
      <path d="M42 42q-6-7 0-13t0-13" />
      <path d="M56 42q-6-7 0-13t0-13" />
      <path d="M70 42q-6-7 0-13t0-13" />
      <path d="M18 108h84" />
    </>
  ),
  flask: (
    <>
      <path d="M46 16h28" />
      <path d="M51 16v30L27 92q-5 12 9 12h48q14 0 9-12L69 46V16" />
      <path d="M37 76q11-6 23 0t23 0" />
      <circle cx="52" cy="90" r="3.2" />
      <circle cx="68" cy="88" r="2.2" />
      <circle cx="60" cy="60" r="2.2" />
    </>
  ),
  paper: (
    <>
      <path d="M24 14h42l18 18v74H24z" />
      <path d="M66 14v18h18" />
      <path d="M35 46h34M35 59h38M35 72h24" />
      <path d="M36 90l6 6 12-14" />
      <path d="M100 50l10 8-26 34-13 5 3-13z" />
    </>
  ),
  worm: (
    <>
      <path d="M60 12C76 12 88 22 82 35C78 43 80 52 82 66C85 88 75 108 60 110C45 108 35 88 38 66C40 52 42 43 38 35C32 22 44 12 60 12Z" />
      <circle cx="52" cy="32" r="5" />
      <circle cx="68" cy="32" r="5" />
      <circle cx="54.5" cy="33" r="1.9" {...dot} />
      <circle cx="65.5" cy="33" r="1.9" {...dot} />
      <path d="M60 62v22" />
    </>
  ),
  trophy: (
    <>
      <path d="M38 18h44v24q0 24-22 24T38 42z" />
      <path d="M38 27H25q0 23 17 26" />
      <path d="M82 27h13q0 23-17 26" />
      <path d="M60 66v18" />
      <rect x="44" y="84" width="32" height="16" rx="3" />
      <path d="M60 28l3 7h7l-6 5 2 8-6-5-6 5 2-8-6-5h7z" />
    </>
  ),
  drone: (
    <>
      <circle cx="28" cy="32" r="14" />
      <circle cx="92" cy="32" r="14" />
      <circle cx="28" cy="92" r="14" />
      <circle cx="92" cy="92" r="14" />
      <rect x="45" y="48" width="30" height="28" rx="9" />
      <path d="M47 51L28 32M73 51L92 32M47 73L28 92M73 73L92 92" />
      <circle cx="60" cy="62" r="3" {...dot} />
    </>
  ),
  people: (
    <>
      <circle cx="28" cy="42" r="8" />
      <path d="M28 50v30M28 80l-8 20M28 80l8 20" />
      <circle cx="60" cy="32" r="9.5" />
      <path d="M60 42v38M60 80l-9 22M60 80l9 22" />
      <circle cx="92" cy="46" r="7" />
      <path d="M92 53v27M92 80l-7 20M92 80l7 20" />
      <path d="M28 60l16 7 16-9 16 9 16-5" />
      <path d="M28 60l-13 9M92 62l13 7" />
    </>
  ),
  bubble: (
    <>
      <path d="M22 20h76q9 0 9 9v40q0 9-9 9H60L42 98V78H22q-9 0-9-9V29q0-9 9-9z" />
      <path d="M32 42h56M32 57h36" />
    </>
  ),
  phage: (
    <>
      <path d="M60 10l19 11v23L60 55 41 44V21z" />
      <path d="M60 55v28M51 61h18" />
      <path d="M60 83l-23 8-8 20M60 83l23 8 8 20" />
      <path d="M60 83L49 96l-3 15M60 83l11 13 3 15" />
    </>
  ),
  gear: (
    <>
      <circle cx="60" cy="60" r="27" />
      <circle cx="60" cy="60" r="9" />
      <path d="M60 33V18M60 87v15M33 60H18M87 60h15M41 41L30 30M79 41l11-11M41 79L30 90M79 79l11 11" />
    </>
  ),
  bulb: (
    <>
      <path d="M60 16a29 29 0 0 1 17 52v10H43V68a29 29 0 0 1 17-52z" />
      <path d="M45 88h30M50 98h20" />
      <path d="M48 50q6-11 12 0t12 0" />
      <path d="M60 4v4M22 18l4 4M98 18l-4 4M10 48h5M105 48h5" />
    </>
  ),
  code: (
    <>
      <path d="M42 36L16 60l26 24" />
      <path d="M78 36l26 24-26 24" />
      <path d="M68 24L52 96" />
    </>
  ),
  mail: (
    <>
      <rect x="14" y="28" width="92" height="64" rx="7" />
      <path d="M16 34l44 32 44-32" />
    </>
  ),
  neuron: (
    <>
      <circle cx="38" cy="46" r="13" />
      <circle cx="38" cy="46" r="3" {...dot} />
      <path d="M30 35L20 16M38 33V12M47 36l12-18M26 50L8 54M30 57L16 74" />
      <path d="M50 52q14 6 20 20t22 12" />
      <path d="M92 84l12-9M92 84l14 3M92 84l8 13" />
      <path d="M74 44l-8 12h12l-8 12" />
    </>
  ),
};

export const doodleNames = Object.keys(shapes);

export function DoodleDefs() {
  return (
    <svg className="doodle-defs" aria-hidden="true" focusable="false" width="0" height="0">
      <defs>
        {[2, 9, 17].map((seed, i) => (
          <filter key={seed} id={`wobble-${i + 1}`} x="-10%" y="-10%" width="120%" height="120%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.035"
              numOctaves="2"
              seed={seed}
              result="noise"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" />
          </filter>
        ))}
      </defs>
    </svg>
  );
}

export default function Doodle({ name, size = 120, className = '', title }) {
  const shape = shapes[name] ?? shapes.bulb;
  return (
    <svg
      className={`doodle ${className}`}
      viewBox="0 0 120 120"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      {shape}
    </svg>
  );
}

export function Arrow({ className = '' }) {
  return (
    <svg
      className={`arrow ${className}`}
      viewBox="0 0 44 20"
      width="44"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2 10h38M32 3l9 7-9 7" />
    </svg>
  );
}
