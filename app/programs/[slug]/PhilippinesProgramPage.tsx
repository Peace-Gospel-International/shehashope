import type { Program } from '../programs';
import {
  CountryPageLayout,
  HopeStatement,
  PhotoPlaceholder,
  ProgramCta,
  ProgramHero,
  ResponsePathways,
  type ResponseArea,
} from './ProgramPageShared';

type PhilippinesProgramPageProps = {
  program: Program;
};

const responseAreas: ResponseArea[] = [
  {
    name: 'Prevention',
    iconSrc: '/images/prevention.png',
    copy: 'Children’s Hope Centers in Cebu and Manila help children remain enrolled in school through tutoring, meals, school supplies, uniforms, hygiene support, and supervised activities.',
  },
  {
    name: 'Rescue',
    iconSrc: '/images/rescue.png',
    copy: 'In Cebu, the local team responded after encountering girls affected by child labor and exploitative situations, opening a residential home where girls could receive refuge and consistent care.',
  },
  {
    name: 'Rehabilitation',
    iconSrc: '/images/rehabilitation.png',
    copy: 'Residential care in Cebu provides a stable home environment with nutrition, education, study space, and long-term relationships for orphaned and at-risk girls.',
  },
  {
    name: 'Restoration',
    iconSrc: '/images/restoration.png',
    copy: 'The Cebu women’s trade-school program develops craft-making and small-business skills for women and their daughters who face serious trafficking risks.',
  },
  {
    name: 'Sustainability',
    iconSrc: '/images/sustainability.png',
    copy: 'Cebu’s diverse farmland produces eggs, coconuts, fish, bananas, vegetables, and livestock income that helps support the girls home and Children’s Hope Center.',
  },
];

