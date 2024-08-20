import Herobanner from './components/Herobanner'
import Navbar from './components/Navbar'
import HeroSlider from './components/HeroSlider'
import Service from './components/Service'
import ServiceSliders from './components/ServiceSliders'

function App() {


  return (
    <>
      <Navbar></Navbar>
      <Herobanner>
        <HeroSlider></HeroSlider>
      </Herobanner>
      <Service>
      <ServiceSliders></ServiceSliders>
      </Service>
    </>
  )
}

export default App
