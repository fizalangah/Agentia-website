'use client'

import { motion } from 'framer-motion'
import { 
  FaRobot, 
  FaBrain, 
  FaBolt, 
  FaChartLine, 
  FaShieldAlt, 
  FaCode,
  FaCloud,
  FaCogs,
  FaUserFriends
} from 'react-icons/fa'

const features = [
  {
    icon: <FaRobot className="w-8 h-8 text-[#3b82f6]" />,
    title: "Intelligent AI Agents",
    description: "Access a diverse marketplace of specialized AI agents designed for various business needs and tasks.",
    category: "Core Features"
  },
  {
    icon: <FaBrain className="w-8 h-8 text-[#3b82f6]" />,
    title: "Advanced Learning Capabilities",
    description: "Our agents continuously learn and adapt to your specific requirements, improving over time.",
    category: "Core Features"
  },
  {
    icon: <FaBolt className="w-8 h-8 text-[#3b82f6]" />,
    title: "Real-time Processing",
    description: "Lightning-fast response times with our optimized processing infrastructure.",
    category: "Performance"
  },
  {
    icon: <FaChartLine className="w-8 h-8 text-[#3b82f6]" />,
    title: "Analytics Dashboard",
    description: "Comprehensive analytics and insights to track agent performance and usage metrics.",
    category: "Analytics"
  },
  {
    icon: <FaShieldAlt className="w-8 h-8 text-[#3b82f6]" />,
    title: "Enterprise-grade Security",
    description: "Top-tier security measures ensuring your data and operations remain protected.",
    category: "Security"
  },
  {
    icon: <FaCode className="w-8 h-8 text-[#3b82f6]" />,
    title: "Developer API",
    description: "Robust API integration capabilities for seamless incorporation into your existing systems.",
    category: "Development"
  },
  {
    icon: <FaCloud className="w-8 h-8 text-[#3b82f6]" />,
    title: "Cloud Integration",
    description: "Seamless integration with major cloud providers and services.",
    category: "Integration"
  },
  {
    icon: <FaCogs className="w-8 h-8 text-[#3b82f6]" />,
    title: "Customization Options",
    description: "Extensive customization capabilities to tailor agents to your specific needs.",
    category: "Development"
  },
  {
    icon: <FaUserFriends className="w-8 h-8 text-[#3b82f6]" />,
    title: "Collaborative Environment",
    description: "Built-in tools for team collaboration and project management.",
    category: "Collaboration"
  }
]

export default function FeaturesPage() {
  return (
    <main className="min-h-screen py-12 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white sm:text-5xl mb-6">
            Powerful Features for Modern AI Solutions
          </h1>
          <p className="text-xl text-[#a1a1aa] max-w-3xl mx-auto">
            Discover the comprehensive suite of features that make Agentia World 
            the leading platform for AI agent development and deployment.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#1a1a1a] rounded-xl p-8 border border-[#27272a] hover:border-[#3b82f6] transition-colors duration-300"
            >
              <div className="bg-[#27272a] rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <div>
                <span className="text-sm font-medium text-[#3b82f6] bg-[#27272a] px-3 py-1 rounded-full">
                  {feature.category}
                </span>
                <h3 className="text-xl font-semibold mt-4 mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-[#a1a1aa]">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center bg-[#1a1a1a] rounded-2xl p-12 border border-[#27272a]"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl text-[#a1a1aa] mb-8 max-w-2xl mx-auto">
            Start building with our AI agents today and transform your business with 
            cutting-edge artificial intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/signup"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg text-white bg-[#3b82f6] hover:bg-[#2563eb] transition-colors duration-200"
            >
              Get Started
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg text-[#a1a1aa] border border-[#27272a] hover:text-white hover:border-white transition-colors duration-200"
            >
              Contact Sales
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
