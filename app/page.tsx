import Link from 'next/link';
import Image from 'next/image';
import HeroCarousel from './components/HeroCarousel';
import Header from './components/Header';
import Footer from './components/Footer';
import ProgramCard from './components/ProgramCard';
import { programs } from './programs/programs';
import {
  PreventionIcon,
  RescueIcon,
  RehabilitationIcon,
  RestorationIcon,
  SustainabilityIcon,
} from './components/PillarIcons';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Mission Statement Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 flex justify-center">
            <Image
              src="/images/she-has-hope-logo.png"
              alt="She Has Hope"
              width={1209}
              height={1519}
              className="h-24 w-auto"
            />
          </div>
          <div className="rounded-3xl border border-rose-100 bg-[#fff8f8] px-6 py-9 shadow-sm sm:px-10 md:py-11">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#EE0076] font-sans">Our Mission</p>
            <blockquote className="mx-auto mt-4 max-w-4xl text-xl font-bold leading-9 text-gray-900 font-sans md:text-2xl md:leading-10">
              She Has Hope programs exist to prevent girls from becoming slaves, to rescue slavery victims from traffickers, and to rehabilitate survivors with the goal of restoring them to a life full of hope in India, Nepal, Uganda, Myanmar, the Philippines, Colombia, and Argentina.
            </blockquote>
          </div>
        </div>
      </section>

      {/* Five Pillars Icons Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-6">
            <div className="text-center">
              <div className="w-40 h-40 md:w-48 md:h-48 mx-auto mb-2 flex items-center justify-center">
                <PreventionIcon />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 font-sans">Prevention</h3>
              <p className="text-sm text-gray-600 font-serif">Training vulnerable girls to recognize and reject traffickers&apos; deceptive offers.</p>
            </div>
            <div className="text-center">
              <div className="w-40 h-40 md:w-48 md:h-48 mx-auto mb-2 flex items-center justify-center">
                <RescueIcon />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 font-sans">Rescue</h3>
              <p className="text-sm text-gray-600 font-serif">Collaborating with authorities to safely rescue girls trapped in trafficking situations.</p>
            </div>
            <div className="text-center">
              <div className="w-40 h-40 md:w-48 md:h-48 mx-auto mb-2 flex items-center justify-center">
                <RehabilitationIcon />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 font-sans">Rehabilitation</h3>
              <p className="text-sm text-gray-600 font-serif">Providing shelter, counseling, medical care, and skills training for girls and women affected by trafficking or facing serious risk.</p>
            </div>
            <div className="text-center">
              <div className="w-40 h-40 md:w-48 md:h-48 mx-auto mb-2 flex items-center justify-center">
                <RestorationIcon />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 font-sans">Restoration</h3>
              <p className="text-sm text-gray-600 font-serif">Equipping program graduates with practical pathways toward work, stability, and hope.</p>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <div className="w-40 h-40 md:w-48 md:h-48 mx-auto mb-2 flex items-center justify-center">
                <SustainabilityIcon />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 font-sans">Sustainability</h3>
              <p className="text-sm text-gray-600 font-serif">Strengthening locally led programs through food-producing farms, responsible enterprises, and skills development.</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link 
              href="/about" 
              className="inline-block bg-rose-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-rose-700 transition font-sans"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Hope Collective CTA Box */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl overflow-hidden text-white shadow-xl flex flex-col md:flex-row" 
               style={{ background: 'linear-gradient(135deg, #F2978F 0%, #EE0076 100%)' }}>
            {/* Image on left */}
            <div className="md:w-2/5 lg:w-1/2 flex-shrink-0">
              <Image 
                src="/images/monthly-support-final.jpg"
                alt="Smiling girl and woman embracing"
                width={1080}
                height={1080}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Content on right */}
            <div className="md:w-3/5 lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center text-left">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 font-sans">
                Stand with Girls and Women Monthly through<br />The Hope Collective
              </h2>
              <p className="text-base md:text-lg mb-6 md:mb-8 opacity-95 font-serif">
                Join The Hope Collective and provide consistent support for survivors on their journey to freedom and restoration. 
                Your monthly partnership creates sustainable, long-term impact across all our programs.
              </p>
              <div>
                <Link 
                  href="https://peacegospel.org/donate" 
                  className="inline-block bg-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all font-sans"
                  style={{ color: '#EE0076' }}
                >
                  Join The Hope Collective
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where We Work Section */}
      <section id="where-we-work" className="scroll-mt-6 bg-gray-50 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-center font-sans">
            Where We Work
          </h2>
          <p className="mb-8 text-center text-lg text-gray-600 font-serif md:mb-12">
            Select a location to explore our work.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {programs.map((program) => (
              <ProgramCard
                key={program.slug}
                title={program.name}
                href={`/programs/${program.slug}`}
                imageSrc={program.imageSrc}
                imageAlt={program.imageAlt}
                imageClassName={program.imageClassName}
                className={program.slug === 'colombia' ? 'lg:col-start-2' : undefined}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-rose-600 mb-2 font-sans">1,600+</div>
              <div className="text-gray-600 font-serif">Lives Transformed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-rose-600 mb-2 font-sans">1M+</div>
              <div className="text-gray-600 font-serif">Meals Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-rose-600 mb-2 font-sans">5,000+</div>
              <div className="text-gray-600 font-serif">Girls Trained</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-rose-600 mb-2 font-sans">4</div>
              <div className="text-gray-600 font-serif">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-3 text-center font-sans">Recent Stories of Hope</h3>
          <p className="text-lg text-gray-600 mb-8 text-center font-serif">Read stories of girls and women—and the communities working alongside them—building safer, stronger futures.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Story 1 - India Nursing College (Most Recent: March 31, 2026) */}
            <Link href="/stories" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-br from-blue-200 to-cyan-300"></div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2 font-serif">March 31, 2026</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 font-sans">India Nursing College Thrives After Urgent Goal Met</h4>
                <p className="text-gray-600 mb-4 font-serif">
                  Renovated classrooms buzzing with life as students pursue their dreams of healthcare careers...
                </p>
                <span className="text-rose-600 font-semibold font-sans">Read More →</span>
              </div>
            </Link>

            {/* Story 2 - Global Good News (February 10, 2026) */}
            <Link href="/stories" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-br from-green-200 to-emerald-300"></div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2 font-serif">February 10, 2026</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 font-sans">Global Good News: Your Giving in Action</h4>
                <p className="text-gray-600 mb-4 font-serif">
                  See how your support is transforming lives across our programs in Myanmar, India, Uganda, and the Philippines...
                </p>
                <span className="text-rose-600 font-semibold font-sans">Read More →</span>
              </div>
            </Link>

            {/* Story 3 - Ruby (December 06, 2024) */}
            <Link href="/stories/meet-ruby-our-inspiring-child-of-the-year-for-2024" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-br from-rose-200 to-pink-300"></div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2 font-serif">December 06, 2024</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 font-sans">Meet Ruby: our inspiring Child of the Year for 2024!</h4>
                <p className="text-gray-600 mb-4 font-serif">
                  Meet Ruby, a girl whose resilience and love of learning inspired our community...
                </p>
                <span className="text-rose-600 font-semibold font-sans">Read More →</span>
              </div>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/stories" 
              className="inline-block bg-rose-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-rose-700 transition font-sans"
            >
              View More Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Rating Seals Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8">
            <a href="https://www.guidestar.org/profile/76-0659778" target="_blank" rel="noopener noreferrer" className="transition hover:opacity-80">
              <img src="/images/seals/candid-seal.png" alt="Candid Platinum Transparency 2026" className="h-24 w-auto" />
            </a>
            <a href="https://greatnonprofits.org/org/peace-gospel-international" target="_blank" rel="noopener noreferrer" className="transition hover:opacity-80">
              <img src="/images/seals/great-nonprofits-seal.png" alt="Great Nonprofits 2025 Top-Rated Nonprofit" className="h-24 w-auto" />
            </a>
            <a href="https://www.charitynavigator.org/ein/760659778" target="_blank" rel="noopener noreferrer" className="transition hover:opacity-80">
              <img src="/images/seals/charity-navigator-seal.png" alt="Charity Navigator Four-Star 2026" className="h-24 w-auto" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
