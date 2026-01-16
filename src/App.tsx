import Navbar from './components/navbar'
import Home from './pages/home'
import About from './pages/about'
import Projects from './pages/projects'
import Contact from './pages/contact'
import './index.css'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  )
}

export default App
