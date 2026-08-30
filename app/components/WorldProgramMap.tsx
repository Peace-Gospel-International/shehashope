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
    left: 22.9,
    top: 50.2,
    mobileLeft: 22.9,
    mobileTop: 52.5,
    labelPosition: 'left-1/2 top-8 -translate-x-1/2',
  },
  {
    name: 'Argentina',
    href: '/programs/argentina',
    number: 2,
    left: 28.1,
    top: 73.6,
    mobileLeft: 28.1,
    mobileTop: 73.6,
    labelPosition: 'left-1/2 top-8 -translate-x-1/2',
  },
  {
    name: 'Uganda',
    href: '/programs/uganda',
    number: 3,
    left: 57.6,
    top: 52.7,
    mobileLeft: 57.6,
    mobileTop: 54.5,
    labelPosition: 'left-1/2 top-8 -translate-x-1/2',
  },
  {
    name: 'Nepal',
    href: '/programs/nepal',
    number: 4,
    left: 74.7,
    top: 36.4,
    mobileLeft: 71,
    mobileTop: 33.5,
    labelPosition: 'right-7 top-2',
  },
  {
    name: 'Myanmar',
    href: '/programs/myanmar',
    number: 5,
    left: 78.2,
    top: 39.8,
    mobileLeft: 78,
    mobileTop: 39.5,
    labelPosition: 'left-5 top-7',
  },
  {
    name: 'India',
    href: '/programs/india',
    number: 6,
    left: 72.5,
    top: 42.5,
    mobileLeft: 71.5,
    mobileTop: 48.5,
    labelPosition: 'left-1/2 top-8 -translate-x-1/2',
  },
  {
    name: 'The Philippines',
    href: '/programs/philippines',
    number: 7,
    left: 87.2,
    top: 46.8,
    mobileLeft: 84.5,
    mobileTop: 48.5,
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

      <div className="relative mx-auto max-w-[1120px] overflow-hidden rounded-2xl border border-rose-100 bg-white shadow-sm sm:rounded-[2rem]">
        <div className="relative aspect-[1040/614] w-full">
          <Image
            src="/images/about/she-has-hope-reference-style-map-v5.svg"
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
