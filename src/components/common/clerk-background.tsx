"use client";

export default function ClerkBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">

      {/* Base */}
      <div className="absolute inset-0 bg-[#fafafa]" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.04] clerk-grid-background" />

      {/* Circuit SVG */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.08] text-slate-400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="clerk-pattern"
            width="320"
            height="320"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M40 160 H280"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
            />

            <path
              d="M160 40 V280"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
            />

            <path
              d="M40 160 V90 H90"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
            />

            <path
              d="M280 160 V230 H230"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
            />

            <rect
              x="145"
              y="145"
              width="30"
              height="30"
              rx="4"
              fill="none"
              stroke="currentColor"
            />

            <rect
              x="34"
              y="154"
              width="12"
              height="12"
              rx="2"
              fill="none"
              stroke="currentColor"
            />

            <rect
              x="274"
              y="154"
              width="12"
              height="12"
              rx="2"
              fill="none"
              stroke="currentColor"
            />

            <rect
              x="154"
              y="34"
              width="12"
              height="12"
              rx="2"
              fill="none"
              stroke="currentColor"
            />

            <rect
              x="154"
              y="274"
              width="12"
              height="12"
              rx="2"
              fill="none"
              stroke="currentColor"
            />
          </pattern>
        </defs>

        <rect
          width="100%"
          height="100%"
          fill="url(#clerk-pattern)"
        />
      </svg>

      {/* Center highlight */}
      <div
        className="
          absolute
          left-1/2
          top-[250px]
          h-[900px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          bg-white
          blur-[180px]
        "
      />

      {/* Edge fade */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white to-transparent" />
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white to-transparent" />
    </div>
  );
}