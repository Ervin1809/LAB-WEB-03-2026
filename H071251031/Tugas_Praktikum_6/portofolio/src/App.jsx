import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Gallery from './components/Gallery.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Gallery />
      </main>
      <Footer />
    </>
  )
}

export default App
