import { useState, useEffect } from 'react'
import { FaMoon } from 'react-icons/fa'
import { MdSunny } from 'react-icons/md'

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true)

  useEffect(() => {
    const root = window.document.documentElement
    if (isDarkMode) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [isDarkMode])

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-xl"
      aria-label="Toggle Dark Mode"
    >
      {isDarkMode ? (
        <MdSunny className="text-white" />
      ) : (
        <FaMoon className=" text-black" />
      )}
    </button>
  )
}

export default ThemeToggle
