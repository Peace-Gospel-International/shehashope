import Link from 'next/link';
import Image from 'next/image';
import HeroCarousel from './components/HeroCarousel';
import Header from './components/Header';
import Footer from './components/Footer';
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
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <img src="/images/she-has-hope-logo.png" alt="She Has Hope" className="h-24 w-auto" />
          </div>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-serif">
            She Has Hope programs exist to prevent girls from becoming slaves, to rescue slavery victims from traffickers, 
            and to rehabilitate survivors with the goal of restoring them to a life full of hope in Asia, Africa, and South America.
          </p>
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
              <p className="text-sm text-gray-600 font-serif">Training vulnerable girls to recognize and reject traffickers' deceptive offers.</p>
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
              <p className="text-sm text-gray-600 font-serif">Providing shelter, counseling, medical care, and skills training for survivors.</p>
            </div>
            <div className="text-center">
              <div className="w-40 h-40 md:w-48 md:h-48 mx-auto mb-2 flex items-center justify-center">
                <RestorationIcon />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 font-sans">Restoration</h3>
              <p className="text-sm text-gray-600 font-serif">Equipping graduates with businesses, jobs, and a future full of hope.</p>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <div className="w-40 h-40 md:w-48 md:h-48 mx-auto mb-2 flex items-center justify-center">
                <SustainabilityIcon />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 font-sans">Sustainability</h3>
              <p className="text-sm text-gray-600 font-serif">Creating income opportunities through farms, businesses, and skills development.</p>
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
                alt="Survivors embracing - join The Hope Collective"
                width={1080}
                height={1080}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Content on right */}
            <div className="md:w-3/5 lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center text-left">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 font-sans">
                Support Survivors Monthly through<br />The Hope Collective
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
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12 text-center font-sans">
            Where We Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div
              className="group relative aspect-video overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:-translate-y-1 focus:outline-none focus-visible:ring-4 focus-visible:ring-pink-300"
              tabIndex={0}
              aria-label="India: 440 million children, 60 million in child labor, 5 million in child slavery"
            >
              <Image
                src="/images/where-we-work/india.jpg"
                alt="Two smiling girls in India"
                fill
                sizes="(min-width: 1024px) 320px, (min-width: 768px) 50vw, 100vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105 group-focus:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/85 via-black/35 to-transparent p-5 text-left text-white transition-opacity duration-500 md:justify-center md:bg-[#EE0076]/90 md:text-center md:opacity-0 md:group-hover:opacity-100 md:group-focus:opacity-100">
                <h3 className="text-2xl font-semibold font-sans">India</h3>
                <p className="mt-2 text-sm leading-relaxed font-serif md:text-base">
                  440 million children, 60 million in child labor, 5 million in child slavery
                </p>
              </div>
            </div>
            <div
              className="group relative aspect-video overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:-translate-y-1 focus:outline-none focus-visible:ring-4 focus-visible:ring-pink-300"
              tabIndex={0}
              aria-label="Nepal: 10 million children, 2 million in child labor, 20,000 in child slavery"
            >
              <Image
                src="/images/where-we-work/nepal.jpg"
                alt="Woman sewing at a trade school in Nepal"
                fill
                sizes="(min-width: 1024px) 320px, (min-width: 768px) 50vw, 100vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105 group-focus:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/85 via-black/35 to-transparent p-5 text-left text-white transition-opacity duration-500 md:justify-center md:bg-[#EE0076]/90 md:text-center md:opacity-0 md:group-hover:opacity-100 md:group-focus:opacity-100">
                <h3 className="text-2xl font-semibold font-sans">Nepal</h3>
                <p className="mt-2 text-sm leading-relaxed font-serif md:text-base">
                  10 million children, 2 million in child labor, 20,000 in child slavery
                </p>
              </div>
            </div>
            <div
              className="group relative aspect-video overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:-translate-y-1 focus:outline-none focus-visible:ring-4 focus-visible:ring-pink-300"
              tabIndex={0}
              aria-label="Myanmar: 14.6 million children, 5.1 million in child labor, 134,000 in child slavery"
            >
              <Image
                src="/images/where-we-work/myanmar-students.jpg"
                alt="Four smiling students standing together in Myanmar"
                fill
                sizes="(min-width: 1024px) 320px, (min-width: 768px) 50vw, 100vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105 group-focus:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/85 via-black/35 to-transparent p-5 text-left text-white transition-opacity duration-500 md:justify-center md:bg-[#EE0076]/90 md:text-center md:opacity-0 md:group-hover:opacity-100 md:group-focus:opacity-100">
                <h3 className="text-2xl font-semibold font-sans">Myanmar</h3>
                <p className="mt-2 text-sm leading-relaxed font-serif md:text-base">
                  14.6 million children, 5.1 million in child labor, 134,000 in child slavery
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 md:p-8 text-center shadow-md hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer">
              <h3 className="text-2xl font-semibold mb-2 font-sans" style={{ color: '#EE0076' }}>🇵🇭 Philippines</h3>
              <p className="text-gray-600 font-serif">Education support and economic empowerment</p>
            </div>
            <div
              className="group relative aspect-video overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:-translate-y-1 focus:outline-none focus-visible:ring-4 focus-visible:ring-pink-300"
              tabIndex={0}
              aria-label="Uganda: 19 million children, 2 million in child labor, 42,000 in child slavery"
            >
              <Image
                src="/images/where-we-work/uganda-students.jpg"
                alt="Three smiling students standing arm in arm in Uganda"
                fill
                sizes="(min-width: 1024px) 320px, (min-width: 768px) 50vw, 100vw"
                className="object-cover object-[center_12%] transition-transform duration-500 group-hover:scale-105 group-focus:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/85 via-black/35 to-transparent p-5 text-left text-white transition-opacity duration-500 md:justify-center md:bg-[#EE0076]/90 md:text-center md:opacity-0 md:group-hover:opacity-100 md:group-focus:opacity-100">
                <h3 className="text-2xl font-semibold font-sans">Uganda</h3>
                <p className="mt-2 text-sm leading-relaxed font-serif md:text-base">
                  19 million children, 2 million in child labor, 42,000 in child slavery
                </p>
              </div>
            </div>
            <div
              className="group relative aspect-video overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:-translate-y-1 focus:outline-none focus-visible:ring-4 focus-visible:ring-pink-300"
              tabIndex={0}
              aria-label="Argentina: 7 out of 10 children—around 8.6 million—live in poverty"
            >
              <Image
                src="/images/where-we-work/argentina.jpg"
                alt="Young child playing with colorful blocks at an early childhood center in Argentina"
                fill
                sizes="(min-width: 1024px) 320px, (min-width: 768px) 50vw, 100vw"
                className="object-cover object-[center_43%] transition-transform duration-500 group-hover:scale-105 group-focus:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/85 via-black/35 to-transparent p-5 text-left text-white transition-opacity duration-500 md:justify-center md:bg-[#EE0076]/90 md:text-center md:opacity-0 md:group-hover:opacity-100 md:group-focus:opacity-100">
                <h3 className="text-2xl font-semibold font-sans">Argentina</h3>
                <p className="mt-2 text-sm leading-relaxed font-serif md:text-base">
                  7 out of 10 children—around 8.6 million—live in poverty
                </p>
              </div>
            </div>
            <div
              className="group relative aspect-video overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:-translate-y-1 focus:outline-none focus-visible:ring-4 focus-visible:ring-pink-300 lg:col-start-2"
              tabIndex={0}
              aria-label="Colombia: 10.7 million children, including 800,000 Venezuelan migrant children"
            >
              <Image
                src="/images/where-we-work/colombia-bags.jpg"
                alt=""
                aria-hidden="true"
                fill
                sizes="(min-width: 1024px) 320px, (min-width: 768px) 50vw, 100vw"
                className="object-cover scale-110 blur-md brightness-50"
              />
              <Image
                src="/images/where-we-work/colombia-bags.jpg"
                alt="Student displaying colorful handmade bags at a skills-training program in Colombia"
                fill
                sizes="(min-width: 1024px) 320px, (min-width: 768px) 50vw, 100vw"
                className="object-contain object-top origin-top scale-125 transition-transform duration-500 group-hover:scale-[1.3] group-focus:scale-[1.3]"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/85 via-black/35 to-transparent p-5 text-left text-white transition-opacity duration-500 md:justify-center md:bg-[#EE0076]/90 md:text-center md:opacity-0 md:group-hover:opacity-100 md:group-focus:opacity-100">
                <h3 className="text-2xl font-semibold font-sans">Colombia</h3>
                <p className="mt-2 text-sm leading-relaxed font-serif md:text-base">
                  10.7 million children, including 800,000 Venezuelan migrant children
                </p>
              </div>
            </div>
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
          <p className="text-lg text-gray-600 mb-8 text-center font-serif">Read inspiring stories of how we're changing lives and communities around the world.</p>
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
                <h4 className="text-xl font-bold text-gray-900 mb-3 font-sans">Meet Ruby: our inspiring child of the year for 2024!</h4>
                <p className="text-gray-600 mb-4 font-serif">
                  Today, we're excited to introduce you to our 3rd Annual "Child of the Year," Ruby; 
                  she's a beacon of hope and resilience...
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
