export function PreventionIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="gradient-prevention" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#2a887e', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#cc2e78', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      {/* Shield with check mark */}
      <path
        d="M32 4L10 14V28C10 42 18 52 32 60C46 52 54 42 54 28V14L32 4Z"
        fill="url(#gradient-prevention)"
      />
      <path
        d="M26 32L30 36L40 24"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function RescueIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="gradient-rescue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#2a887e', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#cc2e78', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      {/* Helping hands */}
      <path
        d="M16 38L16 28C16 24 18 22 20 22C22 22 24 24 24 28V20C24 16 26 14 28 14C30 14 32 16 32 20V18C32 14 34 12 36 12C38 12 40 14 40 18V20C40 16 42 14 44 14C46 14 48 16 48 20V36C48 46 42 52 32 52C22 52 16 46 16 38Z"
        fill="url(#gradient-rescue)"
      />
      <circle cx="28" cy="8" r="4" fill="url(#gradient-rescue)" />
    </svg>
  );
}

export function RehabilitationIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="gradient-rehabilitation" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#2a887e', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#cc2e78', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      {/* Heart with pulse line */}
      <path
        d="M32 54C32 54 10 42 10 26C10 18 14 12 20 12C24 12 28 14 32 18C36 14 40 12 44 12C50 12 54 18 54 26C54 42 32 54 32 54Z"
        fill="url(#gradient-rehabilitation)"
      />
      <path
        d="M20 26H26L28 22L30 30L32 26H38"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function RestorationIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="gradient-restoration" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#2a887e', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#cc2e78', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      {/* Rising sun/new beginning */}
      <circle cx="32" cy="40" r="16" fill="url(#gradient-restoration)" />
      <line x1="32" y1="8" x2="32" y2="16" stroke="url(#gradient-restoration)" strokeWidth="3" strokeLinecap="round" />
      <line x1="16" y1="16" x2="21" y2="21" stroke="url(#gradient-restoration)" strokeWidth="3" strokeLinecap="round" />
      <line x1="8" y1="32" x2="16" y2="32" stroke="url(#gradient-restoration)" strokeWidth="3" strokeLinecap="round" />
      <line x1="48" y1="16" x2="43" y2="21" stroke="url(#gradient-restoration)" strokeWidth="3" strokeLinecap="round" />
      <line x1="56" y1="32" x2="48" y2="32" stroke="url(#gradient-restoration)" strokeWidth="3" strokeLinecap="round" />
      <rect x="8" y="56" width="48" height="3" fill="url(#gradient-restoration)" />
    </svg>
  );
}

export function SustainabilityIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="gradient-sustainability" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#2a887e', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#cc2e78', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      {/* Growing plant/seedling */}
      <path
        d="M32 56V28"
        stroke="url(#gradient-sustainability)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Left leaf */}
      <path
        d="M32 36C32 36 20 34 16 24C16 24 20 20 28 22C32 23 32 28 32 32"
        fill="url(#gradient-sustainability)"
      />
      {/* Right leaf */}
      <path
        d="M32 28C32 28 44 26 48 16C48 16 44 12 36 14C32 15 32 20 32 24"
        fill="url(#gradient-sustainability)"
      />
      {/* Roots */}
      <path
        d="M32 56C28 58 24 58 20 56M32 56C36 58 40 58 44 56"
        stroke="url(#gradient-sustainability)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
