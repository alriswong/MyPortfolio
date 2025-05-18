import React from 'react'
import K_Navbar from './components/K_Navbar'
import K_HeroSection from './components/K_HeroSection'
import K_AboutSection from './components/K_AboutSection'
import K_GameplaySection from './components/K_GameplaySection'

const page = () => {
  return (
    <main className="flex flex-col bg-black overflow-clip">
      <K_Navbar />
      <div className='container mt-22 mx-auto px-5 md:px-8'>
        <K_HeroSection/>
        <K_AboutSection />
        <K_GameplaySection />
      </div>
    </main>
  )
}

export default page