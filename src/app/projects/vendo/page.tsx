import Navigation from '@/components/Navigation';

export default function VendoProject() {
  return (
    <div className="min-h-screen text-gray-900 font-sans">
      <Navigation />
      <main className="max-w-2xl mx-auto py-16 px-4">
        <div className="mb-10">
          <span className="text-gray-400 text-sm">2023</span>
          <h1 className="text-4xl font-extrabold mt-2 mb-4">Vendo by BEES</h1>
          <img src="/images/vendo.jpg" alt="Vendo by BEES" className="rounded-lg w-full h-64 object-cover mb-6 shadow" />
          <p className="text-lg mb-2 font-medium">Empowering local businesses to sell digital products in their community.</p>
          <p className="text-gray-600 mb-4">Role: Lead Product Manager</p>
        </div>
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">Challenge</h2>
          <p className="text-gray-700">Local businesses struggled to access the ability to sell digital products and needed a simple way to offer new digital products to their customers. The cash reliant businesses were not able to offer digital products to consumers because they were unbanked and had no access to digitize their money/businesses. The challenge was to design a platform that enabled easy onboarding and seamless digital product sales for small merchants that were not tech savvy and were reliant on a cash based ecosystem.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">Solution</h2>
          <p className="text-gray-700">We built Vendo, a mobile app platform that allowed local businesses to quickly sign up, select digital products, and start selling with minimal setup. The solution focused on intuitive UX, mobile-first design, and automated payouts. The app was built with the Anheuser-Busch InBev physical cash pickup process to allow for easy cash payments from app users. </p>
          {/* Additional image break */}
          <img src="/images/vendoapp.jpg" alt="Vendo App Screenshot" className="rounded-lg w-full h-190 object-cover mb-6 shadow" />
          <p className="text-gray-700">After the user was able to purchase digital credits via Vendo, the user essentially converted cash to digital credits which they were able to then subsequently use to purchase digital products from the business. The app was built with the Anheuser-Busch InBev physical cash pickup process to allow for easy cash payments from app users. After the user was able to purchase digital credits via Vendo, the user essentially converted cash to digital credits which they were able to then subsequently use to sell digital products to consumers that entered their local business. This simple change resulted in the local business increasing local foot traffic and sales. This was a win-win for the local businesses and consumers because it filled a gap in the market and enabled the local businesses to offer digital products to their customers with minimal effort.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">Process & Insights</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Interviewed 15+ local merchants to understand pain points and digital readiness.</li>
            <li>Prototyped onboarding flows and tested with real users for feedback.</li>
            <li>Iterated on product catalog UI to maximize discoverability and conversion.</li>
            <li>Launched MVP in 3 months, resulting in 50+ businesses onboarded in the first quarter.</li>
          </ul>
        </section>
        <a href="/projects" className="inline-block mt-8 text-blue-600 hover:underline">← Back to Projects</a>
      </main>
    </div>
  );
} 