"use client"
import React from 'react'
import { motion } from "motion/react"
import Link from 'next/link'

const I_HeroSection = () => {
  return (
    <section className='2xl:min-h-screen xl:pt-25'>
      <div className='grid grid-cols-1 gap-12 xl:grid-cols-12 xl:gap-0'>

        <div className='xl:col-span-5 place-content-center'>
          <motion.h1 
            initial= {{opacity:0}} 
            whileInView={{opacity:1}}
            transition={{duration: 3 , type:'spring'}} 
            viewport={{ amount: 0.3, once: false}}
            className='my-10 2xl:my-0 2xl:mb-10'>
              <span className='text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-BTcolorOne to-BTcolorTwo'>互動環</span>
          </motion.h1>

          <motion.p 
          initial= {{opacity:0}} 
          whileInView={{opacity:1}}
          transition={{duration: 1 , type:'spring', delay:0.5}} 
          viewport={{ amount: 0.3, once: true}}
          
          className='text-contentColor text-xl'>Due to the age-related loss of skeletal muscle mass, elderly people are at an increased risk of falls. 
          Additionally, many grandparents spend much of their time at home caring for their grandchildren, often leading to insufficient physical activity. 
          <br />
          To address these challenges, we designed a custom controller that connects to a computer game we developed, allowing grandparents and grandchildren to play together while simultaneously engaging in muscle-strengthening exercises. 
          <br />
          The gameplay is inspired by the traditional game of hopscotch and requires two players to work together to complete it.
                      
          </motion.p>

          <Link href="https://joypad-jelly.itch.io/interaction-circle">
            <motion.button 
            initial= {{scale:0 , opacity: 0}} 
            whileInView={{scale:1,  opacity: 1}}
            transition={{duration:0.5, type:'spring', stiffness:70, delay:0.8}}
            viewport={{ amount: 0.1, once: false}}
            className="px-4 py-2 w-full sm:w-fit rounded-full mt-4  text-black bg-gradient-to-br  from-BTcolorOne to-BTcolorTwo hover:scale-110 hover:transition-all hover:duration-300 cursor-pointer">
            Play Demo
            </motion.button>
          </Link>

        </div>
        
        <div className='place-content-center xl:col-span-7 xl:col-start-7'>
          <div className='w-full max-h-62 sm:max-h-80 2xl:max-h-125 aspect-[9/16] max-w-xs sm:max-w-xl xl:max-w-2xl mx-auto'>
            <motion.iframe 
            initial= {{scale:0.5 , opacity:0}} 
            whileInView={{scale:1 , opacity:1}}
            transition={{duration: 1 , type:'spring'}} 
            viewport={{ amount: 0.3, once: true}}
                    
            className='w-full h-full rounded-lg' src="https://www.youtube.com/embed/3cyWcJniNF4?rel=0&autoplay=0&mute=1&showinfo=0&modestbranding=1&playsinline=1&controls=1" title="互動環_Demo" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></motion.iframe> 
          </div>
        </div>
                   
      </div>
    </section>
  )
}

export default I_HeroSection