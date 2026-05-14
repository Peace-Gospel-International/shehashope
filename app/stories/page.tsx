import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Stories() {
  // Sample stories - in production this will come from the markdown files
  const stories = [
    {
      slug: 'meet-ruby-our-inspiring-child-of-the-year-for-2024',
      title: 'Meet Ruby: our inspiring child of the year for 2024!',
      date: 'December 06, 2024',
      excerpt: "Today, we're excited to introduce you to our 3rd Annual \"Child of the Year,\" Ruby; she's a beacon of hope and resilience, whose journey with us underscores the transformative impact of your generosity.",
      color: 'from-rose-200 to-pink-300'
    },
    {
      slug: '#',
      title: 'Renovated Classrooms Buzzing with Life: India Nursing College Thrives',
      date: 'March 31, 2026',
      excerpt: 'After meeting our urgent $21K goal, the India nursing college has been completely renovated and students are thriving in their healthcare education journey.',
      color: 'from-blue-200 to-cyan-300'
    },
    {
      slug: '#',
      title: 'Global Good News: Your Giving in Action',
      date: 'February 10, 2026',
      excerpt: 'See how your support is transforming lives across our programs in Myanmar, India, Uganda, and the Philippines with this roundup of recent successes.',
      color: 'from-green-200 to-emerald-300'
    },
    {
      slug: '#',
      title: 'Our Top 10 Moments of 2025',
      date: 'December 30, 2025',
      excerpt: 'Your gifts + God\'s grace in action! A celebration of the most inspiring moments from the past year across all our programs.',
      color: 'from-purple-200 to-violet-300'
    },
    {
      slug: '#',
      title: 'Every Egg Counts: Cebu Farmland Enterprise Transforms Lives',
      date: 'November 15, 2025',
      excerpt: 'How your support of our Cebu farmland enterprise is creating sustainable income and preventing trafficking in the Philippines.',
      color: 'from-amber-200 to-yellow-300'
    },
    {
      slug: '#',
      title: 'Breaking the Cycle: Back to School Fully Funded',
      date: 'October 8, 2025',
      excerpt: 'Together we are breaking the cycle of trafficking and poverty. All our India and Philippines students are now fully funded for the school year!',
      color: 'from-teal-200 to-cyan-300'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <section className="bg-gradient-to-br from-rose-50 to-pink-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Stories of Hope</h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            Read inspiring stories of transformation, resilience, and hope from children and communities 
            whose lives have been changed through your generous support.
          </p>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <Link 
                key={index}
                href={`/stories/${story.slug}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <div className={`h-48 bg-gradient-to-br ${story.color}`}></div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{story.date}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {story.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {story.excerpt}
                  </p>
                  <span className="text-rose-600 font-semibold">Read More →</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination Placeholder */}
          <div className="mt-12 text-center">
            <div className="inline-flex gap-2">
              <button className="px-4 py-2 bg-rose-600 text-white rounded-lg font-semibold">1</button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">2</button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">3</button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">...</button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">18</button>
            </div>
            <p className="text-sm text-gray-600 mt-4">Showing 6 of 110 stories</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
