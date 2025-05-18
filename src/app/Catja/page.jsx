import React from 'react'
import C_Navbar from './components/C_Navbar'
import C_HeroSection from './components/C_HeroSection'
import C_AboutSection from './components/C_AboutSection'
import C_GameplaySection from './components/C_GameplaySection'

const page = () => {
  return (
    <main className="flex flex-col bg-black overflow-clip">
      <C_Navbar />
      <div className='container mt-18 xl:mt-26 mx-auto px-5 md:px-8'>
        <C_HeroSection/>
        <C_AboutSection />
        <C_GameplaySection />
      </div>
    </main>
  )
}

export default page