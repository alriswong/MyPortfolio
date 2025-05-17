"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from "motion/react"
import { UserIcon,CpuChipIcon, UserGroupIcon, CodeBracketIcon, CalendarIcon, ClipboardDocumentIcon } from '@heroicons/react/24/solid'
import I_ImgSlide from '@/app/Interaction_Circle/components/I_ImgSlide'

const projectDetails = [
  {
    icon: <UserIcon className="h-5 w-5" />,
    label: 'Role',
    value: 'Game Programmer / Gameplay Design / Controller Design & Programming',
  },
  {
    icon: <UserGroupIcon className="h-5 w-5" />,
    label: 'Team Size',
    value: '2 members',
  },
  {
    icon: <CalendarIcon className="h-5 w-5" />,
    label: 'Duration',
    value: '4 months',
  },
  {
    icon: <ClipboardDocumentIcon className="h-5 w-5" />,
    label: 'Project Type',
    value: 'University / group project',
  },
  {
    icon: <CodeBracketIcon className="h-5 w-5" />,
    label: 'Software',
    value: 'Unity(C#) / Playfab',
  },
  {
    icon: <CpuChipIcon className="h-5 w-5" />,
    label: 'Hardware',
    value: 'Arduino nano / Force Sensor / Three-Axis Accelerometer and Gyroscope / Bluetooth Module',
  },
]

const I_AboutSection = () => {
  return (
    <section className='my-20 md:my-40 2xl:mb-40 2xl:my-0'>
      <div className='mb-15'>
        <motion.h1 
        initial= {{scale:0 , opacity:0}} 
        whileInView={{scale:1 , opacity:1}}
        transition={{duration: 1 , type:'spring'}} 
        viewport={{ amount: 0.3, once: false}}

        className='mb-5 text-center'>
          <span className='text-transparent text-4xl md:text-5xl font-extrabold bg-clip-text bg-gradient-to-r from-BTcolorOne to-BTcolorTwo'>Project Info</span>
        </motion.h1>
        
      </div>

      <motion.div 
      initial= {{y:-30 , opacity:0}} 
      whileInView={{y:0 , opacity:1}}
      transition={{duration: 1 , type:'spring', delay:0.3}} 
      viewport={{ amount: 0.1, once: true}}

      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projectDetails.map((detail, index) => (
          <div
            key={index}
            className="group relative bg-neutral-900 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center text-center "
          >
            <div className="p-3 bg-neutral-800 rounded-full text-BTcolorOne mb-4">
              {detail.icon}
            </div>
              <h3 className="text-lg font-medium text-white">{detail.label}</h3>
              <p className="mt-2 text-neutral-500">{detail.value}</p>
          </div>
        ))}
      </motion.div>

      
      <div className='grid grid-cols-1 gap-5 xl:grid-cols-12 xl:gap-0 items-center my-10 mx-5'>
        <motion.div 
        initial= {{x:-30 , opacity:0}} 
        whileInView={{x:0 , opacity:1}}
        transition={{duration: 1 , type:'spring'}} 
        viewport={{ amount: 0.3, once: true}}
        
        className='xl:col-span-6 mx-auto'>
          <I_ImgSlide />
        </motion.div>       
      
      
        <motion.div 
          initial= {{opacity:0}} 
          whileInView={{opacity:1}}
          transition={{duration: 1 , type:'spring', delay:0.5}} 
          viewport={{ amount: 0.3, once: true}}
                    
          className='xl:col-span-6 xl:col-start-8'>
          
            
            <div className=''>
              <h2 className='text-white font-bold text-2xl pb-3'>Contributions:</h2>
              <p className='text-subHeadingColor md:text-xl'>In this project, I was responsible for game programming, gameplay design, controller design, and hardware programming. As a result, both the game and its custom controller were fully developed independently by me. 
                The main challenges included establishing the connection between Arduino and Unity, fine-tuning the synchronization between the three-axis accelerometer data and the character’s movements, as well as implementing user authentication and data storage using PlayFab.
                              
              </p>
            </div>
        </motion.div>
      </div>
    </section>
  )
}

export default I_AboutSection