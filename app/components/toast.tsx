'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { FaCheckCircle, FaTimes } from 'react-icons/fa'

interface ToastProps {
  message: string
  isVisible: boolean
  onClose: () => void
}

export default function Toast({ message, isVisible, onClose }: ToastProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-3"
        >
          <FaCheckCircle className="w-5 h-5" />
          <span>{message}</span>
          <button onClick={onClose} className="ml-4">
            <FaTimes className="w-4 h-4 hover:text-green-200" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 