import Image from 'next/image';
import Link from 'next/link';

type ProgramLocation = {
  name: string;
  href: string;
  number: number;
  left: number;
  top: number;
  mobileLeft: number;
  mobileTop: number;
  labelPosition: string;
};

const programLocations: ProgramLocation[] = [
  {
    name: 'Colombia',
    href: '/programs/colombia',
    number: 1,
    left: 26.2,
    top: 57,
    mobileLeft: 26.2,
    mobileTop: 57,
    labelPosition: 'left-1/2 top-8 -translate-x-1/2',
  },
  {
    name: 'Argentina',
    href: '/programs/argentina',
    number: 2,
    left: 29.1,
    top: 84,
    mobileLeft: 29.1,
    mobileTop: 84,
    labelPosition: 'left-1/2 top-8 -translate-x-1/2',
  },
  {
    name: 'Uganda',
    href: '/programs/uganda',
    number: 3,
    left: 56,
    top: 60,
    mobileLeft: 56,
    mobileTop: 62,
    labelPosition: 'left-1/2 top-8 -translate-x-1/2',
  },
  {
    name: 'Nepal',
    href: '/programs/nepal',
    number: 4,
    left: 69.5,
    top: 46,
    mobileLeft: 67,
    mobileTop: 38,
    labelPosition: 'left-1/2 top-8 -translate-x-1/2',
  },
  {
    name: 'Myanmar',
    href: '/programs/myanmar',
    number: 5,
    left: 73.5,
    top: 51,
    mobileLeft: 75,
    mobileTop: 48,
    labelPosition: 'left-5 top-7',
  },
  {
    name: 'India',
    href: '/programs/india',
    number: 6,
    left: 69,
    top: 57,
    mobileLeft: 65,
    mobileTop: 58,
    labelPosition: 'left-1/2 top-8 -translate-x-1/2',
  },
  {
    name: 'The Philippines',
    href: '/programs/philippines',
    number: 7,
    left: 81,
    top: 55,
    mobileLeft: 84,
    mobileTop: 58,
    labelPosition: 'left-1/2 top-8 -translate-x-1/2',
  },
];

function MapPin({ number }: { number: number }) {
  return (
    <span className="relative block h-7 w-6 transition duration-200 group-hover:-translate-y-1 group-hover:scale-110 group-focus-visible:-translate-y-1 group-focus-visible:scale-110 sm:h-11 sm:w-9">
      <svg viewBox="0 0 36 44" aria-hidden="true" className="h-full w-full drop-shadow-[0_4px_5px_rgba(55,0,28,0.2)]">
        <path
          d="M18 1C8.6 1 1 8.6 1 18c0 12.7 17 25 17 25s17-12.3 17-25C35 8.6 27.4 1 18 1Z"
          fill="#EE0076"
          stroke="#d6006c"
          strokeWidth="1.5"
        />
        <circle cx="18" cy="17" r="6" fill="white" className="hidden sm:block" />
      </svg>
      <span className="absolute left-1/2 top-[6px] -translate-x-1/2 text-[9px] font-extrabold leading-none text-white font-sans sm:hidden">
        {number}
      </span>
    </span>
  );
}

export default function WorldProgramMap() {
  return (
    <div className="mt-10">
      <p className="mb-3 text-center text-xs font-bold uppercase tracking-[0.16em] text-gray-500 font-sans sm:hidden">
        Tap a numbered location or choose a country below
      </p>

      <div className="relative mx-auto max-w-[1120px] overflow-hidden rounded-2xl border border-rose-100 bg-white px-1.5 py-3 shadow-sm sm:rounded-[2rem] sm:px-5 sm:py-6 lg:px-7 lg:py-8">
        <div className="relative aspect-[1040/614] w-full">
          <Image
            src="/images/about/she-has-hope-reference-style-map-v3.svg"
            alt="Map showing She Has Hope program locations in Colombia, Argentina, Uganda, Nepal, India, Myanmar, and the Philippines"
            fill
            sizes="(min-width: 1024px) 1064px, 100vw"
            className="object-fill"
          />

          {programLocations.map((location) => (
            <Link
              key={`${location.name}-mobile`}
              href={location.href}
              aria-label={`${location.number}. Explore our ${location.name} program`}
              className="group absolute z-10 -translate-x-1/2 -translate-y-full rounded-full outline-none focus-visible:ring-4 focus-visible:ring-[#EE0076]/30 sm:hidden"
              style={{ left: `${location.mobileLeft}%`, top: `${location.mobileTop}%` }}
            >
              <MapPin number={location.number} />
            </Link>
          ))}

          {programLocations.map((location) => (
            <Link
              key={`${location.name}-desktop`}
              href={location.href}
              aria-label={`Explore our ${location.name} program`}
              className="group absolute z-10 hidden -translate-x-1/2 -translate-y-full rounded-full outline-none focus-visible:ring-4 focus-visible:ring-[#EE0076]/30 sm:block"
              style={{ left: `${location.left}%`, top: `${location.top}%` }}
            >
              <MapPin number={location.number} />
              <span
                className={`absolute whitespace-nowrap text-[10px] font-extrabold uppercase tracking-[0.11em] text-gray-950 drop-shadow-[0_1px_0_rgba(255,255,255,0.9)] font-sans lg:text-xs ${location.labelPosition}`}
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
        Select a location marker to visit its program page.
      </p>
    </div>
  );
}
