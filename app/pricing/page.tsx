'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaCheck, FaTimes, FaQuestionCircle } from 'react-icons/fa'
import Link from 'next/link'

const plans = [
  {
    name: 'Starter',
    price: '$49',
    period: '/month',
    description: 'Perfect for small businesses',
    features: [
      '5 AI Agents',
      '1,000 API calls/month',
      'Basic support',
      'Standard analytics',
    ],
  },
  {
    name: 'Professional',
    price: '$99',
    period: '/month',
    description: 'Ideal for growing teams',
    features: [
      '15 AI Agents',
      '10,000 API calls/month',
      'Priority support',
      'Advanced analytics',
      'Custom integrations',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organizations',
    features: [
      'Unlimited AI Agents',
      'Unlimited API calls',
      '24/7 Premium support',
      'Custom solutions',
      'Dedicated account manager',
      'SLA guarantees',
    ],
  },
]

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly')

  return (
    <main className="min-h-screen py-12 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white sm:text-5xl mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-[#a1a1aa] max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All plans include core features.
          </p>
        </motion.div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-[#1a1a1a] p-1 rounded-lg inline-flex border border-[#27272a]">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                billingPeriod === 'monthly'
                  ? 'bg-[#27272a] text-white'
                  : 'text-[#a1a1aa] hover:text-white'
              } transition-colors duration-200`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('yearly')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                billingPeriod === 'yearly'
                  ? 'bg-[#27272a] text-white'
                  : 'text-[#a1a1aa] hover:text-white'
              } transition-colors duration-200`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`relative bg-[#1a1a1a] rounded-xl overflow-hidden border border-[#27272a] hover:border-[#3b82f6] transition-colors duration-300
                ${plan.popular ? 'ring-2 ring-[#3b82f6]' : ''}
              `}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-[#3b82f6] text-white px-4 py-1 text-sm">
                  Popular
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="text-[#a1a1aa] ml-1">{plan.period}</span>
                </div>
                <p className="text-[#a1a1aa] mb-6">{plan.description}</p>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <FaCheck className="text-[#3b82f6] mr-3" />
                      <span className="text-[#a1a1aa]">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition duration-200
                    ${plan.popular 
                      ? 'bg-[#3b82f6] text-white hover:bg-[#2563eb]'
                      : 'bg-[#27272a] text-white hover:bg-[#3b3b3b]'
                    }`}
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-center text-white mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#1a1a1a] p-6 rounded-xl border border-[#27272a] hover:border-[#3b82f6] transition-colors duration-300">
              <h3 className="text-lg font-semibold mb-3 text-white">Can I change plans later?</h3>
              <p className="text-[#a1a1aa]">
                Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
              </p>
            </div>
            <div className="bg-[#1a1a1a] p-6 rounded-xl border border-[#27272a] hover:border-[#3b82f6] transition-colors duration-300">
              <h3 className="text-lg font-semibold mb-3 text-white">What happens after my trial?</h3>
              <p className="text-[#a1a1aa]">
                After your 14-day trial, you'll be automatically switched to the free plan unless you choose to upgrade.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
