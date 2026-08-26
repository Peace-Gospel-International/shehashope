import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';
import Header from '../components/Header';
import {
  PreventionIcon,
  RescueIcon,
  RehabilitationIcon,
  RestorationIcon,
  SustainabilityIcon,
} from '../components/PillarIcons';

export const metadata: Metadata = {
  title: 'About She Has Hope | Locally Led Trafficking Response',
  description:
    'Learn how She Has Hope partners with locally led programs to prevent trafficking, provide safe care, and support healing, education, and practical opportunity.',
};

const commitments = [
  {
    title: 'Locally led',
    copy: 'Local teams understand their communities, shape the response, and lead the daily work.',
  },
  {
    title: 'Whole-person care',
    copy: 'Programs connect safety with education, health, relationships, and practical opportunity.',
  },
  {
    title: 'Built for continuity',
    copy: 'Skills training, farms, and responsible local enterprises help strengthen long-term care.',
  },
];

const pathways = [
  {
    name: 'Prevention',
    Icon: PreventionIcon,
    copy: 'Education, awareness, family support, and safe opportunities help reduce vulnerability before exploitation takes hold.',
  },
  {
    name: 'Rescue',
    Icon: RescueIcon,
    copy: 'Local teams may work with authorities and provide safe residential care when children or women are freed from trafficking, slavery, or child labor.',
  },
  {
    name: 'Rehabilitation',
    Icon: RehabilitationIcon,
    copy: 'Shelter, nutrition, health care, counseling, education, and consistent relationships create room for healing.',
  },
  {
    name: 'Restoration',
    Icon: RestorationIcon,
    copy: 'Education, vocational skills, mentorship, and work pathways help participants pursue stability and renewed hope.',
  },
  {
    name: 'Sustainability',
    Icon: SustainabilityIcon,
    copy: 'Farms, practical training, and locally rooted enterprises help provide food and strengthen program capacity over time.',
  },
];

