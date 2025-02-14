'use client'

import { motion } from 'framer-motion'
import { FaBrain, FaRobot, FaChartBar, FaCode, FaDatabase, FaSearch, FaShieldAlt, FaCogs } from 'react-icons/fa'

const agents = [
  {
    icon: <FaBrain className="w-8 h-8 text-[#3b82f6]" />,
    name: "Analytics Agent",
    description: "Processes complex data sets to provide actionable business insights and predictive analytics.",
    capabilities: ["Data Analysis", "Pattern Recognition", "Trend Forecasting"],
    category: "Data Intelligence"
  },
  {
    icon: <FaRobot className="w-8 h-8 text-[#3b82f6]" />,
    name: "Assistant Agent",
    description: "Provides intelligent customer support and handles routine queries with natural language processing.",
    capabilities: ["24/7 Support", "Multi-language", "Context Awareness"],
    category: "Support"
  },
  {
    icon: <FaChartBar className="w-8 h-8 text-[#3b82f6]" />,
    name: "Research Agent",
    description: "Conducts in-depth market research and competitive analysis to inform strategic decisions.",
    capabilities: ["Market Analysis", "Competitor Tracking", "Report Generation"],
    category: "Research"
  },
  {
    icon: <FaCode className="w-8 h-8 text-[#3b82f6]" />,
    name: "Development Agent",
    description: "Assists in code generation, debugging, and technical documentation creation.",
    capabilities: ["Code Review", "Bug Detection", "Documentation"],
    category: "Development"
  },
  {
    icon: <FaDatabase className="w-8 h-8 text-[#3b82f6]" />,
    name: "Data Processing Agent",
    description: "Handles large-scale data processing and transformation tasks efficiently.",
    capabilities: ["Data Cleaning", "ETL Operations", "Data Validation"],
    category: "Data Processing"
  },
  {
    icon: <FaSearch className="w-8 h-8 text-[#3b82f6]" />,
    name: "Discovery Agent",
    description: "Explores and analyzes new opportunities and patterns in your data.",
    capabilities: ["Pattern Discovery", "Opportunity Analysis", "Insight Generation"],
    category: "Discovery"
  },
  {
    icon: <FaShieldAlt className="w-8 h-8 text-[#3b82f6]" />,
    name: "Security Agent",
    description: "Monitors and protects your systems from potential security threats.",
    capabilities: ["Threat Detection", "Risk Assessment", "Security Monitoring"],
    category: "Security"
  },
  {
    icon: <FaCogs className="w-8 h-8 text-[#3b82f6]" />,
    name: "Automation Agent",
    description: "Streamlines and automates repetitive tasks and workflows.",
    capabilities: ["Task Automation", "Workflow Optimization", "Process Integration"],
    category: "Automation"
  }
]

export default function AgentsPage() {
  return (
    <main className="min-h-screen py-12 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white sm:text-5xl mb-4">
            Our AI Agents
          </h1>
          <p className="text-xl text-[#a1a1aa] max-w-2xl mx-auto">
            Meet our specialized AI agents designed to revolutionize your business processes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {agents.map((agent, index) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#1a1a1a] rounded-xl border border-[#27272a] hover:border-[#3b82f6] transition-colors duration-300"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-[#27272a] rounded-lg w-16 h-16 flex items-center justify-center mr-4">
                    {agent.icon}
                  </div>
                  <div>
                    <span className="text-sm font-medium text-[#3b82f6] bg-[#27272a] px-3 py-1 rounded-full">
                      {agent.category}
                    </span>
                    <h3 className="text-xl font-semibold text-white mt-2">
                      {agent.name}
                    </h3>
                  </div>
                </div>
                <p className="text-[#a1a1aa] mb-6">
                  {agent.description}
                </p>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-white uppercase">
                    Key Capabilities
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {agent.capabilities.map((capability) => (
                      <span
                        key={capability}
                        className="px-3 py-1 bg-[#27272a] text-[#a1a1aa] rounded-full text-sm"
                      >
                        {capability}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center bg-[#1a1a1a] rounded-2xl p-12 border border-[#27272a]"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-[#a1a1aa] mb-8 max-w-2xl mx-auto">
            Transform your business with our intelligent AI agents today.
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
