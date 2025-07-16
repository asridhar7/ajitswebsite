'use client';
import Navigation from '@/components/Navigation';
import { motion, useAnimation } from "framer-motion";
import Link from 'next/link';
import 'swiper/css';
import React from 'react'; // Added for React.useEffect

const images = [
  '/images/carousel-home/Amplitudelogo.svg',
  '/images/carousel-home/Beeslogo.png',
  '/images/carousel-home/jnj.png',
  '/images/carousel-home/Jiralogo.png',
];

function TickerCarousel() {
  // Duplicate images for seamless loop
  const allImages = [...images, ...images];
  const controls = useAnimation();

  React.useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 35,
          ease: "linear",
        },
      },
    });
  }, [controls]);

  return (
    <div className="overflow-hidden w-full">
      <motion.div
        className="flex gap-8"
        animate={controls}
        style={{ width: "max-content" }}
      >
        {allImages.map((src, i) => {
          // Simple fade for leftmost and rightmost images
          let opacity = 1;
          if (i === 0) opacity = 0.2; // leftmost
          if (i === images.length - 1) opacity = 0.2; // rightmost of first set
          if (i === images.length) opacity = 0.2; // leftmost of second set
          if (i === allImages.length - 1) opacity = 0.2; // rightmost of second set

          return (
            <motion.img
              key={i}
              src={src}
              alt="carousel"
              className="h-14 w-auto object-contain"
              style={{ opacity }}
            />
          );
        })}
      </motion.div>
    </div>
  );
}

export default function Home() {
  return (
    <div
      className="min-h-screen text-gray-900 font-sans"
      style={{
        backgroundImage: 'url(/images/whitebackground.jfif)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Navigation (minimalist, sticky) */}
      <Navigation />

      {/* Hero / Intro */}
      <section className="flex flex-col items-center justify-center text-center py-24 max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-medium mb-4">
          Product Manager specialized in taking ideas from{' '}
          <span className="text-cyan-500">zero to one</span>
        </h1>
        <p className="max-w-xl text-lg mb-8">4+ years of Product Management experience and eager to drive value for your team and users.</p>
        <a href="contact">
          <button className="px-6 py-2 bg-white text-cyan-500 rounded font-bold shadow hover:bg-white-900 transition">Contact</button>
        </a>
      </section>

      {/* Ticker Motion Carousel */}
      <section className="max-w-3xl mx-auto py-10 px-4">
        <TickerCarousel />
      </section>

      {/* About Me */}
      <Link href="/about" className="block max-w-2xl mx-auto py-20 px-4">
        <section className="cursor-pointer rounded-xl text-center p-8 transition-all duration-200 border border-transparent shadow-none hover:shadow-2xl hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400">
          <h3 className="text-2xl font-bold mb-4 text-cyan-500">About Me</h3>
          <img src="/images/Ajit.jfif" alt="Avatar" className="mx-auto rounded-full w-24 h-24 mb-4 object-cover border-4 border-blue-100" />
          <p className="text-lg mb-2">Experienced product manager with a background in fintech and health-tech. I love working with early-stage teams to launch and scale impactful products.</p>
          <p className="text-gray-600">Open to new opportunities and collaborations.</p>
        </section>
      </Link>

      {/* Work / Projects */}
      <section className="max-w-5xl mx-auto py-20 px-4">
        <h3 className="text-2xl font-bold mb-10 text-center">Work</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col gap-3">
            <Link href="/projects/vendo" className="focus:outline-none focus:ring-2 focus:ring-black rounded-lg block">
              <img src="/images/vendo.jpg" alt="Project 1" className="rounded-lg w-full h-56 object-cover cursor-pointer hover:opacity-80 transition" />
            </Link>
            <h4 className="font-semibold text-lg">Vendo by BEES</h4>
            <p className="text-gray-700">Empowering local businesses to sell digital products in their community.</p>
          </div>
          <div className="flex flex-col gap-3">
            <Link href="/projects/cardshop-directory" className="focus:outline-none focus:ring-2 focus:ring-black rounded-lg block">
              <img src="/images/cardshopdirectory.png" alt="Project 2" className="rounded-lg w-full h-56 object-cover cursor-pointer hover:opacity-80 transition" />
            </Link>
            <h4 className="font-semibold text-lg">Card Shop Directory</h4>
            <p className="text-gray-700">Helping users find local card shops with the amenities and products they want.</p>
          </div>
          <div className="flex flex-col gap-3">
            <Link href="/projects/generative-ai-tool" className="focus:outline-none focus:ring-2 focus:ring-black rounded-lg block">
              <img src="https://placehold.co/600x350" alt="Project 3" className="rounded-lg w-full h-56 object-cover cursor-pointer hover:opacity-80 transition" />
            </Link>
            <h4 className="font-semibold text-lg">Sports H2H Drafting Game</h4>
            <p className="text-gray-700">Game created to supplement classic fantasy drafting discussions among friends.</p>
          </div>
          <div className="flex flex-col gap-3">
            <Link href="/projects/portfolio-website" className="focus:outline-none focus:ring-2 focus:ring-black rounded-lg block">
              <img src="https://placehold.co/600x350" alt="Project 4" className="rounded-lg w-full h-56 object-cover cursor-pointer hover:opacity-80 transition" />
            </Link>
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
          <a href="https://www.linkedin.com/in/ajitsridhar/" className="mx-2 hover:text-black">LinkedIn</a>
          <a href="https://github.com/asridhar7" className="mx-2 hover:text-black">GitHub</a>
          <a href="mailto:ajit@ajitsridhar.xyz" className="mx-2 hover:text-black">Email</a>
        </div>
        <div>© {new Date().getFullYear()} Ajit Sridhar · Made in Next.js</div>
      </footer>
    </div>
  );
}
