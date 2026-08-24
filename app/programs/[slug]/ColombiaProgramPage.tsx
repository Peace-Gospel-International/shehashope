import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import type { Program } from '../programs';

type ColombiaProgramPageProps = {
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
    copy: 'Education, mentoring, practical skills, and a safe community help reduce the pressures that can leave girls vulnerable to traffickers’ deceptive offers.',
  },
  {
    name: 'Rescue',
    iconSrc: '/images/rescue.png',
    copy: 'When a trafficking case is encountered, local teams collaborate with appropriate authorities to pursue a safe response and determine the next steps for care.',
  },
  {
    name: 'Rehabilitation',
    iconSrc: '/images/rehabilitation.png',
    copy: 'Casa Vida offers a nurturing environment where girls are listened to, valued, mentored, and supported as they strengthen their identity and begin to heal.',
  },
  {
    name: 'Restoration',
    iconSrc: '/images/restoration.png',
    copy: 'Academic support, vocational training, and personal savings goals help girls build confidence, recognize their worth, and prepare for a hopeful future.',
  },
  {
    name: 'Sustainability',
    iconSrc: '/images/sustainability.png',
    copy: 'Girls put their skills into practice by creating useful textile products. Income-generating partnerships and savings habits connect learning with long-term opportunity.',
  },
];

