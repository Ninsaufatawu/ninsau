"use client"

import { useState, useEffect } from "react"
import FloatingDock from "./ui/floating-dock"
import dynamic from "next/dynamic"
const LiquidEther = dynamic(() => import("./ui/LiquidEther"), { ssr: false })
import { socials } from "../config/socials"
import { AnimatePresence, motion } from "motion/react"
import { cn } from "@/lib/utils"

interface HomePageProps {
  scrollY: number
  isDarkMode: boolean
}

export default function HomePage({ scrollY, isDarkMode }: HomePageProps) {
  // Rotating roles like the provided format
  const roles: string[] = ["Software Engineer", "Web Designer", "UX / UI Designer"]
  const [roleIndex, setRoleIndex] = useState(0)
  const imageSrc = "/man-in-hoodie.png" // Place your image in public/ and update this path if needed
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 5000)
    return () => clearInterval(id)
  }, [])

  // Simple device check (desktop vs mobile) without external hooks
  useEffect(() => {
    if (typeof window === "undefined") return
    const onResize = () => setIsDesktop(window.innerWidth >= 1024)
    onResize()
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  return (
    <section className="h-screen flex items-center justify-center relative px-4 sm:px-8 overflow-hidden">
      {/* LiquidEther Background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          <LiquidEther
            colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
            mouseForce={20}
            cursorSize={100}
            isViscous={false}
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={false}
            autoDemo={true}
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          />
        </div>
      </div>
      <div
        className={`relative z-10 text-center transition-all duration-1000 ${scrollY > 100 ? "opacity-0 -translate-y-20" : "opacity-100 translate-y-0"}`}
      >
        {/* Centered hero image without any wrappers */}
        <img
          src={imageSrc}
          alt="profile"
          className="mx-auto md:pt-6 mb-3 md:mb-4 h-72 w-34"
        />

        {/* Intro text */}
        <div className={`text-lg pb-5 sm:text-xl md:text-2xl font-extralight ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
          <div>I am</div>
          <div className={`font-bold font-cas tracking-wide font-sans ${isDarkMode ? "text-gray-100" : "text-gray-900"}`}>
            Ninsau Abdul Fatawu
          </div>
        </div>

        {/* Rotating role */}
        <AnimatePresence mode="wait">
            {roles.map(
              (role, id) =>
                roleIndex === id && (
                  <motion.div
                    key={id}
                    className={cn(
                      'xxs:text-2xl xsm:text-3xl to-orange-500 bg-gradient-to-l from-orange-500 bg-clip-text pb-3 text-center font-sans text-xl font-black uppercase text-transparent sm:text-4xl md:text-5xl dark:to-orange-500'
                    )}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ type: 'spring', duration: 1, delay: 0.25, stiffness: 260, damping: 20 }}
                  >
                    a {role}
                  </motion.div>
                )
            )}
          </AnimatePresence>

        {/* Socials with FloatingDock (desktop) and simple row (mobile) */}
        <div className="mt-2 sm:mt-8 mx-auto w-full max-w-sm ">
          {isDesktop ? (
            <FloatingDock
              className={`mx-auto flex h-12 gap-3 md:h-16 md:gap-4 justify-center rounded-md  backdrop-blur dark:bg-neutral-900/40 ${isDarkMode ? "bg-gradient-to-l from-gray-800 to-gray-900  text-gray-200" : "bg-white/40 "}`}
              items={socials.map((s) => ({
                title: s.name,
                icon: <s.icon className="h-7 w-7 md:h-9 md:w-9" />,
                href: s.url,
                target: "_blank",
                rel: "noopener noreferrer",
              }))}
              classNames={{ container: `data-[motion-hover=true]:bg-gradient-to-l from-orange-400 to-rose-500 backdrop-blur-md ${isDarkMode ? "bg-gray-900 text-gray-200" : "bg-gray-300 "}` }}
            />
          ) : (
            <FloatingDock
              className={`mx-auto flex gap-2 md:h-16 md:gap-4 justify-center rounded-md  backdrop-blur dark:bg-neutral-900/40 ${isDarkMode ? "bg-gradient-to-l from-gray-800 to-gray-900  text-gray-200" : "bg-white/40 "}`}
              items={socials.map((s) => ({
                title: s.name,
                icon: <s.icon className="h-6 w-6 md:h-9 md:w-9" />,
                href: s.url,
                target: "_blank",
                rel: "noopener noreferrer",
              }))}
              classNames={{ container: `data-[motion-hover=true]:bg-gradient-to-l from-orange-400 to-rose-500 backdrop-blur-md ${isDarkMode ? "bg-gray-900 text-gray-200" : "bg-gray-300 "}` }}
            />
          )}
        </div>

        {/* Helper text */}
        <div className={`mt-4 sm:mt-6 text-xs sm:text-sm tracking-wider ${isDarkMode ? "text-gray-500" : "text-gray-500"}`}>
          SCROLL TO EXPLORE
        </div>
        <div className="mt-2 sm:mt-4 flex justify-center">
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
              className={`${isDarkMode ? "text-gray-600" : "text-gray-400"} sm:w-6 sm:h-6`}
            >
              <path d="M7 10L12 15L17 10" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}