import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { Send, Loader2, CheckCircle2, AlertCircle, Mail, Phone, MapPin } from 'lucide-react'
import { cn } from '../lib/utils'

/* ──────────────────────────────────────
   EmailJS configuration
   Replace these three values with your
   own from https://www.emailjs.com
   ────────────────────────────────────── */
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'

/* ──────────────────────────────────────
   M3 Outlined Text Field (Floating Label)
   Using controlled value + "peer" CSS trick
   ────────────────────────────────────── */
function Field({ id, label, type = 'text', value, onChange, error, multiline = false }) {
  const isFloating = value.length > 0
  const Tag         = multiline ? 'textarea' : 'input'

  return (
    <div className="m3-field-wrapper">
      <Tag
        id={id}
        name={id}
        type={multiline ? undefined : type}
        rows={multiline ? 4 : undefined}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder=" "          /* keeps peer-placeholder-shown working */
        className={cn(
          multiline ? 'm3-field-textarea' : 'm3-field-input',
          error && 'has-error',
        )}
      />
      <label
        htmlFor={id}
        className={cn(
          'm3-field-label',
          isFloating && 'floating',
          error && 'has-error',
        )}
      >
        {label}
      </label>
      {error && (
        <p className="mt-1 ml-4 m3-body-sm text-m3-error flex items-center gap-1">
          <AlertCircle size={12} />
          {error}
        </p>
      )}
    </div>
  )
}

const INFO = [
  { Icon: Mail,    label: 'Email',    value: 'hassan.heshamelzomer@gmail.com', href: 'mailto:hassan.heshamelzomer@gmail.com' },
  { Icon: Phone,   label: 'Phone',    value: '+20 1008752855',                  href: 'tel:+201008752855' },
  { Icon: MapPin,  label: 'Location', value: 'Giza, Egypt',                    href: null },
]

export default function Contact() {
  const formRef = useRef(null)

  const [values, setValues] = useState({ user_name: '', user_email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  /* ── Validation ── */
  const validate = () => {
    const e = {}
    if (!values.user_name.trim())  e.user_name  = 'Name is required.'
    if (!values.user_email.trim()) e.user_email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.user_email))
      e.user_email = 'Enter a valid email address.'
    if (!values.message.trim())    e.message    = 'Message cannot be empty.'
    return e
  }

  /* ── Submit ── */
  const handleSubmit = async e => {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length) { setErrors(e2); return }
    setErrors({})
    setStatus('loading')

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      )
      setStatus('success')
      setValues({ user_name: '', user_email: '', message: '' })
    } catch {
      setStatus('error')
    }

    // Reset back to idle after 4 s
    setTimeout(() => setStatus('idle'), 4000)
  }

  const set = key => val => setValues(v => ({ ...v, [key]: val }))

  return (
    <section id="contact" className="py-24 bg-m3-surface-container-low">
      <div className="section-container">
        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="m3-headline-md text-m3-on-surface mb-4">Get In Touch</h2>
          <p className="m3-body-lg text-m3-on-surface-variant max-w-xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just a friendly chat.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* ── Contact info ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="flex flex-col gap-6 justify-center"
          >
            <h3 className="m3-title-lg text-m3-on-surface">Contact Information</h3>
            <p className="m3-body-lg text-m3-on-surface-variant leading-relaxed max-w-sm">
              I'm always open to discussing new projects, creative ideas, or opportunities to be
              part of your vision.
            </p>

            <div className="flex flex-col gap-5">
              {INFO.map(({ Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-m3-surface-container flex items-center justify-center text-m3-on-surface-variant group-hover:bg-m3-primary-container group-hover:text-m3-on-primary-container transition-colors duration-200 shrink-0">
                    <Icon size={22} />
                  </div>
                  <div>
                    <p className="m3-label-md text-m3-on-surface mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} className="m3-body-md text-m3-on-surface-variant hover:text-m3-primary transition-colors">
                        {value}
                      </a>
                    ) : (
                      <span className="m3-body-md text-m3-on-surface-variant">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              noValidate
              className="m3-card-elevated flex flex-col gap-5"
            >
              {/* Hidden reply_to maps to user_email for EmailJS */}
              <input type="hidden" name="reply_to" value={values.user_email} />

              <Field
                id="user_name"
                label="Your Name"
                value={values.user_name}
                onChange={set('user_name')}
                error={errors.user_name}
              />
              <Field
                id="user_email"
                label="Email Address"
                type="email"
                value={values.user_email}
                onChange={set('user_email')}
                error={errors.user_email}
              />
              <Field
                id="message"
                label="Message"
                value={values.message}
                onChange={set('message')}
                error={errors.message}
                multiline
              />

              {/* Submit */}
              <div className="flex items-center justify-between gap-4 mt-1">
                {/* Status message */}
                <AnimatePresence mode="wait">
                  {status === 'success' && (
                    <motion.p
                      key="success"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 m3-body-sm text-m3-primary"
                    >
                      <CheckCircle2 size={16} /> Message sent successfully!
                    </motion.p>
                  )}
                  {status === 'error' && (
                    <motion.p
                      key="error"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 m3-body-sm text-m3-error"
                    >
                      <AlertCircle size={16} /> Something went wrong. Please try again.
                    </motion.p>
                  )}
                  {(status === 'idle' || status === 'loading') && (
                    <span key="idle" />
                  )}
                </AnimatePresence>

                <button
                  type="submit"
                  disabled={status === 'loading' || status === 'success'}
                  className={cn(
                    'm3-btn-filled ml-auto min-w-[130px]',
                    status === 'success' && 'bg-m3-primary-container text-m3-on-primary-container',
                  )}
                >
                  {status === 'loading' ? (
                    <Loader2 size={18} className="animate-spin" />
                  ) : status === 'success' ? (
                    <>
                      <CheckCircle2 size={18} /> Sent
                    </>
                  ) : (
                    <>
                      <Send size={18} /> Send
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
