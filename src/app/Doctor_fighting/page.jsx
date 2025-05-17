import React from 'react'
import D_Navbar from './components/D_Navbar'
import D_HeroSection from './components/D_HeroSection'
import D_About from './components/D_AboutSection'
import D_WhatILearnSection from './components/D_WhatILearnSection'


const MedicalTeamFightingPage = () => {
  return (
    <main className="flex flex-col bg-black ">
      <D_Navbar />
      <div className='container mt-18 xl:mt-26 mx-auto px-5 md:px-8'>
        <D_HeroSection />
        <D_About />
        <D_WhatILearnSection />
      </div>
    </main>
  )
}

export default MedicalTeamFightingPage