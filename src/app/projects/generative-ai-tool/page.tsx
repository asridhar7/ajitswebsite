import Navigation from '@/components/Navigation';

export default function GenerativeAIToolProject() {
  return (
    <div className="min-h-screen text-gray-900 font-sans">
      <Navigation />
      <main className="max-w-2xl mx-auto py-16 px-4">
        <div className="mb-10">
          <span className="text-gray-400 text-sm">2024</span>
          <h1 className="text-4xl font-extrabold mt-2 mb-4">Generative AI Tool</h1>
          <img src="https://placehold.co/600x350" alt="Generative AI Tool" className="rounded-lg w-full h-64 object-cover mb-6 shadow" />
          <p className="text-lg mb-2 font-medium">Experimental AI tool for underserved market needs.</p>
          <p className="text-gray-600 mb-4">Role: Product Manager & AI Strategist</p>
        </div>
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">Challenge</h2>
          <p className="text-gray-700">Many industries lack tailored AI solutions for their unique workflows. The challenge was to identify a niche need and rapidly prototype a generative AI tool that could deliver real value.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">Solution</h2>
          <p className="text-gray-700">We built a proof-of-concept web app leveraging the latest LLMs, with a focus on user-friendly prompts and actionable outputs. The tool was designed for easy customization and rapid iteration.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">Process & Insights</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Identified a niche workflow in need of AI automation.</li>
            <li>Developed a prototype with rapid user feedback cycles.</li>
            <li>Iterated on prompt design and output formatting.</li>
            <li>Validated value with early adopters before scaling.</li>
          </ul>
        </section>
        <a href="/projects" className="inline-block mt-8 text-blue-600 hover:underline">← Back to Projects</a>
      </main>
    </div>
  );
} 