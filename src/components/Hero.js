'use client';
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center justify-center relative bg-bg text-white font-body px-6 md:px-20"
    >
      <div className="fixed left-4 top-1/3 flex flex-col gap-4 text-xl text-primary z-20 animate-fade-in">
        {[FaGithub, FaYoutube, FaTwitter, FaLinkedin].map((Icon, i) => (
          <a
            key={i}
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-125 hover:text-pink-500"
          >
            <Icon />
          </a>
        ))}
      </div>

      <div className="max-w-3xl text-center md:text-left z-10 space-y-4 animate-slide-up">
        <h1 className="text-5xl md:text-7xl font-retro text-primary leading-tight">
          G’day. I’m<br /><span className="text-white">iha</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-accent">
          Full‑stack dev • Automation wizard • Graphic designer
        </h2>
        <p className="text-gray-400 leading-relaxed">
          I craft bold digital solutions using Next.js, FastAPI, and a bit of magic. From sleek
          UIs to backend automation, I make your product shine.
        </p>
        <button
          className="border border-accent px-6 py-2 text-accent hover:bg-accent hover:text-bg transition font-retro"
        >
          Contact Me
        </button>
      </div>

      <div
        className="fixed right-4 top-1/3 rotate-90 origin-bottom-right text-sm tracking-widest text-primary z-20 animate-fade-in"
      >
        iha@devmail.com
      </div>

      <div className="absolute top-6 right-6 z-30 animate-fade-in">
        <button className="border border-accent px-4 py-1 text-sm text-accent hover:bg-accent hover:text-bg transition font-retro">
          Download CV
        </button>
      </div>
    </section>
  );
}
