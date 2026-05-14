import Link from 'next/link';
import MobileNav from './MobileNav';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Link href="/">
              <img src="/images/she-has-hope-logo.png" alt="She Has Hope" className="h-16 w-auto cursor-pointer" />
            </Link>
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
          <div className="flex items-center gap-4">
            <Link 
              href="https://peacegospel.org/donate" 
              className="hidden md:inline-block bg-rose-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-rose-700 transition font-sans"
            >
              Donate
            </Link>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
