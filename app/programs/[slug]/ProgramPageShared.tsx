import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import type { Program } from '../programs';

export type ResponseArea = {
  name: string;
  iconSrc: string;
  copy: string;
};

export type ImpactStat = {
  value: string;
  label: string;
};

type CountryPageLayoutProps = {
  country: string;
  children: React.ReactNode;
};

type ProgramHeroProps = {
  program: Program;
  eyebrow: string;
  description: string;
};

type PhotoPlaceholderProps = {
  title: string;
  guidance: string;
  className?: string;
};

type ResponsePathwaysProps = {
  eyebrow?: string;
  title: string;
  intro: string;
  areas: ResponseArea[];
};

type ImpactSectionProps = {
  eyebrow: string;
  title: string;
  intro: string;
  stats: ImpactStat[];
  note: string;
};

type ProgramCtaProps = {
  country: string;
  title?: string;
  description: string;
};

export function CountryPageLayout({ country, children }: CountryPageLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="border-b bg-gray-50">
          <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="text-sm font-sans">
              <Link href="/" className="text-rose-600 hover:underline">Home</Link>
              <span aria-hidden="true" className="mx-2 text-gray-400">/</span>
              <span className="text-gray-600">{country}</span>
            </nav>
          </div>
        </div>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export function ProgramHero({ program, eyebrow, description }: ProgramHeroProps) {
  return (
    <section className="bg-white py-10 md:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative min-h-[420px] overflow-hidden rounded-2xl shadow-xl md:min-h-[560px]">
          <Image
            src={program.imageSrc}
            alt={program.imageAlt}
            fill
            priority
            sizes="(min-width: 1024px) 1152px, 100vw"
            className={`object-cover ${program.imageClassName ?? 'object-center'}`}
          />
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/85 via-black/25 to-black/5 p-7 md:p-12">
            <div className="max-w-3xl text-white">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-pink-200 font-sans">{eyebrow}</p>
              <h1 className="text-4xl font-bold font-sans md:text-6xl">{program.name}</h1>
              <p className="mt-4 text-lg leading-relaxed font-serif md:text-2xl">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PhotoPlaceholder({ title, guidance, className = '' }: PhotoPlaceholderProps) {
  return (
    <div className={`flex min-h-72 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-pink-300 bg-gradient-to-br from-pink-50 via-white to-rose-50 px-8 py-12 text-center ${className}`}>
      <span aria-hidden="true" className="text-4xl">📷</span>
      <p className="mt-4 text-lg font-bold text-gray-800 font-sans">{title}</p>
      <p className="mt-2 max-w-sm text-sm leading-relaxed text-gray-600 font-serif">{guidance}</p>
      <span className="mt-4 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#EE0076] shadow-sm font-sans">Photo coming soon</span>
    </div>
  );
}

export function HopeStatement({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-gradient-to-br from-[#F2978F] to-[#EE0076] py-12 text-white md:py-16">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-2xl font-bold leading-relaxed font-sans md:text-4xl">{children}</p>
      </div>
    </section>
  );
}

export function ResponsePathways({ eyebrow = 'Our trafficking response', title, intro, areas }: ResponsePathwaysProps) {
  return (
    <section className="bg-gray-50 py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#EE0076] font-sans">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold text-gray-900 font-sans md:text-4xl">{title}</h2>
          <p className="mt-5 text-lg leading-8 text-gray-700 font-serif">{intro}</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {areas.map((area, index) => (
            <article key={area.name} className={`rounded-2xl border border-pink-100 bg-white p-7 shadow-sm ${index === areas.length - 1 && areas.length % 3 !== 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
              <Image src={area.iconSrc} alt="" width={96} height={96} loading="eager" className="h-24 w-24" />
              <h3 className="mt-5 text-2xl font-bold text-gray-900 font-sans">{area.name}</h3>
              <p className="mt-3 leading-7 text-gray-700 font-serif">{area.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ImpactSection({ eyebrow, title, intro, stats, note }: ImpactSectionProps) {
  return (
    <section className="bg-gray-50 py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#EE0076] font-sans">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold text-gray-900 font-sans md:text-4xl">{title}</h2>
          <p className="mt-5 text-lg leading-8 text-gray-700 font-serif">{intro}</p>
        </div>
        <div className={`mx-auto mt-10 grid max-w-5xl gap-6 ${stats.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-white p-8 text-center shadow-md">
              <p className="text-5xl font-bold text-[#EE0076] font-sans">{stat.value}</p>
              <p className="mt-3 text-lg font-semibold text-gray-800 font-sans">{stat.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 text-center text-sm text-gray-500 font-serif">{note}</p>
      </div>
    </section>
  );
}

export function ProgramCta({ country, title = 'Stand with girls building safer, stronger futures', description }: ProgramCtaProps) {
  return (
    <section className="py-14 md:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#F2978F] to-[#EE0076] px-7 py-12 text-center text-white shadow-xl md:px-14 md:py-16">
          <h2 className="text-3xl font-bold font-sans md:text-4xl">{title}</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/95 font-serif">{description}</p>
          <a href="https://peacegospel.org/donate" className="mt-8 inline-block rounded-lg bg-white px-8 py-4 text-lg font-bold text-[#EE0076] shadow-md transition hover:-translate-y-0.5 hover:shadow-xl font-sans">Give Hope</a>
        </div>
        <div className="mt-10 text-center">
          <Link href="/#where-we-work" className="font-semibold text-rose-600 hover:underline font-sans">← Explore another location</Link>
        </div>
        <p className="sr-only">Support She Has Hope programs in {country}.</p>
      </div>
    </section>
  );
}
