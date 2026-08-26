import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import type { Program } from '../programs';
import { ProgramContextSection } from './ProgramPageShared';

type NepalProgramPageProps = {
  program: Program;
};

type PhotoPlaceholderProps = {
  title: string;
  guidance: string;
  className?: string;
};

function PhotoPlaceholder({ title, guidance, className = '' }: PhotoPlaceholderProps) {
  return (
    <div
      className={`flex min-h-72 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-pink-300 bg-gradient-to-br from-pink-50 via-white to-rose-50 px-8 py-12 text-center ${className}`}
    >
      <span aria-hidden="true" className="text-4xl">📷</span>
      <p className="mt-4 text-lg font-bold text-gray-800 font-sans">{title}</p>
      <p className="mt-2 max-w-sm text-sm leading-relaxed text-gray-600 font-serif">
        {guidance}
      </p>
      <span className="mt-4 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#EE0076] shadow-sm font-sans">
        Photo coming soon
      </span>
    </div>
  );
}

const responseAreas = [
  {
    name: 'Prevention',
    iconSrc: '/images/prevention.png',
    copy: 'Awareness and education help girls recognize false job offers, deceptive relationships, social media manipulation, and other tactics traffickers use to gain trust.',
  },
  {
    name: 'Rescue',
    iconSrc: '/images/rescue.png',
    copy: 'When a trafficking situation is identified, local teams collaborate with appropriate authorities to pursue a safe response and determine the next steps for care.',
  },
  {
    name: 'Rehabilitation',
    iconSrc: '/images/rehabilitation.png',
    copy: 'Safe accommodation, counseling, medical care, nutritious meals, education, and patient support create space for survivors to heal and regain stability.',
  },
  {
    name: 'Restoration',
    iconSrc: '/images/restoration.png',
    copy: 'Tailoring, English, computer literacy, and practical life skills help women build confidence and prepare for employment or a small business of their own.',
  },
  {
    name: 'Sustainability',
    iconSrc: '/images/sustainability.png',
    copy: 'New Hope Fashions connects apprenticeship, small-business learning, and craft production so skills can grow into income and strengthen the program over time.',
  },
];

