import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, Download } from 'lucide-react'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.2, 0, 0, 1] } },
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 overflow-hidden"
    >
      {/* Subtle tonal background glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% -10%, var(--md-sys-color-primary-container) 0%, transparent 70%)',
          opacity: 0.35,
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="section-container flex flex-col items-center text-center relative z-10"
      >
        {/* Status pill */}
        <motion.div variants={item}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-m3-surface-container-high border border-m3-outline-variant m3-label-md text-m3-primary mb-8">
            <span className="w-2 h-2 rounded-full bg-m3-primary animate-pulse-dot" />
            Available for Opportunities
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={item}
          className="m3-display-lg text-m3-on-surface font-bold mb-6 max-w-3xl"
        >
          Software QC Engineer{' '}
          <span className="text-m3-primary">&amp; AI Student</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          variants={item}
          className="m3-body-lg text-m3-on-surface-variant max-w-xl mb-10 leading-relaxed"
        >
          Hi, I'm <strong className="text-m3-on-surface font-medium">Hassan Zaki</strong> — a
          motivated Artificial Intelligence student and Software Testing Trainee, passionate about
          quality assurance and intelligent systems development.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={item} className="flex flex-col sm:flex-row gap-3 mb-12">
          <a href="#projects" className="m3-btn-filled">
            View Projects
            <ArrowRight size={18} />
          </a>
          <a href="#contact" className="m3-btn-outlined">
            <Mail size={18} />
            Contact Me
          </a>
        </motion.div>

        {/* Download CV */}
        <motion.div variants={item}>
          <a
            href="#"
            className="m3-btn-text text-m3-on-surface-variant hover:text-m3-primary transition-colors"
          >
            <Download size={16} />
            Download CV
          </a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        >
          <span className="m3-label-sm text-m3-on-surface-variant">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="w-[2px] h-6 bg-m3-outline-variant rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
