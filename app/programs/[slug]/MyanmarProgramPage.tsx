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

type MyanmarProgramPageProps = {
  program: Program;
};

const responseAreas: ResponseArea[] = [
  {
    name: 'Prevention',
    iconSrc: '/images/prevention.png',
    copy: 'Stable residential care, education, nutritious food, and long-term support reduce the pressures that can leave girls and other vulnerable young people exposed to exploitation.',
  },
  {
    name: 'Protection',
    iconSrc: '/images/rescue.png',
    copy: 'Four locally led homes provide young residents with a consistent place to live and learn, without presenting the program as a direct trafficking-rescue service.',
  },
  {
    name: 'Rehabilitation',
    iconSrc: '/images/rehabilitation.png',
    copy: 'Daily routines, education, meals, trusted caregivers, and community help young residents regain stability and continue developing through difficult national circumstances.',
  },
  {
    name: 'Restoration',
    iconSrc: '/images/restoration.png',
    copy: 'An on-campus school and vocational preparation help young people build knowledge and practical skills for the transition from residential care into adulthood.',
  },
  {
    name: 'Sustainability',
    iconSrc: '/images/sustainability.png',
    copy: 'A 12-acre rice farm and a one-acre campus farm provide staple food and fresh produce for children, staff, and widows supported by the local team.',
  },
];

export default function MyanmarProgramPage({ program }: MyanmarProgramPageProps) {
  return (
    <CountryPageLayout country="Myanmar">
      <ProgramHero
        program={program}
        eyebrow="She Has Hope in Southeast Asia"
        description="Long-term residential care, education, vocational preparation, and locally grown food for girls and other vulnerable young people."
      />

      <section className="py-12 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#EE0076] font-sans">A locally led partnership since 2008</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 font-sans md:text-4xl">Steady care in an uncertain environment</h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-gray-700 font-serif md:text-lg">
              <p>The Myanmar partnership began with residential care for orphaned children. Over time, the locally led program grew to include four homes, education, vocational preparation, and farmland that supports daily nutrition.</p>
              <p>The work continues in the midst of national instability and serious security challenges. Public storytelling therefore emphasizes people, care, and outcomes without publishing operational details that could expose girls, other residents, staff, or facilities.</p>
              <p>At its heart, the program offers consistency: a place to live, meals, education, trusted caregivers, and practical preparation for the future.</p>
            </div>
          </div>
          <PhotoPlaceholder
            title="Myanmar community or local-team photo"
            guidance="A close, people-centered image of the local team or community that avoids identifiable campus, route, signage, or security details."
          />
        </div>
      </section>

      <HopeStatement>
        In uncertain times, dependable care becomes its own kind of hope—a home, a classroom, a meal, and people who keep showing up.
      </HopeStatement>

      <ResponsePathways
        title="Five connected pathways toward stability"
        intro="Myanmar’s work is centered on prevention and protection rather than a publicly described direct-rescue operation. Residential care, learning, practical preparation, and farmland sustainability reinforce one another."
        areas={responseAreas}
      />

      <section className="py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 lg:gap-16 lg:px-8">
          <PhotoPlaceholder
            title="Myanmar residential care and daily-life photo"
            guidance="A permission-cleared shared meal, study time, recreation, celebration, or common-space moment that does not reveal facility security details."
          />
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#EE0076] font-sans">Residential care</p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 font-sans md:text-4xl">Four homes built around consistency</h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-gray-700 font-serif md:text-lg">
              <p>The Myanmar program has grown to include four residential homes where orphaned children receive complete daily care from locally employed staff.</p>
              <p>Residential care includes nutrition, a stable living environment, education support, and long-term relationships. These ordinary rhythms help young people keep learning and growing even when the wider environment is unpredictable.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-rose-50 py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#EE0076] font-sans">Education on the main campus</p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 font-sans md:text-4xl">A safer place to learn</h2>
            <p className="mt-5 text-lg leading-8 text-gray-700 font-serif">In 2025, the local team opened an on-campus school so students in the residential program could continue their education in a more controlled and supportive setting.</p>
          </div>
          <PhotoPlaceholder
            title="Myanmar on-campus school photo"
            guidance="A wide classroom, learning activity, school supplies, teacher-led lesson, or student gathering without identifying names or revealing sensitive location details."
            className="mt-10 min-h-96"
          />
        </div>
      </section>

      <ImpactSection
        eyebrow="A long record of care"
        title="Residential support and locally grown food"
        intro="These figures reflect the Myanmar program’s current structure and cumulative food production as reported through 2026."
        stats={[
          { value: '4', label: 'Locally led residential homes' },
          { value: '128', label: 'Tons of farmland produce' },
        ]}
        note="Myanmar program structure and cumulative produce reported through 2026."
      />

      <section className="py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#EE0076] font-sans">Preparation for adulthood</p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 font-sans md:text-4xl">Vocational learning after graduation</h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-gray-700 font-serif md:text-lg">
              <p>A small vocational training school serves young people who have graduated from the residential program, helping them continue building skills and knowledge for future careers.</p>
              <p>This bridge matters: long-term care is strongest when young adults can move forward with practical preparation, confidence, and a clearer path into independent life.</p>
            </div>
          </div>
          <PhotoPlaceholder
            title="Myanmar vocational training or graduation photo"
            guidance="A permission-cleared training activity, classroom, graduation milestone, or young-adult learning image that avoids names and personal histories."
          />
        </div>
      </section>

      <section className="bg-rose-50 py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 lg:gap-16 lg:px-8">
          <PhotoPlaceholder
            title="Myanmar rice farm or campus garden photo"
            guidance="Rice fields, harvested grain, fresh vegetables, careful food preparation, or a close farming activity that does not expose facility location details."
          />
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#EE0076] font-sans">Locally rooted sustainability</p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 font-sans md:text-4xl">Rice and fresh produce for daily meals</h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-gray-700 font-serif md:text-lg">
              <p>A 12-acre rice farm purchased in 2010 has produced a dependable staple for children and staff in the four homes, as well as widows supported by the local team.</p>
              <p>A separate one-acre campus farm adds nutritious produce to daily meals. Together, these farms turn local land and labor into practical food security.</p>
            </div>
          </div>
        </div>
      </section>

      <ProgramCta
        country="Myanmar"
        description="Your partnership helps a locally led team provide girls and other vulnerable young people with residential care, education, vocational preparation, and dependable food amid instability."
      />
    </CountryPageLayout>
  );
}
