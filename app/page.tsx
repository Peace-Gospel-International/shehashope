import Link from 'next/link';
import Image from 'next/image';
import HeroCarousel from './components/HeroCarousel';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img src="/images/she-has-hope-logo.png" alt="She Has Hope" className="h-16 w-auto" />
              <p className="text-sm text-gray-600 font-serif">Preventing trafficking. Restoring lives.</p>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-rose-600 font-medium font-sans">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-rose-600 font-medium font-sans">About</Link>
              <div className="relative group">
                <button className="text-gray-700 hover:text-rose-600 font-medium font-sans">
                  Where We Work ▾
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <Link href="/programs/india" className="block px-4 py-2 text-sm text-gray-700 hover:bg-rose-50 font-sans">India</Link>
                  <Link href="/programs/nepal" className="block px-4 py-2 text-sm text-gray-700 hover:bg-rose-50 font-sans">Nepal</Link>
                  <Link href="/programs/myanmar" className="block px-4 py-2 text-sm text-gray-700 hover:bg-rose-50 font-sans">Myanmar</Link>
                  <Link href="/programs/philippines" className="block px-4 py-2 text-sm text-gray-700 hover:bg-rose-50 font-sans">Philippines</Link>
                  <Link href="/programs/uganda" className="block px-4 py-2 text-sm text-gray-700 hover:bg-rose-50 font-sans">Uganda</Link>
                  <Link href="/programs/argentina" className="block px-4 py-2 text-sm text-gray-700 hover:bg-rose-50 font-sans">Argentina</Link>
                  <Link href="/programs/colombia" className="block px-4 py-2 text-sm text-gray-700 hover:bg-rose-50 font-sans">Colombia</Link>
                </div>
              </div>
              <Link href="/stories" className="text-gray-700 hover:text-rose-600 font-medium font-sans">Stories</Link>
              <Link href="/give" className="text-gray-700 hover:text-rose-600 font-medium font-sans">Ways to Give</Link>
            </nav>
            <Link 
              href="https://peacegospel.org/donate" 
              className="bg-rose-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-rose-700 transition font-sans"
            >
              Donate
            </Link>
          </div>
        </div>
      </header>

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
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 rounded-full flex items-center justify-center text-4xl md:text-5xl" 
                   style={{ background: 'linear-gradient(135deg, #F2978F 0%, #EE0076 100%)' }}>
                🛡️
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 font-sans">Prevention</h3>
              <p className="text-sm text-gray-600 font-serif">Training vulnerable girls to recognize and reject traffickers' deceptive offers.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 rounded-full flex items-center justify-center text-4xl md:text-5xl" 
                   style={{ background: 'linear-gradient(135deg, #F2978F 0%, #EE0076 100%)' }}>
                🆘
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 font-sans">Rescue</h3>
              <p className="text-sm text-gray-600 font-serif">Collaborating with authorities to safely rescue girls trapped in trafficking situations.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 rounded-full flex items-center justify-center text-4xl md:text-5xl" 
                   style={{ background: 'linear-gradient(135deg, #F2978F 0%, #EE0076 100%)' }}>
                💝
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 font-sans">Rehabilitation</h3>
              <p className="text-sm text-gray-600 font-serif">Providing shelter, counseling, medical care, and skills training for survivors.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 rounded-full flex items-center justify-center text-4xl md:text-5xl" 
                   style={{ background: 'linear-gradient(135deg, #F2978F 0%, #EE0076 100%)' }}>
                🌟
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 font-sans">Restoration</h3>
              <p className="text-sm text-gray-600 font-serif">Equipping graduates with businesses, jobs, and a future full of hope.</p>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 rounded-full flex items-center justify-center text-4xl md:text-5xl" 
                   style={{ background: 'linear-gradient(135deg, #F2978F 0%, #EE0076 100%)' }}>
                🌱
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
            <div className="bg-white rounded-lg p-6 md:p-8 text-center shadow-md hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer">
              <h3 className="text-2xl font-semibold mb-2 font-sans" style={{ color: '#EE0076' }}>🇮🇳 India</h3>
              <p className="text-gray-600 font-serif">Vocational training, orphan care, and anti-trafficking education</p>
            </div>
            <div className="bg-white rounded-lg p-6 md:p-8 text-center shadow-md hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer">
              <h3 className="text-2xl font-semibold mb-2 font-sans" style={{ color: '#EE0076' }}>🇳🇵 Nepal</h3>
              <p className="text-gray-600 font-serif">Prevention programs and survivor rehabilitation</p>
            </div>
            <div className="bg-white rounded-lg p-6 md:p-8 text-center shadow-md hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer">
              <h3 className="text-2xl font-semibold mb-2 font-sans" style={{ color: '#EE0076' }}>🇲🇲 Myanmar</h3>
              <p className="text-gray-600 font-serif">Safe homes and vocational skills development</p>
            </div>
            <div className="bg-white rounded-lg p-6 md:p-8 text-center shadow-md hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer">
              <h3 className="text-2xl font-semibold mb-2 font-sans" style={{ color: '#EE0076' }}>🇵🇭 Philippines</h3>
              <p className="text-gray-600 font-serif">Education support and economic empowerment</p>
            </div>
            <div className="bg-white rounded-lg p-6 md:p-8 text-center shadow-md hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer">
              <h3 className="text-2xl font-semibold mb-2 font-sans" style={{ color: '#EE0076' }}>🇺🇬 Uganda</h3>
              <p className="text-gray-600 font-serif">Community development and child protection</p>
            </div>
            <div className="bg-white rounded-lg p-6 md:p-8 text-center shadow-md hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer">
              <h3 className="text-2xl font-semibold mb-2 font-sans" style={{ color: '#EE0076' }}>🇦🇷 Argentina</h3>
              <p className="text-gray-600 font-serif">Trafficking prevention and survivor support</p>
            </div>
            <div className="bg-white rounded-lg p-6 md:p-8 text-center shadow-md hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer lg:col-start-2">
              <h3 className="text-2xl font-semibold mb-2 font-sans" style={{ color: '#EE0076' }}>🇨🇴 Colombia</h3>
              <p className="text-gray-600 font-serif">Restoration programs and sustainable livelihoods</p>
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

      {/* Footer - Inspired by IJM */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-8">
            {/* Email Signup Section */}
            <div>
              <h4 className="text-2xl font-bold mb-4 font-sans">Stay Connected</h4>
              <p className="text-gray-400 mb-6 font-serif">
                Join our email list to receive updates about the lives you're transforming and ways you can make a difference.
              </p>
              <form className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-4 py-2 rounded-lg text-gray-900 font-serif focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
                <button 
                  type="submit" 
                  className="bg-rose-600 px-6 py-2 rounded-lg font-semibold hover:bg-rose-700 transition font-sans whitespace-nowrap"
                >
                  Sign Up
                </button>
              </form>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold mb-4 font-sans">Quick Links</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <ul className="space-y-2 text-gray-400">
                    <li><Link href="/about" className="hover:text-white font-serif">Our Team</Link></li>
                    <li><Link href="/partners" className="hover:text-white font-serif">Partners</Link></li>
                    <li><Link href="/contact" className="hover:text-white font-serif">Contact Us</Link></li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2 text-gray-400">
                    <li><Link href="/accountability" className="hover:text-white font-serif">Financial Accountability</Link></li>
                    <li><Link href="/give" className="hover:text-white font-serif">Get Involved</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-400 font-serif">
                <p className="mb-2">A program of <a href="https://peacegospel.org" className="hover:text-white">Peace Gospel International</a>, a 501(c)(3) nonprofit organization.</p>
                <p>© {new Date().getFullYear()} She Has Hope. All rights reserved.</p>
              </div>
              <div className="flex gap-6">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