const countries = [
  ['India', '/programs/india'],
  ['Nepal', '/programs/nepal'],
  ['Myanmar', '/programs/myanmar'],
  ['Philippines', '/programs/philippines'],
  ['Uganda', '/programs/uganda'],
  ['Argentina', '/programs/argentina'],
  ['Colombia', '/programs/colombia'],
] as const;

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <section className="relative overflow-hidden bg-[#fff8f8]">
          <div className="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-[#F2978F]/20 blur-3xl" aria-hidden="true" />
          <div className="absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-[#EE0076]/10 blur-3xl" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16 lg:px-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#EE0076] font-sans">About She Has Hope</p>
              <h1 className="mt-4 text-4xl font-bold leading-[1.08] text-gray-950 font-sans sm:text-5xl lg:text-6xl">
                Local leadership. Safer futures. Lasting hope.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-gray-700 font-serif">
                She Has Hope is the human trafficking response initiative of Peace Gospel International. We partner with locally led programs across Asia, Africa, and South America to help prevent exploitation, provide safe care, and support girls and women as they heal, learn, and build toward greater stability.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/#where-we-work"
                  className="inline-flex items-center justify-center rounded-lg bg-[#EE0076] px-6 py-3.5 font-bold text-white transition hover:bg-[#c90063] font-sans"
                >
                  Explore where we work
                </Link>
                <Link
                  href="#our-response"
                  className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3.5 font-bold text-gray-900 transition hover:border-[#EE0076] hover:text-[#EE0076] font-sans"
                >
                  See our response
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[3/2] overflow-hidden rounded-[2rem] bg-gray-100 shadow-2xl">
                <Image
                  src="/images/about/young-woman-sewing.jpg"
                  alt="Young woman smiling beside a sewing machine"
                  fill
                  priority
                  sizes="(min-width: 1024px) 52vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-5 left-5 right-5 rounded-2xl bg-white/95 px-5 py-4 shadow-lg backdrop-blur sm:left-auto sm:right-6 sm:max-w-xs">
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#EE0076] font-sans">Hope in practice</p>
                <p className="mt-1 text-sm leading-6 text-gray-700 font-serif">Safety and healing are strengthened by education, useful skills, and meaningful opportunity.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-12 md:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl border border-rose-100 bg-[#fff8f8] px-6 py-9 text-center shadow-sm sm:px-10 md:px-14 md:py-12">
              <div className="absolute -right-12 -top-16 h-48 w-48 rounded-full bg-[#F2978F]/20 blur-3xl" aria-hidden="true" />
              <div className="relative">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#EE0076] font-sans">Our Mission</p>
                <blockquote className="mx-auto mt-4 max-w-4xl text-xl font-bold leading-9 text-gray-950 font-sans md:text-2xl md:leading-10">
                  She Has Hope programs exist to prevent girls from becoming slaves, to rescue slavery victims from traffickers, and to rehabilitate survivors with the goal of restoring them to a life full of hope in India, Nepal, Uganda, Myanmar, the Philippines, Colombia, and Argentina.
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#EE0076] font-sans">How our story grew</p>
                <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-950 font-sans md:text-4xl">More than thirty years of partnership</h2>
              </div>
              <div className="space-y-5 text-lg leading-8 text-gray-700 font-serif">
                <p>
                  The work that grew into She Has Hope began in India in 1993, serving orphaned children and young people affected by labor exploitation and severe vulnerability.
                </p>
                <p>
                  Today, that commitment connects locally led programs in seven countries. Each program looks different because each community is different, but the shared purpose remains clear: help girls and women move toward safety, healing, learning, and greater opportunity.
                </p>
              </div>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {commitments.map((commitment, index) => (
                <article key={commitment.title} className="rounded-2xl border border-rose-100 bg-[#fffafa] p-6 shadow-sm">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EE0076] text-sm font-bold text-white font-sans">
                    {index + 1}
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-gray-950 font-sans">{commitment.title}</h3>
                  <p className="mt-3 leading-7 text-gray-700 font-serif">{commitment.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="our-response" className="scroll-mt-6 bg-gray-950 py-16 text-white md:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#F2978F] font-sans">One connected response</p>
              <h2 className="mt-3 text-3xl font-bold font-sans md:text-5xl">Five pathways from vulnerability toward hope</h2>
              <p className="mt-5 text-lg leading-8 text-gray-300 font-serif">
                These pathways describe how the wider response fits together. Services vary by country and are shaped by the needs identified by each local team.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {pathways.map(({ name, Icon, copy }, index) => (
                <article
                  key={name}
                  className={`rounded-2xl border border-white/10 bg-white/[0.06] p-6 ${index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="h-20 w-20 shrink-0" aria-hidden="true">
                      <Icon />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#F2978F] font-sans">Pathway {index + 1}</p>
                      <h3 className="mt-1 text-xl font-bold font-sans">{name}</h3>
                    </div>
                  </div>
                  <p className="mt-5 leading-7 text-gray-300 font-serif">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#EE0076] font-sans">One mission, many local expressions</p>
                <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-950 font-sans md:text-4xl">Hope takes a different shape in every community</h2>
                <p className="mt-5 text-lg leading-8 text-gray-700 font-serif">
                  In one place, prevention may begin with school access or family support. In another, it may include residential care, counseling, vocational education, or a locally managed farm. Rather than forcing one model everywhere, She Has Hope supports responses rooted in local knowledge and leadership.
                </p>
                <div className="mt-7 flex flex-wrap gap-2.5">
                  {countries.map(([name, href]) => (
                    <Link
                      key={name}
                      href={href}
                      className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-bold text-gray-800 shadow-sm transition hover:border-[#EE0076] hover:text-[#EE0076] font-sans"
                    >
                      {name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="relative aspect-[3/2] overflow-hidden rounded-2xl bg-gray-100 shadow-md sm:translate-y-6">
                  <Image
                    src="/images/programs/nepal-kathmandu-community-team.jpg"
                    alt="Five women wearing colorful headscarves laugh together"
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-video overflow-hidden rounded-2xl bg-gray-100 shadow-md">
                  <Image
                    src="/images/programs/uganda-primary-boarding-schools-wide.jpg"
                    alt="Teacher guides students writing while another student stands beside laboratory glassware"
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#fff4f6] py-16 md:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-rose-100 bg-white p-8 shadow-sm md:p-12">
              <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#EE0076] font-sans">Stewardship and accountability</p>
                  <h2 className="mt-3 text-3xl font-bold text-gray-950 font-sans">An initiative of Peace Gospel International</h2>
                  <p className="mt-5 max-w-3xl leading-8 text-gray-700 font-serif">
                    She Has Hope is a program of Peace Gospel International, a 501(c)(3) nonprofit founded in 1993. Peace Gospel provides organizational stewardship and supports long-term partnerships with locally led programs.
                  </p>
                </div>
                <div className="flex flex-col gap-3 md:min-w-52">
                  <a
                    href="https://peacegospel.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex justify-center rounded-lg bg-gray-950 px-5 py-3 font-bold text-white transition hover:bg-gray-800 font-sans"
                  >
                    Visit Peace Gospel
                  </a>
                  <a
                    href="https://www.guidestar.org/profile/76-0659778"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex justify-center rounded-lg border border-gray-300 px-5 py-3 font-bold text-gray-900 transition hover:border-[#EE0076] hover:text-[#EE0076] font-sans"
                  >
                    View nonprofit profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-gradient-to-br from-[#F2978F] to-[#EE0076] py-16 text-white md:py-20">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, white 0, transparent 35%), radial-gradient(circle at 80% 80%, white 0, transparent 30%)' }} aria-hidden="true" />
          <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/80 font-sans">Hope is built together</p>
            <h2 className="mt-3 text-3xl font-bold font-sans md:text-5xl">Stand with girls and women building safer futures</h2>
            <p className="mt-5 text-lg leading-8 text-white/90 font-serif">
              Learn from their stories, share the mission, pray with us, or give to help locally led programs continue their work.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="https://peacegospel.org/donate"
                className="inline-flex justify-center rounded-lg bg-white px-7 py-3.5 font-bold text-[#EE0076] shadow-lg transition hover:shadow-xl font-sans"
              >
                Give now
              </a>
              <Link
                href="/stories"
                className="inline-flex justify-center rounded-lg border border-white/70 px-7 py-3.5 font-bold text-white transition hover:bg-white/10 font-sans"
              >
                Read stories of hope
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
