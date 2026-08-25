import type { Program } from '../programs';
import {
  CountryPageLayout,
  HopeStatement,
  ImpactSection,
  PhotoPlaceholder,
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
    copy: 'Early childhood care, nutrition, early education, and family support strengthen young children and caregivers before instability can deepen into greater exploitation risks.',
  },
  {
    name: 'Community empowerment',
    iconSrc: '/images/restoration.png',
    copy: 'Local residents serve as teachers at the care center, building community ownership while creating employment for families facing economic pressure.',
  },
  {
    name: 'Sustainability',
    iconSrc: '/images/sustainability.png',
    copy: 'A planned university education partnership is designed to expand affordable coursework while helping generate sustainable support for local programs.',
  },
];

export default function ArgentinaProgramPage({ program }: ArgentinaProgramPageProps) {
  return (
    <CountryPageLayout country="Argentina">
      <ProgramHero
        program={program}
        eyebrow="She Has Hope in South America"
        description="Early childhood care, family support, community employment, and trafficking-awareness education in an underserved Buenos Aires neighborhood."
      />

      <section className="py-12 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#EE0076] font-sans">A locally led partnership launched in 2025</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 font-sans md:text-4xl">Starting early, strengthening families</h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-gray-700 font-serif md:text-lg">
              <p>The Argentina partnership serves families in Barrio Padre Rodolfo Ricciardelli, also known as Villa 1-11-14, an underserved neighborhood in Buenos Aires.</p>
              <p>Led by a local Argentine team, the program begins with the needs of very young children and their caregivers: dependable nutrition, early learning, family support, and a safe place for children to develop.</p>
              <p>This is a prevention-centered program. Rather than presenting it as a direct rescue or survivor-care service, the work strengthens families and community awareness while giving young children a steadier foundation before exploitation can take deeper hold.</p>
            </div>
          </div>
          <PhotoPlaceholder
            title="Argentina community or local-team photo"
            guidance="A people-centered image of the local team, neighborhood community, or family activity that protects children’s privacy and avoids diminishing portrayals."
          />
        </div>
      </section>

      <HopeStatement>
        Trafficking prevention can begin long before exploitation occurs—with nourishment, early learning, family support, and a community equipped to protect its young people.
      </HopeStatement>

      <ResponsePathways
        eyebrow="Current program emphasis"
        title="A prevention-centered foundation"
        intro="Argentina’s new program does not yet span every She Has Hope response pathway. Its present work is concentrated in prevention, community empowerment, and sustainable local capacity."
        areas={programEmphases}
      />

      <section className="py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 lg:gap-16 lg:px-8">
          <PhotoPlaceholder
            title="Early childhood care and learning photo"
            guidance="Children engaged in age-appropriate play, blocks, books, art, a shared meal, or another permission-cleared learning activity at the center."
          />
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#EE0076] font-sans">Mi Lugar en el Sur</p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 font-sans md:text-4xl">Comprehensive care for children ages one to three</h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-gray-700 font-serif md:text-lg">
              <p>The early childhood center provides comprehensive care for 150 young children through nutrition, early education, and family support.</p>
              <p>At this age, consistent meals, responsive care, play, language development, and healthy relationships form a foundation that can shape a child’s readiness for school and long-term well-being.</p>
            </div>
          </div>
        </div>
      </section>

      <ImpactSection
        eyebrow="A growing program"
        title="Daily care with meaningful reach"
        intro="These figures reflect the Argentina program’s current reported service level."
        stats={[
          { value: '150', label: 'Young children supported each weekday' },
          { value: '9,600', label: 'Meals served monthly' },
        ]}
        note="Argentina program figures reported through 2026."
      />

      <section className="py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#EE0076] font-sans">Community empowerment</p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 font-sans md:text-4xl">Local educators, local ownership</h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-gray-700 font-serif md:text-lg">
              <p>Residents from the surrounding community serve as teachers at the early childhood center. Their leadership keeps the work locally rooted while providing meaningful employment for families navigating economic instability.</p>
              <p>A Spanish-language trafficking-awareness booklet was reported in Argentina in September 2025, giving the local team a community-education resource focused on recognizing risks and understanding how education can help protect children and young people.</p>
            </div>
          </div>
          <PhotoPlaceholder
            title="Argentina educators and community photo"
            guidance="Local teachers preparing activities, supporting children, meeting with caregivers, or participating in trafficking-awareness education."
          />
        </div>
      </section>

      <section className="bg-rose-50 py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 lg:gap-16 lg:px-8">
          <PhotoPlaceholder
            title="University partnership or young-adult learning photo"
            guidance="A permission-cleared classroom, coursework, student gathering, or local education-partnership image that communicates opportunity without promising outcomes."
          />
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
        description="Your partnership helps a locally led Argentina program provide early childhood care, nutritious meals, family support, community employment, and trafficking-prevention education."
      />
    </CountryPageLayout>
  );
}