export default function NepalProgramPage({ program }: NepalProgramPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <div className="border-b bg-gray-50">
          <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="text-sm font-sans">
              <Link href="/" className="text-rose-600 hover:underline">Home</Link>
              <span aria-hidden="true" className="mx-2 text-gray-400">/</span>
              <span className="text-gray-600">Nepal</span>
            </nav>
          </div>
        </div>

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
                  <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-pink-200 font-sans">
                    She Has Hope in South Asia
                  </p>
                  <h1 className="text-4xl font-bold font-sans md:text-6xl">Nepal</h1>
                  <p className="mt-4 text-lg leading-relaxed font-serif md:text-2xl">
                    Safe shelter, healing care, and practical pathways forward for women and girls affected by human trafficking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 lg:gap-16 lg:px-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#EE0076] font-sans">A locally led response in Kathmandu</p>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 font-sans md:text-4xl">
                From vulnerability toward safety and hope
              </h2>
              <div className="mt-6 space-y-5 text-base leading-8 text-gray-700 font-serif md:text-lg">
                <p>
                  Human trafficking in Nepal continues to evolve. Economic pressure, false promises of employment, deceptive relationships, and manipulation through social media can all be used to exploit trust and isolate girls and women from support.
                </p>
                <p>
                  Since 2008, She Has Hope has partnered with a local Nepali family and Sustainable Development Foundation Nepal to respond with practical, compassionate care. Together, we support a rehabilitation home and trade school in Kathmandu for women and girls rescued from trafficking or facing serious trafficking risks.
                </p>
                <p>
                  The program meets immediate needs while looking far beyond the moment of crisis. Safe accommodation, healing relationships, education, and vocational skills work together so each participant can move toward stability and greater independence.
                </p>
              </div>
            </div>
            <div className="relative aspect-[3/2] overflow-hidden rounded-2xl bg-gray-100 shadow-md">
              <Image
                src="/images/programs/nepal-kathmandu-community-team.jpg"
                alt="Five women wearing colorful headscarves laugh together with their arms around one another"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <ProgramContextSection
          country="Nepal"
          title="Keeping opportunity stronger than exploitation"
          challenges={[
            {
              text: 'Poverty, gender discrimination, and early marriage can push girls out of school and narrow their choices.',
              sourceIndexes: [1],
            },
            {
              text: 'Deceptive recruitment and manipulation can further increase exposure to trafficking and other forms of exploitation.',
              sourceIndexes: [1, 2],
            },
          ]}
          response="She Has Hope’s locally led partnership in Kathmandu provides safe accommodation, restorative care, education, and vocational training for women and girls affected by trafficking or facing serious risks. The response is designed around each participant’s dignity, goals, and path toward greater independence."
          sources={[
            { label: 'UNICEF Nepal: Sparking possibilities', url: 'https://www.unicef.org/nepal/stories/sparking-possibilities' },
            { label: 'UN Women: Survivor leadership in Nepal', url: 'https://asiapacific.unwomen.org/en/stories/feature-story/2026/02/we-help-each-other-survive' },
          ]}
        />

        <section className="bg-gradient-to-br from-[#F2978F] to-[#EE0076] py-12 text-white md:py-16">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-2xl font-bold leading-relaxed font-sans md:text-4xl">
              Safe shelter is only the beginning. Hope grows through healing, education, skills, and the freedom to build a future.
            </p>
          </div>
        </section>

        <section className="bg-gray-50 py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#EE0076] font-sans">Our trafficking response</p>
              <h2 className="mt-3 text-3xl font-bold text-gray-900 font-sans md:text-4xl">
                Five connected pathways toward hope
              </h2>
              <p className="mt-5 text-lg leading-8 text-gray-700 font-serif">
                Nepal’s response brings together awareness, safe intervention, restorative care, practical preparation, and sustainable opportunity around each survivor’s dignity and goals.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {responseAreas.map((area, index) => (
                <article
                  key={area.name}
                  className={`rounded-2xl border border-pink-100 bg-white p-7 shadow-sm ${index === responseAreas.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                >
                  <Image
                    src={area.iconSrc}
                    alt=""
                    width={96}
                    height={96}
                    loading="eager"
                    className="h-24 w-24"
                  />
                  <h3 className="mt-5 text-2xl font-bold text-gray-900 font-sans">{area.name}</h3>
                  <p className="mt-3 leading-7 text-gray-700 font-serif">{area.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 lg:gap-16 lg:px-8">
            <PhotoPlaceholder
              title="Trafficking awareness photo"
              guidance="A consent-cleared awareness session, community workshop, educational material, or local outreach image."
            />
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#EE0076] font-sans">Prevention in a changing landscape</p>
              <h2 className="mt-3 text-3xl font-bold text-gray-900 font-sans md:text-4xl">Recognizing new forms of deception</h2>
              <div className="mt-6 space-y-5 text-base leading-8 text-gray-700 font-serif md:text-lg">
                <p>
                  Traffickers increasingly use social media, false romantic relationships, fake marriages, misleading documents, and promises of work or opportunity abroad. These tactics can look personal and believable, making them especially difficult to recognize.
                </p>
                <p>
                  Awareness training gives girls practical tools to question deceptive offers, seek help from trusted people, and understand how traffickers manipulate trust. Community education and coordinated local vigilance remain essential as trafficking methods change.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-rose-50 py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-16">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#EE0076] font-sans">Rehabilitation and care</p>
                <h2 className="mt-3 text-3xl font-bold text-gray-900 font-sans md:text-4xl">A secure place to regain stability</h2>
                <div className="mt-6 space-y-5 text-base leading-8 text-gray-700 font-serif md:text-lg">
                  <p>
                    At the She Has Hope Rehabilitation Home, survivors receive safe accommodation, nutritious meals, medical attention, counseling, and steady encouragement in a compassionate environment.
                  </p>
                  <p>
                    Daily life also includes English language learning, basic computer literacy, educational support, recreation, and opportunities to rebuild confidence. The program treats each participant as a whole person—not a case number or a painful chapter in her story.
                  </p>
                </div>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {['Safe accommodation', 'Health and nutrition', 'Counseling and support', 'English and computer skills'].map((item) => (
                    <div key={item} className="rounded-xl bg-white px-4 py-3 font-semibold text-gray-800 shadow-sm font-sans">
                      <span aria-hidden="true" className="mr-2 text-[#EE0076]">✓</span>{item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative aspect-[3/2] overflow-hidden rounded-2xl bg-gray-100 shadow-md">
                <Image
                  src="/images/programs/nepal-rehabilitation-daily-care.jpg"
                  alt="Three smiling young women sit together at a sewing machine while holding pieces of floral fabric"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#EE0076] font-sans">Restoration through practical learning</p>
              <h2 className="mt-3 text-3xl font-bold text-gray-900 font-sans md:text-4xl">Skills for work, confidence, and independence</h2>
              <p className="mt-5 text-lg leading-8 text-gray-700 font-serif">
                The trade school beside the rehabilitation home helps women translate their creativity and perseverance into practical economic options.
              </p>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 font-sans">Tailoring and textile work</h3>
                <p className="mt-3 leading-7 text-gray-700 font-serif">
                  Training includes sewing, cutting, knitting, weaving, clothing construction, bag-making, and related handicraft skills taught through consistent daily practice.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 font-sans">Workplace readiness</h3>
                <p className="mt-3 leading-7 text-gray-700 font-serif">
                  Basic English communication and computer skills—from typing to familiar workplace software—help participants prepare for a wider range of employment opportunities.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 font-sans">Small-business learning</h3>
                <p className="mt-3 leading-7 text-gray-700 font-serif">
                  New Hope Fashions provides apprenticeship experience through craft production while introducing the consistency, quality, teamwork, and planning required for income-generating work. Through a partnership with <a href="https://www.sapanadreams.com/collections/she-has-hope" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#EE0076] hover:underline">Sapana Dreams</a>, participants can help create textile products for sale, connecting hands-on learning with real-world quality and customer expectations.
                </p>
              </div>
            </div>

            <div className="relative mt-10 aspect-video overflow-hidden rounded-2xl bg-gray-100 shadow-md">
              <Image
                src="/images/programs/nepal-trade-school-new-hope-fashions.jpg"
                alt="Three-panel collage showing a smiling woman sewing, three women holding patterned textile bags, and a display of finished products"
                fill
                sizes="(min-width: 1024px) 1152px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#EE0076] font-sans">A growing legacy</p>
              <h2 className="mt-3 text-3xl font-bold text-gray-900 font-sans md:text-4xl">From training toward lasting independence</h2>
              <p className="mt-5 text-lg leading-8 text-gray-700 font-serif">
                Restoration is measured over years, not moments. Graduates carry their skills into work, entrepreneurship, family life, and their communities.
              </p>
            </div>

            <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-8 text-center shadow-md">
                <p className="text-5xl font-bold text-[#EE0076] font-sans">229</p>
                <p className="mt-3 text-lg font-semibold text-gray-800 font-sans">Rehabilitation home and trade school graduates</p>
              </div>
              <div className="rounded-2xl bg-white p-8 text-center shadow-md">
                <p className="text-5xl font-bold text-[#EE0076] font-sans">91</p>
                <p className="mt-3 text-lg font-semibold text-gray-800 font-sans">Graduates who have started their own businesses</p>
              </div>
            </div>
            <p className="mt-5 text-center text-sm text-gray-500 font-serif">Program figures reported through 2026.</p>

            <div className="relative mx-auto mt-10 aspect-[3/2] max-w-4xl overflow-hidden rounded-2xl bg-gray-100 shadow-md">
              <Image
                src="/images/programs/nepal-graduates-restoration.jpg"
                alt="A group of smiling women hold certificates while posing together in two rows"
                fill
                sizes="(min-width: 1024px) 896px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 lg:gap-16 lg:px-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#EE0076] font-sans">Long-term prevention and restoration</p>
              <h2 className="mt-3 text-3xl font-bold text-gray-900 font-sans md:text-4xl">Education that continues into adulthood</h2>
              <div className="mt-6 space-y-5 text-base leading-8 text-gray-700 font-serif md:text-lg">
                <p>
                  From 2008 through 2023, the Nepal orphan home provided care for 28 children. Although the residential home has completed its season of operation, the relationships and commitment continue.
                </p>
                <p>
                  Some former residents are now pursuing college through educational scholarships, completing internships, gaining workplace experience, and taking important steps toward independent adult life. That long arc of support reflects the heart of She Has Hope: walking with each young person toward a future with greater safety and opportunity.
                </p>
              </div>
            </div>
            <div className="relative aspect-[3/2] overflow-hidden rounded-2xl bg-gray-100 shadow-md">
              <Image
                src="/images/programs/nepal-education-young-adult-milestone.jpg"
                alt="Two smiling young women in professional uniforms stand outside a university management building"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#F2978F] to-[#EE0076] px-7 py-12 text-center text-white shadow-xl md:px-14 md:py-16">
              <h2 className="text-3xl font-bold font-sans md:text-4xl">Help survivors build lives of safety and hope</h2>
              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/95 font-serif">
                Your partnership helps locally led programs provide secure shelter, restorative care, education, and practical skills for women and girls affected by trafficking in Nepal.
              </p>
              <a
                href="https://peacegospel.org/donate"
                className="mt-8 inline-block rounded-lg bg-white px-8 py-4 text-lg font-bold text-[#EE0076] shadow-md transition hover:-translate-y-0.5 hover:shadow-xl font-sans"
              >
                Give Hope
              </a>
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
