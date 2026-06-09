import { HashRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Navbar         from './components/Navbar'
import Footer         from './components/Footer'
import Hero           from './components/Hero'
import Seeking        from './components/Seeking'
import About          from './components/About'
import Journey        from './components/Journey'
import TechStack      from './components/TechStack'
import Experience     from './components/Experience'
import Projects       from './components/Projects'
import WhyHireMe      from './components/WhyHireMe'
import Certifications from './components/Certifications'
import Achievements   from './components/Achievements'
import CodingProfiles from './components/CodingProfiles'
import Learning       from './components/Learning'
import GitHubSection  from './components/GitHubSection'
import Blogs          from './components/Blogs'
import Contact        from './components/Contact'

/* All sections rendered in order on home page */
function Home() {
  return (
    <main>
      <Hero />
      <Seeking />
      <About />
      <Journey />
      <TechStack />
      <Experience />
      <Projects />
      <WhyHireMe />
      <Certifications />
      <Achievements />
      <CodingProfiles />
      <Learning />
      <GitHubSection />
      <Blogs />
      <Contact />
    </main>
  )
}

export default function App() {
  const [theme, setTheme]       = useState('dark')
  const [progress, setProgress] = useState(0)

  /* Load saved theme on first render */
  useEffect(() => {
    const saved = localStorage.getItem('sp_theme') || 'dark'
    setTheme(saved)
    document.documentElement.setAttribute('data-theme', saved)
  }, [])

  /* Toggle dark / light and save to localStorage */
  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    localStorage.setItem('sp_theme', next)
    document.documentElement.setAttribute('data-theme', next)
  }

  /* Track scroll position to drive the progress bar */
  useEffect(() => {
    function onScroll() {
      const scrolled  = window.scrollY
      const maxScroll = document.body.scrollHeight - window.innerHeight
      if (maxScroll > 0) setProgress((scrolled / maxScroll) * 100)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Watch all .reveal elements — add "visible" when they enter viewport */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    const timer = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    }, 100)
    return () => { clearTimeout(timer); observer.disconnect() }
  }, [])

  return (
    <HashRouter>
      {/* Gradient scroll progress bar fixed at top */}
      <div style={{
        position: 'fixed', top: 0, left: 0, zIndex: 9999,
        height: '3px', width: progress + '%', pointerEvents: 'none',
        background: 'linear-gradient(90deg, #00C6FF, #7B61FF, #00F5D4)',
        boxShadow: '0 0 10px #00C6FF', transition: 'width 0.1s linear',
      }} />

      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </HashRouter>
  )
}