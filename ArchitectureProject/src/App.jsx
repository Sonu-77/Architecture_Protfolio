import Herobanner from './components/Herobanner'
import Navbar from './components/Navbar'
import HeroSlider from './components/HeroSlider'
import Service from './components/Service'
import ServiceSliders from './components/ServiceSliders'
import About from './components/About'
import AboutImageSection from './components/AboutImageSection'
import AboutSpace from './components/AboutSpace'
import Project from './components/Project'
import Testimony from './components/Testimony'
import WhyChoose from './components/WhyChoose'


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
      <Project></Project>
      <Testimony></Testimony>
      <WhyChoose></WhyChoose>


    </>
  )
}

export default App
