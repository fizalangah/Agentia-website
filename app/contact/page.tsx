'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaTwitter, FaLinkedin, FaDiscord, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

const socialLinks = [
  {
    name: 'GitHub',
    url: '',
    icon: <FaGithub className="w-6 h-6" />,
    color: 'hover:text-white'
  },
  {
    name: 'Twitter',
    url: '',
    icon: <FaTwitter className="w-6 h-6" />,
    color: 'hover:text-white'
  },
  {
    name: 'LinkedIn',
    url: '',
    icon: <FaLinkedin className="w-6 h-6" />,
    color: 'hover:text-white'
  },
  {
    name: 'Discord',
    url: '',
    icon: <FaDiscord className="w-6 h-6" />,
    color: 'hover:text-white'
  }
]

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('loading')
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success')
      // Reset form
      const form = e.target as HTMLFormElement
      form.reset()
    }, 1000)
  }

  return (
    <main className="min-h-screen py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white sm:text-5xl mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-[#a1a1aa] max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold mb-6 text-white">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center text-[#a1a1aa] hover:text-white transition-colors duration-200">
                  <FaEnvelope className="w-5 h-5 mr-3 text-[#3b82f6]" />
                  <span>support@agentia-ai.com</span>
                </div>
                <div className="flex items-center text-[#a1a1aa] hover:text-white transition-colors duration-200">
                  <FaPhone className="w-5 h-5 mr-3 text-[#3b82f6]" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-[#a1a1aa] hover:text-white transition-colors duration-200">
                  <FaMapMarkerAlt className="w-5 h-5 mr-3 text-[#3b82f6]" />
                  <span>123 AI Street, Tech Valley, CA 94025</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 text-white">Connect With Us</h2>
              <div className="flex space-x-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-[#a1a1aa] transition-colors duration-200 ${link.color}`}
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#a1a1aa] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#27272a] rounded-lg focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent text-white placeholder-[#4b5563]"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#a1a1aa] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#27272a] rounded-lg focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent text-white placeholder-[#4b5563]"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[#a1a1aa] mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#27272a] rounded-lg focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent text-white placeholder-[#4b5563]"
                  placeholder="How can we help?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#a1a1aa] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#27272a] rounded-lg focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent text-white placeholder-[#4b5563]"
                  placeholder="Your message"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={formStatus === 'loading'}
                className={`w-full py-3 px-6 rounded-lg text-white font-semibold transition duration-200 
                  ${formStatus === 'loading' 
                    ? 'bg-[#27272a] cursor-not-allowed' 
                    : 'bg-[#3b82f6] hover:bg-[#2563eb]'}`}
              >
                {formStatus === 'loading' ? 'Sending...' : 'Send Message'}
              </button>

              {formStatus === 'success' && (
                <p className="text-green-500 text-center">Message sent successfully!</p>
              )}
              
              {formStatus === 'error' && (
                <p className="text-red-500 text-center">Error sending message. Please try again.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  )
} 