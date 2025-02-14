'use client'

interface ToastProps {
  message: string
  isVisible: boolean
  onClose: () => void
}

export default function Toast({ message, isVisible, onClose }: ToastProps) {
  if (!isVisible) return null

  setTimeout(onClose, 3000)

  return (
    <div className="fixed bottom-4 right-4 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg">
      {message}
    </div>
  )
} 