import Image from 'next/image';
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

type UgandaProgramPageProps = {
  program: Program;
};

const responseAreas: ResponseArea[] = [
  {
    name: 'Prevention',
    iconSrc: '/images/prevention.png',
    copy: 'A rural primary school, boarding high school, orphan care, meals, clean water, and medical support address pressures that can leave girls vulnerable to exploitation.',
  },
  {
    name: 'Protection',
    iconSrc: '/images/rescue.png',
    copy: 'A girls home and residential places at the boarding high school provide safe, consistent care for orphaned and at-risk students without overstating the program as a direct rescue service.',
  },
  {
    name: 'Rehabilitation',
    iconSrc: '/images/rehabilitation.png',
    copy: 'Residential care, nutritious meals, education, and clean water across the two campuses help young residents and students regain stability and continue developing.',
  },
  {
    name: 'Restoration',
    iconSrc: '/images/restoration.png',
    copy: 'The women’s trade school offers practical learning in tailoring, catering, gardening, and computer literacy to strengthen pathways toward fair work and family stability.',
  },
  {
    name: 'Sustainability',
    iconSrc: '/images/sustainability.png',
    copy: 'A 15-acre farmland enterprise produces food for program meals and marketable crops, reinforcing the local team’s ability to sustain meals and services over time.',
  },
];

export default function UgandaProgramPage({ program }: UgandaProgramPageProps) {
  return (
    <CountryPageLayout country="Uganda">
      <ProgramHero
        program={program}
        eyebrow="She Has Hope in East Africa"
        description="Education, residential care, practical skills, clean water, medical care, and sustainable food production in rural Mayuge District."
      />

      <section className="py-12 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#EE0076] font-sans">Locally led work in Mayuge District</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 font-sans md:text-4xl">Two rural campuses where essential services connect</h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-gray-700 font-serif md:text-lg">
              <p>For more than fifteen years, the Uganda team has built a connected response for girls and women, alongside families across rural Mayuge District.</p>
              <p>The main campus brings together the boarding high school and women’s trade school, along with one clean-water well and the medical clinic. A second campus is home to the rural primary school and girls home.</p>
              <p>Across both campuses, education, residential care, meals, clean water, practical training, health care, and farmland sustainability work as a connected program network rather than as isolated projects.</p>
            </div>
          </div>
          <div className="relative aspect-[5/3] overflow-hidden rounded-2xl bg-gray-100 shadow-md">
            <Image
              src="/images/programs/uganda-primary-campus-students.jpg"
              alt="Seven smiling students in school uniforms hold notebooks outdoors with campus buildings behind them"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <HopeStatement>
        Education becomes more powerful when a girl also has food, clean water, health care, safety, and people committed to her future.
      </HopeStatement>

      <ResponsePathways
        title="Five pathways working across two rural campuses"
        intro="Uganda’s two campuses connect education and residential care with practical training, health, water, and locally sustained food production."
        areas={responseAreas}
      />

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#EE0076] font-sans">Education from primary through high school</p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 font-sans md:text-4xl">Two schools, one long-term pathway</h2>
            <p className="mt-5 text-lg leading-8 text-gray-700 font-serif">The local team operates a rural primary school and a residential boarding high school on separate campuses. Together, they help students continue learning across critical years while the two-campus network supports nutrition, water, health, and residential needs.</p>
          </div>
          <div className="relative mt-10 aspect-video overflow-hidden rounded-2xl bg-gray-100 shadow-md">
            <Image
              src="/images/programs/uganda-primary-boarding-schools-wide.jpg"
              alt="Two-panel image of a teacher guiding young students writing in notebooks and a student beside laboratory glassware"
              fill
              sizes="(max-width: 1200px) 100vw, 1152px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-rose-50 py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="relative aspect-[3/2] overflow-hidden rounded-2xl bg-gray-100 shadow-md">
            <Image
              src="/images/programs/uganda-girls-home-community.jpg"
              alt="Group of girls smiling and dancing together outdoors among trees"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#EE0076] font-sans">Orphan care and protection</p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 font-sans md:text-4xl">A stable place to live and learn</h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-gray-700 font-serif md:text-lg">
              <p>The Uganda girls home shares a campus with the rural primary school, connecting residential care, nutrition, clean water, and primary education in one setting.</p>
              <p>On the main campus, the boarding high school also provides residential places and tuition support for orphaned students, allowing care and education to continue together through the secondary-school years.</p>
            </div>
          </div>
        </div>
      </section>

      <ImpactSection
        eyebrow="A long record of service"
        title="Education, care, and locally grown resources"
        intro="These cumulative figures reflect the Uganda partnership’s reported work through 2026."
        stats={[
          { value: '4,689', label: 'Children educated' },
          { value: '1,472', label: 'Children cared for through orphan-care programs' },
          { value: '215', label: 'Tons of farmland produce' },
        ]}
        note="Uganda program figures reported through 2026."
      />

      <section className="py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#EE0076] font-sans">Practical restoration</p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 font-sans md:text-4xl">Skills that strengthen women and families</h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-gray-700 font-serif md:text-lg">
              <p>The women’s trade school offers learning in tailoring, catering, gardening, and computer literacy.</p>
              <p>These practical skills are intended to strengthen pathways toward fair work and help women care for their families, reducing economic pressures that traffickers can exploit.</p>
            </div>
          </div>
          <div className="relative aspect-[3/2] overflow-hidden rounded-2xl bg-gray-100 shadow-md">
            <Image
              src="/images/programs/uganda-womens-trade-school.jpg"
              alt="Woman holding a young child beside sewing machines and patterned fabric in a workshop"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-rose-50 py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#EE0076] font-sans">Farmland sustainability</p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 font-sans md:text-4xl">Food that supports more than 70,000 meals each month</h2>
            <p className="mt-5 text-lg leading-8 text-gray-700 font-serif">Across 15 acres, the local team grows beans, corn, potatoes, oranges, bananas, and passion fruit and also maintains a piggery and free-range poultry project. Together, these resources help supply program meals while marketable crops reinforce local sustainability.</p>
          </div>
          <div className="relative mt-10 aspect-[3/2] overflow-hidden rounded-2xl bg-gray-100 shadow-md">
            <Image
              src="/images/programs/uganda-farmland-avocado-harvest.jpg"
              alt="Students in school uniforms gather avocados from trees"
              fill
              sizes="(max-width: 1200px) 100vw, 1152px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 lg:gap-16 lg:px-8">
          <PhotoPlaceholder
            title="Uganda clean-water or medical-care photo"
            guidance="A well or clean-water access point at either campus, or the main-campus medical clinic, health check, or health-and-hygiene activity with appropriate permissions."
          />
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#EE0076] font-sans">Health and essential infrastructure</p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 font-sans md:text-4xl">Clean water across two campuses, medical care on the main campus</h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-gray-700 font-serif md:text-lg">
              <p>Three wells provide clean water across the two campuses and for members of the surrounding community. One of those wells is located on the main campus.</p>
              <p>The medical clinic is also located on the main campus and has treated more than 2,500 people from the community and boarding high school since opening in 2012.</p>
            </div>
          </div>
        </div>
      </section>

      <ProgramCta
        country="Uganda"
        description="Your partnership helps a locally led Uganda team connect education, residential care, practical skills, clean water, medical care, and sustainable food production."
      />
    </CountryPageLayout>
  );
}
