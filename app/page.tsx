"use client"

import { useState, useEffect, useRef } from "react"
import AboutPage from "../components/about-page"
import SkillsPage from "../components/skills-page"
import ExperiencePage from "../components/experience-page"
import ContactPage from "../components/contact-page"
import HomePage from "../components/home-page"
import ProjectsPage from "../components/projects-page"
import Navigation from "../components/navigation"
import dynamic from "next/dynamic"
const LiquidEther = dynamic(() => import("../components/ui/LiquidEther"), { ssr: false })


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
  const homeScrollRef = useRef<HTMLDivElement | null>(null)

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

    if (typeof window === "undefined") return

    // For all pages, scroll window to top
    window.scrollTo({ top: 0, behavior: "smooth" })
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
        return <ProjectsPage isPortfolioVisible={true} isDarkMode={isDarkMode} />
      case "home":
      default:
        return renderHomePage()
    }
  }

  const renderHomePage = () => (
    <div
      ref={homeScrollRef}
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

  return (
    <div className={`relative ${isDarkMode ? "" : ""}`}>
      {!isPortfolioVisible && (
        <>
          {/* Glassy top bar background (all pages except Home) */}
          {currentSection !== 'home' && (
            <div
              className={`fixed top-0 left-0 right-0 h-14 sm:h-16 z-10 pointer-events-none backdrop-blur-md ${
                isDarkMode ? "bg-gradient-to-b from-gray-900/50 to-transparent" : "bg-gradient-to-b from-white/60 to-transparent"
              }`}
            />
          )}
          {/* Logo - All screens */}
          <div className="fixed top-4 sm:top-6 left-4 sm:left-6 z-30">
            <button
              onClick={() => handleNavigation("home")}
              className="inline-flex items-center justify-center cursor-pointer"
              aria-label="Go to Home"
            >
              <img src="/ninsau-logo1.png" alt="Ninsau Logo" className="h-9 w-auto sm:h-10" />
            </button>
          </div>
          {/* Right controls: hamburger on sm/md, theme toggle on lg+ */}
          <div className="fixed px-6 sm:px-8 md:px-12 top-4 sm:top-6 right-4 sm:right-6 md:right-8 z-30">
            {/* Hamburger (sm/md only) */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-gray-200/50 dark:hover:bg-gray-800/60 transition-colors"
              aria-label="Open menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="block">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
            {/* Theme toggle (lg+ only) */}
            <button
              onClick={toggleDarkMode}
              className="hidden lg:inline-flex p-2 rounded-full transition-colors text-gray-600 hover:text-gray-800 hover:bg-gray-200 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-800"
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
          </div>
        </>
      )}

      {renderCurrentPage()}

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
