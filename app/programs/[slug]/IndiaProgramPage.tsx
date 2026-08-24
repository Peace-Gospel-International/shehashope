import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import type { Program } from '../programs';

type IndiaProgramPageProps = {
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
    copy: 'Foster care, education, Children’s Hope Centers, nutritious food, and long-term encouragement help reduce the pressures that can leave children vulnerable to child labor and trafficking.',
  },
  {
    name: 'Rescue',
    iconSrc: '/images/rescue.png',
    copy: 'The India partnership began with relief outreach to children in an underserved urban community and has since supported children affected by child labor with safety, care, and education.',
  },
  {
    name: 'Rehabilitation',
    iconSrc: '/images/rehabilitation.png',
    copy: 'Steady care, education, mentoring, and a supportive community help children and young women affected by exploitation regain stability and imagine a different future.',
  },
  {
    name: 'Restoration',
    iconSrc: '/images/restoration.png',
    copy: 'College scholarships, certified trade-school courses, and nursing education create practical pathways toward meaningful work, confidence, and greater independence.',
  },
  {
    name: 'Sustainability',
    iconSrc: '/images/sustainability.png',
    copy: 'Farmland supports nutritious meals and generates income from surplus crops, while the nursing college is designed to expand scholarship opportunities through a sustainable tuition model.',
  },
];

