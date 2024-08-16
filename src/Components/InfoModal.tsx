import React from 'react'
import { TbXboxXFilled } from 'react-icons/tb'

interface Props {
  open: boolean
  onClose: () => void
  children: React.ReactNode
}
export default function InfoModal({ open, onClose, children }: Props) {
  return (
    // backdrop
    <div
      onClick={onClose}
      className={`
          fixed inset-0 flex justify-center items-center transition-colors
          ${open ? 'visible bg-black/20' : 'invisible'}
        `}
    >
      {/* modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
            dark:bg-white bg-[#F7EFEC] rounded-xl shadow p-6 transition-all
            ${open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}
          `}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
        >
          <TbXboxXFilled />
        </button>
        {children}
      </div>
    </div>
  )
}
