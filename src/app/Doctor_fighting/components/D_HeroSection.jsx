"use client"
import React from 'react'
import { motion } from "motion/react"

const M_HeroSection = () => {
  return (
    <section className='2xl:min-h-screen xl:pt-15' >
      <div className='grid grid-cols-1 md:grid-cols-12'>

        <div className='md:col-span-8 md:col-end-7 lg:col-end-8 place-self-center'>
          <motion.h1 
          initial= {{opacity:0}} 
          whileInView={{opacity:1}}
          transition={{duration: 3 , type:'spring'}} 
          viewport={{ amount: 0.1, once: false}}
          className='py-10'>
            <span className='text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-BTcolorOne to-BTcolorTwo'>醫護Fighting!</span>
          </motion.h1>

          <motion.p 
            initial= {{opacity:0}} 
            whileInView={{opacity:1}}
            transition={{duration: 1 , type:'spring', delay:0.5}} 
            viewport={{ amount: 0.1, once: true}}
            
            className='text-start text-contentColor text-xl '>During the COVID-19 pandemic, medical professionals were often required to work long hours without sufficient time off or adequate rest, leading to significant mental and physical exhaustion. 
              In response, we developed a viral marketing mobile game designed to raise public awareness about the excessive working hours faced by healthcare workers and to encourage greater societal attention to this critical issue.
                        
          </motion.p>
        </div>

        <div className='place-items-center md:col-span-4 md:col-start-8 lg:col-start-9 2xl:col-start-10 mt-10 2xl:mt-0'>
          {/* <motion.iframe 
          initial= {{scale:0.5 , opacity:0}} 
          whileInView={{scale:1 , opacity:1}}
          transition={{duration: 1 , type:'spring'}} 
          viewport={{ amount: 0.1, once: true}}
          className='w-fit' width="378" height="649" src="https://www.youtube.com/embed/k7Cc9-3L8U4?rel=0&autoplay=0&mute=1&showinfo=0&modestbranding=1&playsinline=1&controls=1" 
          title="醫護Fighting!_Highlight_Demo" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></motion.iframe> */}

          <div className="w-full aspect-[9/16] max-w-xs md:max-w-md xl:max-w-lg mx-auto">
            <motion.iframe
              initial={{scale:0.5 , opacity:0}}
              whileInView={{scale:1 , opacity:1}}
              transition={{duration: 1 , type:'spring'}}
              viewport={{ amount: 0.1, once: true}}
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/k7Cc9-3L8U4?rel=0&autoplay=0&mute=1&showinfo=0&modestbranding=1&playsinline=1&controls=1"
              title="醫護Fighting!_Highlight_Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></motion.iframe>
          </div>
        </div>
          
      </div>
        
    </section>
  )
}

export default M_HeroSection