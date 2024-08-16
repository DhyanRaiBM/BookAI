import { useState } from 'react'
import InfoModal from './Components/InfoModal'
import Pricing from './Components/Pricing'
import ThemeToggle from './Components/ThemeToggle'
import { FaInfo } from 'react-icons/fa'

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
        <InfoModal open={isOpen} onClose={close}>
          <div className="p-3">
            <h2 className="text-xl font-bold mb-3">
              This task was completed by <b>Dhyan Rai</b>
            </h2>
            <b className="block">
              Email :{' '}
              <a href="mailto:dhyanraibm@gmail.com">
                <>dhyanraibm@gmail.com</>
              </a>
            </b>
            <b className="block">
              Github :{' '}
              <a href="https://github.com/DhyanRaiBM">
                <>https://github.com/DhyanRaiBM</>
              </a>
            </b>
            <b className="block">
              Linkedin :{' '}
              <a href="https://www.linkedin.com/in/dhyan-rai-bm/">
                <>https://www.linkedin.com/in/dhyan-rai-bm/</>
              </a>
            </b>
            <b className="block">
              Portfolio :{' '}
              <a href="https://dhyan-rai.vercel.app/">
                <>https://dhyan-rai.vercel.app/</>
              </a>
            </b>
            <b className="block">Phone: +919741459464</b>
            {/* Add more personal details here */}
          </div>
        </InfoModal>
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
