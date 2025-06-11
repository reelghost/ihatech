'use client';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, duration: 0.6 }
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Hero() {
  return (
    <motion.section
      className="min-h-screen flex items-center justify-center relative bg-bg text-white font-body px-6 md:px-20"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div className="fixed left-4 top-1/3 flex flex-col gap-4 text-xl text-primary z-20">
        {[FaGithub, FaYoutube, FaTwitter, FaLinkedin].map((Icon, i) => (
          <motion.a
            key={i}
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            variants={item}
            whileHover={{ scale: 1.2, color: '#ff007a' }}
          >
            <Icon />
          </motion.a>
        ))}
      </motion.div>

      <div className="max-w-3xl text-center md:text-left z-10 space-y-4">
        <motion.h1 variants={item} className="text-5xl md:text-7xl font-retro text-primary leading-tight">
          G’day. I’m<br /><span className="text-white">iha</span>
        </motion.h1>
        <motion.h2 variants={item} className="text-2xl md:text-3xl text-accent">
          Full‑stack dev • Automation wizard • Graphic designer
        </motion.h2>
        <motion.p variants={item} className="text-gray-400 leading-relaxed">
          I craft bold digital solutions using Next.js, FastAPI, and a bit of magic. From sleek
          UIs to backend automation, I make your product shine.
        </motion.p>
        <motion.button
          variants={item}
          className="border border-accent px-6 py-2 text-accent hover:bg-accent hover:text-bg transition font-retro"
          whileTap={{ scale: 0.95 }}
        >
          Contact Me
        </motion.button>
      </div>

      <motion.div
        className="fixed right-4 top-1/3 rotate-90 origin-bottom-right text-sm tracking-widest text-primary z-20"
        variants={item}
      >
        iha@devmail.com
      </motion.div>

      <motion.div className="absolute top-6 right-6 z-30" variants={item}>
        <button className="border border-accent px-4 py-1 text-sm text-accent hover:bg-accent hover:text-bg transition font-retro">
          Download CV
        </button>
      </motion.div>
    </motion.section>
  );
}