export default function ColombiaProgramPage({ program }: ColombiaProgramPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <div className="border-b bg-gray-50">
          <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="text-sm font-sans">
              <Link href="/" className="text-rose-600 hover:underline">Home</Link>
              <span aria-hidden="true" className="mx-2 text-gray-400">/</span>
              <span className="text-gray-600">Colombia</span>
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
                    She Has Hope in South America
                  </p>
                  <h1 className="text-4xl font-bold font-sans md:text-6xl">Colombia</h1>
                  <p className="mt-4 text-lg leading-relaxed font-serif md:text-2xl">
                    Helping girls near the Venezuelan border find safety, education, practical opportunity, and a community of hope.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 lg:gap-16 lg:px-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#EE0076] font-sans">A locally led response in Cúcuta</p>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 font-sans md:text-4xl">
                A safe place to learn, grow, and belong
              </h2>
              <div className="mt-6 space-y-5 text-base leading-8 text-gray-700 font-serif md:text-lg">
                <p>
                  In Cúcuta, Colombia, close to the Venezuelan border, many migrant and refugee families face interrupted education, poverty, limited family support, and heightened trafficking risks.
                </p>
                <p>
                  She Has Hope partners with Pastor Mauricio and Isabelina, trusted local leaders whose community programs serve children, families, and teen girls. Their work centers on dignity: listening well, creating safe relationships, and helping girls see that their lives have purpose.
                </p>
                <p>
                  At the heart of this response is Casa Vida, a welcoming program for girls and teenagers ages 10–17. It is more than a workshop. It is a place of care, education, practical learning, and opportunity.
                </p>
              </div>
            </div>
            <PhotoPlaceholder
              title="Cúcuta community photo"
              guidance="A welcoming neighborhood, program exterior, or locally led team image that establishes the Colombia setting without identifying vulnerable participants unnecessarily."
            />
          </div>
        </section>

        <section className="bg-gradient-to-br from-[#F2978F] to-[#EE0076] py-12 text-white md:py-16">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-2xl font-bold leading-relaxed font-sans md:text-4xl">
              “A place where hands work, hearts heal, and hope grows.”
            </p>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-white/85 font-sans">The vision of Casa Vida</p>
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
                Human trafficking rarely has a single cause or a single solution. Our Colombia partnership brings prevention, protection, healing, practical preparation, and sustainable opportunity together around each girl.
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
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-16">
              <PhotoPlaceholder
                title="Casa Vida care and mentoring photo"
                guidance="A warm, consent-cleared image showing mentoring, conversation, or a shared activity inside Casa Vida."
              />
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#EE0076] font-sans">Care and rehabilitation</p>
                <h2 className="mt-3 text-3xl font-bold text-gray-900 font-sans md:text-4xl">Casa Vida: where every girl matters</h2>
                <div className="mt-6 space-y-5 text-base leading-8 text-gray-700 font-serif md:text-lg">
                  <p>
                    Some girls arrive carrying the effects of family instability, social isolation, disrupted schooling, or relationships that place them at greater risk. Casa Vida responds with consistency, trust, and a home-like sense of belonging.
                  </p>
                  <p>
                    Girls are heard, encouraged, and guided in values, identity, responsibility, and teamwork. The goal is not to define anyone by what she has faced, but to help her recognize her strengths, build healthy relationships, and imagine a future with choices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-rose-50 py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-16">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#EE0076] font-sans">Education and prevention</p>
                <h2 className="mt-3 text-3xl font-bold text-gray-900 font-sans md:text-4xl">Helping students return to learning</h2>
                <div className="mt-6 space-y-5 text-base leading-8 text-gray-700 font-serif md:text-lg">
                  <p>
                    The local team operates a first-through-fifth-grade school for children whose education has often been interrupted. Some students are older than is typical for their grade, and many schools will not accept older children into lower grades.
                  </p>
                  <p>
                    Here, students have an opportunity to catch up. Casa Vida can also provide academic tutoring and homework help. Education strengthens confidence and creates options, making it one of the clearest ways to reduce vulnerability to exploitation and trafficking.
                  </p>
                </div>
              </div>
              <div className="relative aspect-[3/2] overflow-hidden rounded-2xl bg-gray-100 shadow-md">
                <Image
                  src="/images/programs/colombia-education-tutoring.jpg"
                  alt="A smiling student works on a paper craft at a classroom table while other students work behind her"
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
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#EE0076] font-sans">Restoration and sustainability</p>
              <h2 className="mt-3 text-3xl font-bold text-gray-900 font-sans md:text-4xl">Skills that create real options</h2>
              <p className="mt-5 text-lg leading-8 text-gray-700 font-serif">
                Practical learning helps girls move from “Can I?” to “I can.” Casa Vida combines hands-on skill development with responsibility, teamwork, and future planning.
              </p>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 font-sans">Productive skills</h3>
                <p className="mt-3 leading-7 text-gray-700 font-serif">
                  Girls learn tailoring and textile skills by creating wallets, bags, clothing, and simple accessories. Nail technician training adds another practical pathway toward future work.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 font-sans">Meaningful work</h3>
                <p className="mt-3 leading-7 text-gray-700 font-serif">
                  Through a partnership with <a href="https://www.sapanadreams.com/collections/she-has-hope" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#EE0076] hover:underline">Sapana Dreams</a>, girls can help create products for sale and earn fair wages as part of their learning experience.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 font-sans">Savings and stewardship</h3>
                <p className="mt-3 leading-7 text-gray-700 font-serif">
                  “My Treasure at Casa Vida” connects productive work with personal savings, teaching discipline, planning, self-worth, and the belief that steady effort can build toward a goal.
                </p>
              </div>
            </div>

            <div className="relative mt-10 aspect-video overflow-hidden rounded-2xl bg-gray-100 shadow-md">
              <Image
                src="/images/programs/colombia-vocational-training-products.jpg"
                alt="Three-panel collage showing a sewing student with a finished bag, a woman holding colorful textile products, and a close-up of a handcrafted bag"
                fill
                sizes="(min-width: 1024px) 1152px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-14 md:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 lg:gap-16 lg:px-8">
            <PhotoPlaceholder
              title="Quinceañera or community celebration photo"
              guidance="A joyful, permission-cleared image that honors cultural tradition, family, belonging, and each girl’s dignity."
            />
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#EE0076] font-sans">Identity, belonging, and joy</p>
              <h2 className="mt-3 text-3xl font-bold text-gray-900 font-sans md:text-4xl">Honoring an important rite of passage</h2>
              <div className="mt-6 space-y-5 text-base leading-8 text-gray-700 font-serif md:text-lg">
                <p>
                  A quinceañera is a meaningful celebration of a girl’s transition into young womanhood in Latin American culture. For families facing displacement and financial hardship, the celebration may be out of reach.
                </p>
                <p>
                  Casa Vida helps girls experience this tradition surrounded by people who honor their heritage and celebrate their worth. These moments of belonging are not separate from the work of restoration; they remind each girl that she is seen, valued, and worthy of hope.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#F2978F] to-[#EE0076] px-7 py-12 text-center text-white shadow-xl md:px-14 md:py-16">
              <h2 className="text-3xl font-bold font-sans md:text-4xl">Stand with girls building a safer future</h2>
              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/95 font-serif">
                Your partnership helps locally led programs provide consistent care, education, practical skills, and pathways toward independence for girls vulnerable to trafficking.
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
