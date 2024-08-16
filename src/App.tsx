import { useState } from 'react'
import Pricing from './Components/Pricing'
import ThemeToggle from './Components/ThemeToggle'
import { FaInfo } from 'react-icons/fa'
import Modal from './Components/Modal'
import { Info } from './Components/Info'

export default function App() {
  const [isOpen, setIsOpen] = useState(false)
  function close() {
    setIsOpen(false)
  }

  return (
    <div className="gap-10 max-md:flex-col-reverse min-h-screen flex flex-row items-center justify-center bg-backgroundColor-light1 dark:bg-backgroundColor-dark1 pt-10 pb-10">
      <Pricing />
      <div className="flex-[0.2] gap-5 flex items-center">
        <ThemeToggle />
        <Modal open={isOpen} onClose={close}>
          <Info />
        </Modal>
        <button
          className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-xl"
          onClick={() => setIsOpen(true)}
        >
          <FaInfo className="text-black dark:text-white" />
        </button>
      </div>
    </div>
  )
}
