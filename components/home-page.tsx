"use client"

import { useState, useEffect } from "react"

interface HomePageProps {
  scrollY: number
  isDarkMode: boolean
}

export default function HomePage({ scrollY, isDarkMode }: HomePageProps) {
  return (
    <section className="h-screen flex items-center justify-center relative px-4 sm:px-8">
      <div
        className={`text-center transition-all duration-1000 ${scrollY > 100 ? "opacity-0 -translate-y-20" : "opacity-100 translate-y-0"}`}
      >
        <h1
          className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-wider mb-4 sm:mb-6 ${isDarkMode ? "text-gray-100" : "text-gray-900"}`}
        >
          NINSAU FATAWU
        </h1>
        <p
          className={`text-lg sm:text-xl md:text-2xl tracking-widest font-light ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
        >
          SOFTWARE ENGINEER
        </p>
        <div
          className={`mt-8 sm:mt-12 text-xs sm:text-sm tracking-wider ${isDarkMode ? "text-gray-500" : "text-gray-500"}`}
        >
          SCROLL TO EXPLORE
        </div>
        <div className="mt-4 sm:mt-6 flex justify-center">
          <div className="animate-bounce">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`sm:w-6 sm:h-6 ${isDarkMode ? "text-gray-600" : "text-gray-400"}`}
            >
              <path d="M7 10L12 15L17 10" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
} 