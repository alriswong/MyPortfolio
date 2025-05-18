"use client"
import React from 'react'
import { motion } from "motion/react"

const C_HeroSection = () => {
  return (
    <section className='2xl:min-h-screen xl:pt-25'>
                    
      <div className='grid grid-cols-1 gap-12 xl:grid-cols-12 xl:gap-0'>
        <div className='xl:col-span-5 place-content-center'>
          <motion.h1 
            initial= {{opacity:0}} 
            whileInView={{opacity:1}}
            transition={{duration: 3 , type:'spring'}} 
            viewport={{ amount: 0.3, once: false}}
            className='my-10'>
              <span className='text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-BTcolorOne to-BTcolorTwo'>CATJA</span>
          </motion.h1>

          <motion.p 
          initial= {{opacity:0}} 
          whileInView={{opacity:1}}
          transition={{duration: 1 , type:'spring', delay:0.5}} 
          viewport={{ amount: 0.3, once: true}}
          
          className='text-contentColor text-xl'>The concept of this VR climbing game that combines elements of cats, ninjas, and Rock Climbing.
          The main character - Catja must climb to the rooftop to deliver an important item to the Catja's leader.
          Players must carefully grip onto climbing holds—losing grip will result in falling to their death.
          The difficulty increases progressively with each level ascended.
                      
          </motion.p>
        </div>
        
        <div className='place-items-center xl:col-span-7 xl:col-start-7 xl:mt-15 2xl:mt-0'>
          <div className='w-full max-h-62 md:max-h-80 2xl:max-h-90 aspect-[9/16] max-w-xs md:max-w-xl xl:max-w-2xl mx-auto'>
            <motion.iframe 
            initial= {{scale:0.5 , opacity:0}} 
            whileInView={{scale:1 , opacity:1}}
            transition={{duration: 1 , type:'spring'}} 
            viewport={{ amount: 0.3, once: true}}
                    
            className='w-full h-full rounded-lg' src="https://www.youtube.com/embed/S46IGAzI4L4?si=-LIURDhO-b74mvtW?rel=0&autoplay=0&mute=1&showinfo=0&modestbranding=1&playsinline=1&controls=1" 
            title="Catja_Demo" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></motion.iframe>
          </div>
           
        </div>

          
          
        
      </div>
    </section>
  )
}

export default C_HeroSection