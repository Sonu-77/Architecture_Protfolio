import Herobanner from './components/Herobanner'
import Navbar from './components/Navbar'
import HeroSlider from './components/HeroSlider'
import Service from './components/Service'
import ServiceSliders from './components/ServiceSliders'
import About from './components/About'
import AboutImageSection from './components/AboutImageSection'
import AboutSpace from './components/AboutSpace'
import Project from './components/Project'
import ProjectCard from './components/ProjectCard'

function App() {


  return (
    <>
      <Navbar/>
      <Herobanner>
        <HeroSlider/>
      </Herobanner>
      <Service>
        <ServiceSliders/>
      </Service>
      <AboutSpace>
        <About/>
        <AboutImageSection/>
      </AboutSpace>
      {/* <ProjectCard></ProjectCard> */}
      
    </>
  )
}

export default App
