import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Features from './Components/Features'
import Demo from './Components/Demo'
import Pricing from './Components/Pricing'
import Contact from './Components/Contact'
import TryNow from './Components/TryNow'
import Footer from './Components/Footer'
import './index.css'; 


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Features/>
      <br />
      <Demo/>
      <Pricing/>
      <Contact/>
      <TryNow/>
      <Footer/>
    </div>
  )
}

export default App
