'use client'

import { motion } from 'framer-motion'
import { FaLightbulb, FaUsers, FaRocket, FaShieldAlt } from 'react-icons/fa'

const coreValues = [
  {
    icon: <FaLightbulb className="w-8 h-8 text-[#3b82f6]" />,
    title: "Innovation First",
    description: "We constantly push the boundaries of AI technology, creating cutting-edge solutions that define the future of automation."
  },
  {
    icon: <FaUsers className="w-8 h-8 text-[#3b82f6]" />,
    title: "User-Centric Approach",
    description: "Our platform is designed with users in mind, ensuring intuitive experiences and meaningful solutions for real-world challenges."
  },
  {
    icon: <FaRocket className="w-8 h-8 text-[#3b82f6]" />,
    title: "Continuous Growth",
    description: "We're committed to constant improvement, both in our technology and in the value we provide to our community."
  },
  {
    icon: <FaShieldAlt className="w-8 h-8 text-[#3b82f6]" />,
    title: "Trust & Security",
    description: "We prioritize the security and reliability of our platform, maintaining the highest standards of data protection."
  }
]

const timeline = [
  {
    year: "2021",
    title: "The Beginning",
    description: "Agentia World was founded with a vision to democratize AI technology."
  },
  {
    year: "2022",
    title: "First Major Milestone",
    description: "Launched our beta platform with 10 specialized AI agents."
  },
  {
    year: "2023",
    title: "Rapid Growth",
    description: "Expanded to 1000+ developers and 50,000+ users worldwide."
  },
  {
    year: "2024",
    title: "Innovation Leader",
    description: "Recognized as one of the most innovative AI platforms in the industry."
  }
]

export default function About() {
  return (
    <main className="min-h-screen pt-8 pb-12 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white sm:text-5xl mb-6">
            Our Vision
          </h1>
          <p className="text-xl text-[#a1a1aa] max-w-3xl mx-auto">
            At Agentia World, we envision a future where AI technology is accessible to everyone, 
            empowering businesses and individuals to achieve more through intelligent automation 
            and innovation.
          </p>
        </motion.div>

        {/* Core Values Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-[#1a1a1a] rounded-xl p-8 border border-[#27272a] hover:border-[#3b82f6] transition-colors duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-[#27272a] rounded-lg p-3">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{value.title}</h3>
                    <p className="text-[#a1a1aa]">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Timeline Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#27272a]" />
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.3 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-[#1a1a1a] p-6 rounded-xl border border-[#27272a] hover:border-[#3b82f6] transition-colors duration-300">
                      <span className="text-[#3b82f6] font-bold text-xl mb-2 block">
                        {item.year}
                      </span>
                      <h3 className="text-lg font-semibold mb-2 text-white">{item.title}</h3>
                      <p className="text-[#a1a1aa]">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#3b82f6] rounded-full" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
} 