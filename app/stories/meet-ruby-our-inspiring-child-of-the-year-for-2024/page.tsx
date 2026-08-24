import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function RubyStory() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="text-sm font-serif">
            <Link href="/" className="text-rose-600 hover:underline font-sans">Home</Link>
            <span className="mx-2 text-gray-400 font-serif">/</span>
            <Link href="/stories" className="text-rose-600 hover:underline font-sans">Stories</Link>
            <span className="mx-2 text-gray-400 font-serif">/</span>
            <span className="text-gray-600 font-serif">Meet Ruby</span>
          </nav>
        </div>
      </div>

      {/* Article */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="mb-8">
            <div className="text-sm text-gray-500 mb-4 font-serif">December 06, 2024</div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-sans">
              Meet Ruby: our inspiring Child of the Year for 2024!
            </h1>
          </header>

          {/* Featured Image Placeholder */}
          <div className="mb-10">
            <div className="w-full h-96 bg-gradient-to-br from-rose-200 via-pink-300 to-purple-200 rounded-lg flex items-center justify-center">
              <div className="text-center text-white font-sans">
                <div className="text-6xl mb-4 font-sans">✨</div>
                <div className="text-2xl font-semibold font-sans">Ruby's Story</div>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-2 text-center font-serif">Meet Ruby: our inspiring Child of the Year for 2024!</p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6 font-serif">
              Meet Ruby, the girl selected as our third annual "Child of the Year." Her resilience,
              love of learning, and growing confidence reflect the value of steady, locally led care.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 font-sans">Meet Ruby, our Child of the Year for 2024!</h2>

            <p className="text-gray-700 leading-relaxed mb-4 font-serif">
              Ruby, now a vibrant 9-year-old girl, lives in one of the program’s residential homes in Myanmar.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4 font-serif">
              <strong>Her story reflects how stable residential care, education, and trusted relationships can help a girl heal, grow, and look toward the future with hope.</strong>
            </p>

            <p className="text-gray-700 leading-relaxed mb-4 font-serif">
              Before entering the program, Ruby experienced profound family instability and lacked consistent care during her earliest years.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4 font-serif">
              A concerned community member contacted the Myanmar field director, and the local team helped arrange a safe place for her within the residential program.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6 font-serif">
              When Ruby first arrived, she was quiet and malnourished and needed consistent nutrition, safety, and patient care.
            </p>

            <div className="bg-rose-50 border-l-4 border-rose-500 p-6 my-8">
              <p className="text-gray-800 font-semibold font-sans">
                Here, amidst our caring environment, Ruby found her voice, her health, and her joy.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 font-sans">Ruby's Journey of Transformation:</h2>

            <div className="space-y-4 mb-8">
              <div>
                <strong className="text-rose-600 font-sans">Education:</strong>
                <span className="text-gray-700 font-serif"> Ruby is thriving in the fifth grade at a local school attended by students from the residential program.
                Thanks to your support, she has school supplies and a uniform, allowing her to attend school with pride.</span>
              </div>

              <div>
                <strong className="text-rose-600 font-sans">Nutrition:</strong>
                <span className="text-gray-700 font-serif"> From the brink of malnutrition, Ruby now enjoys three nutritious meals a day, 
                sourced partially from our very own farmland.</span>
              </div>

              <div>
                <strong className="text-rose-600 font-sans">Healing:</strong>
                <span className="text-gray-700 font-serif"> The love and structure of the residential home have helped her grow into a
                cheerful, expressive girl surrounded by a caring community.</span>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4 font-serif">
              Here's what Ruby has to say about her life now:
            </p>

            <blockquote className="border-l-4 border-rose-300 pl-6 py-2 my-6 italic text-gray-800 bg-gray-50 rounded-r font-serif">
              "I was alone before, but now I have many friends and sisters. I love going to school because 
              I learn new things every day. My favorite is math! I'm happy here because everyone takes care of me."
            </blockquote>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 font-sans">Your Support in Action</h2>

            <p className="text-gray-700 leading-relaxed mb-4 font-serif">
              <strong>Your contributions have been pivotal in this transformation.</strong>
            </p>

            <p className="text-gray-700 leading-relaxed mb-4 font-serif">
              Without your support, Ruby's story could have been very different, with risks of malnutrition, 
              child labor, or worse.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4 font-serif">
              The emergency fund you help sustain allows local teams to respond when girls and other young people face urgent needs, without waiting for an individual sponsorship to be arranged.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6 font-serif">
              This fund supports ongoing efforts to protect young people in crisis and provide restorative care.
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

            <p className="text-gray-700 leading-relaxed mb-4 font-serif">
              <strong>Thank you for standing with girls like Ruby. Your partnership helps locally led teams provide safety, care, education, and room to grow.</strong>
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

      <Footer />
    </div>
  );
}
