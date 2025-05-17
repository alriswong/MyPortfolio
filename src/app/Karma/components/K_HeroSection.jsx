"use client"
import React from 'react'
import { motion } from "motion/react"

const K_HeroSection = () => {
  return (
    <section className='2xl:min-h-screen xl:pt-30'>              
      <div className='grid grid-cols-1 gap-12 xl:grid-cols-12 xl:gap-0'>
        <div className='xl:col-span-5 place-content-center'>
          <motion.h1 
            initial= {{opacity:0}} 
            whileInView={{opacity:1}}
            transition={{duration: 3 , type:'spring'}} 
            viewport={{ amount: 0.3, once: false}}
            className='py-10'>
              <span className='text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-BTcolorOne to-BTcolorTwo'>KARMA</span>
          </motion.h1>
          <motion.p 
            initial= {{opacity:0}} 
            whileInView={{opacity:1}}
            transition={{duration: 1 , type:'spring', delay:0.5}} 
            viewport={{ amount: 0.3, once: true}}
            
            className='text-contentColor text-xl '>This is a VR adventure puzzle game set in the ruins of an ancient temple beneath the Amazon River.
            Players explore the underwater world from a first-person perspective as an electric eel. 
            <br/>
            At the beginning of the game, the player awakens to find themselves transformed into an electric eel. 
            To regain their human form, they must undergo a series of divine trials. With each trial completed, a deity restores a part of the player’s original human traits.
          </motion.p>
        </div>

        <div className='place-items-center xl:col-span-7 xl:col-start-7 xl:mt-10 2xl:mt-0'>
          <motion.iframe 
          initial= {{scale:0.5 , opacity:0}} 
          whileInView={{scale:1 , opacity:1}}
          transition={{duration: 1 , type:'spring'}} 
          viewport={{ amount: 0.3, once: true}} 
          className='w-sm md:w-full h-70 md:h-120 xl:h-100 2xl:h-130' width="760" height="515" src="https://www.youtube.com/embed/c9YP0zivNPQ?si=w8xMQgBtoKcYrBjf&rel=0&autoplay=0&mute=1&showinfo=0&modestbranding=1&playsinline=1&controls=1"
          title="Karma_Trailer" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>

          </motion.iframe>
        </div>

      </div>
    </section>
  )
}

export default K_HeroSection