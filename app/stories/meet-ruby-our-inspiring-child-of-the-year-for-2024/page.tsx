import Link from 'next/link';

export default function RubyStory() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <Link href="/">
                <h1 className="text-3xl font-bold text-rose-600 cursor-pointer">She Has Hope</h1>
              </Link>
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

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="text-sm">
            <Link href="/" className="text-rose-600 hover:underline">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/stories" className="text-rose-600 hover:underline">Stories</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">Meet Ruby</span>
          </nav>
        </div>
      </div>

      {/* Article */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="mb-8">
            <div className="text-sm text-gray-500 mb-4">December 06, 2024</div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Ruby: our inspiring child of the year for 2024!
            </h1>
          </header>

          {/* Featured Image Placeholder */}
          <div className="mb-10">
            <div className="w-full h-96 bg-gradient-to-br from-rose-200 via-pink-300 to-purple-200 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">✨</div>
                <div className="text-2xl font-semibold">Ruby's Story</div>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-2 text-center">Meet Ruby: our inspiring child of the year for 2024!</p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Today, we're excited to introduce you to our 3rd Annual "Child of the Year," Ruby; 
              she's a beacon of hope and resilience, whose journey with us underscores the 
              transformative impact of your generosity.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Meet Ruby, our Child of the Year for 2024!</h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Ruby, now a vibrant 9-year-old, resides at our main campus orphan home in Myanmar.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Her story is one of profound loss and miraculous recovery, a testament to how our 
              orphan homes provide healing, prevent trafficking, and offer a new beginning.</strong>
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Ruby lost her father before she was even born, and her mother, overwhelmed by grief, 
              developed mental health issues leading her to abandon Ruby at the tender age of 18 months.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Left in her village without care, Ruby's plight might have gone unnoticed if not for the 
              kindness of a stranger who reached out to our Myanmar field director.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              When Ruby first arrived at our home, she was a shadow of the child she was meant to be—silent, 
              malnourished, and in desperate need of love.
            </p>

            <div className="bg-rose-50 border-l-4 border-rose-500 p-6 my-8">
              <p className="text-gray-800 font-semibold">
                Here, amidst our caring environment, Ruby found her voice, her health, and her joy.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Ruby's Journey of Transformation:</h2>

            <div className="space-y-4 mb-8">
              <div>
                <strong className="text-rose-600">Education:</strong>
                <span className="text-gray-700"> Ruby is thriving in the fifth grade at a local school our orphans attend. 
                Thanks to your support, she has school supplies and a uniform, allowing her to attend school with pride.</span>
              </div>

              <div>
                <strong className="text-rose-600">Nutrition:</strong>
                <span className="text-gray-700"> From the brink of malnutrition, Ruby now enjoys three nutritious meals a day, 
                sourced partially from our very own farmland.</span>
              </div>

              <div>
                <strong className="text-rose-600">Healing:</strong>
                <span className="text-gray-700"> The love and structure of the orphan home have nurtured her from silence to a 
                cheerful chatterer, surrounded by brothers and sisters who are now her family.</span>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              Here's what Ruby has to say about her life now:
            </p>

            <blockquote className="border-l-4 border-rose-300 pl-6 py-2 my-6 italic text-gray-800 bg-gray-50 rounded-r">
              "I was alone before, but now I have many friends and sisters. I love going to school because 
              I learn new things every day. My favorite is math! I'm happy here because everyone takes care of me."
            </blockquote>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Your Support in Action</h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Your contributions have been pivotal in this transformation.</strong>
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Without your support, Ruby's story could have been very different, with risks of malnutrition, 
              child labor, or worse.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              The emergency fund you help sustain allows us to act swiftly in cases like Ruby's, ensuring 
              children are not left waiting for sponsorship but are immediately welcomed into our care.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              This fund is crucial for our ongoing and future efforts to rescue and rehabilitate children in distress.
            </p>

            <div className="bg-gradient-to-br from-rose-500 to-pink-600 text-white p-8 rounded-lg my-8">
              <h3 className="text-2xl font-bold mb-4">Looking Ahead</h3>
              <p className="mb-4">
                As we approach the end of another year, your continued support is vital. Our year-end campaign 
                focuses on expanding our reach and deepening our impact.
              </p>
              <p className="mb-6">
                And we're very thrilled to announce that as of today, we have a <strong>$110,000 matching challenge</strong> in 
                place thanks to our board members and other generous pledgers who are ready to match your generosity dollar-for-dollar!
              </p>
              <Link 
                href="https://peacegospel.org/donate"
                className="inline-block bg-white text-rose-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Give Hope Today →
              </Link>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Thank you for being the hope in the lives of children like Ruby. Your involvement doesn't 
              just change lives; it saves them.</strong>
            </p>

            <p className="text-gray-700 leading-relaxed">
              Together, we're making a real difference in Myanmar and beyond. We couldn't do it without you!
            </p>
          </div>

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t">
            <div className="flex items-center justify-between">
              <div>
                <Link href="/stories" className="text-rose-600 hover:underline font-semibold">
                  ← Back to Stories
                </Link>
              </div>
              <div className="text-sm text-gray-500">
                Share this story
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
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
