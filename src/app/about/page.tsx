import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen text-gray-900 font-sans">
      <Navigation />
      <main className="max-w-2xl mx-auto py-16 px-4">
        <div className="flex flex-col items-center text-center mb-10">
          <img src="/images/Ajit.jfif" alt="Ajit Sridhar" className="w-24 h-24 rounded-full object-cover mb-4" />
          <h1 className="text-4xl font-extrabold mb-2">Ajit Sridhar</h1>
          <h2 className="text-lg text-gray-600 mb-4">Product Manager</h2>
          <p className="text-lg mb-2">Experienced product manager with a background in fintech and health-tech. I love working with early-stage teams to launch and scale impactful products. Passionate about design, technology, and helping businesses grow.</p>
        </div>
        <section className="mb-8">
          <h3 className="text-xl font-bold mb-2">Skills & Interests</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 text-left">
            <li>Product Strategy & Roadmapping</li>
            <li>UX/UI Design</li>
            <li>Go-to-Market Planning</li>
            <li>Fintech & Health-tech</li>
            <li>Team Leadership & Mentoring</li>
            <li>Continuous Learning</li>
          </ul>
        </section>
        <Link href="/" className="inline-block mt-8 text-blue-600 hover:underline">← Back to Home</Link>
      </main>
    </div>
  );
} 