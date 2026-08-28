import Image from 'next/image';
import Link from 'next/link';

type ProgramLocation = {
  name: string;
  href: string;
  left: string;
  top: string;
  labelPosition: string;
};

const programLocations: ProgramLocation[] = [
  {
    name: 'India',
    href: '/programs/india',
    left: '71.65%',
    top: '37.75%',
    labelPosition: 'right-7 top-5',
  },
  {
    name: 'Nepal',
    href: '/programs/nepal',
    left: '73.33%',
    top: '34.4%',
    labelPosition: 'bottom-7 left-1/2 -translate-x-1/2',
  },
  {
    name: 'Myanmar',
    href: '/programs/myanmar',
    left: '76.67%',
    top: '38.35%',
    labelPosition: 'left-1/2 top-8 -translate-x-1/2',
  },
  {
    name: 'Philippines',
    href: '/programs/philippines',
    left: '83.88%',
    top: '42.75%',
    labelPosition: 'left-7 top-4',
  },
  {
    name: 'Uganda',
    href: '/programs/uganda',
    left: '58.9%',
    top: '49.4%',
    labelPosition: 'left-7 top-5',
  },
  {
    name: 'Argentina',
    href: '/programs/argentina',
    left: '32.23%',
    top: '68.9%',
    labelPosition: 'right-7 top-5',
  },
  {
    name: 'Colombia',
    href: '/programs/colombia',
    left: '29.45%',
    top: '47.75%',
    labelPosition: 'right-7 top-5',
  },
];

function MapPin() {
  return (
    <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-[0_4px_14px_rgba(31,41,55,0.24)] ring-2 ring-white transition duration-200 group-hover:scale-110 group-focus-visible:scale-110 sm:h-10 sm:w-10">
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-6 w-6 overflow-visible sm:h-7 sm:w-7"
      >
        <path
          d="M12 22s7-6.15 7-13A7 7 0 1 0 5 9c0 6.85 7 13 7 13Z"
          fill="#EE0076"
          stroke="#c90063"
          strokeWidth="1.25"
        />
        <circle cx="12" cy="9" r="3" fill="#F2978F" />
      </svg>
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#F2978F]/35 motion-reduce:animate-none" />
    </span>
  );
}

export default function WorldProgramMap() {
  return (
    <div className="mt-10">
      <p className="mb-3 text-center text-xs font-bold uppercase tracking-[0.16em] text-gray-500 font-sans md:hidden">
        Swipe to explore the map
      </p>
      <div className="overflow-x-auto pb-3 [scrollbar-color:#F2978F_transparent]">
        <div className="relative mx-auto min-w-[760px] max-w-[1120px] overflow-hidden rounded-[2rem] border border-rose-100 bg-gradient-to-br from-[#fff8f8] via-white to-[#fff2f5] px-5 py-7 shadow-sm sm:px-8 sm:py-9 lg:min-w-0 lg:px-10 lg:py-11">
          <div className="absolute -left-20 -top-24 h-64 w-64 rounded-full bg-[#F2978F]/20 blur-3xl" aria-hidden="true" />
          <div className="absolute -bottom-28 -right-20 h-72 w-72 rounded-full bg-[#EE0076]/10 blur-3xl" aria-hidden="true" />

          <div className="relative aspect-[2370/1200]">
            <Image
              src="/images/about/she-has-hope-world-map.svg"
              alt="World map showing She Has Hope program locations in Asia, Africa, and South America"
              fill
              sizes="(min-width: 1024px) 1040px, 760px"
              className="object-contain drop-shadow-[0_14px_24px_rgba(238,0,118,0.12)]"
            />

            {programLocations.map((location) => (
              <Link
                key={location.name}
                href={location.href}
                aria-label={`Explore the ${location.name} program`}
                className="group absolute z-10 -translate-x-1/2 -translate-y-full rounded-full outline-none focus-visible:ring-4 focus-visible:ring-[#EE0076]/30"
                style={{ left: location.left, top: location.top }}
              >
                <MapPin />
                <span
                  className={`absolute whitespace-nowrap rounded-full border border-rose-100 bg-white/95 px-3 py-1.5 text-xs font-bold text-gray-900 shadow-md backdrop-blur transition group-hover:border-[#EE0076] group-hover:text-[#EE0076] group-focus-visible:border-[#EE0076] group-focus-visible:text-[#EE0076] font-sans sm:text-sm ${location.labelPosition}`}
                >
                  {location.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <p className="mt-3 text-center text-sm text-gray-500 font-serif">
        Select a location marker to visit its program page.
      </p>
    </div>
  );
}
