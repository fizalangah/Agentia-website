'use client'

import { motion } from 'framer-motion'
import { FaRobot, FaChartLine, FaShieldAlt, FaBrain, FaCloud, FaDatabase } from 'react-icons/fa'
import { Container } from '../../components/ui/container'

const technologies = [
  {
    icon: <FaRobot className="w-8 h-8 text-[#3b82f6]" />,
    title: "Artificial Intelligence",
    description: "Cutting-edge AI solutions that transform business operations and decision-making processes.",
    category: "Core Technology"
  },
  {
    icon: <FaBrain className="w-8 h-8 text-[#3b82f6]" />,
    title: "Machine Learning",
    description: "Advanced ML algorithms that adapt and improve through continuous learning and data analysis.",
    category: "Intelligence"
  },
  {
    icon: <FaChartLine className="w-8 h-8 text-[#3b82f6]" />,
    title: "Data Analytics",
    description: "Advanced analytics tools to derive meaningful insights from complex data sets.",
    category: "Analytics"
  },
  {
    icon: <FaShieldAlt className="w-8 h-8 text-[#3b82f6]" />,
    title: "Cybersecurity",
    description: "Robust security measures to protect your digital assets and maintain data integrity.",
    category: "Security"
  },
  {
    icon: <FaCloud className="w-8 h-8 text-[#3b82f6]" />,
    title: "Cloud Infrastructure",
    description: "Scalable cloud solutions ensuring high availability and performance.",
    category: "Infrastructure"
  },
  {
    icon: <FaDatabase className="w-8 h-8 text-[#3b82f6]" />,
    title: "Data Processing",
    description: "High-performance data processing capabilities for real-time operations.",
    category: "Data"
  }
]

export default function TechnologyPage() {
  return (
    <main className="min-h-screen py-12 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white sm:text-5xl mb-6"
          >
            Our Technology Stack
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-[#a1a1aa] max-w-3xl mx-auto"
          >
            Empowering innovation through cutting-edge solutions and advanced technological capabilities
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#1a1a1a] p-8 rounded-xl border border-[#27272a] hover:border-[#3b82f6] transition-colors duration-300"
            >
              <div className="bg-[#27272a] rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                {tech.icon}
              </div>
              <div>
                <span className="text-sm font-medium text-[#3b82f6] bg-[#27272a] px-3 py-1 rounded-full">
                  {tech.category}
                </span>
                <h3 className="text-xl font-semibold text-white mt-4 mb-3">
                  {tech.title}
                </h3>
                <p className="text-[#a1a1aa]">
                  {tech.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info Section */}
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
    </main>
  )
}
