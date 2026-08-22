import Image from 'next/image';
import Link from 'next/link';

type ProgramCardProps = {
  title: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  imageClassName?: string;
  className?: string;
};

export default function ProgramCard({
  title,
  href,
  imageSrc,
  imageAlt,
  imageClassName = 'object-center',
  className = '',
}: ProgramCardProps) {
  return (
    <Link
      href={href}
      aria-label={`Explore the ${title} program`}
      className={`group relative aspect-video w-full overflow-hidden rounded-lg text-left shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:-translate-y-1 focus-visible:ring-4 focus-visible:ring-pink-300 ${className}`}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        sizes="(min-width: 1024px) 320px, (min-width: 768px) 50vw, 100vw"
        className={`object-cover ${imageClassName} transition-transform duration-500 group-hover:scale-105 group-focus-visible:scale-105`}
      />
      <div className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/85 via-black/25 to-transparent p-5 text-white transition-colors duration-300 group-hover:from-[#EE0076]/95 group-hover:via-[#EE0076]/45 group-focus-visible:from-[#EE0076]/95 group-focus-visible:via-[#EE0076]/45">
        <h3 className="text-2xl font-semibold font-sans">{title}</h3>
        <span className="mt-1 inline-flex items-center text-sm font-semibold font-sans md:text-base">
          Explore the program <span aria-hidden="true" className="ml-1 transition-transform duration-300 group-hover:translate-x-1 group-focus-visible:translate-x-1">→</span>
        </span>
      </div>
    </Link>
  );
}
