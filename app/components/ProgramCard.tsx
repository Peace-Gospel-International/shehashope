'use client';

import Image from 'next/image';
import { useState } from 'react';

type ProgramCardProps = {
  title: string;
  statistics: string;
  imageSrc: string;
  imageAlt: string;
  imageClassName?: string;
  className?: string;
};

export default function ProgramCard({
  title,
  statistics,
  imageSrc,
  imageAlt,
  imageClassName = 'object-center',
  className = '',
}: ProgramCardProps) {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <button
      type="button"
      className={`group relative aspect-video w-full cursor-pointer overflow-hidden rounded-lg text-left shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:-translate-y-1 focus:outline-none focus-visible:ring-4 focus-visible:ring-pink-300 ${className}`}
      aria-label={`${title}: ${statistics}. Select to show these statistics.`}
      aria-pressed={isRevealed}
      onClick={() => setIsRevealed(true)}
      onBlur={() => setIsRevealed(false)}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        sizes="(min-width: 1024px) 320px, (min-width: 768px) 50vw, 100vw"
        className={`object-cover ${imageClassName} transition-transform duration-500 group-hover:scale-105 group-focus:scale-105`}
      />
      <div
        className={`pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/85 via-black/35 to-transparent p-5 text-left text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100 md:justify-center md:bg-[#EE0076]/90 md:text-center ${
          isRevealed ? 'opacity-100' : ''
        }`}
      >
        <h3 className="text-2xl font-semibold font-sans">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed font-serif md:text-base">
          {statistics}
        </p>
      </div>
    </button>
  );
}
