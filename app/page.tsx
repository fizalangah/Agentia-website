'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaRobot, FaCode, FaUserPlus } from 'react-icons/fa'
import Toast from '../components/toast'

export default function HomePage() {
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')

  const handleDeveloperJoin = (e: React.MouseEvent) => {
    e.preventDefault()
    setToastMessage('Successfully joined as a developer! Welcome aboard! 🚀')
    setShowToast(true)
  }

  const handleSignUp = (e: React.MouseEvent) => {
    e.preventDefault()
    setToastMessage('Successfully signed up! Welcome to Agentia World! 🎉')
    setShowToast(true)
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-800 to-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-blue-100 mb-6">
              Welcome to <span className="text-blue-600">Agentia World</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
              Discover the future of AI-powered solutions. Our intelligent agents are ready to transform your business and enhance productivity.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/agents" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200">
                <FaRobot className="mr-2" />
                Explore Agents
              </Link>
              <Link href="#" onClick={handleDeveloperJoin} className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200 transition-colors duration-200">
                <FaCode className="mr-2" />
                Join as Developer
              </Link>
              <Link href="#" onClick={handleSignUp} className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-blue-100 hover:bg-gray-200 transition-colors duration-200">
                <FaUserPlus className="mr-2" />
                Sign Up
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Feature 1 */}
            <div className= "bg-[#1a1a1a] rounded-2xl p-12 border border-[#27272a]">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <FaRobot className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-100">Intelligent Agents</h3>
              <p className="text-blue-100">
                Access a diverse ecosystem of AI agents designed to handle various tasks and boost your productivity.
              </p>
            </div>

            {/* Feature 2 */}
            <div className= "bg-[#1a1a1a] rounded-2xl p-12 border border-[#27272a]">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <FaCode className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-100">Developer Platform</h3>
              <p className="text-blue-100">
                Build and deploy your own AI agents using our comprehensive development tools and APIs.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#1a1a1a] rounded-2xl p-12 border border-[#27272a]">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <FaUserPlus className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-100">Easy Integration</h3>
              <p className="text-blue-100">
                Seamlessly integrate our AI agents into your existing workflows and applications.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-black-600 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-20 text-center bg-[#1a1a1a] rounded-2xl p-12 border border-[#27272a]"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-[#a1a1aa] mb-8 max-w-2xl mx-auto">
            Leverage our advanced technology stack to drive innovation and growth in your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg text-white bg-[#3b82f6] hover:bg-[#2563eb] transition-colors duration-200"
            >
              Get Started
            </a>
            <a
              href="/documentation"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg text-[#a1a1aa] border border-[#27272a] hover:text-white hover:border-white transition-colors duration-200"
            >
              View Documentation
            </a>
          </div>
        </motion.div>
        </div>
      </section>

      {/* Toast Component */}
      <Toast 
        message={toastMessage}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </div>
  )
}
