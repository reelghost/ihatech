'use client';
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-between px-6 md:px-20 relative bg-bg text-white font-body">
      
      {/* === Left Social Icons === */}
      <div className="fixed left-4 top-1/3 flex flex-col gap-4 text-xl text-primary">
        <FaGithub className="hover:text-accent cursor-pointer" />
        <FaYoutube className="hover:text-accent cursor-pointer" />
        <FaTwitter className="hover:text-accent cursor-pointer" />
        <FaLinkedin className="hover:text-accent cursor-pointer" />
      </div>

      {/* === Center Content === */}
      <div className="max-w-3xl z-10">
        <h1 className="text-5xl md:text-7xl font-retro text-primary leading-tight mb-4">
          G’dau. I’m <br />
          <span className="text-white">iha,</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-accent mb-6">
          I build full-stack apps, automate workflows & design visuals.
        </h2>
        <p className="text-gray-400 leading-relaxed mb-8">
          I’m a full-stack dev who blends code, design, and automation into scalable digital experiences.
          Whether it's React, FastAPI, or custom scrapers, I get things done with vibes and performance.
        </p>
        <button className="border border-accent px-6 py-2 text-accent hover:bg-accent hover:text-bg transition">
          Contact Me
        </button>
      </div>

      {/* === Email (Vertical Right) === */}
      <div className="fixed right-4 top-1/3 transform rotate-90 origin-bottom-right text-sm tracking-widest text-primary">
        iha@devmail.com
      </div>

      {/* === CV Button Top Right === */}
      <div className="absolute top-6 right-6">
        <button className="border border-accent px-4 py-1 text-sm text-accent hover:bg-accent hover:text-bg transition font-retro">
          Download CV
        </button>
      </div>
    </section>
  );
}
