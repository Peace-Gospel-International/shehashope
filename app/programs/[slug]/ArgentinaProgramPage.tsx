import Image from 'next/image';
import type { Program } from '../programs';
import {
  CountryPageLayout,
  HopeStatement,
  ImpactSection,
  ProgramContextSection,
  ProgramCta,
  ProgramHero,
  ResponsePathways,
  type ResponseArea,
} from './ProgramPageShared';

type ArgentinaProgramPageProps = {
  program: Program;
};

const programEmphases: ResponseArea[] = [
  {
    name: 'Prevention',
    iconSrc: '/images/prevention.png',
    copy: 'Early childhood care, nutrition, early education, and family support help children grow in safety while strengthening families facing economic pressure.',
  },
  {
    name: 'Community empowerment',
    iconSrc: '/images/restoration.png',
    copy: 'Local residents serve as teachers at the care center, building community ownership while creating local jobs and greater stability for their families.',
  },
  {
    name: 'Sustainability',
    iconSrc: '/images/sustainability.png',
    copy: 'The local team is developing a university partnership to expand access to affordable coursework and strengthen long-term support for community programs.',
  },
];

export default function ArgentinaProgramPage({ program }: ArgentinaProgramPageProps) {
  return (
    <CountryPageLayout country="Argentina">
      <ProgramHero
        program={program}
        eyebrow="She Has Hope in South America"
        description="Early childhood care, family support, local employment, and trafficking-awareness education in an underserved Buenos Aires neighborhood."
      />

      <section className="py-12 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#EE0076] font-sans">A locally led partnership launched in 2025</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 font-sans md:text-4xl">Starting early, strengthening families</h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-gray-700 font-serif md:text-lg">
              <p>The Argentina partnership serves families in Barrio Padre Rodolfo Ricciardelli, also known as Villa 1-11-14, an underserved neighborhood in Buenos Aires.</p>
              <p>Led by a local Argentine team, the program begins with the needs of very young children and their caregivers: dependable nutrition, early learning, family support, and a safe place for children to develop.</p>
              <p>Prevention is at the heart of the program. By strengthening families, building community awareness, and giving young children a steadier foundation, the work helps create greater safety and opportunity close to home.</p>
            </div>
          </div>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl bg-gray-100 shadow-md">
            <Image
              src="/images/programs/argentina-community-gathering.jpg"
              alt="A woman and child smile at each other while other children and adults gather nearby"
              fill
              sizes="(min-width: 768px) 448px, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      <ProgramContextSection
        country="Argentina"
        title="Strengthening opportunity close to home"
        challenges={[
          {
            text: 'Economic pressure continues to shape childhood for many families in Argentina, and UNICEF reports that child poverty remains widespread.',
            sourceIndexes: [1],
          },
          {
            text: 'Access to early-childhood care and education also remains uneven across communities and income levels.',
            sourceIndexes: [2],
          },
        ]}
        response="In an underserved Buenos Aires neighborhood, She Has Hope’s local partnership responds with early-childhood care, nutritious meals, family support, local employment, and early learning. Together, these efforts create a dependable place where children and families can grow with dignity and opportunity."
        sources={[
          { label: 'UNICEF Argentina: Child poverty report, 2026', url: 'https://www.unicef.org/argentina/comunicados-prensa/informe-pobreza-monetaria-2026' },
          { label: 'UNICEF Argentina: Integrated early-childhood services', url: 'https://www.unicef.org/argentina/servicios-integrales-para-la-primera-infancia' },
        ]}
      />

      <HopeStatement>
        Trafficking prevention can begin long before exploitation occurs—with nourishment, early learning, family support, and a community equipped to protect its young people.
      </HopeStatement>

      <ResponsePathways
        eyebrow="How the program builds opportunity"
        title="A prevention-centered foundation"
        intro="Early childhood care, local leadership, and a growing education vision work together to strengthen families and expand opportunity."
        areas={programEmphases}
      />

      <section className="py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl bg-gray-100 shadow-md">
            <Image
              src="/images/programs/argentina-early-childhood-shared-meal.jpg"
              alt="Four children sit around a table with plates of food during a shared meal"
              fill
              sizes="(min-width: 768px) 448px, 100vw"
              className="object-cover object-center"
            />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#EE0076] font-sans">Mi Lugar en el Sur</p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 font-sans md:text-4xl">Early childhood care for children ages one to three</h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-gray-700 font-serif md:text-lg">
              <p>The early childhood center supports 150 young children through nutrition, early education, and family support.</p>
              <p>At this age, consistent meals, responsive care, play, language development, and healthy relationships form a foundation that can shape a child’s readiness for school and long-term well-being.</p>
            </div>
          </div>
        </div>
      </section>

      <ImpactSection
        eyebrow="A growing program"
        title="Daily care with meaningful reach"
        intro="Each weekday, the center provides young children with nutritious meals, attentive care, and early learning opportunities."
        stats={[
          { value: '150', label: 'Young children supported each weekday' },
          { value: '9,600', label: 'Meals served monthly' },
        ]}
        note="Consistent care and nourishment help children build a strong foundation for learning and healthy development."
      />

      <section className="py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#EE0076] font-sans">Community empowerment</p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 font-sans md:text-4xl">Local educators, local ownership</h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-gray-700 font-serif md:text-lg">
              <p>Residents from the surrounding community serve as teachers at the early childhood center. Their leadership keeps the work locally rooted while providing meaningful employment for families navigating economic instability.</p>
              <p>A Spanish-language trafficking-awareness booklet supports community education focused on recognizing risks and understanding how education can help protect children and young people.</p>
            </div>
          </div>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl bg-gray-100 shadow-md">
            <Image
              src="/images/programs/argentina-educator-guided-play.jpg"
              alt="An educator guides a young child through a hands-on play activity"
              fill
              sizes="(min-width: 768px) 448px, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      <section className="bg-rose-50 py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#EE0076] font-sans">A sustainable education vision</p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 font-sans md:text-4xl">Coursework that can strengthen the wider mission</h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-gray-700 font-serif md:text-lg">
              <p>The local team is developing an educational partnership with a university to offer affordable coursework to high school graduates.</p>
              <p>The model is intended to widen access to continued education while generating support that can help strengthen the financial sustainability of community programs.</p>
            </div>
          </div>
        </div>
      </section>

      <ProgramCta
        country="Argentina"
        title="Help young children and families build a stronger beginning"
        description="Your partnership helps a locally led Argentina program provide early childhood care, nutritious meals, family support, local employment, and trafficking-prevention education."
      />
    </CountryPageLayout>
  );
}
