"use client"
import React from 'react'
import { motion } from "motion/react"
import Link from 'next/link'

const K_HeroSection = () => {
  return (
    <section className='2xl:min-h-screen xl:pt-30'>              
      <div className='grid grid-cols-1 gap-15 md:gap-25 xl:grid-cols-12 xl:gap-0'>
        <div className='xl:col-span-5 place-content-center text-center xl:text-start'>
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
          </motion.p>

          <Link href="https://drive.google.com/file/d/1nnffzyrfwG_iznIEqYqDswtaF4SXO-V1/view?usp=sharing">
            <motion.button 
            initial= {{scale:0 , opacity: 0}} 
            whileInView={{scale:1,  opacity: 1}}
            transition={{duration:0.5, type:'spring', stiffness:70, delay:0.3}}
            viewport={{ amount: 0.1, once: false}}
            className="px-4 py-2 w-full sm:w-fit rounded-full mt-4  text-black bg-gradient-to-br  from-BTcolorOne to-BTcolorTwo hover:scale-110 hover:transition-all hover:duration-300 cursor-pointer">
            Download
            </motion.button>
          </Link>
        </div>

        <div className='xl:col-span-7 xl:col-start-7 place-content-center'>
          <div className='w-full max-h-62 md:max-h-80 2xl:max-h-125 aspect-[9/16] max-w-xs md:max-w-xl xl:max-w-2xl mx-auto'>
            <motion.iframe 
            initial= {{scale:0.5 , opacity:0}} 
            whileInView={{scale:1 , opacity:1}}
            transition={{duration: 1 , type:'spring'}} 
            viewport={{ amount: 0.3, once: true}} 
            className='w-full h-full rounded-lg' src="https://www.youtube.com/embed/c9YP0zivNPQ?si=w8xMQgBtoKcYrBjf&rel=0&autoplay=0&mute=1&showinfo=0&modestbranding=1&playsinline=1&controls=1"
            title="Karma_Trailer" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>

            </motion.iframe>
          </div>
          
        </div>

      </div>
    </section>
  )
}

export default K_HeroSection