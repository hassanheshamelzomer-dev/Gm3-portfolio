import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check } from 'lucide-react'
import { cn } from '../lib/utils'

const CATEGORIES = {
  'Programming Languages': ['C++', 'Python', 'Java'],
  'QA & Testing': [
    'Manual Testing',
    'Test Case Design',
    'Bug Reporting',
    'Regression Testing',
    'Software QA Fundamentals',
  ],
  'Concepts & Tools': [
    'Object-Oriented Programming',
    'Algorithms & Data Structures',
    'Problem Solving',
    'Git & GitHub',
    'Agile / Scrum basics',
  ],
  'Soft Skills': ['Teamwork', 'Critical Thinking', 'Adaptability', 'Communication'],
}

export default function Skills() {
  const [active, setActive] = useState('Programming Languages')
  const tabs = Object.keys(CATEGORIES)

  return (
    <section id="skills" className="py-24 bg-m3-surface-container-low">
      <div className="section-container">
        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="m3-headline-md text-m3-on-surface mb-4">Technical Skills</h2>
          <p className="m3-body-lg text-m3-on-surface-variant max-w-xl mx-auto">
            Core competencies developed through academic coursework and hands-on training.
          </p>
        </motion.div>

        {/* M3 Secondary Tabs */}
        <div className="flex justify-center overflow-x-auto no-scrollbar border-b border-m3-outline-variant mb-10">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={cn(
                'relative shrink-0 px-6 py-3.5 m3-label-lg transition-colors duration-200 whitespace-nowrap',
                active === tab
                  ? 'text-m3-primary'
                  : 'text-m3-on-surface-variant hover:text-m3-on-surface',
              )}
            >
              {tab}
              {active === tab && (
                <motion.span
                  layoutId="skill-tab-indicator"
                  className="absolute bottom-0 inset-x-0 h-[3px] bg-m3-primary rounded-t-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 36 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Chips */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="flex flex-wrap justify-center gap-3 min-h-[80px]"
          >
            {CATEGORIES[active].map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.04, duration: 0.3 }}
                className="m3-chip"
              >
                <Check size={14} className="text-m3-primary shrink-0" />
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
