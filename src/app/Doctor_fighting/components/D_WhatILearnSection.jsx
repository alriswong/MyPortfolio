"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from "motion/react"
import { PencilSquareIcon } from '@heroicons/react/24/solid'



const M_GameplaySection = () => {
  return (
    <section className='my-10 md:my-20'>
        <div>
            <motion.h1 
            initial= {{scale:0 , opacity:0}} 
            whileInView={{scale:1 , opacity:1}}
            transition={{duration: 1 , type:'spring'}} 
            viewport={{ amount: 0.3, once: false}}          
            className='py-5 text-center'><span className='text-transparent text-3xl md:text-4xl xl:text-5xl font-extrabold bg-clip-text bg-gradient-to-r from-BTcolorOne to-BTcolorTwo'>Feature Highlights</span></motion.h1>           
        </div>
     

        <div className='grid grid-cols-1 max-sm:gap-5 md:grid-cols-12 place-content-center items-center mx-auto my-8 md:px-15 xl:px-25 2xl:px-50'>
            <motion.div 
            initial= {{x:-30 , opacity:0}} 
            whileInView={{x:0 , opacity:1}}
            transition={{duration: 1 , type:'spring'}} 
            viewport={{ amount: 0.3, once: true}}
            
            className='md:col-span-6 lg:col-span-7'>
                <Image src={"https://alriswong.github.io/MyPortfolio/image/Project/DoctorFighting_Attack.gif"} width={400} height={400} alt='Attack'></Image> 
            </motion.div>

            <motion.div
            initial= {{opacity:0}} 
            whileInView={{opacity:1}}
            transition={{duration: 3 , type:'spring', delay:0.3}} 
            viewport={{ amount: 0.3, once: true}}
            className='md:col-span-5 md:col-start-8'>
                <p className='text-contentColor text-start md:text-xl'>
                Players use hand gestures to perform attacks. I implemented this feature using the ManoMotion SDK’s Continuous Gestures system, 
                which detects whether the player has executed the correct gesture. 
                If the gesture is recognized accurately, an attack action is triggered in the game.
                </p>
            </motion.div>
            
        </div>

        <div className='grid grid-cols-1 max-sm:gap-5 md:grid-cols-12 place-content-center items-center my-12 md:px-15 xl:px-25 2xl:px-50'>
            <motion.div 
            initial= {{x:-30 , opacity:0}} 
            whileInView={{x:0 , opacity:1}}
            transition={{duration: 1 , type:'spring', delay:0.3}} 
            viewport={{ amount: 0.3, once: true}}
            
            className='md:col-span-6 lg:col-span-7'>
                
                <Image src={"https://alriswong.github.io/MyPortfolio/image/Project/DoctorFighting_Jump.gif"} width={400} height={400} alt='Defence'></Image>
            </motion.div>

            <motion.div
            initial= {{opacity:0}} 
            whileInView={{opacity:1}}
            transition={{duration: 3 , type:'spring', delay:0.3}} 
            viewport={{ amount: 0.3, once: true}}
            className='md:col-span-5 md:col-start-8'>
                <p className='text-contentColor text-start md:text-xl'>
                On the other hand, I used the ManoMotion SDK’s Trigger Gestures system to detect whether the player performed the correct gesture for jumping. 
                When a valid gesture is recognized, it triggers a jump action in the game.
                </p>
            </motion.div>
        </div>

        <div className='mt-30'>
            <motion.div 
            initial= {{opacity:0}} 
            whileInView={{opacity:1}}
            transition={{duration: 3 , type:'spring', delay:0.3}} 
            viewport={{ amount: 0.3, once: true}}
            className='group relative border-1 border-subHeadingColor rounded-2xl p-5 mx-auto flex flex-col md:flex-row items-center'>
                <div className='text-BTcolorOne p-5 2xl:p-10'>
                    <PencilSquareIcon className='h-8 w-8 md:h-10 md:w-10'></PencilSquareIcon>
                </div>
                <p className='text-contentColor max-sm:text-center lg:text-xl '>
                    Due to time constraints, I was unable to implement all intended features, including GPS functionality and the leaderboard system.
                </p>
                
            </motion.div>
        </div>
        
    </section>
  )
}

export default M_GameplaySection