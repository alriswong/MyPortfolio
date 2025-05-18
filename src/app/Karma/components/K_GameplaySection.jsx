"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from "motion/react"
import { PencilSquareIcon } from '@heroicons/react/24/solid'

const K_GameplaySection = () => {
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

      <div className='flex flex-col justify-center items-center my-10 md:mx-5 '>
        <motion.div 
          initial= {{y:-30 , opacity:0}} 
          whileInView={{y:0 , opacity:1}}
          transition={{duration: 1 , type:'spring', delay:0.5}} 
          viewport={{ amount: 0.3, once: true}}
          className='group relative bg-neutral-900 rounded-xl p-6 md:p-15 flex flex-col items-center mb-15'>
              <p className='max-sm:text-center text-subHeadingColor md:text-xl'>
                Through this project, I gained valuable experience in level design, narrative structure, and puzzle integration — 
                such as how to align level progression with story development and how to embed puzzles naturally within the narrative.
                Additionally, I honed my programming skills, including the implementation of swimming mechanics, the development of underwater system, 
                as well as shader creation and VFX Graph effects. I also learned how to manage game performance effectively.
                  
              </p>
        </motion.div>

        <div className='grid grid-cols-1 gap-15 md:px-15 xl:px-8'>
          <motion.div 
            initial= {{x:-30 , opacity:0}} 
            whileInView={{x:0 , opacity:1}}
            transition={{duration: 1 , type:'spring'}} 
            viewport={{ amount: 0.3, once: true}}
            
            className='xl:grid xl:grid-cols-12 items-center mx-auto'>
            <Image className='col-span-7 mb-5 xl:mb-0 w-full' src={'https://alriswong.github.io/MyPortfolio/image/Project/Karma_swimming.gif'} width={800} height={450} alt='swimming'></Image>
            <p className='col-span-4 col-start-9 text-subHeadingColor text-xl'> 
              Players can intuitively use the controller to perform swimming motions, allowing them to control the electric eel character's movement in the game.
            </p>
          </motion.div>

          <motion.div 
            initial= {{x:-30 , opacity:0}} 
            whileInView={{x:0 , opacity:1}}
            transition={{duration: 1 , type:'spring'}} 
            viewport={{ amount: 0.3, once: true}}
            
            className='xl:grid xl:grid-cols-12 items-center mx-auto'>
            <Image className='col-span-7 mb-5 xl:mb-0 w-full' src={'https://alriswong.github.io/MyPortfolio/image/Project/Karma_electricity.gif'} width={800} height={450} alt='Attack'></Image>
            <p className='col-span-4 col-start-9 text-subHeadingColor text-xl'> 
              The electric eel's ability to generate electricity is used as a core mechanic for solving puzzles and progressing through the game.
            </p>
          </motion.div>

          <motion.div 
            initial= {{x:-30 , opacity:0}} 
            whileInView={{x:0 , opacity:1}}
            transition={{duration: 1 , type:'spring'}} 
            viewport={{ amount: 0.3, once: true}}
            
            className='xl:grid xl:grid-cols-12 items-center mx-auto'>
            <Image className='col-span-7 mb-5 xl:mb-0 w-full' src={'https://alriswong.github.io/MyPortfolio/image/Project/Underwater_clip.gif'} width={800} height={450} alt='Defence'></Image>
            <p className='col-span-4 col-start-9 text-subHeadingColor text-xl'> 
              I created the entire underwater environment using Unity. 
            I designed a realistic water surface effect using custom shaders built with Shader Graph to simulate light refraction, distortion, and surface movement.
            For the underwater layout, I was responsible for manually placing and arranging all underwater assets to match the narrative and visual style of our game.
            </p>
          </motion.div>

          <motion.div 
            initial= {{x:-30 , opacity:0}} 
            whileInView={{x:0 , opacity:1}}
            transition={{duration: 1 , type:'spring'}} 
            viewport={{ amount: 0.3, once: true}}
            
            className='xl:grid xl:grid-cols-12 items-center mx-auto'>
            <Image className='col-span-7 mb-5 xl:mb-0 w-full' src={'https://alriswong.github.io/MyPortfolio/image/Project/K_Flocking_Wind_Movement_Shader.gif'} width={1663} height={935} alt='HP'></Image>
            <p className='col-span-4 col-start-9 text-subHeadingColor text-xl'> 
              A Wind Movement Shader was applied to underwater plants to simulate natural motion, mimicking the effect of water currents. 
              Moreover, I used a flocking fish plugin to simulate realistic fish swimming behavior in the underwater environment.
            </p>
          </motion.div>

          <motion.div 
            initial= {{x:-30 , opacity:0}} 
            whileInView={{x:0 , opacity:1}}
            transition={{duration: 1 , type:'spring'}} 
            viewport={{ amount: 0.3, once: true}}
            
            className='xl:grid xl:grid-cols-12 items-center mx-auto'>
            <Image className='col-span-7 mb-5 xl:mb-0 w-full' src={'https://alriswong.github.io/MyPortfolio/image/Project/K_Facial_feature_resize.gif'} width={1663} height={935} alt='Level Design'></Image>
            <p className='col-span-4 col-start-9 text-subHeadingColor text-xl'> 
              Facial features can be resized by holding down a button; Releasing the button locks the feature at its current size. After completing facial customization, the modified head can be applied to the character.
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
            <p className='text-subHeadingColor max-sm:text-center md:text-xl'>
                Performance optimization was critical in this project due to the high number of objects and shader effects used throughout the game. 
                To ensure smooth performance, I implemented several techniques, including texture compression, light baking to reduce real-time lighting load, 
                and occlusion culling to minimize CPU and GPU rendering time.
            </p>
            
        </motion.div>
      </div>
    </section>
  )
}

export default K_GameplaySection