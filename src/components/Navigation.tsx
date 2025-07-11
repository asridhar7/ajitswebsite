'use client'

import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Left: Avatar, Name, Title */}
        <Link href="/" className="flex items-center gap-3 group">
          <img src="/images/Ajit.jfif" alt="Ajit Sridhar" className="w-10 h-10 rounded-full object-cover border border-gray-200 group-hover:opacity-80 transition" />
          <div className="flex flex-col leading-tight">
            <span className="font-bold text-lg group-hover:underline">Ajit Sridhar</span>
            <span className="text-xs text-gray-500">Product Manager</span>
          </div>
        </Link>
        {/* Right: LinkedIn Icon */}
        <a
          href="https://www.linkedin.com/in/ajitsridhar/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-gray-500 hover:text-blue-700 transition ml-4"
        >
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.599v5.597z"/>
          </svg>
        </a>
      </div>
    </nav>
  );
} 