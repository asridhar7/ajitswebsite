import Navigation from '@/components/Navigation';

export default function CardShopDirectoryProject() {
  return (
    <div className="min-h-screen text-gray-900 font-sans">
      <Navigation />
      <main className="max-w-2xl mx-auto py-16 px-4">
        <div className="mb-10">
          <span className="text-gray-400 text-sm">2022</span>
          <h1 className="text-4xl font-extrabold mt-2 mb-4">Card Shop Directory</h1>
          <img src="/images/cardshopdirectory.png" alt="Card Shop Directory" className="rounded-lg w-full h-64 object-cover mb-6 shadow" />
          <p className="text-lg mb-2 font-medium">Helping users find local card shops with the amenities and products they want.</p>
          <p className="text-gray-600 mb-4">Role: Product Manager & UX Researcher</p>
        </div>
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">Challenge</h2>
          <p className="text-gray-700">Collectors and hobbyists struggled to find card shops that matched their needs, with little information available online. The challenge was to create a comprehensive, user-friendly directory for the community.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">Solution</h2>
          <p className="text-gray-700">We developed a searchable directory with filters for amenities, products, and location. The platform allowed shop owners to claim and update their listings, ensuring accuracy and engagement.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">Process & Insights</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Surveyed 100+ collectors to identify key features and pain points.</li>
            <li>Designed and tested wireframes with both users and shop owners.</li>
            <li>Implemented a review system to keep listings up-to-date and trustworthy.</li>
            <li>Launched with 200+ shops, quickly becoming a go-to resource for the community.</li>
          </ul>
        </section>
        <a href="/projects" className="inline-block mt-8 text-blue-600 hover:underline">← Back to Projects</a>
      </main>
    </div>
  );
} 