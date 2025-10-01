interface AboutPageProps {
  isDarkMode: boolean
}

export default function AboutPage({ isDarkMode }: AboutPageProps) {
  return (
    <div className={`min-h-screen relative overflow-hidden ${isDarkMode ? "bg-gray-900" : "bg-gray-100"}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
        {/* Header Section */}
        <div className="mb-8 sm:mb-12 md:mb-16 mt-10">
          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider mb-4 sm:mb-6 md:mb-8 ${isDarkMode ? "text-gray-100" : "text-gray-900"}`}>
            ABOUT
          </h1>
          <div className={`w-16 sm:w-20 md:w-24 h-px ${isDarkMode ? "bg-gray-600" : "bg-gray-400"}`}></div>
          
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
          {/* Left Column - Bio */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h2 className={`text-xl sm:text-2xl font-medium tracking-wide mb-4 sm:mb-6 ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>Background</h2>
              <div className={`space-y-3 sm:space-y-4 text-sm sm:text-base leading-relaxed ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                <p>
                  I'm a passionate software developer with over 5 years of experience building scalable web applications
                  and mobile solutions. My journey began with a Computer Science degree from University of Mines and Technology, where
                  I discovered my love for clean code and elegant problem-solving.
                </p>
                <p>
                  Currently working as a software engineer at TechVerge, I specialize in React, Node.js, Python, PostgreSQL, MySQL, MongoDB, and
                  cloud architecture. I've worked with teams of 8+ developers and delivered products used by millions of users
                  worldwide.
                </p>
                <p>
                  When I'm not coding, you'll find me contributing to open-source projects,
                  or exploring the latest in AI and machine learning technologies.
                </p>
              </div>
            </div>

                {/* Download CV Button */}
            <div className="mt-6">
              <a
                href="/cv.pdf"
                download
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm font-medium tracking-wider transition-colors border ${
                  isDarkMode
                    ? "border-gray-600 text-gray-200 hover:text-white hover:bg-gray-800"
                    : "border-gray-400 text-gray-700 hover:text-gray-900 hover:bg-gray-200"
                }`}
              >
                {/* Icon */}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <span>Download CV</span>
              </a>
            </div>

            <div>
              <h2 className={`text-xl sm:text-2xl font-medium tracking-wide mb-4 sm:mb-6 ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>Philosophy</h2>
              <div className={`space-y-3 sm:space-y-4 text-sm sm:text-base leading-relaxed ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                <p>
                  I believe in writing code that tells a story - clean, maintainable, and purposeful. Every line should
                  serve the user experience while being a joy for developers to work with.
                </p>
                <p>
                  My approach combines technical excellence with human-centered design, ensuring that technology serves
                  people, not the other way around.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Stats & Highlights */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h2 className={`text-xl sm:text-2xl font-medium tracking-wide mb-4 sm:mb-6 ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>Highlights</h2>
              <div className="space-y-4 sm:space-y-6">
                <div className={`border-l-2 pl-4 sm:pl-6 ${isDarkMode ? "border-gray-600" : "border-gray-300"}`}>
                  <h3 className={`text-base sm:text-lg font-medium mb-1 sm:mb-2 ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>5+ Years Experience</h3>
                  <p className={`text-xs sm:text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>Full-stack development across various industries</p>
                </div>
                <div className={`border-l-2 pl-4 sm:pl-6 ${isDarkMode ? "border-gray-600" : "border-gray-300"}`}>
                  <h3 className={`text-base sm:text-lg font-medium mb-1 sm:mb-2 ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>
                    10+ Projects Delivered
                  </h3>
                  <p className={`text-xs sm:text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>From startups to enterprise applications</p>
                </div>
                
                <div className={`border-l-2 pl-4 sm:pl-6 ${isDarkMode ? "border-gray-600" : "border-gray-300"}`}>
                  <h3 className={`text-base sm:text-lg font-medium mb-1 sm:mb-2 ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>
                    Open Source Contributor
                  </h3>
                  <p className={`text-xs sm:text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                    Active in React, Node.js, and TypeScript communities
                  </p>
                </div>
              </div>
            </div>

            

            <div>
              <h2 className={`text-xl sm:text-2xl font-medium tracking-wide mb-4 sm:mb-6 ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>Interests</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className={`p-3 sm:p-4 rounded-lg shadow-sm ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
                  <h4 className={`font-medium mb-1 sm:mb-2 text-sm sm:text-base ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>AI/ML</h4>
                  <p className={`text-xs sm:text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>Exploring neural networks and automation</p>
                </div>
                <div className={`p-3 sm:p-4 rounded-lg shadow-sm ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
                  <h4 className={`font-medium mb-1 sm:mb-2 text-sm sm:text-base ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>Cloud Architecture</h4>
                  <p className={`text-xs sm:text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>Scalable systems and DevOps practices</p>
                </div>
                <div className={`p-3 sm:p-4 rounded-lg shadow-sm ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
                  <h4 className={`font-medium mb-1 sm:mb-2 text-sm sm:text-base ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>Mentoring</h4>
                  <p className={`text-xs sm:text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>Helping developers grow their careers</p>
                </div>
                <div className={`p-3 sm:p-4 rounded-lg shadow-sm ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
                  <h4 className={`font-medium mb-1 sm:mb-2 text-sm sm:text-base ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>Photography</h4>
                  <p className={`text-xs sm:text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>Capturing moments and perspectives</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Values */}
        <div className={`mt-12 sm:mt-16 pt-8 sm:pt-12 md:pt-16 border-t ${isDarkMode ? "border-gray-600" : "border-gray-300"}`}>
          <h2 className={`text-xl sm:text-2xl font-medium tracking-wide mb-6 sm:mb-8 text-center ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>
            Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center ${isDarkMode ? "bg-gray-700" : "bg-gray-800"}`}>
                <span className="text-white font-bold text-sm sm:text-base">01</span>
              </div>
              <h3 className={`text-base sm:text-lg font-medium mb-1 sm:mb-2 ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>Quality First</h3>
              <p className={`text-xs sm:text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                Every project deserves attention to detail and craftsmanship
              </p>
            </div>
            <div className="text-center">
              <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center ${isDarkMode ? "bg-gray-700" : "bg-gray-800"}`}>
                <span className="text-white font-bold text-sm sm:text-base">02</span>
              </div>
              <h3 className={`text-base sm:text-lg font-medium mb-1 sm:mb-2 ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>Continuous Learning</h3>
              <p className={`text-xs sm:text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>Technology evolves fast, and so should we</p>
            </div>
            <div className="text-center sm:col-span-2 md:col-span-1">
              <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center ${isDarkMode ? "bg-gray-700" : "bg-gray-800"}`}>
                <span className="text-white font-bold text-sm sm:text-base">03</span>
              </div>
              <h3 className={`text-base sm:text-lg font-medium mb-1 sm:mb-2 ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>Collaboration</h3>
              <p className={`text-xs sm:text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>Great software is built by great teams</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