export default function IndiaProgramPage({ program }: IndiaProgramPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <div className="border-b bg-gray-50">
          <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="text-sm font-sans">
              <Link href="/" className="text-rose-600 hover:underline">Home</Link>
              <span aria-hidden="true" className="mx-2 text-gray-400">/</span>
              <span className="text-gray-600">India</span>
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
                  <h1 className="text-4xl font-bold font-sans md:text-6xl">India</h1>
                  <p className="mt-4 text-lg leading-relaxed font-serif md:text-2xl">
                    Long-term care, education, practical training, and sustainable opportunity for children and young women facing exploitation and poverty.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 lg:gap-16 lg:px-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#EE0076] font-sans">A locally led partnership since 1993</p>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 font-sans md:text-4xl">
                From immediate protection to lifelong possibility
              </h2>
              <div className="mt-6 space-y-5 text-base leading-8 text-gray-700 font-serif md:text-lg">
                <p>
                  The India partnership began with relief outreach to children in an underserved urban community. Over more than three decades, that locally led work has grown into a connected network of care, education, vocational training, and sustainable development.
                </p>
                <p>
                  Today, the program serves vulnerable minority children and young women, including orphans, trafficking survivors, and child labor victims. Foster care, school support, college scholarships, Children’s Hope Centers, and practical training meet people at different stages of the journey.
                </p>
                <p>
                  The goal is not simply to interrupt a crisis. It is to walk with each person toward safety, confidence, meaningful opportunity, and a future with choices.
                </p>
              </div>
            </div>
            <PhotoPlaceholder
              title="India campus, community, or local-team photo"
              guidance="A welcoming image of the South India campus, local team, or community setting that establishes place while protecting sensitive identities."
            />
          </div>
        </section>

        <section className="bg-gradient-to-br from-[#F2978F] to-[#EE0076] py-12 text-white md:py-16">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-2xl font-bold leading-relaxed font-sans md:text-4xl">
              Protection matters most when it grows into education, confidence, practical skills, and lasting opportunity.
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
                India’s response brings together protection, consistent care, education, practical preparation, and locally rooted sustainability so opportunity can continue growing over time.
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
              title="Children’s Hope Center or tutoring photo"
              guidance="Students learning, sharing a meal, receiving tutoring, or enjoying supervised recreation at one of the five Hope Centers."
            />
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#EE0076] font-sans">Education and prevention</p>
              <h2 className="mt-3 text-3xl font-bold text-gray-900 font-sans md:text-4xl">Five Children’s Hope Centers</h2>
              <div className="mt-6 space-y-5 text-base leading-8 text-gray-700 font-serif md:text-lg">
                <p>
                  Throughout the region, five Children’s Hope Centers provide after-school tutoring, fresh-cooked meals and snacks, and recreation for children in vulnerable circumstances.
                </p>
                <p>
                  The centers also distribute food to foster-care families, helping support children’s nutrition and continued education.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-rose-50 py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-16">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#EE0076] font-sans">Care that continues</p>
                <h2 className="mt-3 text-3xl font-bold text-gray-900 font-sans md:text-4xl">Education for the long journey</h2>
                <div className="mt-6 space-y-5 text-base leading-8 text-gray-700 font-serif md:text-lg">
                  <p>
                    The program supports children and young people in vulnerable circumstances, including orphans, trafficking survivors, and children affected by child labor, through foster care, primary and secondary education support, and college scholarships.
                  </p>
                  <p>
                    Some students supported by the program have continued into college through scholarships, pursuing a range of professional fields.
                  </p>
                </div>
              </div>
              <PhotoPlaceholder
                title="School, foster-care, or college milestone photo"
                guidance="A dignity-centered classroom, school milestone, foster-family gathering, college student, or graduation image with appropriate permissions."
              />
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#EE0076] font-sans">Restoration through practical learning</p>
              <h2 className="mt-3 text-3xl font-bold text-gray-900 font-sans md:text-4xl">Certified skills for work and independence</h2>
              <p className="mt-5 text-lg leading-8 text-gray-700 font-serif">
                Opened on the main campus in 2023, the trade school offers certified skill coursework such as tailoring for young women recovering from trafficking or facing serious trafficking risks.
              </p>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 font-sans">Certified training</h3>
                <p className="mt-3 leading-7 text-gray-700 font-serif">
                  Structured, certified coursework gives participants practical skills that can support future employment.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 font-sans">Daily confidence</h3>
                <p className="mt-3 leading-7 text-gray-700 font-serif">
                  Coursework includes consistent practice and opportunities to develop concentration, perseverance, and teamwork.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 font-sans">Economic opportunity</h3>
                <p className="mt-3 leading-7 text-gray-700 font-serif">
                  Tailoring and related skills can support pathways toward employment and income-generating work.
                </p>
              </div>
            </div>

            <PhotoPlaceholder
              title="India trade school and tailoring photo"
              guidance="A wide image of certified tailoring instruction, sewing machines, participants’ hands at work, or finished garments."
              className="mt-10 min-h-96"
            />
          </div>
        </section>

        <section className="bg-gray-50 py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#EE0076] font-sans">A long record of care</p>
              <h2 className="mt-3 text-3xl font-bold text-gray-900 font-sans md:text-4xl">Protection, education, and practical support</h2>
              <p className="mt-5 text-lg leading-8 text-gray-700 font-serif">
                These cumulative figures reflect the India partnership’s reported work from 1993 through 2026.
              </p>
            </div>

            <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3">
              <div className="rounded-2xl bg-white p-8 text-center shadow-md">
                <p className="text-5xl font-bold text-[#EE0076] font-sans">620</p>
                <p className="mt-3 text-lg font-semibold text-gray-800 font-sans">Children rescued from child labor</p>
              </div>
              <div className="rounded-2xl bg-white p-8 text-center shadow-md">
                <p className="text-5xl font-bold text-[#EE0076] font-sans">807</p>
                <p className="mt-3 text-lg font-semibold text-gray-800 font-sans">Children cared for through orphan-care programs</p>
              </div>
              <div className="rounded-2xl bg-white p-8 text-center shadow-md">
                <p className="text-5xl font-bold text-[#EE0076] font-sans">38</p>
                <p className="mt-3 text-lg font-semibold text-gray-800 font-sans">Tons of produce harvested</p>
              </div>
            </div>
            <p className="mt-5 text-center text-sm text-gray-500 font-serif">Program figures reported through 2026.</p>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 lg:gap-16 lg:px-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#EE0076] font-sans">Education and sustainable opportunity</p>
              <h2 className="mt-3 text-3xl font-bold text-gray-900 font-sans md:text-4xl">A nursing pathway with a larger vision</h2>
              <div className="mt-6 space-y-5 text-base leading-8 text-gray-700 font-serif md:text-lg">
                <p>
                  The first class of 40 young women is enrolled in a two-year, non-boarding Auxiliary Nursing program using renovated campus classrooms.
                </p>
                <p>
                  A separate, larger full-boarding nursing degree program is planned, with tuition from paying students helping support scholarship seats for orphaned and at-risk young women, including girls who grew up through Peace Gospel’s care.
                </p>
                <p>
                  This model is designed to expand professional education while creating sustainable support for future scholarship students.
                </p>
              </div>
            </div>
            <PhotoPlaceholder
              title="Nursing students or classroom photo"
              guidance="Current Auxiliary Nursing students, a renovated classroom or lab, the nursing college building, or a supervised training activity."
            />
          </div>
        </section>

        <section className="bg-rose-50 py-14 md:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 lg:gap-16 lg:px-8">
            <PhotoPlaceholder
              title="Farmland harvest or garden photo"
              guidance="A seasonal lentil harvest, vegetable garden, banana grove, fresh produce, or local farmland team at work."
            />
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#EE0076] font-sans">Locally rooted sustainability</p>
              <h2 className="mt-3 text-3xl font-bold text-gray-900 font-sans md:text-4xl">Food for today, resilience for tomorrow</h2>
              <div className="mt-6 space-y-5 text-base leading-8 text-gray-700 font-serif md:text-lg">
                <p>
                  The India farmland enterprise began as a water-buffalo dairy and now focuses on seasonal lentils, vegetables, and a small banana grove.
                </p>
                <p>
                  Fresh produce strengthens meals for children and staff. When harvests provide a surplus, crops can be sold at market to generate additional local funding and reinforce the team’s ownership of the work.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#F2978F] to-[#EE0076] px-7 py-12 text-center text-white shadow-xl md:px-14 md:py-16">
              <h2 className="text-3xl font-bold font-sans md:text-4xl">Stand with girls building safer, stronger futures</h2>
              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/95 font-serif">
                Your partnership helps locally led programs provide protection, education, practical skills, and sustainable pathways forward for children and young women in India.
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
