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

  return (
    <>
      {/* Mobile/Tablet Overlay (hidden on lg+) */}
      {isMenuOpen && (
      <div
        className={`lg:hidden fixed inset-0 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-8 ${isDarkMode ? "bg-gray-900/95" : "bg-gray-100/95"}`}
      >
        <div ref={menuRef} className="max-w-2xl w-full">
          <div className="space-y-8 sm:space-y-12">
            {/* Header controls: Theme toggle (left) + Close (right) */}
            <div className="flex justify-between items-center">
              <button
                onClick={toggleDarkMode}
                className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm transition-colors ${
                  isDarkMode
                    ? "text-gray-300 hover:text-white hover:bg-gray-800"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-200"
                }`}
                aria-label="Toggle theme"
              >
                {isDarkMode ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="sm:w-5 sm:h-5">
                    <circle cx="12" cy="12" r="5" />
                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="sm:w-5 sm:h-5">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                )}
              </button>
              <div className="flex items-center gap-2 sm:gap-4">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-xl sm:text-2xl cursor-pointer ${isDarkMode ? "text-gray-400 hover:text-gray-200" : "text-gray-600 hover:text-gray-800"}`}
                  aria-label="Close menu"
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
      )}

      {/* Desktop Horizontal Bar (lg+) */}
      <div className="hidden lg:flex fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <nav
          ref={menuRef}
          className={`flex items-center gap-6 rounded-full px-6 py-3 backdrop-blur-md border ${
            isDarkMode ? " border-gray-700" : " border-gray-200"
          }`}
        >
          {[
            { key: 'home', label: 'Home', sub: 'Top' },
            { key: 'about', label: 'About', sub: 'Background' },
            { key: 'skills', label: 'Skills', sub: 'Stack' },
            { key: 'projects', label: 'Projects', sub: 'Work' },
            { key: 'experience', label: 'Experience', sub: 'Journey' },
            { key: 'contact', label: 'Contact', sub: 'Hire me' }
          ].map((item) => (
            <button
              key={item.key}
              onClick={() => handleNavigation(item.key)}
              className={`group relative px-2 py-1 cursor-pointer text-sm font-medium tracking-wide transition-transform ${
                isDarkMode ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-gray-900"
              }`}
            >
              <span className="relative">
                {item.label}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 w-0 transition-all duration-300 group-hover:w-full ${
                    isDarkMode ? "bg-gray-300" : "bg-gray-800"
                  }`}
                />
              </span>
              
            </button>
          ))}
          
        </nav>
      </div>
    </>
  )
}