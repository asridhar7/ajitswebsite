import Navigation from '@/components/Navigation';

export default function PortfolioWebsiteProject() {
  return (
    <div className="min-h-screen text-gray-900 font-sans">
      <Navigation />
      <main className="max-w-2xl mx-auto py-16 px-4">
        <div className="mb-10">
          <span className="text-gray-400 text-sm">2024</span>
          <h1 className="text-4xl font-extrabold mt-2 mb-4">Portfolio Website</h1>
          <img src="https://placehold.co/600x350" alt="Portfolio Website" className="rounded-lg w-full h-64 object-cover mb-6 shadow" />
          <p className="text-lg mb-2 font-medium">This personal website, built with Next.js and React.</p>
          <p className="text-gray-600 mb-4">Role: Designer & Developer</p>
        </div>
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">Challenge</h2>
          <p className="text-gray-700">I wanted a modern, fast, and easily maintainable portfolio to showcase my work and share my story. The challenge was to design something unique yet simple, and to make it easy to update as my career evolves.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">Solution</h2>
          <p className="text-gray-700">I built this site with Next.js, leveraging static generation for speed and React for flexibility. The design is minimalist, mobile-friendly, and focused on content. I used Tailwind CSS for rapid styling and easy iteration.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">Process & Insights</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Sketched wireframes and iterated on layout for clarity and impact.</li>
            <li>Chose a neutral color palette and clean typography for readability.</li>
            <li>Integrated project pages and a simple navigation for easy browsing.</li>
            <li>Continuously update the site as I launch new projects and learnings.</li>
          </ul>
        </section>
        <a href="/projects" className="inline-block mt-8 text-blue-600 hover:underline">← Back to Projects</a>
      </main>
    </div>
  );
} 