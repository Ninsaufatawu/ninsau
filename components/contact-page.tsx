"use client"

import type React from "react"

import { useState } from "react"
import emailjs from "@emailjs/browser"

interface ContactPageProps {
  isDarkMode: boolean
}

export default function ContactPage({ isDarkMode }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (isSubmitting) return // Prevent multiple submissions
    setIsSubmitting(true)
    
    try {
      await emailjs.send(
        'service_86xu0y7',    // Replace with your EmailJS service ID
        'template_k504pbf',   // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'stK8AzT3w5xfZqqGj'     // Replace with your EmailJS public key
      )
      
      // Show success notification
      setShowSuccess(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false)
      }, 5000)
      
    } catch (error) {
      console.error('EmailJS Error:', error)
      // You can add error state here if needed
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className={`min-h-screen relative overflow-hidden ${isDarkMode ? "bg-gray-900" : "bg-gray-100"}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 top-12 sm:py-12 md:py-16">
        {/* Header Section */}
        <div className="mb-8 sm:mb-12 md:mb-16 mt-10 ">
          <h1 className={`text-3xl sm:text-4xl  md:text-5xl lg:text-6xl font-bold tracking-wider mb-4 sm:mb-6 md:mb-8 ${isDarkMode ? "text-gray-100" : "text-gray-900"}`}>
            CONTACT
          </h1>
          <div className={`w-16 sm:w-20 md:w-24 h-px ${isDarkMode ? "bg-gray-600" : "bg-gray-400"}`}></div>
          <p className={`mt-4 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
            Let's build something amazing together. Whether you have a project in mind, need technical consultation, or
            just want to connect, I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
          {/* Contact Form */}
          <div>
            <h2 className={`text-lg sm:text-xl md:text-2xl font-medium tracking-wide mb-6 sm:mb-8 ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="name" className={`block text-xs sm:text-sm font-medium mb-1 sm:mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-colors text-sm sm:text-base ${
                      isDarkMode 
                        ? "border-gray-600 bg-gray-800 text-gray-100 focus:ring-gray-500 placeholder-gray-400" 
                        : "border-gray-300 bg-white text-gray-900 focus:ring-gray-800 placeholder-gray-500"
                    }`}
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className={`block text-xs sm:text-sm font-medium mb-1 sm:mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-colors text-sm sm:text-base ${
                      isDarkMode 
                        ? "border-gray-600 bg-gray-800 text-gray-100 focus:ring-gray-500 placeholder-gray-400" 
                        : "border-gray-300 bg-white text-gray-900 focus:ring-gray-800 placeholder-gray-500"
                    }`}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className={`block text-xs sm:text-sm font-medium mb-1 sm:mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                  Subject *
                </label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-colors text-sm sm:text-base ${
                      isDarkMode 
                        ? "border-gray-600 bg-gray-800 text-gray-100 focus:ring-gray-500 placeholder-gray-400" 
                        : "border-gray-300 bg-white text-gray-900 focus:ring-gray-800 placeholder-gray-500"
                    }`}
                    placeholder="What would you like to discuss?"
                  />
              </div>

              <div>
                <label htmlFor="message" className={`block text-xs sm:text-sm font-medium mb-1 sm:mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-colors resize-none text-sm sm:text-base ${
                    isDarkMode 
                      ? "border-gray-600 bg-gray-800 text-gray-100 focus:ring-gray-500 placeholder-gray-400" 
                      : "border-gray-300 bg-white text-gray-900 focus:ring-gray-800 placeholder-gray-500"
                  }`}
                  placeholder="Tell me about your project, ideas, or how I can help you..."
                />
              </div>

              {/* Success Notification */}
              {showSuccess && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3 animate-fade-in">
                  <div className="flex-shrink-0">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-green-800">
                      Message sent successfully!
                    </h3>
                    <p className="text-sm text-green-700 mt-1">
                      Thank you for reaching out. I'll get back to you soon. Feel free to send another message if needed.
                    </p>
                  </div>
                  <button
                    onClick={() => setShowSuccess(false)}
                    className="flex-shrink-0 text-green-400 hover:text-green-600 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 text-sm sm:text-base ${
                  isSubmitting 
                    ? 'bg-gray-400 text-gray-200 cursor-not-allowed' 
                    : isDarkMode 
                      ? 'bg-gray-700 text-white hover:bg-gray-600 focus:ring-gray-500' 
                      : 'bg-gray-800 text-white hover:bg-gray-700 focus:ring-gray-800'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h2 className={`text-lg sm:text-xl md:text-2xl font-medium tracking-wide mb-6 sm:mb-8 ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>
                Get in Touch
              </h2>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white sm:w-5 sm:h-5">
                      <path
                        d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <polyline
                        points="22,6 12,13 2,6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className={`text-base sm:text-lg font-medium mb-1 ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>Email</h3>
                    <p className={`text-sm sm:text-base ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>ninsawfatawu@gmail.com</p>
                    <p className={`text-xs sm:text-sm mt-1 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>I typically respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white sm:w-5 sm:h-5">
                      <path
                        d="M21 10C21 17 12 23 12 23S3 17 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="12"
                        cy="10"
                        r="3"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className={`text-base sm:text-lg font-medium mb-1 ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>Location</h3>
                    <p className={`text-sm sm:text-base ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>Accra, Ghana</p>
                    <p className={`text-xs sm:text-sm mt-1 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>Available for remote work worldwide</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${isDarkMode ? "bg-gray-700" : "bg-gray-800"}`}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white sm:w-5 sm:h-5">
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <polyline
                        points="12,6 12,12 16,14"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className={`text-base sm:text-lg font-medium mb-1 ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>Availability</h3>
                    <p className={`text-sm sm:text-base ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>Open for new projects</p>
                    <p className={`text-xs sm:text-sm mt-1 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>Currently booking for Q2 2024</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className={`text-base sm:text-lg font-medium mb-3 sm:mb-4 ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>Connect Online</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <a
                  href="https://linkedin.com/in/ninsaufatawu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow ${
                    isDarkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-white"
                  }`}
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs sm:text-sm font-bold">in</span>
                  </div>
                  <span className={`font-medium text-sm sm:text-base ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>LinkedIn</span>
                </a>

                <a
                  href="https://github.com/ninsaufatawu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow ${
                    isDarkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-white"
                  }`}
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-800 rounded flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="white" className="sm:w-4 sm:h-4">
                      <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                  <span className={`font-medium text-sm sm:text-base ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>GitHub</span>
                </a>

                <a
                  href="https://x.com/NINSAU_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow ${
                    isDarkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-white"
                  }`}
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-black rounded flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="white" className="sm:w-4 sm:h-4">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </div>
                  <span className={`font-medium text-sm sm:text-base ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>X/Twitter</span>
                </a>

                <a
                  href="https://wa.me/2330241863698"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow ${
                    isDarkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-white"
                  }`}
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="white" className="sm:w-4 sm:h-4">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                  </div>
                  <span className={`font-medium text-sm sm:text-base ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h3 className={`text-base sm:text-lg font-medium mb-3 sm:mb-4 ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>Frequently Asked</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className={`p-3 sm:p-4 rounded-lg shadow-sm ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
                  <h4 className={`font-medium mb-1 sm:mb-2 text-sm sm:text-base ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>
                    What's your typical project timeline?
                  </h4>
                  <p className={`text-xs sm:text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                    Most projects range from 2-12 weeks depending on complexity. I provide detailed timelines during our
                    initial consultation.
                  </p>
                </div>
                <div className={`p-3 sm:p-4 rounded-lg shadow-sm ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
                  <h4 className={`font-medium mb-1 sm:mb-2 text-sm sm:text-base ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>
                    Do you work with startups?
                  </h4>
                  <p className={`text-xs sm:text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                    I love working with startups and offer flexible arrangements including equity partnerships for the
                    right projects.
                  </p>
                </div>
                <div className={`p-3 sm:p-4 rounded-lg shadow-sm ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
                  <h4 className={`font-medium mb-1 sm:mb-2 text-sm sm:text-base ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>
                    What's your hourly rate?
                  </h4>
                  <p className={`text-xs sm:text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                    My rates vary based on project scope and timeline. Let's discuss your specific needs and I'll
                    provide a custom quote.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
