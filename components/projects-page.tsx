"use client"

import { useState, useEffect } from "react"



interface Project {
  name: string
  description: string
  type: string
  url: string
  image: string
}

interface ProjectsPageProps {
  isPortfolioVisible: boolean
  isDarkMode: boolean
}

export default function ProjectsPage({ isPortfolioVisible, isDarkMode }: ProjectsPageProps) {
  const [currentProject, setCurrentProject] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const projects: Project[] = [
    
    {
      name: "GEOGUARD",
      description: "Illegal Mining Detection Web Application",
      type: "REACT/NODE",
      url: "https://geoguard-env.vercel.app",
      image: "/geoguard.png",
    }, 
    {
      name: "GRABBER",
      description: "Grocery App UI",
      type: "FIGMA/UI",
      url: "https://www.figma.com/proto/4Pt2kwiCEpX5viysfsgGkc/Grabber-Grocrey-App?t=GzULUZl1cLRmlZFo-1",
      image: "/grabber.png",
    },
    {
      name: "PRISM",
      description: "AI/ML Integration Web Application",
      type: "PYTHON/AI",
      url: "https://prism-ai.vercel.app",
      image: "/ai-machine-learning-interface-with-data-visualizat.jpg",
    },
    {
      name: "DIGITAL LIBRARY",
      description: "Library Management System",
      type: "REACT/NODE",
      url: "https://elibrary-dit.vercel.app",
      image: "/e-library.png",
    },
  ]

  const handleNext = () => {
    setIsAnimating(true)

    setTimeout(() => {
      setCurrentProject((prev) => (prev + 1 ) % projects.length)
      setIsAnimating(false)
    }, 800)
  }

  const handleProjectClick = (url: string) => {
    if (typeof window !== "undefined") {
      window.open(url, "_blank", "noopener,noreferrer")
    }
  }

  return (
    <section
      className={`min-h-screen relative transition-all duration-1000 px-4 sm:px-8 ${isPortfolioVisible ? "opacity-100" : "opacity-0"}`}
    >
      
      {/* Main Content Container */}
      <div
        className={`relative z-10 w-full h-screen flex items-center justify-center transition-all duration-700 ${isAnimating ? "scale-95 opacity-70" : "scale-100 opacity-100"}`}
      >
        {/* Project Image Container - Enhanced with extraordinary animations */}
        <div
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-44 sm:w-96 sm:h-72 md:w-[28rem] md:h-80 lg:w-[32rem] lg:h-96 rounded-lg overflow-hidden shadow-2xl transition-all duration-700 ease-out ${
            isAnimating
              ? "scale-90 rotate-6 -translate-y-8 shadow-4xl"
              : "scale-100 rotate-0 translate-y-0 shadow-2xl"
          }`}
          style={{
            filter: isAnimating ? "blur(2px) brightness(1.1)" : "blur(0px) brightness(1)",
            transform: isAnimating
              ? "translateX(-50%) translateY(-50%) scale(0.9) rotate(6deg) translateY(-2rem)"
              : "translateX(-50%) translateY(-50%) scale(1) rotate(0deg) translateY(0)",
          }}
        >
          <img
            src={projects[currentProject].image || "/placeholder.svg"}
            alt={projects[currentProject].name}
            className={`w-full h-full object-cover transition-all duration-700 ${
              isAnimating ? "scale-110 rotate-2" : "scale-100 rotate-0"
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
          <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-black/20 backdrop-blur-sm rounded-lg p-2 sm:p-3">
            <button
              onClick={() => handleProjectClick(projects[currentProject].url)}
              className="text-white font-medium text-sm sm:text-lg tracking-wide hover:underline cursor-pointer transition-colors drop-shadow-lg"
            >
              {projects[currentProject].name} →
            </button>
            <p className="text-white text-xs sm:text-sm mt-1 drop-shadow-md">{projects[currentProject].description}</p>
          </div>
        </div>

        <div
          className={`absolute left-0 top-1/2 -translate-y-1/2 w-32 h-32 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full -translate-x-full sm:-translate-x-3/4 transition-all duration-1000 ease-out ${
            isAnimating
              ? "rotate-180 scale-125 -translate-x-3/4 sm:-translate-x-1/2 opacity-80"
              : "rotate-0 scale-100 -translate-x-full sm:-translate-x-3/4 opacity-100"
          } ${isDarkMode ? "bg-gray-800/30" : "bg-gray-200/30"}`}
          style={{
            background: isAnimating
              ? `conic-gradient(from 0deg, ${isDarkMode ? "rgba(55, 65, 81, 0.4)" : "rgba(229, 231, 235, 0.4)"}, ${isDarkMode ? "rgba(75, 85, 99, 0.2)" : "rgba(209, 213, 219, 0.2)"}, ${isDarkMode ? "rgba(55, 65, 81, 0.4)" : "rgba(229, 231, 235, 0.4)"})`
              : isDarkMode
                ? "rgba(55, 65, 81, 0.3)"
                : "rgba(229, 231, 235, 0.3)",
            filter: isAnimating ? "blur(1px)" : "blur(0px)",
          }}
        >
          <div
            className={`absolute inset-8 rounded-full transition-all duration-1200 ease-out ${
              isAnimating ? "-rotate-90 scale-75 opacity-60" : "rotate-0 scale-100 opacity-40"
            } ${isDarkMode ? "bg-gray-700/20" : "bg-gray-300/20"}`}
          />
        </div>

        <div
          className={`absolute right-0 top-1/2 -translate-y-1/2 w-28 h-28 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-96 rounded-full border-2 border-dashed translate-x-0 sm:-translate-x-1/4 transition-all duration-1000 ease-out ${
            isAnimating
              ? "-rotate-270 scale-110 translate-x-1 sm:translate-x-0 opacity-70"
              : "rotate-0 scale-100 translate-x-0 sm:-translate-x-1/4 opacity-100"
          } ${isDarkMode ? "border-gray-600/50" : "border-gray-400/50"}`}
          style={{
            borderStyle: isAnimating ? "solid" : "dashed",
            borderWidth: isAnimating ? "3px" : "2px",
            filter: isAnimating ? "drop-shadow(0 0 20px rgba(0,0,0,0.3))" : "none",
          }}
        >
          <div
            className={`absolute inset-6 rounded-full border border-dashed transition-all duration-800 ease-out ${
              isAnimating ? "rotate-180 scale-90 opacity-80" : "rotate-0 scale-100 opacity-50"
            } ${isDarkMode ? "border-gray-500/40" : "border-gray-500/40"}`}
          />
          <div
            className={`absolute inset-12 rounded-full border border-dotted transition-all duration-1000 ease-out ${
              isAnimating ? "-rotate-90 scale-110 opacity-90" : "rotate-0 scale-100 opacity-30"
            } ${isDarkMode ? "border-gray-400/30" : "border-gray-600/30"}`}
          />
        </div>

        <div
          className={`absolute left-4 sm:left-8 md:left-12 lg:left-16 top-1/2 -translate-y-1/2 -rotate-90 origin-center transition-all duration-800 ease-out ${
            isAnimating
              ? "-translate-x-8 sm:-translate-x-12 opacity-30 -rotate-180 scale-110"
              : "translate-x-0 opacity-100 -rotate-90 scale-100"
          }`}
          style={{
            filter: isAnimating ? "blur(1px)" : "blur(0px)",
            textShadow: isAnimating ? "0 0 20px rgba(0,0,0,0.5)" : "none",
          }}
        >
          <h1
            className={`text-l px-1 sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-wider ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}
          >
            {projects[currentProject].type.toUpperCase().includes("FIGMA") ? "UI/UX" : "CODE"}
          </h1>
        </div>

        <div
          className={`absolute right-2 sm:right-12 md:right-16 top-1/2 -translate-y-1/2 transition-all duration-700 ease-out ${
            isAnimating
              ? "translate-x-8 sm:translate-x-12 opacity-40 rotate-180 scale-90"
              : "translate-x-0 opacity-100 rotate-90 scale-100"
          }`}
        >
          <div
            className={`border px-1 sm:px-4 py-3 sm:py-8 transition-all duration-500 ${
              isAnimating ? "border-2 shadow-lg" : "border"
            } ${isDarkMode ? "border-gray-400" : "border-gray-600"}`}
            style={{
              background: isAnimating
                ? isDarkMode
                  ? "rgba(55, 65, 81, 0.1)"
                  : "rgba(229, 231, 235, 0.1)"
                : "transparent",
            }}
          >
            <span className={`text-[10px] sm:text-xs font-medium tracking-widest ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
              {projects[currentProject].type}
            </span>
          </div>
        </div>

        <div
          className={`absolute left-1/4  sm:left-1/3 top-1/3 sm:top-1/3 md:top-1/4  grid grid-cols-6 sm:grid-cols-8 gap-1 transition-all duration-1000 ease-out ${
            isAnimating ? "rotate-180 scale-150 opacity-60" : "rotate-0 scale-100 opacity-100"
          }`}
        >
          {Array.from({ length: typeof window !== "undefined" && window.innerWidth < 640 ? 36 : 64 }).map((_, i) => (
            <div
              key={i}
              className={`w-1 h-1 rounded-full transition-all duration-500 ease-out ${
                isAnimating ? "scale-200 opacity-80" : "scale-100 opacity-100"
              } ${
                isAnimating
                  ? isDarkMode
                    ? "bg-gray-300"
                    : "bg-gray-700"
                  : isDarkMode
                    ? "bg-gray-600"
                    : "bg-gray-400"
              }`}
              style={{
                transitionDelay: `${i * 15}ms`,
                transform: isAnimating ? `scale(2) rotate(${i * 10}deg)` : "scale(1) rotate(0deg)",
              }}
            />
          ))}
        </div>

        <div
          className={`absolute top-8 sm:top-16 left-1/2 -translate-x-1/2 text-sm sm:text-xl transition-all duration-600 ease-out ${
            isAnimating
              ? "-translate-y-8 sm:-translate-y-12 scale-150 rotate-45 opacity-70"
              : "translate-y-0 scale-100 rotate-0 opacity-100"
          } ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
          style={{
            filter: isAnimating ? "blur(0.5px)" : "blur(0px)",
          }}
        >
          ✕✕
        </div>
        <div
          className={`absolute bottom-12 sm:bottom-20 left-1/2 -translate-x-1/2 text-sm sm:text-xl transition-all duration-600 ease-out ${
            isAnimating
              ? "translate-y-8 sm:translate-y-12 scale-150 -rotate-45 opacity-70"
              : "translate-y-0 scale-100 rotate-0 opacity-100"
          } ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
          style={{
            filter: isAnimating ? "blur(0.5px)" : "blur(0px)",
          }}
        >
          ✕✕
        </div>

        <div
          className={`pointer-events-none absolute top-1/4  right-1/4 w-16 sm:w-24 md:w-32 h-px border-t border-dashed transition-all duration-800 ease-out ${
            isAnimating ? "rotate-180 scale-200 opacity-80" : "rotate-45 scale-100 opacity-100"
          } ${isDarkMode ? "border-gray-600" : "border-gray-400"}`}
          style={{
            borderStyle: isAnimating ? "solid" : "dashed",
            filter: isAnimating ? "drop-shadow(0 0 10px rgba(0,0,0,0.3))" : "none",
          }}
        />
        <div
          className={`pointer-events-none absolute  bottom-1/3 left-1/4 sm:left-1/3 w-12 sm:w-16 md:w-24 h-px border-t border-dashed transition-all duration-800 ease-out ${
            isAnimating ? "rotate-90 scale-200 opacity-80" : "-rotate-12 scale-100 opacity-100"
          } ${isDarkMode ? "border-gray-600" : "border-gray-400"}`}
          style={{
            borderStyle: isAnimating ? "solid" : "dashed",
            filter: isAnimating ? "drop-shadow(0 0 10px rgba(0,0,0,0.3))" : "none",
          }}
        />
      </div>

      {/* Project Info - Updated positioning to work with image layout */}
      <div
        className={`absolute bottom-8 sm:bottom-12 md:bottom-16 left-4 sm:left-6 md:left-8 transition-all duration-500 ${isAnimating ? "-translate-y-2 sm:-translate-y-4 opacity-50" : "translate-y-0 opacity-100"}`}
      >
        <div className="space-y-1 sm:space-y-2">
          <div className={`text-xs tracking-widest mt-1 ${isDarkMode ? "text-gray-500" : "text-gray-500"}`}>
            {String(currentProject + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
          </div>
        </div>
      </div>

      <div
        className={`absolute z-50 pointer-events-auto absolute bottom-8 sm:bottom-12 md:bottom-16 right-4 sm:right-6 md:right-8 transition-all duration-500 ease-out ${
          isAnimating ? "scale-125 rotate-3" : "scale-100 rotate-0"
        }`}
      >
        <button
          onClick={handleNext}
          className={`flex items-center gap-2 px-4 py-2 border rounded-full transition-all duration-500 ease-out hover:scale-105 cursor-pointer ${
            isAnimating ? "border-2 shadow-2xl bg-opacity-20" : "border hover:border-gray-600 hover:bg-gray-200/50"
          } ${
            isDarkMode
              ? "border-gray-600 hover:border-gray-500 hover:bg-gray-800/50"
              : "border-gray-400 hover:border-gray-600 hover:bg-gray-200/50"
          }`}
          style={{
            background: isAnimating
              ? isDarkMode
                ? "rgba(55, 65, 81, 0.2)"
                : "rgba(229, 231, 235, 0.2)"
              : "transparent",
            filter: isAnimating ? "drop-shadow(0 0 15px rgba(0,0,0,0.3))" : "none",
          }}
        >
          <span
            className={`text-xs sm:text-sm font-medium tracking-wider transition-all duration-300 ${
              isAnimating ? "opacity-80" : "opacity-100"
            } ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
          >
            NEXT PROJECT
          </span>
          <span
            className={`text-base sm:text-lg transition-all duration-300 ${
              isAnimating ? "rotate-180 scale-125" : "rotate-0 scale-100"
            } ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
          >
            →
          </span>
        </button>
      </div>

      {/* Side Decorative Elements */}
      <div
        className={`absolute left-4 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 flex flex-col gap-1 sm:gap-2 transition-all duration-400 ${isAnimating ? "-translate-x-1 sm:-translate-x-2 opacity-70" : "translate-x-0 opacity-100"}`}
      >
        <div
          className={`w-px transition-all duration-300 ${isAnimating ? "h-6 sm:h-8" : "h-3 sm:h-4"} ${isAnimating ? (isDarkMode ? "bg-gray-400" : "bg-gray-600") : isDarkMode ? "bg-gray-600" : "bg-gray-400"}`}
        ></div>
        <div
          className={`w-px transition-all duration-400 ${isAnimating ? "h-6 sm:h-8" : "h-3 sm:h-4"} ${isAnimating ? (isDarkMode ? "bg-gray-400" : "bg-gray-600") : isDarkMode ? "bg-gray-600" : "bg-gray-400"}`}
          style={{ transitionDelay: "100ms" }}
        ></div>
        <div
          className={`w-px transition-all duration-500 ${isAnimating ? "h-6 sm:h-8" : "h-3 sm:h-4"} ${isAnimating ? (isDarkMode ? "bg-gray-400" : "bg-gray-600") : isDarkMode ? "bg-gray-600" : "bg-gray-400"}`}
          style={{ transitionDelay: "200ms" }}
        ></div>
      </div>
    </section>
  )
} 