import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Code2, Award } from 'lucide-react'

const cards = [
  {
    Icon:  GraduationCap,
    title: 'Education',
    body:  'B.Sc. in Computers and Artificial Intelligence — Cairo National University (CNU). Expected graduation: 2029 (currently 2nd year).',
  },
  {
    Icon:  Briefcase,
    title: 'Training & Experience',
    body:  'Software Testing Trainee — Digital Egypt Pioneers Initiative (DEPI), Round 5. Focused on QA methodologies, test-case design, and bug reporting.',
  },
  {
    Icon:  Code2,
    title: 'Problem Solving',
    body:  'Strong foundation in core programming, object-oriented principles, algorithmic thinking, and structured problem-solving approaches.',
  },
  {
    Icon:  Award,
    title: 'Certifications',
    body:  'Software Testing Track (DEPI) · Object-Oriented Programming & Problem Solving certification.',
  },
]

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, delay, ease: [0.2, 0, 0, 1] } },
})

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="section-container">
        {/* Header */}
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp()}
        >
          <h2 className="m3-headline-md text-m3-on-surface mb-4">About Me</h2>
          <p className="m3-body-lg text-m3-on-surface-variant max-w-2xl mx-auto">
            Aspiring AI Engineer and Tech Entrepreneur seeking opportunities in software quality
            assurance and intelligent systems development while acquiring practical industry
            experience.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {cards.map(({ Icon, title, body }, i) => (
            <motion.div
              key={title}
              className="m3-card-elevated group"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp(i * 0.1)}
            >
              <div className="w-14 h-14 rounded-2xl bg-m3-primary-container flex items-center justify-center mb-5">
                <Icon size={26} className="text-m3-on-primary-container" />
              </div>
              <h3 className="m3-title-md text-m3-on-surface mb-2">{title}</h3>
              <p className="m3-body-md text-m3-on-surface-variant leading-relaxed">{body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
