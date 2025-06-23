import Navigation from '@/components/Navigation'

export default function Artifacts() {
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
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Product Artifacts</h2>
        <p className="text-lg text-gray-700 mb-8">This is the Product Artifacts page. Content coming soon!</p>
        
        {/* Placeholder for future artifacts content */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Product Documentation</h3>
          <p className="text-gray-600">PRDs, user stories, wireframes, and other product artifacts will be showcased here.</p>
        </div>
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