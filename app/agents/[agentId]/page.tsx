'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaStar, FaCode, FaGithub, FaEnvelope, FaRobot, FaCheckCircle } from 'react-icons/fa'
import Image from 'next/image'

// Mock data - replace with your actual data fetching logic
const agentData = {
  id: 'analytics-agent',
  name: 'Analytics Agent',
  logo: '/agents/analytics-logo.png',
  description: 'Advanced AI-powered analytics agent that processes complex data sets to provide actionable business insights and predictive analytics.',
  shortDescription: 'Transform your data into actionable insights',
  developer: {
    name: 'AI Analytics Team',
    github: 'https://github.com/ai-analytics',
    email: 'analytics@agentia-ai.com'
  },
  features: [
    'Real-time data processing',
    'Predictive analytics',
    'Custom report generation',
    'Data visualization',
    'Anomaly detection',
    'Trend analysis'
  ],
  useCases: [
    {
      title: 'Business Intelligence',
      description: 'Analyze market trends and customer behavior to make data-driven decisions.'
    },
    {
      title: 'Performance Monitoring',
      description: 'Track and optimize system performance with real-time analytics.'
    },
    {
      title: 'Risk Assessment',
      description: 'Identify and mitigate potential risks through predictive analysis.'
    }
  ],
  pricing: [
    {
      plan: 'Basic',
      price: '$49/month',
      features: ['5 reports/month', 'Basic analytics', 'Email support']
    },
    {
      plan: 'Pro',
      price: '$99/month',
      features: ['Unlimited reports', 'Advanced analytics', 'Priority support']
    },
    {
      plan: 'Enterprise',
      price: 'Custom',
      features: ['Custom solutions', 'Dedicated support', 'API access']
    }
  ],
  reviews: [
    {
      user: 'John Doe',
      rating: 5,
      comment: 'Exceptional analytics capabilities. Transformed our decision-making process.',
      date: '2024-03-15'
    },
    {
      user: 'Jane Smith',
      rating: 4,
      comment: 'Great tool for business intelligence. Very intuitive interface.',
      date: '2024-03-10'
    }
  ]
}

export default function AgentPage({ params }: { params: { agentId: string } }) {
  const [activeTab, setActiveTab] = useState('features')
  const [showDemoModal, setShowDemoModal] = useState(false)

  return (
    <main className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 relative">
              <Image
                src={agentData.logo}
                alt={agentData.name}
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {agentData.name}
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                {agentData.shortDescription}
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => setShowDemoModal(true)}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Try Demo
                </button>
                <a
                  href="#pricing"
                  className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  View Pricing
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="flex space-x-8">
            {['features', 'use cases', 'pricing', 'reviews'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>

        {/* Content Sections */}
        <div className="mb-16">
          {activeTab === 'features' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {agentData.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <FaCheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === 'use cases' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {agentData.useCases.map((useCase, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                  <p className="text-gray-600">{useCase.description}</p>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === 'pricing' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {agentData.pricing.map((plan, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-2">{plan.plan}</h3>
                  <p className="text-3xl font-bold text-blue-600 mb-6">{plan.price}</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <FaCheckCircle className="w-5 h-5 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === 'reviews' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              {agentData.reviews.map((review, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold">{review.user}</h3>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`w-5 h-5 ${
                            i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-2">{review.comment}</p>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              ))}
            </motion.div>
          )}
        </div>

        {/* Developer Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-50 p-6 rounded-lg"
        >
          <h2 className="text-2xl font-bold mb-4">Developer Information</h2>
          <div className="flex items-center space-x-6">
            <div>
              <p className="font-semibold">{agentData.developer.name}</p>
              <div className="flex items-center space-x-4 mt-2">
                <a
                  href={agentData.developer.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
                <a
                  href={`mailto:${agentData.developer.email}`}
                  className="text-gray-600 hover:text-gray-900"
                >
                  <FaEnvelope className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Demo Modal */}
      {showDemoModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg p-8 max-w-lg w-full mx-4"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Try Demo</h3>
              <button
                onClick={() => setShowDemoModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>
            <p className="text-gray-600 mb-6">
              Experience the power of our {agentData.name} firsthand with a live demo.
            </p>
            {/* Add your demo component here */}
            <div className="flex justify-end">
              <button
                onClick={() => setShowDemoModal(false)}
                className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </main>
  )
} 