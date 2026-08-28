import Image from 'next/image';
import Link from 'next/link';

type ProgramLocation = {
  name: string;
  href: string;
  number: number;
  actualLeft: number;
  actualTop: number;
  markerLeft: number;
  markerTop: number;
  labelPosition: string;
  usesCallout?: boolean;
};

const programLocations: ProgramLocation[] = [
  {
    name: 'India',
    href: '/programs/india',
    number: 1,
    actualLeft: 71.65,
    actualTop: 37.75,
    markerLeft: 59,
    markerTop: 43,
    labelPosition: 'right-7 top-5',
    usesCallout: true,
  },
  {
    name: 'Nepal',
    href: '/programs/nepal',
    number: 2,
    actualLeft: 73.33,
    actualTop: 34.4,
    markerLeft: 71,
    markerTop: 26,
    labelPosition: 'bottom-7 left-1/2 -translate-x-1/2',
    usesCallout: true,
  },
  {
    name: 'Myanmar',
    href: '/programs/myanmar',
    number: 3,
    actualLeft: 76.67,
    actualTop: 38.35,
    markerLeft: 73,
    markerTop: 60,
    labelPosition: 'left-1/2 top-7 -translate-x-1/2',
    usesCallout: true,
  },
  {
    name: 'Philippines',
    href: '/programs/philippines',
    number: 4,
    actualLeft: 83.88,
    actualTop: 42.75,
    markerLeft: 83.88,
    markerTop: 42.75,
    labelPosition: 'left-7 top-4',
  },
  {
    name: 'Uganda',
    href: '/programs/uganda',
    number: 5,
    actualLeft: 58.9,
    actualTop: 49.4,
    markerLeft: 47,
    markerTop: 58,
    labelPosition: 'right-7 top-5',
    usesCallout: true,
  },
  {
    name: 'Argentina',
    href: '/programs/argentina',
    number: 6,
    actualLeft: 32.23,
    actualTop: 68.9,
    markerLeft: 32.23,
    markerTop: 68.9,
    labelPosition: 'right-7 top-5',
  },
  {
    name: 'Colombia',
    href: '/programs/colombia',
    number: 7,
    actualLeft: 29.45,
    actualTop: 47.75,
    markerLeft: 29.45,
    markerTop: 47.75,
    labelPosition: 'right-7 top-5',
  },
];

function MapPin({ number }: { number: number }) {
  return (
    <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-[0_4px_14px_rgba(31,41,55,0.24)] ring-2 ring-white transition duration-200 group-hover:scale-110 group-focus-visible:scale-110 sm:h-10 sm:w-10">
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-7 w-7 overflow-visible sm:h-9 sm:w-9"
      >
        <path
          d="M12 22s7-6.15 7-13A7 7 0 1 0 5 9c0 6.85 7 13 7 13Z"
          fill="#EE0076"
          stroke="#c90063"
          strokeWidth="1.25"
        />
      </svg>
      <span className="absolute top-[5px] text-[10px] font-bold leading-none text-white font-sans sm:top-[6px] sm:text-xs">
        {number}
      </span>
    </span>
  );
}

export default function WorldProgramMap() {
  const calloutLocations = programLocations.filter((location) => location.usesCallout);

  return (
    <div className="mt-10">
      <p className="mb-3 text-center text-xs font-bold uppercase tracking-[0.16em] text-gray-500 font-sans sm:hidden">
        Tap a numbered location or choose a country below
      </p>

      <div className="relative mx-auto max-w-[1120px] overflow-hidden rounded-2xl border border-rose-100 bg-gradient-to-br from-[#fff8f8] via-white to-[#fff2f5] px-2 py-4 shadow-sm sm:rounded-[2rem] sm:px-8 sm:py-9 lg:px-10 lg:py-11">
        <div className="absolute -left-20 -top-24 h-64 w-64 rounded-full bg-[#F2978F]/20 blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-28 -right-20 h-72 w-72 rounded-full bg-[#EE0076]/10 blur-3xl" aria-hidden="true" />

        <div className="relative aspect-[2370/1200] w-full">
          <Image
            src="/images/about/she-has-hope-world-map.svg"
            alt="World map showing She Has Hope program locations in Asia, Africa, and South America"
            fill
            sizes="(min-width: 1024px) 1040px, 100vw"
            className="object-contain drop-shadow-[0_14px_24px_rgba(238,0,118,0.12)]"
          />

          <svg
            viewBox="0 0 100 50"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            {calloutLocations.map((location) => (
              <g key={location.name}>
                <line
                  x1={location.actualLeft}
                  y1={location.actualTop / 2}
                  x2={location.markerLeft}
                  y2={location.markerTop / 2}
                  stroke="#a90056"
                  strokeWidth="1.25"
                  strokeDasharray="1.5 1.2"
                  vectorEffect="non-scaling-stroke"
                />
                <circle
                  cx={location.actualLeft}
                  cy={location.actualTop / 2}
                  r="0.7"
                  fill="#fff"
                  stroke="#a90056"
                  strokeWidth="1"
                  vectorEffect="non-scaling-stroke"
                />
              </g>
            ))}
          </svg>

          {programLocations.map((location) => (
            <Link
              key={location.name}
              href={location.href}
              aria-label={`${location.number}. Explore the ${location.name} program`}
              className="group absolute z-10 -translate-x-1/2 -translate-y-full rounded-full outline-none focus-visible:ring-4 focus-visible:ring-[#EE0076]/30"
              style={{ left: `${location.markerLeft}%`, top: `${location.markerTop}%` }}
            >
              <MapPin number={location.number} />
              <span
                className={`absolute hidden whitespace-nowrap rounded-full border border-rose-100 bg-white/95 px-3 py-1.5 text-sm font-bold text-gray-900 shadow-md backdrop-blur transition group-hover:border-[#EE0076] group-hover:text-[#EE0076] group-focus-visible:border-[#EE0076] group-focus-visible:text-[#EE0076] font-sans sm:block ${location.labelPosition}`}
              >
                {location.name}
              </span>
            </Link>
          ))}
        </div>
      </div>

      <nav aria-label="She Has Hope program locations" className="mt-4 grid grid-cols-2 gap-2 sm:hidden">
        {programLocations.map((location) => (
          <Link
            key={location.name}
            href={location.href}
            className={`flex min-h-11 items-center gap-2.5 rounded-xl border border-rose-100 bg-white px-3 py-2 text-sm font-bold text-gray-900 shadow-sm transition active:border-[#EE0076] active:text-[#EE0076] font-sans ${location.number === 7 ? 'col-span-2 justify-center' : ''}`}
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EE0076] text-xs text-white">
              {location.number}
            </span>
            {location.name}
          </Link>
        ))}
      </nav>

      <p className="mt-3 hidden text-center text-sm text-gray-500 font-serif sm:block">
        Select a location marker to visit its program page. Dashed callouts keep nearby locations accurate and easy to read.
      </p>
    </div>
  );
}
