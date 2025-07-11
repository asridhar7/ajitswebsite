import Navigation from '@/components/Navigation';
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Navigation (minimalist, sticky) */}
      <Navigation />

      {/* Hero / Intro */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Ajit Sridhar</h1>
        <h2 className="text-xl md:text-2xl font-medium mb-6">Product Manager</h2>
        <p className="max-w-xl text-lg mb-8">Designer and builder of digital products. Passionate about taking ideas from zero to one and helping businesses grow.</p>
        <a href="contact">
          <button className="px-6 py-2 bg-black text-white rounded font-semibold shadow hover:bg-gray-900 transition">Contact</button>
        </a>
      </section>

      {/* About Me */}
      <section className="max-w-2xl mx-auto py-20 px-4 text-center">
        <h3 className="text-2xl font-bold mb-4">About Me</h3>
        <img src="/images/Ajit.jfif" alt="Avatar" className="mx-auto rounded-full w-24 h-24 mb-4 object-cover" />
        <p className="text-lg mb-2">Experienced product manager with a background in fintech and health-tech. I love working with early-stage teams to launch and scale impactful products.</p>
        <p className="text-gray-600">Open to new opportunities and collaborations.</p>
      </section>

      {/* Work / Projects */}
      <section className="max-w-5xl mx-auto py-20 px-4">
        <h3 className="text-2xl font-bold mb-10 text-center">Work</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col gap-3">
            <img src="/images/vendo.jpg" alt="Project 1" className="rounded-lg w-full h-56 object-cover" />
            <h4 className="font-semibold text-lg">Vendo by BEES</h4>
            <p className="text-gray-700">Empowering local businesses to sell digital products in their community.</p>
          </div>
          <div className="flex flex-col gap-3">
            <img src="/images/cardshopdirectory.png" alt="Project 2" className="rounded-lg w-full h-56 object-cover" />
            <h4 className="font-semibold text-lg">Card Shop Directory</h4>
            <p className="text-gray-700">Helping users find local card shops with the amenities and products they want.</p>
          </div>
          <div className="flex flex-col gap-3">
            <img src="https://placehold.co/600x350" alt="Project 3" className="rounded-lg w-full h-56 object-cover" />
            <h4 className="font-semibold text-lg">Generative AI Tool</h4>
            <p className="text-gray-700">Experimental AI tool for underserved market needs.</p>
          </div>
          <div className="flex flex-col gap-3">
            <img src="https://placehold.co/600x350" alt="Project 4" className="rounded-lg w-full h-56 object-cover" />
            <h4 className="font-semibold text-lg">Portfolio Website</h4>
            <p className="text-gray-700">This personal website, built with Next.js and React.</p>
          </div>
        </div>
      </section>

      {/* Services / What I Do */}
      <section className="max-w-4xl mx-auto py-20 px-4 text-center">
        <h3 className="text-2xl font-bold mb-10">What I Do</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-semibold mb-2">Product Strategy</h4>
            <p className="text-gray-700">Helping teams define, validate, and execute product vision.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">UX & Design</h4>
            <p className="text-gray-700">Designing user-centric interfaces and experiences for web and mobile.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Go-to-Market</h4>
            <p className="text-gray-700">Launching products and iterating based on user feedback and analytics.</p>
          </div>
        </div>
      </section>

      {/* Testimonials / Quotes */}
      <section className="max-w-3xl mx-auto py-20 px-4 text-center">
        <h3 className="text-2xl font-bold mb-10">Testimonials</h3>
        <blockquote className="italic text-xl text-gray-800 mb-6">“Ajit is a true unicorn product manager. Any company is lucky to work with him.”</blockquote>
        <div className="flex flex-col items-center gap-2">
          <img src="/images/avatar-placeholder.png" alt="Testimonial Avatar" className="rounded-full w-12 h-12 object-cover" />
          <div className="font-semibold">Chris Long</div>
          <div className="text-gray-500 text-sm">Former Group Product Manager</div>
          <div className="text-gray-500 text-sm">Anheuser-Busch InBev</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-gray-500 text-sm">
        <div className="mb-4">
          <a href="#" className="mx-2 hover:text-black">LinkedIn</a>
          <a href="#" className="mx-2 hover:text-black">GitHub</a>
          <a href="#" className="mx-2 hover:text-black">Email</a>
        </div>
        <div>© {new Date().getFullYear()} Ajit Sridhar · Made in Next.js</div>
      </footer>
    </div>
  );
}
