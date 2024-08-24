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
import Contact from './components/Contact'
import Map from './components/Map'


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
      <AboutSpace smHeight={"130vw"} lgHeight={"30vw"}>
        <About/>
        <AboutImageSection/>
      </AboutSpace>
      <Project></Project>
      <Testimony></Testimony>
      <WhyChoose></WhyChoose>
      <AboutSpace smHeight={"230vw"} lgHeight={"35vw"}>

        <Contact></Contact>
        <Map></Map>
      </AboutSpace>

    </>
  )
}

export default App
