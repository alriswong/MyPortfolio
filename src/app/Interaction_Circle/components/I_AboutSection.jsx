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
    value: '4 months(2022-3 to 2022-06)',
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

              <p className='text-neutral-500 text-xl'> 
                <span className='font-bold text-subHeadingColor'>Gameplay Design </span> - To implement two-player cooperative mechanics, I designed a system where one player is responsible for fully charging the energy bar, and only when the second player performs a swinging motion with the controller can the character execute a jump. 
                This encourages real-time collaboration and shared control.<br/>
                <br />
                <span className='font-bold text-subHeadingColor'>Programming</span> - Responsible for the entire game programming, including core gameplay mechanics, scoring logic, user login system, and leaderboard functionality, etc.<br/>
                <br />
                <span className='font-bold text-subHeadingColor'>Controller design and programming</span> - Details of the introduction are provided below. <br/>
              </p>
            </div>
        </motion.div>
      </div>

      <div className='flex flex-col gap-3 place-items-center'>
        <motion.div 
        initial= {{opacity:0}} 
        whileInView={{opacity:1}}
        transition={{duration: 1 , type:'spring', delay:0.8}} 
        viewport={{ amount: 0.1, once: true}}
        className='lg:mx-25'>
          <div className='py-4 lg:py-10'>
            <h1 className='text-white text-2xl md:text-3xl font-bold text-center'>
              <span className='border-b-1 border-BTcolorOne'>Custom Controller</span>
            </h1>
          </div>
          <div>
            <p className='text-neutral-500 text-xl text-center'>
            I designed a custom controller specifically for the game I developed. 
            The controller consists of two sizes: a smaller version for children and a larger version for elderly users. 
            It features a circular design wrapped in foam material to provide a more comfortable grip. 
            A pressure sensor is embedded at the bottom where users hold the device, 
            while the top of the ring houses the main circuit board and a three-axis gyroscope sensor. 
            A Bluetooth module is integrated to wirelessly transmit sensor data to the game.
            </p>
          </div>
          <table className='table-none table-fixed border-separate border-spacing-y-4 mx-auto'>
            <tbody>
              <tr>
                <td className='text-start text-white font-bold text-xl'>Main Board:</td>
                <td className='text-subHeadingColor text-xl pl-8 max-sm:pl-3'>Arduino nano</td>
              </tr>
                          
              <tr>
                <td className='text-start text-white font-bold text-xl'>Grip:</td>
                <td className='text-subHeadingColor text-xl pl-8 max-sm:pl-3'>Force Sensor (FSR 402)</td>
              </tr>
                          
              <tr>
                <td className='text-start text-white font-bold text-xl'>Swing:</td>
                <td className='text-subHeadingColor text-xl  pl-8 max-sm:pl-3'>MPU6050 Accelerometer and Gyroscope sensor</td>
              </tr>
        
              <tr>
                <td className='text-start text-white font-bold text-xl'>Transmit data:</td>
                <td className='text-subHeadingColor text-xl pl-8 max-sm:pl-3'>Bluetooth Module HC-05</td>
              </tr>
         
            </tbody>
          </table>
        </motion.div>
        
        <div className='grid md:grid-cols-2 gap-5 place-items-center mt-8'>
          
          <motion.div
          initial= {{x:-30 , opacity:0}} 
          whileInView={{x:0 , opacity:1}}
          transition={{duration: 1 , type:'spring'}} 
          viewport={{ amount: 0.3, once: true}} 
          className=''>
            <Image className='w-sm xl:w-md 2xl:w-lg' src={"https://alriswong.github.io/MyPortfolio/image/Project/Controller.jpg"} width={4032} height={3024} alt='I_Exhibition1'></Image>
          </motion.div>
          
          <motion.div
          initial= {{x:-30 , opacity:0}} 
          whileInView={{x:0 , opacity:1}}
          transition={{duration: 1 , type:'spring'}} 
          viewport={{ amount: 0.3, once: true}} 
          className=''>
            <Image className='w-sm xl:w-md 2xl:w-lg' src={"https://alriswong.github.io/MyPortfolio/image/Project/IMG_8995_low.jpg"} width={4032} height={3024} alt='I_Exhibition2'></Image>
          </motion.div>
          
        </div>  
      
        
      
      </div>
    </section>
  )
}

export default I_AboutSection