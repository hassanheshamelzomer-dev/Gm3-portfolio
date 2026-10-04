import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Code2, BugPlay, BookOpen } from 'lucide-react'

/* ── CV-sourced project data ── */
const PROJECTS = [
  {
    Icon:   BugPlay,
    title:  'Software Testing & QA Training',
    desc:   'Completed an intensive Software Testing track through the Digital Egypt Pioneers Initiative (DEPI) Round 5. Covered manual testing methodologies, black-box and white-box techniques, test-case design, bug life-cycle management, and regression testing principles.',
    tech:   ['Manual Testing', 'Test Cases', 'Bug Reporting', 'QA Fundamentals', 'Regression Testing'],
    live:   null,
    repo:   null,
    badge:  'Training · DEPI',
  },
  {
    Icon:   BookOpen,
    title:  'OOP & Problem Solving Certification',
    desc:   'Completed a structured course in Object-Oriented Programming and Algorithmic Problem Solving, covering core design patterns, data structures, and competitive programming fundamentals in C++ and Python.',
    tech:   ['C++', 'Python', 'OOP', 'Algorithms', 'Data Structures'],
    live:   null,
    repo:   '#',
    badge:  'Certification',
  },
  {
    Icon:   Code2,
    title:  'Personal Portfolio Website',
    desc:   'Designed and built this fully responsive personal portfolio adhering to Google Material Design 3 (M3) guidelines, featuring light/dark mode, scroll-spy navigation, animated sections, and an EmailJS-powered contact form.',
    tech:   ['React', 'Tailwind CSS', 'Framer Motion', 'M3 Design', 'EmailJS'],
    live:   '#',
    repo:   '#',
    badge:  'Personal Project',
  },
]

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, delay, ease: [0.2, 0, 0, 1] } },
})

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        {/* Header */}
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp()}
        >
          <h2 className="m3-headline-md text-m3-on-surface mb-4">Projects &amp; Case Studies</h2>
          <p className="m3-body-lg text-m3-on-surface-variant max-w-xl mx-auto">
            A showcase of my academic training, QA experience, and personal projects.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map(({ Icon, title, desc, tech, live, repo, badge }, i) => (
            <motion.article
              key={title}
              className="m3-card-outlined flex flex-col group hover:shadow-m3-elevation-2 hover:-translate-y-1 transition-all duration-300"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeUp(i * 0.1)}
            >
              {/* Icon area */}
              <div className="h-40 rounded-2xl bg-m3-surface-container-low flex items-center justify-center mb-5 overflow-hidden">
                <Icon
                  size={52}
                  className="text-m3-primary/60 group-hover:text-m3-primary group-hover:scale-110 transition-all duration-400"
                />
              </div>

              {/* Badge */}
              <span className="m3-label-sm text-m3-primary mb-2">{badge}</span>

              {/* Title */}
              <h3 className="m3-title-md text-m3-on-surface mb-2">{title}</h3>

              {/* Description */}
              <p className="m3-body-sm text-m3-on-surface-variant leading-relaxed mb-5 flex-1">
                {desc}
              </p>

              {/* Tech chips */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {tech.map(t => (
                  <span
                    key={t}
                    className="px-2.5 py-0.5 rounded-md bg-m3-surface-container-high text-m3-on-surface-variant m3-label-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-2 mt-auto">
                {repo && (
                  <a href={repo} target="_blank" rel="noreferrer" className="m3-btn-tonal flex-1 text-xs h-9 px-3">
                    Code
                  </a>
                )}
                {live && (
                  <a href={live} target="_blank" rel="noreferrer" className="m3-btn-filled flex-1 text-xs h-9 px-3">
                    <ExternalLink size={14} />
                    Live
                  </a>
                )}
                {!repo && !live && (
                  <span className="m3-btn-outlined flex-1 text-xs h-9 px-3 opacity-50 cursor-default">
                    In Progress
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
