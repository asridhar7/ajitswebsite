import Navigation from '@/components/Navigation';
import Link from 'next/link';

const projects = [
  {
    href: '/projects/vendo',
    img: '/images/vendo.jpg',
    alt: 'Vendo by BEES',
    summary: 'Empowering local businesses to sell digital products in their community.'
  },
  {
    href: '/projects/cardshop-directory',
    img: '/images/cardshopdirectory.png',
    alt: 'Card Shop Directory',
    summary: 'Helping users find local card shops with the amenities and products they want.'
  },
  {
    href: '/projects/generative-ai-tool',
    img: 'https://placehold.co/600x350',
    alt: 'Generative AI Tool',
    summary: 'Experimental AI tool for underserved market needs.'
  },
  {
    href: '/projects/portfolio-website',
    img: 'https://placehold.co/600x350',
    alt: 'Portfolio Website',
    summary: 'This personal website, built with Next.js and React.'
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-gray-900 text-center">Ajit Sridhar</h1>
          <p className="text-xl text-gray-600 text-center mt-2">Senior Product Manager | Tech Enthusiast</p>
        </div>
      </header>

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {projects.map((project) => (
            <Link key={project.href} href={project.href} className="group block rounded-lg overflow-hidden shadow hover:shadow-lg transition">
              <img src={project.img} alt={project.alt} className="w-full h-56 object-cover group-hover:opacity-80 transition" />
              <div className="p-4 bg-white">
                <p className="text-gray-900 font-semibold mb-2">{project.alt}</p>
                <p className="text-gray-600 text-sm">{project.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-600">
            Contact: ajit@ajitsridhar.xyz | LinkedIn: linkedin.com/in/ajitsridhar
          </p>
        </div>
      </footer>
    </div>
  );
} 