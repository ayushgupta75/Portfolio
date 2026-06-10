import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import CommandBar from './components/CommandBar'
import { features } from './data/content'
import { useVisitTracker } from './hooks/useVisitTracker'
import { usePageTracking } from './hooks/usePageTracking'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Now from './sections/Now'
import Experience from './sections/Experience'
import Education from './sections/Education'
import BeyondCode from './sections/BeyondCode'
import Work from './sections/Work'
import Blog from './sections/Blog'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import ProjectDetail from './pages/ProjectDetail'
import PostDetail from './pages/PostDetail'
import PursuitDetail from './pages/PursuitDetail'
import LegalLLMChat from './legal-llm'
import SourceRedirect from './pages/SourceRedirect'
import './index.css'

function Home() {
  return (
    <div className="bg-linen min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Now />
        <Experience />
        <Education />
        <Work />
        <Blog />
        {features.beyondCode && <BeyondCode />}
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

function Analytics() {
  usePageTracking()
  return null
}

function App() {
  useVisitTracker()

  return (
    <BrowserRouter>
      <Analytics />
      <ScrollToTop />
      {features.chatbot && <CommandBar />}
      <Routes>
        <Route path="/"               element={<Home />} />
        <Route path="/work/:slug"     element={<ProjectDetail />} />
        <Route path="/writing/:slug"  element={<PostDetail />} />
        <Route path="/beyond/:slug"   element={<PursuitDetail />} />
        <Route path="/legal-llm"      element={<LegalLLMChat />} />
        <Route path="/from/:source"   element={<SourceRedirect />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
