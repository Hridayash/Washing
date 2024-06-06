
import './App.css'
import Services from './components/Services'

import Specials from './components/Specials'
import AboutUs from './components/aboutus'
import ContactUs from './components/contact'
import Footer from './components/footer'

import Hero from './components/hero'
import NavBar from './components/navBar'



function App() {


  return (
    <>
    <main>
      <NavBar/>
      <Hero/>
      <Specials/>
      <Services/>
      <ContactUs/>
      <AboutUs/>
      
   
      


    </main>
    <Footer/>
    
    </>
  )

}

export default App
