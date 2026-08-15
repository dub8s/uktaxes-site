export default function HeroPattern() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full text-border"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="hero-pattern"
          width="120"
          height="120"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M0 60 L60 0 L120 60 L60 120 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <circle cx="60" cy="0" r="2.5" fill="currentColor" />
          <circle cx="0" cy="60" r="2.5" fill="currentColor" />
          <circle cx="120" cy="60" r="2.5" fill="currentColor" />
          <circle cx="60" cy="120" r="2.5" fill="currentColor" />
          <circle cx="60" cy="60" r="2" fill="none" stroke="currentColor" strokeWidth="1" />
        </pattern>
        <radialGradient id="hero-fade" cx="50%" cy="35%" r="75%">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id="hero-mask">
          <rect width="100%" height="100%" fill="url(#hero-fade)" />
        </mask>
      </defs>
      <rect width="100%" height="100%" fill="url(#hero-pattern)" mask="url(#hero-mask)" />
    </svg>
  );
}
