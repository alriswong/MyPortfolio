"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from "motion/react"
import { UserIcon,DevicePhoneMobileIcon, UserGroupIcon, CodeBracketIcon, CalendarIcon, ClipboardDocumentIcon } from '@heroicons/react/24/solid'
import { GoogleCardboardLogo } from "@phosphor-icons/react";
import K_ImgSlide from "@/app/Karma/components/K_ImgSlide"

const projectDetails = [
  {
    icon: <UserIcon className="h-5 w-5" />,
    label: 'Role',
    value: 'Team Leader, Game Programmer',
  },
  {
    icon: <UserGroupIcon className="h-5 w-5" />,
    label: 'Team Size',
    value: '4 members',
  },
  {
    icon: <CalendarIcon className="h-5 w-5" />,
    label: 'Duration',
    value: '10 Months(2023-7 to 2024-4)',
  },
  {
    icon: <ClipboardDocumentIcon className="h-5 w-5" />,
    label: 'Project Type',
    value: 'University / capstone project',
  },
  {
    icon: <CodeBracketIcon className="h-5 w-5" />,
    label: 'Build',
    value: 'UnityURP(C#) / XR Interaction Toolkit',
  },
  {
    icon: <GoogleCardboardLogo size={20} />,
    label: 'Platform',
    value: 'Steam VR',
  },
]

const K_AboutSection = () => {
  return (
    <section className='my-20 md:my-40 2xl:mb-40 2xl:my-0'>
      <div className=''>
        <motion.h1 
          initial= {{scale:0 , opacity:0}} 
          whileInView={{scale:1 , opacity:1}}
          transition={{duration: 1 , type:'spring'}} 
          viewport={{ amount: 0.3, once: false}}
  
          className='text-center'>
            <span className='text-transparent text-3xl md:text-4xl xl:text-5xl font-extrabold bg-clip-text bg-gradient-to-r from-BTcolorOne to-BTcolorTwo'>Project Info</span>
        </motion.h1>
        
      </div>

      <motion.div 
        initial= {{y:-30 , opacity:0}} 
        whileInView={{y:0 , opacity:1}}
        transition={{duration: 1 , type:'spring', delay:0.3}} 
        viewport={{ amount: 0.1, once: true}}
  
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 my-10 md:my-15">
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

      <div className='grid grid-cols-1 gap-10 xl:gap-0 xl:grid-cols-12 2xl:items-center my-10 mx-5'>
        <motion.div 
        initial= {{x:-30 , opacity:0}} 
        whileInView={{x:0 , opacity:1}}
        transition={{duration: 1 , type:'spring'}} 
        viewport={{ amount: 0.1, once: true}}
        
        className='xl:col-span-6 mx-auto'>
          <K_ImgSlide/>
          
        </motion.div>

        <motion.div 
        initial= {{opacity:0}} 
          whileInView={{opacity:1}}
          transition={{duration: 1 , type:'spring', delay:0.5}} 
          viewport={{ amount: 0.3, once: true}}
                    
          className='xl:col-span-6 xl:col-start-8 md:text-xl'>
              <h2 className='text-white font-bold text-2xl pb-3'>Contributions:</h2>
              <p className='text-neutral-500 text-xl'> 
                <span className='font-bold text-subHeadingColor'>Team Leader </span> - Coordinated the team, managed project timelines, and ensured effective communication among team members.<br/>
                <br />
                <span className='font-bold text-subHeadingColor'>Gameplay Design</span> - Designed and implemented core gameplay mechanics, including the electric eel's movement and interaction with the environment.<br/>
                <br />
                <span className='font-bold text-subHeadingColor'>Programming</span> - Developed the game using Unity and C#, focusing on XR Interaction Toolkit for VR functionality. 
                Implementing key systems such as gesture-based controls, scoring logic, and UI functionality.<br/>
              </p>
        </motion.div>

        
      </div>
        
      
    </section>
  )
}

export default K_AboutSection