export default function PhilippinesProgramPage({ program }: PhilippinesProgramPageProps) {
  return (
    <CountryPageLayout country="Philippines">
      <ProgramHero
        program={program}
        eyebrow="She Has Hope in Southeast Asia"
        description="Two locally led programs—Cebu and Manila—help children and women move toward education, safety, practical opportunity, and greater resilience."
      />

      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#EE0076] font-sans">One country, two locally led teams</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 font-sans md:text-4xl">Hope taking root in Cebu and Manila</h2>
            <p className="mt-6 text-lg leading-8 text-gray-700 font-serif">
              The Philippines program brings together two distinct locations. Cebu is the primary program hub, with residential care, a Children’s Hope Center, a women’s trade school, and a diverse farmland enterprise. Manila’s work is focused on one Children’s Hope Center serving children in an underserved urban community.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-pink-100 bg-rose-50 p-8 shadow-sm">
              <span className="rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#EE0076] font-sans">Main program location</span>
              <h3 className="mt-5 text-3xl font-bold text-gray-900 font-sans">Cebu</h3>
              <p className="mt-3 leading-7 text-gray-700 font-serif">Residential care, education support, trafficking prevention, practical skills, and farmland sustainability.</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <span className="rounded-full bg-gray-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-gray-600 font-sans">Second program location</span>
              <h3 className="mt-5 text-3xl font-bold text-gray-900 font-sans">Manila</h3>
              <p className="mt-3 leading-7 text-gray-700 font-serif">A Children’s Hope Center providing educational, nutritional, hygiene, and school-enrollment support.</p>
            </div>
          </div>
        </div>
      </section>

      <HopeStatement>
        A safer future grows when education, a stable home, practical skills, and local sustainability work together.
      </HopeStatement>

      <ResponsePathways
        title="Five pathways connected across two locations"
        intro="Cebu carries the broadest range of programs, while Manila’s Hope Center strengthens prevention by helping children remain connected to school, nutrition, and supportive care."
        areas={responseAreas}
      />

      <section className="py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#EE0076] font-sans">Cebu · Main program hub</p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 font-sans md:text-4xl">A connected campus of care and opportunity</h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-gray-700 font-serif md:text-lg">
              <p>The Cebu partnership began in 2009 with a locally led commitment to children and families affected by severe poverty and exploitation risks.</p>
              <p>Today, residential care, after-school education, practical training, and the farmland enterprise reinforce one another. Each part of the program helps create greater stability for children and women while strengthening the local team’s ability to serve.</p>
            </div>
          </div>
          <PhotoPlaceholder
            title="Cebu community or local-team photo"
            guidance="A welcoming, permission-cleared image of the Cebu team, community, or a people-centered campus moment that does not expose sensitive location details."
          />
        </div>
      </section>

      <section className="bg-rose-50 py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 lg:gap-16 lg:px-8">
          <PhotoPlaceholder
            title="Cebu girls home and daily care photo"
            guidance="A warm shared-learning, meal, recreation, or common-space image that communicates stable residential care without identifying anyone’s history."
          />
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#EE0076] font-sans">Cebu · Residential care</p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 font-sans md:text-4xl">A stable home for girls who need one</h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-gray-700 font-serif md:text-lg">
              <p>The Cebu girls home opened in 2011 after the local team encountered orphaned girls affected by child labor and exploitative situations through its community outreach.</p>
              <p>The home provides residential care, nutrition, education support, living and study space, and the consistency of a local team committed to walking with each girl over time.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#EE0076] font-sans">Cebu · Education and prevention</p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 font-sans md:text-4xl">A Children’s Hope Center that supports school success</h2>
            <p className="mt-5 text-lg leading-8 text-gray-700 font-serif">Launched in 2015, the Cebu Hope Center provides after-school care designed to help children remain enrolled and equipped for school through tutoring, meals, school supplies, uniforms, hygiene items, and recreation.</p>
          </div>
          <PhotoPlaceholder
            title="Cebu Children’s Hope Center photo"
            guidance="A wide image of tutoring, school supplies, a shared meal, recreation, or children preparing for a new school term."
            className="mt-10 min-h-96"
          />
        </div>
      </section>

      <section className="bg-gray-50 py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#EE0076] font-sans">Cumulative program reach</p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 font-sans md:text-4xl">Care, education, and locally grown resources</h2>
          </div>
          <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3">
            {[
              ['872', 'Children educated'],
              ['10', 'Children in residential orphan care'],
              ['99', 'Tons of farmland produce'],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl bg-white p-8 text-center shadow-md">
                <p className="text-5xl font-bold text-[#EE0076] font-sans">{value}</p>
                <p className="mt-3 text-lg font-semibold text-gray-800 font-sans">{label}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-center text-sm text-gray-500 font-serif">Cumulative Philippines program figures reported through 2026.</p>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#EE0076] font-sans">Cebu · Practical restoration</p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 font-sans md:text-4xl">Creative skills with economic purpose</h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-gray-700 font-serif md:text-lg">
              <p>The Cebu women’s trade-school program supports women and their daughters who face serious trafficking risks by developing craft-making and small-business skills.</p>
              <p>Practical learning can strengthen confidence and create alternatives to deceptive job offers used by traffickers to exploit women seeking income.</p>
            </div>
          </div>
          <PhotoPlaceholder
            title="Cebu women’s trade-school photo"
            guidance="One focused image of craft-making instruction, participants’ hands at work, or finished products, with permission and dignity at the center."
          />
        </div>
      </section>

      <section className="bg-rose-50 py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 lg:gap-16 lg:px-8">
          <PhotoPlaceholder
            title="Cebu farmland enterprise photo"
            guidance="A harvest, hen house, fishery, coconut or banana grove, vegetables, or a local farmland team at work."
          />
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#EE0076] font-sans">Cebu · Sustainability</p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 font-sans md:text-4xl">A diverse farm that helps carry the work</h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-gray-700 font-serif md:text-lg">
              <p>The Cebu farmland enterprise has produced eggs, coconuts, fish, bananas, vegetables, and income from goat and pork stockbreeding.</p>
              <p>Food from the farm strengthens meals, while market income helps the local team operate the girls home and Children’s Hope Center alongside donor support.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-pink-100 bg-gradient-to-br from-white to-rose-50 p-7 shadow-md md:p-12">
            <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-16">
              <div>
                <span className="rounded-full bg-pink-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#EE0076] font-sans">Manila · Children’s Hope Center</span>
                <h2 className="mt-5 text-3xl font-bold text-gray-900 font-sans md:text-4xl">An urban center focused on prevention</h2>
                <div className="mt-6 space-y-5 text-base leading-8 text-gray-700 font-serif md:text-lg">
                  <p>The Manila team began its Hope Center in 2008, and Peace Gospel entered the partnership in 2012. A permanent facility completed in 2016 created a dedicated place for after-school support.</p>
                  <p>The center helps families find an alternative to hazardous child labor by providing educational support, school-enrollment essentials, nutritious meals, clean water, hygiene lessons and supplies, basic computer learning, games, and seasonal activities.</p>
                  <p>Manila’s role within the Philippines program is intentionally focused: one locally led Children’s Hope Center helping children stay connected to school and supportive care.</p>
                </div>
              </div>
              <PhotoPlaceholder
                title="Manila Children’s Hope Center photo"
                guidance="A permission-cleared image of tutoring, school materials, a meal, hygiene support, recreation, or the local team inside the Hope Center."
              />
            </div>
          </div>
        </div>
      </section>

      <ProgramCta
        country="the Philippines"
        description="Your partnership helps locally led teams in Cebu and Manila provide residential care, education, practical skills, and sustainable support for children and women facing exploitation risks."
      />
    </CountryPageLayout>
  );
}
