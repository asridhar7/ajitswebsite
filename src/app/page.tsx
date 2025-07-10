import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      {/* Hero Section */}
      <section className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Ajit Sridhar - Product Manager</h1>
        <p className="text-lg text-gray-700 mb-6 max-w-2xl">Experienced Senior Product Manager with 5+ years of experience improving B2B SaaS products in the Fintech and Health-tech industries.</p>
        <a href="#contact">
          <button className="px-6 py-2 bg-black text-white rounded font-semibold shadow hover:bg-gray-900 transition mb-8">Contact</button>
        </a>
        <div className="w-full rounded-lg overflow-hidden shadow mb-8">
          <img src="https://placehold.co/800x400" alt="Hero" className="w-full h-auto object-cover" />
        </div>
      </section>
      {/* Projects Section */}
      <section className="max-w-6xl mx-auto px-4 py-12" id="projects">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-white rounded-lg shadow p-4 flex flex-col">
            <img src="https://placehold.co/400x250" alt="Vendo by BEES" className="rounded mb-4 object-cover w-full h-40" />
            <h3 className="font-semibold text-lg mb-2">Vendo by BEES</h3>
            <p className="text-gray-600 text-sm">An app that empowers local businesses to sell digital products in their community.</p>
          </div>
          {/* Project 2 */}
          <div className="bg-white rounded-lg shadow p-4 flex flex-col">
            <img src="https://placehold.co/400x250" alt="Card Shop Directory" className="rounded mb-4 object-cover w-full h-40" />
            <h3 className="font-semibold text-lg mb-2">Card Shop Directory</h3>
            <p className="text-gray-600 text-sm">A directory built to help users find local card shops with the amenities and products they want.</p>
          </div>
          {/* Project 3 */}
          <div className="bg-white rounded-lg shadow p-4 flex flex-col">
            <img src="https://placehold.co/400x250" alt="Generative AI Tool" className="rounded mb-4 object-cover w-full h-40" />
            <h3 className="font-semibold text-lg mb-2">Generative AI Tool</h3>
            <p className="text-gray-600 text-sm">An experimental AI tool that is being built to improve an area in the market that is currently underserved.</p>
          </div>
        </div>
      </section>
      {/* Portfolio Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-8" id="portfolio">
        {/* Text Content */}
        <div className="flex-1 w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Portfolio</h2>
          <div className="mb-4">
            <h3 className="font-semibold mb-1">Subheading</h3>
            <p className="text-gray-700 mb-2">Body text for whatever you’d like to expand on the main point.</p>
            <h3 className="font-semibold mb-1">Subheading</h3>
            <p className="text-gray-700 mb-2">Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes.</p>
            <h3 className="font-semibold mb-1">Subheading</h3>
            <p className="text-gray-700 mb-4">Body text for whatever you’d like to add more to the main point. It provides details, explanations, and context.</p>
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-2 bg-black text-white rounded font-semibold shadow hover:bg-gray-900 transition">Button</button>
            <button className="px-6 py-2 bg-gray-200 text-gray-900 rounded font-semibold shadow hover:bg-gray-300 transition">Secondary button</button>
          </div>
        </div>
        {/* Image */}
        <div className="flex-1 w-full md:w-1/2 flex justify-center">
          <img src="https://placehold.co/500x350" alt="Portfolio" className="rounded-lg shadow object-cover w-full max-w-md" />
        </div>
      </section>
      {/* About Section */}
      <section className="max-w-6xl mx-auto px-4 py-12" id="about">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">About</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow p-4 flex flex-col">
            <img src="https://placehold.co/400x200" alt="About 1" className="rounded mb-4 object-cover w-full h-32" />
            <h3 className="font-semibold mb-2">Subheading</h3>
            <p className="text-gray-700">Body text for whatever you’d like to add more to the subheading.</p>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow p-4 flex flex-col">
            <img src="https://placehold.co/400x200" alt="About 2" className="rounded mb-4 object-cover w-full h-32" />
            <h3 className="font-semibold mb-2">Subheading</h3>
            <p className="text-gray-700">Body text for whatever you’d like to expand on the main point.</p>
          </div>
        </div>
      </section>
      {/* Endorsements Section */}
      <section className="max-w-6xl mx-auto px-4 py-12" id="endorsements">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Endorsements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Endorsement 1 */}
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
            <p className="italic text-gray-800 mb-4">“A terrific piece of praise!”</p>
            <img src="https://placehold.co/48x48" alt="Avatar 1" className="rounded-full mb-2" />
            <div className="font-semibold">Hero</div>
            <div className="text-gray-500 text-sm">beacause</div>
          </div>
          {/* Endorsement 2 */}
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
            <p className="italic text-gray-800 mb-4">“A fantastic bit of feedback”</p>
            <img src="https://placehold.co/48x48" alt="Avatar 2" className="rounded-full mb-2" />
            <div className="font-semibold">Name</div>
            <div className="text-gray-500 text-sm">beacause</div>
          </div>
          {/* Endorsement 3 */}
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
            <p className="italic text-gray-800 mb-4">“A genuinely glowing review”</p>
            <img src="https://placehold.co/48x48" alt="Avatar 3" className="rounded-full mb-2" />
            <div className="font-semibold">Name</div>
            <div className="text-gray-500 text-sm">team</div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* About Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Hello! I&apos;m Ajit, a passionate Product Manager with a love for building impactful projects and learning new technologies.
          </p>
        </section>

        {/* Achievements Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Achievements</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span className="text-gray-700">Winner, Hackathon 2023 - Built an AI-powered productivity tool</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span className="text-gray-700">Published 3 research papers in peer-reviewed journals</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span className="text-gray-700">Top 1% in LeetCode global rankings</span>
            </li>
          </ul>
        </section>

        {/* Projects Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cars - AI</h3>
              <p className="text-gray-700">A web app to organize and prioritize daily tasks using AI.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">WeatherNow</h3>
              <p className="text-gray-700">Real-time weather dashboard with location-based alerts.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Portfolio Website</h3>
              <p className="text-gray-700">This personal website, built with Next.js and React.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Name */}
          <div className="font-semibold text-gray-800">Ajit Sridhar</div>
          {/* Links and Socials */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex gap-6 mb-2 md:mb-0">
              <a href="#portfolio" className="text-gray-600 hover:text-black">Portfolio</a>
              <a href="#endorsements" className="text-gray-600 hover:text-black">Endorsements</a>
              <a href="#about" className="text-gray-600 hover:text-black">About</a>
              <a href="#contact" className="text-gray-600 hover:text-black">Contact</a>
            </div>
            <div className="flex gap-4">
              <a href="#" aria-label="GitHub" className="text-gray-500 hover:text-black">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-500 hover:text-blue-700">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.599v5.597z"/></svg>
              </a>
              <a href="#" aria-label="Email" className="text-gray-500 hover:text-red-600">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 13.065l-11.985-7.065v14h23.97v-14l-11.985 7.065zm11.985-9.065h-23.97l11.985 7.065 11.985-7.065z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
