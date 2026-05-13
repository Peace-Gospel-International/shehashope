import Link from 'next/link';
import HeroCarousel from './components/HeroCarousel';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-rose-600">She Has Hope</h1>
              <p className="text-sm text-gray-600 mt-1">Preventing trafficking. Restoring lives.</p>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-rose-600 font-medium">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-rose-600 font-medium">About</Link>
              <Link href="/stories" className="text-gray-700 hover:text-rose-600 font-medium">Stories</Link>
              <Link href="/team" className="text-gray-700 hover:text-rose-600 font-medium">Our Team</Link>
              <Link href="/partners" className="text-gray-700 hover:text-rose-600 font-medium">Partners</Link>
            </nav>
            <Link 
              href="https://peacegospel.org/donate" 
              className="bg-rose-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-rose-700 transition"
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#EE0076' }}>
            She Has Hope
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
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
              <h3 className="text-lg md:text-xl font-semibold text-gray-800">Prevention</h3>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 rounded-full flex items-center justify-center text-4xl md:text-5xl" 
                   style={{ background: 'linear-gradient(135deg, #F2978F 0%, #EE0076 100%)' }}>
                🆘
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800">Rescue</h3>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 rounded-full flex items-center justify-center text-4xl md:text-5xl" 
                   style={{ background: 'linear-gradient(135deg, #F2978F 0%, #EE0076 100%)' }}>
                💝
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800">Rehabilitation</h3>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 rounded-full flex items-center justify-center text-4xl md:text-5xl" 
                   style={{ background: 'linear-gradient(135deg, #F2978F 0%, #EE0076 100%)' }}>
                🌟
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800">Restoration</h3>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 rounded-full flex items-center justify-center text-4xl md:text-5xl" 
                   style={{ background: 'linear-gradient(135deg, #F2978F 0%, #EE0076 100%)' }}>
                🌱
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800">Sustainability</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Hope Collective CTA Box */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl p-8 md:p-12 lg:p-16 text-center text-white shadow-xl" 
               style={{ background: 'linear-gradient(135deg, #F2978F 0%, #EE0076 100%)' }}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
              Support Survivors Monthly through The Hope Collective
            </h2>
            <p className="text-base md:text-lg mb-6 md:mb-8 max-w-3xl mx-auto opacity-95">
              Join The Hope Collective and provide consistent support for survivors on their journey to freedom and restoration. 
              Your monthly partnership creates sustainable, long-term impact across all our programs.
            </p>
            <Link 
              href="https://peacegospel.org/donate" 
              className="inline-block bg-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all"
              style={{ color: '#EE0076' }}
            >
              Join The Hope Collective
            </Link>
          </div>
        </div>
      </section>

      {/* Where We Work Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12 text-center">
            Where We Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg p-6 md:p-8 text-center shadow-md hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer">
              <h3 className="text-2xl font-semibold mb-2" style={{ color: '#EE0076' }}>🇮🇳 India</h3>
              <p className="text-gray-600">Vocational training, orphan care, and anti-trafficking education</p>
            </div>
            <div className="bg-white rounded-lg p-6 md:p-8 text-center shadow-md hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer">
              <h3 className="text-2xl font-semibold mb-2" style={{ color: '#EE0076' }}>🇳🇵 Nepal</h3>
              <p className="text-gray-600">Prevention programs and survivor rehabilitation</p>
            </div>
            <div className="bg-white rounded-lg p-6 md:p-8 text-center shadow-md hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer">
              <h3 className="text-2xl font-semibold mb-2" style={{ color: '#EE0076' }}>🇲🇲 Myanmar</h3>
              <p className="text-gray-600">Safe homes and vocational skills development</p>
            </div>
            <div className="bg-white rounded-lg p-6 md:p-8 text-center shadow-md hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer">
              <h3 className="text-2xl font-semibold mb-2" style={{ color: '#EE0076' }}>🇵🇭 Philippines</h3>
              <p className="text-gray-600">Education support and economic empowerment</p>
            </div>
            <div className="bg-white rounded-lg p-6 md:p-8 text-center shadow-md hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer">
              <h3 className="text-2xl font-semibold mb-2" style={{ color: '#EE0076' }}>🇺🇬 Uganda</h3>
              <p className="text-gray-600">Community development and child protection</p>
            </div>
            <div className="bg-white rounded-lg p-6 md:p-8 text-center shadow-md hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer">
              <h3 className="text-2xl font-semibold mb-2" style={{ color: '#EE0076' }}>🇦🇷 Argentina</h3>
              <p className="text-gray-600">Trafficking prevention and survivor support</p>
            </div>
            <div className="bg-white rounded-lg p-6 md:p-8 text-center shadow-md hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer lg:col-start-2">
              <h3 className="text-2xl font-semibold mb-2" style={{ color: '#EE0076' }}>🇨🇴 Colombia</h3>
              <p className="text-gray-600">Restoration programs and sustainable livelihoods</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-rose-600 mb-2">1,600+</div>
              <div className="text-gray-600">Lives Transformed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-rose-600 mb-2">1M+</div>
              <div className="text-gray-600">Meals Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-rose-600 mb-2">5,000+</div>
              <div className="text-gray-600">Girls Trained</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-rose-600 mb-2">4</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Recent Stories of Hope</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Story 1 - Ruby */}
            <Link href="/stories/meet-ruby-our-inspiring-child-of-the-year-for-2024" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-br from-rose-200 to-pink-300"></div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">December 06, 2024</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Meet Ruby: our inspiring child of the year for 2024!</h4>
                <p className="text-gray-600 mb-4">
                  Today, we're excited to introduce you to our 3rd Annual "Child of the Year," Ruby; 
                  she's a beacon of hope and resilience...
                </p>
                <span className="text-rose-600 font-semibold">Read More →</span>
              </div>
            </Link>

            {/* Story 2 */}
            <Link href="/stories" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-br from-blue-200 to-cyan-300"></div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">March 31, 2026</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">India Nursing College Thrives After Urgent Goal Met</h4>
                <p className="text-gray-600 mb-4">
                  Renovated classrooms buzzing with life as students pursue their dreams of healthcare careers...
                </p>
                <span className="text-rose-600 font-semibold">Read More →</span>
              </div>
            </Link>

            {/* Story 3 */}
            <Link href="/stories" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-br from-green-200 to-emerald-300"></div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">February 10, 2026</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Global Good News: Your Giving in Action</h4>
                <p className="text-gray-600 mb-4">
                  See how your support is transforming lives across our programs in Myanmar, India, Uganda, and the Philippines...
                </p>
                <span className="text-rose-600 font-semibold">Read More →</span>
              </div>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/stories" 
              className="inline-block bg-rose-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-rose-700 transition"
            >
              View All Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">She Has Hope</h4>
              <p className="text-gray-400">
                A program of Peace Gospel International, a 501(c)(3) nonprofit organization.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white">About</Link></li>
                <li><Link href="/stories" className="hover:text-white">Stories</Link></li>
                <li><Link href="/team" className="hover:text-white">Our Team</Link></li>
                <li><Link href="/partners" className="hover:text-white">Partners</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <p className="text-gray-400 mb-4">
                Part of Peace Gospel International<br />
                <a href="https://peacegospel.org" className="hover:text-white">PeaceGospel.org</a>
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} She Has Hope. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
