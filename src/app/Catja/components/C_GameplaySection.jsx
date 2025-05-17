"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from "motion/react"
import { PencilSquareIcon } from '@heroicons/react/24/solid'

const C_GameplaySection = () => {
  return (
    <section className='my-10 md:my-20'>
      <div>
        <motion.h1 
        initial= {{scale:0 , opacity:0}} 
          whileInView={{scale:1 , opacity:1}}
          transition={{duration: 1 , type:'spring'}} 
          viewport={{ amount: 0.3, once: false}}
        
        className='py-5 text-center'><span className='text-transparent text-4xl md:text-5xl font-extrabold bg-clip-text bg-gradient-to-r from-BTcolorOne to-BTcolorTwo'>What I Learned</span></motion.h1>
        
      </div>

      <div className='flex flex-col justify-center my-10'>
        <motion.div 
          initial= {{y:-30 , opacity:0}} 
          whileInView={{y:0 , opacity:1}}
          transition={{duration: 1 , type:'spring', delay:0.5}} 
          viewport={{ amount: 0.3, once: true}}
          className='group relative bg-neutral-900 rounded-xl p-6 md:p-15 flex flex-col items-center mb-15'>
            <p className='max-sm:text-center text-subHeadingColor md:text-xl'>
              Despite the tight schedule, this project gave me a valuable opportunity to rapidly learn and apply key aspects of VR game development, 
              including interaction design, physics-based movement, and controller integration. 
              It was an intense yet rewarding experience that significantly deepened my understanding of VR mechanics and real-time gameplay implementation.
              For the first demo showcase, I independently developed the core climbing, attack, and defense mechanics in just over a week.
                
            </p>
        </motion.div>

        <div className='grid grid-cols-1 gap-10 md:px-15 xl:px-8'>
          <motion.div 
            initial= {{x:-30 , opacity:0}} 
            whileInView={{x:0 , opacity:1}}
            transition={{duration: 1 , type:'spring'}} 
            viewport={{ amount: 0.3, once: true}}
            
            className='xl:grid xl:grid-cols-12 place-items-center mx-auto'>
            <Image className='col-span-7 mb-5 xl:mb-0 w-full' src={'/image/Project/Catja_Climb.gif'} width={800} height={450} alt='Climb'></Image>
            <p className='col-span-4 col-start-9 text-subHeadingColor text-xl mb-5'> When the VR controller button is pressed, a Fixed Joint is dynamically generated in real time to connect the player’s hand (which has a Rigidbody component) to a climbable object. 
            This setup enables the character to ascend by simulating realistic physical interactions—mimicking the pulling motion of climbing through Unity’s physics engine.
            </p>
          </motion.div>
          
          <motion.div 
            initial= {{x:-30 , opacity:0}} 
            whileInView={{x:0 , opacity:1}}
            transition={{duration: 1 , type:'spring'}} 
            viewport={{ amount: 0.3, once: true}}
            
            className='xl:grid xl:grid-cols-12 place-items-center mx-auto'>
            <Image className='col-span-7 mb-5 xl:mb-0 w-full' src={'/image/Project/Catja_Jump.gif'} width={800} height={450} alt='Jump'></Image>
            <p className='col-span-4 col-start-9 text-subHeadingColor text-xl mb-5'> To replicate the springy and agile movement of a cat, Configurable Joints were applied to the character’s hands, with carefully tuned parameters such as spring force, 
            damping, and motion constraints to simulate realistic feline-like jumping behavior.
            </p>
          </motion.div>
          
          <motion.div 
            initial= {{x:-30 , opacity:0}} 
            whileInView={{x:0 , opacity:1}}
            transition={{duration: 1 , type:'spring'}} 
            viewport={{ amount: 0.3, once: true}}
            
            className='xl:grid xl:grid-cols-12 place-items-center mx-auto'>
            <Image className='col-span-7 mb-5 xl:mb-0 w-full' src={'/image/Project/Catja_attack.gif'} width={800} height={450} alt='Attack'></Image>
            <p className='col-span-4 col-start-9 text-subHeadingColor text-xl mb-5'> 
            To generate a shuriken, the player holds the grip button near the chest area, where a collider detects the action and spawns the shuriken. 
            Releasing the button then throws it forward.
            </p>
          </motion.div>
         
          <motion.div 
            initial= {{x:-30 , opacity:0}} 
            whileInView={{x:0 , opacity:1}}
            transition={{duration: 1 , type:'spring'}} 
            viewport={{ amount: 0.3, once: true}}
            
            className='xl:grid xl:grid-cols-12 place-items-center mx-auto'>
            <Image className='col-span-7 mb-5 xl:mb-0 w-4xl xl:w-full' src={'/image/Project/Catja_defence.gif'} width={800} height={450} alt='Defence'></Image>
            <p className='col-span-4 col-start-9 text-subHeadingColor text-xl mb-5'> 
            Pressing the A or X button activates a protective shield for defense.
            </p>
          </motion.div>

          <motion.div 
            initial= {{x:-30 , opacity:0}} 
            whileInView={{x:0 , opacity:1}}
            transition={{duration: 1 , type:'spring'}} 
            viewport={{ amount: 0.3, once: true}}
            
            className='xl:grid xl:grid-cols-12 place-items-center mx-auto'>
            <Image className='col-span-7 mb-5 xl:mb-0 w-4xl 2xl:w-full' src={'/image/Project/Catja_Health.png'} width={800} height={450} alt='HP'></Image>
            <p className='col-span-4 col-start-9 text-subHeadingColor text-xl mb-5'> 
            The player's health is displayed on the back of the hand.
            </p>
          </motion.div>

          <motion.div 
            initial= {{x:-30 , opacity:0}} 
            whileInView={{x:0 , opacity:1}}
            transition={{duration: 1 , type:'spring'}} 
            viewport={{ amount: 0.3, once: true}}
            
            className='xl:grid xl:grid-cols-12 place-items-center mx-auto'>
            <Image className='col-span-7 mb-5 xl:mb-0 w-full' src={'/image/Project/C_LevelDesign.png'} width={800} height={450} alt='Level Design'></Image>
            <p className='col-span-4 col-start-9 text-subHeadingColor text-xl mb-5'> 
            The level difficulty increases progressively as the player ascends each floor.
            </p>
          </motion.div>

        </div>
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
                <p className='text-subHeadingColor max-sm:text-center lg:text-xl'>
                    Due to time constraints, the attack and defense features could not be implemented in the final demo showcase.
                </p>
                
            </motion.div>
        </div>

      
    </section>
    
  )
}

export default C_GameplaySection