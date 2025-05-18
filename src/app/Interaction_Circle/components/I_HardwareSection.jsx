"use client"
import  React from 'react'
import Image from 'next/image'
import { motion } from "motion/react"


const I_HardwareSection = () => {
  
  return (
    <section className='my-10 md:my-20'>
      <div>
          <motion.h1 
          initial= {{scale:0 , opacity:0}} 
          whileInView={{scale:1 , opacity:1}}
          transition={{duration: 1 , type:'spring'}} 
          viewport={{ amount: 0.8, once: false}}

          className='py-5 text-center'>
          <span className='text-transparent text-4xl md:text-5xl font-extrabold bg-clip-text bg-gradient-to-r from-BTcolorOne to-BTcolorTwo'>What I Learned</span>
          </motion.h1>
          
      </div>

      <div className='grid grid-cols-1 gap-10 lg:gap-0 lg:grid-cols-12 place-items-center'>
        <div className='lg:col-span-6 place-items-center mt-8'>
          <div className='flex flex-col gap-3'>
            <motion.div
            initial= {{x:-30 , opacity:0}} 
            whileInView={{x:0 , opacity:1}}
            transition={{duration: 1 , type:'spring'}} 
            viewport={{ amount: 0.3, once: true}} 
            className=''>
              <Image className='w-sm xl:w-md 2xl:w-lg' src={"https://alriswong.github.io/MyPortfolio/image/project/Controller.jpg"} width={4032} height={3024} alt='I_Exhibition1'></Image>
            </motion.div>
            
            <motion.div
            initial= {{x:-30 , opacity:0}} 
            whileInView={{x:0 , opacity:1}}
            transition={{duration: 1 , type:'spring'}} 
            viewport={{ amount: 0.3, once: true}} 
            className=''>
              <Image className='w-sm xl:w-md 2xl:w-lg' src={"https://alriswong.github.io/MyPortfolio/image/project/IMG_8995_low.jpg"} width={4032} height={3024} alt='I_Exhibition2'></Image>
            </motion.div>
          </div>
        </div>  

        <motion.div 
        initial= {{opacity:0}} 
        whileInView={{opacity:1}}
        transition={{duration: 1 , type:'spring', delay:0.8}} 
        viewport={{ amount: 0.1, once: true}}
        className='lg:col-span-6 mx-auto'>
          <div className='py-4 lg:py-10'>
            <h1 className='text-white text-2xl md:text-4xl font-bold text-start'>
              <span className='border-b-1 border-BTcolorOne'>Hardware</span>
            </h1>
          </div>
          <div>
            <p className='text-subHeadingColor text-xl'>
            I designed a custom controller specifically for the game I developed. 
            The controller consists of two sizes: a smaller version for children and a larger version for elderly users. 
            It features a circular design wrapped in foam material to provide a more comfortable grip. 
            A pressure sensor is embedded at the bottom where users hold the device, 
            while the top of the ring houses the main circuit board and a three-axis gyroscope sensor. 
            A Bluetooth module is integrated to wirelessly transmit sensor data to the game.
            </p>
          </div>
          <table className='table-none table-fixed border-separate border-spacing-y-4'>
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
      
      </div>
    </section>
  )
}

export default I_HardwareSection