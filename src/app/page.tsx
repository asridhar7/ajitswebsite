import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-gray-900 text-center">Ajit Sridhar</h1>
          <p className="text-xl text-gray-600 text-center mt-2">Senior Product Manager | Tech Enthusiast</p>
        </div>
      </header>

      {/* Navigation */}
      <Navigation />

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
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-600">
            Contact: ajit@ajitsridhar.xyz | LinkedIn: linkedin.com/in/ajitsridhar
          </p>
        </div>
      </footer>
    </div>
  )
}
