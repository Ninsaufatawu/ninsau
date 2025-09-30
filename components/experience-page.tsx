interface ExperiencePageProps {
  isDarkMode: boolean
}

export default function ExperiencePage({ isDarkMode }: ExperiencePageProps) {
  const experiences = [
    {
      title: "Software Developer",
      company: "Coriable Limited",
      period: "March 2024 - January 2025",
      location: "Accra, Ghana",
      description:
        "Developed enterprise web applications using React.js and Node.js with WordPress integration. Implemented user-friendly interfaces and optimized application performance.",
      achievements: [
        "Built responsive web applications using React.js and Node.js",
        "Integrated WordPress CMS for content management",
        "Implemented user-friendly interfaces with modern design patterns",
        "Optimized applications for performance and scalability",
      ],
      technologies: ["React", "Node.js", "WordPress", "JavaScript", "CSS"],
    },
    {
      title: "Software Engineer Intern",
      company: "Ghana Civil Aviation Authority",
      period: "October 2024 - December 2024",
      location: "Accra, Ghana",
      description:
        "Assisted in the development and maintenance of internal software systems. Gained hands-on experience with software development processes and best practices.",
      achievements: [
        "Contributed to internal software system development",
        "Performed software testing, debugging, and troubleshooting",
        "Assisted in database design and implementation",
        "Gained hands-on experience with software development processes",
      ],
      technologies: ["JavaScript", "Database Design", "Testing", "Debugging"],
    },
    {
      title: "Web Developer Intern",
      company: "CoginitiveIntelect",
      period: "May 2024 - July 2024",
      location: "Remote",
      description:
        "Developed user interfaces with accessibility and usability in Figma and other no-code tools. Worked on developing and maintaining web applications.",
      achievements: [
        "Designed user interfaces with focus on accessibility and usability",
        "Worked on developing and maintaining web applications",
        "Used Figma and other no-code tools for rapid prototyping",
        "Collaborated with design team to implement user-friendly interfaces",
      ],
      technologies: ["Figma", "No-Code Tools", "UI/UX Design", "Web Development"],
    },
    {
      title: "Freelance Software Engineer",
      company: "Self-Employed",
      period: "January 2020 - Present",
      location: "Remote",
      description:
        "Providing software development services to various clients. Performed user research and usability testing to inform design decisions and create user-friendly experiences.",
      achievements: [
        "Delivered product flows and engagement strategies for clients",
        "Performed user research and usability testing",
        "Created user-friendly experiences for all audiences",
        "Worked alongside designers and developers to deliver responsive web solutions",
      ],
      technologies: ["Figma", "User Research", "Usability Testing", "Product Design"],
    },
  ]

  const education = [
    {
      degree: "Bachelor of Computer Science and Engineering",
      school: "University of Mines and Technology",
      period: "2021 - Present",
      location: "Tarkwa, Ghana",
      
      highlights: [
        "Specialized in Software Engineering",
        "Strong foundation in programming and system design",
        "Active participation in coding competitions",
        "Consistent academic performance",
      ],
    },
  ]

  return (
    <div className={`min-h-screen relative overflow-hidden ${isDarkMode ? "bg-gray-900" : "bg-gray-100"}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
        {/* Header Section */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider mb-4 sm:mb-6 md:mb-8 ${isDarkMode ? "text-gray-100" : "text-gray-900"}`}>
            EXPERIENCE
          </h1>
          <div className={`w-16 sm:w-20 md:w-24 h-px ${isDarkMode ? "bg-gray-600" : "bg-gray-400"}`}></div>
          <p className={`mt-4 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
            A journey of continuous growth, impactful contributions, and technical excellence across diverse projects
            and teams.
          </p>
        </div>

        {/* Professional Experience */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          <h2 className={`text-xl sm:text-2xl md:text-3xl font-medium tracking-wide mb-6 sm:mb-8 md:mb-12 ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>
            Professional Journey
          </h2>
          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Line - Hidden on mobile */}
                {index !== experiences.length - 1 && (
                  <div className={`hidden sm:block absolute left-6 top-16 w-px h-full ${isDarkMode ? "bg-gray-600" : "bg-gray-300"}`}></div>
                )}

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                  {/* Timeline Dot - Smaller on mobile */}
                  <div className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mx-auto sm:mx-0 ${isDarkMode ? "bg-gray-700" : "bg-gray-800"}`}>
                    <span className="text-white font-bold text-xs sm:text-sm">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Content */}
                  <div className={`flex-1 rounded-lg shadow-sm p-4 sm:p-6 md:p-8 ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-3 sm:mb-4">
                      <div>
                        <h3 className={`text-lg sm:text-xl md:text-2xl font-medium mb-1 sm:mb-2 ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>
                          {exp.title}
                        </h3>
                        <p className={`text-base sm:text-lg mb-1 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>{exp.company}</p>
                        <p className={`text-xs sm:text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>{exp.location}</p>
                      </div>
                      <div className="mt-2 sm:mt-4 lg:mt-0 lg:text-right">
                        <span className={`inline-block px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium ${
                          isDarkMode ? "bg-gray-700 text-gray-200" : "bg-gray-100 text-gray-700"
                        }`}>
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    <p className={`text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>{exp.description}</p>

                    <div className="mb-4 sm:mb-6">
                      <h4 className={`text-base sm:text-lg font-medium mb-2 sm:mb-3 ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>Key Achievements</h4>
                      <ul className="space-y-1 sm:space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-2 sm:gap-3">
                            <span className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mt-1.5 sm:mt-2 flex-shrink-0 ${isDarkMode ? "bg-gray-500" : "bg-gray-400"}`}></span>
                            <span className={`text-xs sm:text-sm md:text-base ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className={`text-base sm:text-lg font-medium mb-2 sm:mb-3 ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>Technologies Used</h4>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${
                              isDarkMode ? "bg-gray-700 text-gray-200" : "bg-gray-100 text-gray-700"
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className={`border-t pt-8 sm:pt-12 md:pt-16 ${isDarkMode ? "border-gray-600" : "border-gray-300"}`}>
          <h2 className={`text-xl sm:text-2xl md:text-3xl font-medium tracking-wide mb-6 sm:mb-8 md:mb-12 ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>
            Education
          </h2>
          {education.map((edu, index) => (
            <div key={index} className={`rounded-lg shadow-sm p-4 sm:p-6 md:p-8 ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-3 sm:mb-4">
                <div>
                  <h3 className={`text-lg sm:text-xl md:text-2xl font-medium mb-1 sm:mb-2 ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>
                    {edu.degree}
                  </h3>
                  <p className={`text-base sm:text-lg mb-1 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>{edu.school}</p>
                  <p className={`text-xs sm:text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>{edu.location}</p>
                </div>
                <div className="mt-2 sm:mt-4 lg:mt-0 lg:text-right">
                  <span className={`inline-block px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-1 sm:mb-2 ${
                    isDarkMode ? "bg-gray-700 text-gray-200" : "bg-gray-100 text-gray-700"
                  }`}>
                    {edu.period}
                  </span>
                 
                </div>
              </div>

              <div>
                <h4 className={`text-base sm:text-lg font-medium mb-2 sm:mb-3 ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>Highlights</h4>
                <ul className="space-y-1 sm:space-y-2">
                  {edu.highlights.map((highlight, hlIndex) => (
                    <li key={hlIndex} className="flex items-start gap-2 sm:gap-3">
                      <span className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mt-1.5 sm:mt-2 flex-shrink-0 ${isDarkMode ? "bg-gray-500" : "bg-gray-400"}`}></span>
                      <span className={`text-xs sm:text-sm md:text-base ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </div>
  )
}
