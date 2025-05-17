"use client"

import Image from 'next/image'
import {motion} from "motion/react"
import { React, useState } from "react"
import { UserIcon,DevicePhoneMobileIcon, UserGroupIcon, CodeBracketIcon, CalendarIcon, ClipboardDocumentIcon } from '@heroicons/react/24/solid'
import D_ImgSlide from './D_ImgSlide'

const projectDetails = [
  {
    icon: <UserIcon className="h-5 w-5" />,
    label: 'Role',
    value: 'Programmer',
  },
  {
    icon: <UserGroupIcon className="h-5 w-5" />,
    label: 'Team Size',
    value: '3 members',
  },
  {
    icon: <CalendarIcon className="h-5 w-5" />,
    label: 'Duration',
    value: '2 months',
  },
  {
    icon: <ClipboardDocumentIcon className="h-5 w-5" />,
    label: 'Project Type',
    value: 'University / group project',
  },
  {
    icon: <CodeBracketIcon className="h-5 w-5" />,
    label: 'Build',
    value: 'Unity, C#, AR Foundation, Manomotion SDK',
  },
  {
    icon: <DevicePhoneMobileIcon className="h-5 w-5" />,
    label: 'Platform',
    value: 'Android',
  },
]

const M_DescriptionSection = () => {
  
  return (
    <section className='my-20 md:my-40 2xl:mb-40 2xl:my-0'>
      <div className='mb-15'>
        <motion.h1 
        initial= {{scale:0 , opacity:0}} 
        whileInView={{scale:1 , opacity:1}}
        transition={{duration: 1 , type:'spring'}} 
        viewport={{ amount: 0.3, once: false}}

        className='mx-auto text-center'>
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
      
      <div className='grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-0 place-content-center my-10'>
        <motion.div
        initial= {{x:-30 , opacity:0}} 
        whileInView={{x:0 , opacity:1}}
        transition={{duration: 1 , type:'spring'}} 
        viewport={{ amount: 0.3, once: true}}
        className='md:col-span-4 md:col-start-2'>
          <D_ImgSlide />
        </motion.div>
        

        <motion.div 
        initial= {{opacity:0}} 
        whileInView={{opacity:1}}
        transition={{duration: 3 , type:'spring', delay:0.3}} 
        viewport={{ amount: 0.3, once: true}}

        className='md:col-span-6 md:col-start-7 place-content-center'>
          <h2 className='text-white font-bold text-2xl'>Contributions:</h2>
          <p className='text-subHeadingColor text-xl md:pr-10'>This is the first game I have developed, where I served as the sole game programmer on the team. 
            <br /><br />
            The game was designed to be controlled through hand gestures to minimize physical contact between players, which is particularly relevant in the context of large interactive display in public. 
            <br /><br />
            To achieve this, I spent significant time working with the ManoMotion SDK, writing code to enable real-time gesture recognition via the camera and mapping those inputs to in-game character actions.
            
          </p>
        </motion.div>

      </div>
      
    </section>
  )
}

export default M_DescriptionSection