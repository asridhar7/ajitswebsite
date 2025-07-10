'use client'

import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo/Name */}
        <div className="font-bold text-lg tracking-tight">Ajit Sridhar</div>
        {/* Nav Links */}
        <div className="flex items-center gap-6">
          <Link href="#portfolio" className="text-gray-700 hover:text-black font-medium">Portfolio</Link>
          <Link href="#endorsements" className="text-gray-700 hover:text-black font-medium">Endorsements</Link>
          <Link href="#about" className="text-gray-700 hover:text-black font-medium">About</Link>
          <Link href="#contact">
            <button className="ml-4 px-4 py-2 bg-black text-white rounded font-semibold shadow hover:bg-gray-900 transition">Contact</button>
          </Link>
        </div>
      </div>
    </nav>
  );
} 