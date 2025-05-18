import React from 'react'
import I_Navbar from './components/I_Navbar'
import I_HeroSection from './components/I_HeroSection'
import I_About from './components/I_AboutSection'
import I_Hardware from './components/I_HardwareSection'
import I_Gameplay from './components/I_GameplaySection'

const InteractionCircle = () => {
  return (
    <main className="flex flex-col bg-black overflow-clip">
      <I_Navbar />
      <div className='container mt-18 xl:mt-26 mx-auto px-5 md:px-8'>
        <I_HeroSection />
        <I_About />
        <I_Hardware />
        <I_Gameplay />
      </div>
    </main>
  )
}

export default InteractionCircle