import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import CommandBar from './components/CommandBar'
import { features } from './data/content'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Now from './sections/Now'
import Experience from './sections/Experience'
import Education from './sections/Education'
import Work from './sections/Work'
import Blog from './sections/Blog'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import ProjectDetail from './pages/ProjectDetail'
import PostDetail from './pages/PostDetail'
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
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      {features.chatbot && <CommandBar />}
      <Routes>
        <Route path="/"               element={<Home />} />
        <Route path="/work/:slug"     element={<ProjectDetail />} />
        <Route path="/writing/:slug"  element={<PostDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
