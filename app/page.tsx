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

      {/* Our Work */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">How We Make a Difference</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏠</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Orphan Care</h4>
              <p className="text-gray-600">
                Safe homes providing love, care, and family for children who have lost everything.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📚</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Education & Training</h4>
              <p className="text-gray-600">
                School supplies, vocational training, and trafficking prevention education for thousands.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌾</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Sustainable Farmlands</h4>
              <p className="text-gray-600">
                Farm enterprises providing jobs, food security, and economic independence.
              </p>
            </div>
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
