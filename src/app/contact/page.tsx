import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col items-center justify-center py-24 px-4">
      <Navigation />
      <div className="w-full max-w-md mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-4 text-center">Contact</h1>
        <p className="text-gray-700 mb-8 text-center">Feel free to reach out for collaborations, opportunities, or just to say hello!</p>
        <form className="bg-gray-50 rounded-lg shadow p-6 flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <button
            type="submit"
            className="bg-black text-white rounded px-6 py-2 font-semibold hover:bg-gray-900 transition"
            disabled
          >
            Send Message
          </button>
        </form>
        <div className="mt-8 flex flex-col items-center gap-2 text-gray-600 text-sm">
          <span>Or connect with me:</span>
          <div className="flex gap-4 mt-2">
            <a href="https://www.linkedin.com/in/ajitsridhar/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-700">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.599v5.597z"/>
              </svg>
            </a>
            <a href="mailto:ajit@ajitsridhar.xyz" aria-label="Email" className="hover:text-red-600">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 13.065l-11.985-7.065v14h23.97v-14l-11.985 7.065zm11.985-9.065h-23.97l11.985 7.065 11.985-7.065z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 