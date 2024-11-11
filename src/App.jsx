import React from 'react'
import Navbar from './components/Navbar.jsx'
import LandingPage from './components/LandingPage.jsx'
import New from './components/New.jsx'
import Cards from './components/Cards.jsx'
import Footer from './components/Footer.jsx'
import Benefits from './components/Benefits.jsx'
import PromoCard from './components/PromoCard.jsx'


function App() {
  return (
    <>
      <Navbar/>
      <LandingPage/>
      <New/>
      <Cards/>
      <PromoCard/>
      <Benefits/>
      <Footer/>
    </>
  )
}

export default App
