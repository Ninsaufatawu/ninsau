"use client"

import { useRef, useEffect } from "react"

interface NavigationProps {
  isMenuOpen: boolean
  setIsMenuOpen: (open: boolean) => void
  isDarkMode: boolean
  toggleDarkMode: () => void
  handleNavigation: (section: string) => void
  currentSection: string
}

export default function Navigation({
  isMenuOpen,
  setIsMenuOpen,
  isDarkMode,
  toggleDarkMode,
  handleNavigation,
  currentSection
}: NavigationProps) {
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMenuOpen, setIsMenuOpen])

  if (!isMenuOpen) return null

  return (
    <div
      className={`fixed inset-0 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-8 ${isDarkMode ? "bg-gray-900/95" : "bg-gray-100/95"}`}
    >
      <div ref={menuRef} className="max-w-2xl w-full">
        <div className="space-y-8 sm:space-y-12">
          {/* Close button */}
          <div className="flex justify-between items-center">
            <h2
              className={`text-xl sm:text-2xl font-bold tracking-wider ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}
            >
              NAVIGATION
            </h2>
            <div className="flex items-center gap-2 sm:gap-4">
              
              <button
                onClick={() => setIsMenuOpen(false)}
                className={`text-xl sm:text-2xl cursor-pointer ${isDarkMode ? "text-gray-400 hover:text-gray-200" : "text-gray-600 hover:text-gray-800"}`}
              >
                ✕
              </button>
            </div>
          </div>

          {/* Menu Items */}
          <div className="space-y-6 sm:space-y-8">
            <button
              onClick={() => handleNavigation("about")}
              className={`w-full text-left border-b pb-4 sm:pb-6 transition-colors group cursor-pointer ${isDarkMode ? "border-gray-700 hover:border-gray-600" : "border-gray-300 hover:border-gray-400"}`}
            >
              <h3
                className={`text-lg sm:text-xl font-medium tracking-wide mb-1 sm:mb-2 ${isDarkMode ? "text-gray-200 group-hover:text-gray-100" : "text-gray-800 group-hover:text-gray-900"}`}
              >
                About
              </h3>
              <p className={`text-xs sm:text-sm tracking-wide ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                background, philosophy, approach to development
              </p>
            </button>

            <button
              onClick={() => handleNavigation("skills")}
              className={`w-full text-left border-b pb-4 sm:pb-6 transition-colors group cursor-pointer ${isDarkMode ? "border-gray-700 hover:border-gray-600" : "border-gray-300 hover:border-gray-400"}`}
            >
              <h3
                className={`text-lg sm:text-xl font-medium tracking-wide mb-1 sm:mb-2 ${isDarkMode ? "text-gray-200 group-hover:text-gray-100" : "text-gray-800 group-hover:text-gray-900"}`}
              >
                Skills
              </h3>
              <p className={`text-xs sm:text-sm tracking-wide ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                technologies, frameworks, programming languages
              </p>
            </button>

            <button
              onClick={() => handleNavigation("projects")}
              className={`w-full text-left border-b pb-4 sm:pb-6 transition-colors group cursor-pointer ${isDarkMode ? "border-gray-700 hover:border-gray-600" : "border-gray-300 hover:border-gray-400"}`}
            >
              <h3
                className={`text-lg sm:text-xl font-medium tracking-wide mb-1 sm:mb-2 ${isDarkMode ? "text-gray-200 group-hover:text-gray-100" : "text-gray-800 group-hover:text-gray-900"}`}
              >
                Projects
              </h3>
              <p className={`text-xs sm:text-sm tracking-wide ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                portfolio, case studies, open source contributions
              </p>
            </button>

            <button
              onClick={() => handleNavigation("experience")}
              className={`w-full text-left border-b pb-4 sm:pb-6 transition-colors group cursor-pointer ${isDarkMode ? "border-gray-700 hover:border-gray-600" : "border-gray-300 hover:border-gray-400"}`}
            >
              <h3
                className={`text-lg sm:text-xl font-medium tracking-wide mb-1 sm:mb-2 ${isDarkMode ? "text-gray-200 group-hover:text-gray-100" : "text-gray-800 group-hover:text-gray-900"}`}
              >
                Experience
              </h3>
              <p className={`text-xs sm:text-sm tracking-wide ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                work history, achievements, professional journey
              </p>
            </button>

            <button
              onClick={() => handleNavigation("contact")}
              className={`w-full text-left pb-4 sm:pb-6 transition-colors group cursor-pointer ${isDarkMode ? "hover:text-gray-100" : "hover:text-gray-900"}`}
            >
              <h3
                className={`text-lg sm:text-xl font-medium tracking-wide mb-1 sm:mb-2 ${isDarkMode ? "text-gray-200 group-hover:text-gray-100" : "text-gray-800 group-hover:text-gray-900"}`}
              >
                Contact
              </h3>
              <p className={`text-xs sm:text-sm tracking-wide ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                connect, collaborate, hire me
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 