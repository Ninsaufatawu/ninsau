interface SkillsPageProps {
  isDarkMode: boolean
}

export default function SkillsPage({ isDarkMode }: SkillsPageProps) {
  const skills = {
    frontend: [
      { name: "React", level: 95, years: "4+ years" },
      { name: "TypeScript", level: 90, years: "3+ years" },
      { name: "Next.js", level: 88, years: "2+ years" },
      { name: "Tailwind CSS", level: 92, years: "3+ years" },
      { name: "Vue.js", level: 75, years: "2+ years" },
    ],
    backend: [
      { name: "Node.js", level: 93, years: "4+ years" },
      { name: "Python", level: 85, years: "3+ years" },
      { name: "PostgreSQL", level: 88, years: "4+ years" },
      { name: "MongoDB", level: 82, years: "3+ years" },
      { name: "GraphQL", level: 80, years: "2+ years" },
    ],
    tools: [
      { name: "AWS", level: 87, years: "3+ years" },
      { name: "Docker", level: 85, years: "3+ years" },
      { name: "Git", level: 95, years: "5+ years" },
      { name: "Figma", level: 78, years: "2+ years" },
      { name: "Jest", level: 83, years: "3+ years" },
    ],
  }

  return (
    <div className={`min-h-screen relative overflow-hidden ${isDarkMode ? "bg-gray-900" : "bg-gray-100"}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
        {/* Header Section */}
        <div className="mb-8 sm:mb-12 md:mb-16 mt-10">
          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider mb-4 sm:mb-6 md:mb-8 ${isDarkMode ? "text-gray-100" : "text-gray-900"}`}>
            SKILLS
          </h1>
          <div className={`w-16 sm:w-20 md:w-24 h-px ${isDarkMode ? "bg-gray-600" : "bg-gray-400"}`}></div>
          <p className={`mt-4 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
            A comprehensive toolkit built through years of hands-on experience, continuous learning, and real-world
            problem solving.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-12 md:mb-16">
          {/* Frontend Skills */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className={`text-lg sm:text-xl md:text-2xl font-medium tracking-wide mb-4 sm:mb-6 flex items-center ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>
              <span className={`w-2 h-2 rounded-full mr-2 sm:mr-3 ${isDarkMode ? "bg-gray-500" : "bg-gray-800"}`}></span>
              Frontend
            </h2>
            <div className="space-y-3 sm:space-y-4">
              {skills.frontend.map((skill, index) => (
                <div key={index} className={`p-3 sm:p-4 rounded-lg shadow-sm ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className={`font-medium text-sm sm:text-base ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>{skill.name}</h3>
                    <span className={`text-xs sm:text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>{skill.years}</span>
                  </div>
                  <div className={`w-full rounded-full h-2 ${isDarkMode ? "bg-gray-700" : "bg-gray-200"}`}>
                    <div
                      className={`h-2 rounded-full transition-all duration-1000 ${isDarkMode ? "bg-gray-400" : "bg-gray-800"}`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className={`text-xs mt-1 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>{skill.level}% proficiency</div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className={`text-lg sm:text-xl md:text-2xl font-medium tracking-wide mb-4 sm:mb-6 flex items-center ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>
              <span className={`w-2 h-2 rounded-full mr-2 sm:mr-3 ${isDarkMode ? "bg-gray-500" : "bg-gray-800"}`}></span>
              Backend
            </h2>
            <div className="space-y-3 sm:space-y-4">
              {skills.backend.map((skill, index) => (
                <div key={index} className={`p-3 sm:p-4 rounded-lg shadow-sm ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className={`font-medium text-sm sm:text-base ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>{skill.name}</h3>
                    <span className={`text-xs sm:text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>{skill.years}</span>
                  </div>
                  <div className={`w-full rounded-full h-2 ${isDarkMode ? "bg-gray-700" : "bg-gray-200"}`}>
                    <div
                      className={`h-2 rounded-full transition-all duration-1000 ${isDarkMode ? "bg-gray-400" : "bg-gray-800"}`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className={`text-xs mt-1 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>{skill.level}% proficiency</div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & DevOps */}
          <div className="space-y-4 sm:space-y-6 md:col-span-2 lg:col-span-1">
            <h2 className={`text-lg sm:text-xl md:text-2xl font-medium tracking-wide mb-4 sm:mb-6 flex items-center ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>
              <span className={`w-2 h-2 rounded-full mr-2 sm:mr-3 ${isDarkMode ? "bg-gray-500" : "bg-gray-800"}`}></span>
              Tools & DevOps
            </h2>
            <div className="space-y-3 sm:space-y-4">
              {skills.tools.map((skill, index) => (
                <div key={index} className={`p-3 sm:p-4 rounded-lg shadow-sm ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className={`font-medium text-sm sm:text-base ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>{skill.name}</h3>
                    <span className={`text-xs sm:text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>{skill.years}</span>
                  </div>
                  <div className={`w-full rounded-full h-2 ${isDarkMode ? "bg-gray-700" : "bg-gray-200"}`}>
                    <div
                      className={`h-2 rounded-full transition-all duration-1000 ${isDarkMode ? "bg-gray-400" : "bg-gray-800"}`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className={`text-xs mt-1 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>{skill.level}% proficiency</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications & Learning */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          

          {/* Currently Learning */}
          <div>
            <h2 className={`text-lg sm:text-xl md:text-2xl font-medium tracking-wide mb-4 sm:mb-6 ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>
              Currently Learning
            </h2>
            <div className="space-y-3 sm:space-y-4">
              <div className={`p-4 sm:p-6 rounded-lg shadow-sm ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
                <h3 className={`font-medium mb-1 sm:mb-2 text-sm sm:text-base ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>
                  Machine Learning with TensorFlow
                </h3>
                <p className={`text-xs sm:text-sm mb-2 sm:mb-3 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                  Exploring neural networks and deep learning applications
                </p>
                <div className={`w-full rounded-full h-2 ${isDarkMode ? "bg-gray-700" : "bg-gray-200"}`}>
                  <div className={`h-2 rounded-full ${isDarkMode ? "bg-gray-500" : "bg-gray-600"}`} style={{ width: "65%" }}></div>
                </div>
                <p className={`text-xs mt-1 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>65% complete</p>
              </div>
              <div className={`p-4 sm:p-6 rounded-lg shadow-sm ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
                <h3 className={`font-medium mb-1 sm:mb-2 text-sm sm:text-base ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>
                  Rust Programming Language
                </h3>
                <p className={`text-xs sm:text-sm mb-2 sm:mb-3 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                  Systems programming and performance optimization
                </p>
                <div className={`w-full rounded-full h-2 ${isDarkMode ? "bg-gray-700" : "bg-gray-200"}`}>
                  <div className={`h-2 rounded-full ${isDarkMode ? "bg-gray-500" : "bg-gray-600"}`} style={{ width: "40%" }}></div>
                </div>
                <p className={`text-xs mt-1 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>40% complete</p>
              </div>
              <div className={`p-4 sm:p-6 rounded-lg shadow-sm ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
                <h3 className={`font-medium mb-1 sm:mb-2 text-sm sm:text-base ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>
                  Kubernetes & Container Orchestration
                </h3>
                <p className={`text-xs sm:text-sm mb-2 sm:mb-3 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                  Advanced DevOps and microservices architecture
                </p>
                <div className={`w-full rounded-full h-2 ${isDarkMode ? "bg-gray-700" : "bg-gray-200"}`}>
                  <div className={`h-2 rounded-full ${isDarkMode ? "bg-gray-500" : "bg-gray-600"}`} style={{ width: "75%" }}></div>
                </div>
                <p className={`text-xs mt-1 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>75% complete</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
