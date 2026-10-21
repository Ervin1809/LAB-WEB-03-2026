import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Gallery from './components/Gallery.jsx'
import Projects from './components/Projects.jsx'
import Footer from './components/Footer.jsx'


function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-ink text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Gallery />
        <Projects/>
      </main>
      <Footer />
    </div>
  )
}

export default App