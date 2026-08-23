import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { getProgram, programs } from '../programs';
import ColombiaProgramPage from './ColombiaProgramPage';
import NepalProgramPage from './NepalProgramPage';

type ProgramPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({ params }: ProgramPageProps): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgram(slug);

  if (!program) {
    return {};
  }

  if (slug === 'colombia') {
    return {
      title: 'Colombia Trafficking Response Program | She Has Hope',
      description: 'Discover how She Has Hope partners with locally led programs in Cúcuta, Colombia, to provide vulnerable girls with care, education, practical skills, and pathways toward a safer future.',
    };
  }

  if (slug === 'nepal') {
    return {
      title: 'Nepal Trafficking Response Program | She Has Hope',
      description: 'Discover how She Has Hope partners with locally led programs in Kathmandu, Nepal, to provide trafficking survivors with safe shelter, restorative care, education, and practical skills.',
    };
  }

  return {
    title: `${program.name} Program | She Has Hope`,
    description: `Explore She Has Hope's work in ${program.name}.`,
  };
}

export default async function ProgramPage({ params }: ProgramPageProps) {
  const { slug } = await params;
  const program = getProgram(slug);

  if (!program) {
    notFound();
  }

  if (slug === 'colombia') {
    return <ColombiaProgramPage program={program} />;
  }

  if (slug === 'nepal') {
    return <NepalProgramPage program={program} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <div className="border-b bg-gray-50">
          <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="text-sm font-sans">
              <Link href="/" className="text-rose-600 hover:underline">Home</Link>
              <span aria-hidden="true" className="mx-2 text-gray-400">/</span>
              <span className="text-gray-600">{program.name}</span>
            </nav>
          </div>
        </div>

        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="relative aspect-video overflow-hidden rounded-xl shadow-xl">
              <Image
                src={program.imageSrc}
                alt={program.imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 896px, 100vw"
                className={`object-cover ${program.imageClassName ?? 'object-center'}`}
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 md:p-10">
                <h1 className="text-4xl font-bold text-white font-sans md:text-6xl">
                  {program.name}
                </h1>
              </div>
            </div>

            <div className="mx-auto mt-10 max-w-3xl rounded-xl border border-rose-100 bg-rose-50 px-6 py-8 text-center md:px-10">
              <p className="text-lg leading-relaxed text-gray-700 font-serif">
                We’re preparing this program page. The full story of our work in {program.name} will be added next.
              </p>
            </div>

            <div className="mt-10 text-center">
              <Link href="/#where-we-work" className="font-semibold text-rose-600 hover:underline font-sans">
                ← Explore another location
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
