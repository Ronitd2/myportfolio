import './App.css'
import Navbar from './Components/Navbar.jsx'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Skill from './Components/Skill.jsx'
import Contact from './Components/Contact.jsx'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import Project from './Components/Project.jsx'

function App() {
  

  return (
    <>
   
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Project />
      
      <Contact />
    </>
  )
}

export default App
