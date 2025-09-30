"use client"

import { useState, useEffect } from "react"
import AboutPage from "../components/about-page"
import SkillsPage from "../components/skills-page"
import ExperiencePage from "../components/experience-page"
import ContactPage from "../components/contact-page"
import HomePage from "../components/home-page"
import ProjectsPage from "../components/projects-page"
import Navigation from "../components/navigation"

export default function MainPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentSection, setCurrentSection] = useState("home")
  const [scrollY, setScrollY] = useState(0)
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const saved = window.localStorage.getItem("theme")
      if (saved === "dark") return true
      if (saved === "light") return false
    }
    return false
  })
  const [mounted, setMounted] = useState(false)

  // Load saved theme preference on mount
  useEffect(() => {
    if (typeof window === "undefined") return
    const saved = window.localStorage.getItem("theme")
    if (saved === "dark") setIsDarkMode(true)
    if (saved === "light") setIsDarkMode(false)
    setMounted(true)
  }, [])

  // Persist theme preference whenever it changes
  useEffect(() => {
    if (typeof window === "undefined") return
    window.localStorage.setItem("theme", isDarkMode ? "dark" : "light")
  }, [isDarkMode])

  useEffect(() => {
    if (typeof window === "undefined") return
    
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const handleNavigation = (section: string) => {
    setCurrentSection(section)
    setIsMenuOpen(false)
    
    // For home/projects, we don't need to manually scroll since snap scrolling handles it
    // For other pages, scroll to top
    if (typeof window !== "undefined" && section !== "home" && section !== "projects") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const isPortfolioVisible = typeof window !== "undefined" && scrollY > window.innerHeight * 0.3

  // Avoid theme flash before hydration/mount
  if (!mounted) {
    return <div className={isDarkMode ? "bg-gray-900" : "bg-gray-100"} style={{ minHeight: "100vh" }} />
  }

  const renderCurrentPage = () => {
    switch (currentSection) {
      case "about":
        return <AboutPage isDarkMode={isDarkMode} />
      case "skills":
        return <SkillsPage isDarkMode={isDarkMode} />
      case "experience":
        return <ExperiencePage isDarkMode={isDarkMode} />
      case "contact":
        return <ContactPage isDarkMode={isDarkMode} />
      case "projects":
      case "home":
      default:
        return renderHomePage()
    }
  }

  const renderHomePage = () => (
    <div
      className={`h-screen overflow-y-scroll snap-container scrollbar-hide ${isDarkMode ? "bg-gray-900" : "bg-gray-100"}`}
    >
      <div className="h-screen snap-item">
        <HomePage scrollY={scrollY} isDarkMode={isDarkMode} />
      </div>
      <div className="h-screen snap-item">
        <ProjectsPage isPortfolioVisible={true} isDarkMode={isDarkMode} />
      </div>
    </div>
  )

  if (currentSection !== "home" && currentSection !== "projects") {
    return (
      <div className={`relative ${isDarkMode ? "bg-gray-900" : "bg-gray-100"}`}>
        <div
          className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm px-6 sm:px-12 md:px-16 py-4 ${isDarkMode ? "bg-gray-900/95" : "bg-gray-100/95"}`}
        >
          <div className="flex justify-between items-center py-6">
            <button
              onClick={() => handleNavigation("home")}
              className={`text-xs sm:text-sm font-medium tracking-wider transition-colors cursor-pointer ${isDarkMode ? "text-gray-400 hover:text-gray-200" : "text-gray-600 hover:text-gray-800"}`}
            >
              ← BACK TO HOME
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`text-xs sm:text-sm font-medium tracking-wider transition-colors cursor-pointer ${isDarkMode ? "text-gray-400 hover:text-gray-200" : "text-gray-600 hover:text-gray-800"}`}
            >
              MENU
            </button>
          </div>
        </div>

        {/* Page Content */}
        <div className="pt-12 sm:pt-16">
          <div className="min-h-screen">{renderCurrentPage()}</div>
        </div>

        <Navigation
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          handleNavigation={handleNavigation}
          currentSection={currentSection}
        />
      </div>
    )
  }

  return (
    <div className={`relative ${isDarkMode ? "bg-gray-900" : "bg-gray-100"}  sm:pt-16`}>
      {!isPortfolioVisible && (
        <>
          <div className="fixed top-4 px-10 sm:px-16 md:px-20  sm:top-6 md:top-8 left-4 sm:left-6 md:left-8 z-20">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`text-xs sm:text-sm font-medium tracking-wider transition-colors cursor-pointer ${isDarkMode ? "text-gray-400 hover:text-gray-200" : "text-gray-600 hover:text-gray-800"}`}
            >
              MENU
            </button>
          </div>

          <div className="fixed top-4 px-10 sm:px-16 md:px-20 sm:top-6 md:top-8 right-4 sm:right-6 md:right-8 z-20">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-colors ${isDarkMode ? "text-gray-400 hover:text-gray-200 hover:bg-gray-800" : "text-gray-600 hover:text-gray-800 hover:bg-gray-200"}`}
            >
              {isDarkMode ? (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="sm:w-5 sm:h-5"
                >
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              ) : (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="sm:w-5 sm:h-5"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
          </div>
        </>
      )}

      {renderHomePage()}

      <Navigation
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        handleNavigation={handleNavigation}
        currentSection={currentSection}
      />
    </div>
  )
}
