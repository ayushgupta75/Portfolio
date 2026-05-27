import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Now from './sections/Now'
import Work from './sections/Work'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="bg-linen min-h-screen">
      <Navbar />

      <main className="pt-16">
        <Hero />
        <Now />
        <Work />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
