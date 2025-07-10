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
        
        className=' text-center'><span className='my-5 text-transparent text-3xl md:text-4xl xl:text-5xl font-extrabold bg-clip-text bg-gradient-to-r from-BTcolorOne to-BTcolorTwo'>Feature Highlights</span></motion.h1>
        
      </div>

      <div className='flex flex-col justify-center items-center my-10 md:my-15 2xl:my-20 md:mx-5 '>
        
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-10 md:px-15 xl:px-8'>
          <motion.div 
            initial= {{x:-30 , opacity:0}} 
            whileInView={{x:0 , opacity:1}}
            transition={{duration: 1 , type:'spring'}} 
            viewport={{ amount: 0.3, once: true}}
            
            className='flex flex-col items-center mx-auto'>
            <Image className='mb-3 xl:mb-0 w-2xl' src={'https://alriswong.github.io/MyPortfolio/image/Project/Karma_swimming.gif'} width={800} height={450} alt='swimming'></Image>
            <p className='text-contentColor md:text-xl text-center p-3'> 
              Players use the controllers to perform swimming motions that control the character’s movement.
            </p>
          </motion.div>

          <motion.div 
            initial= {{x:-30 , opacity:0}} 
            whileInView={{x:0 , opacity:1}}
            transition={{duration: 1 , type:'spring'}} 
            viewport={{ amount: 0.3, once: true}}
            
            className='flex flex-col items-center mx-auto'>
            <Image className='mb-3 xl:mb-0 w-2xl' src={'https://alriswong.github.io/MyPortfolio/image/Project/Karma_electricity.gif'} width={800} height={450} alt='Attack'></Image>
            <p className='text-contentColor md:text-xl text-center p-3'> 
              The electric eel's ability to generate electricity is used as a core mechanic for solving puzzles and progressing through the game.
            </p>
          </motion.div>

          {/* <motion.div 
            initial= {{x:-30 , opacity:0}} 
            whileInView={{x:0 , opacity:1}}
            transition={{duration: 1 , type:'spring'}} 
            viewport={{ amount: 0.3, once: true}}
            
            className='flex flex-col items-center mx-auto'>
            <Image className='mb-5 xl:mb-0 w-full' src={'https://alriswong.github.io/MyPortfolio/image/Project/K_Underwater.png'} width={800} height={450} alt='Defence'></Image>
            <p className='text-subHeadingColor text-xl p-5'> 
              I created the entire underwater environment using Unity. 
            I designed a realistic water surface effect using custom shaders built with Shader Graph to simulate light refraction, distortion, and surface movement.
            For the underwater layout, I was responsible for manually placing and arranging all underwater assets to match the narrative and visual style of our game.
            </p>
          </motion.div> */}

          <motion.div 
            initial= {{x:-30 , opacity:0}} 
            whileInView={{x:0 , opacity:1}}
            transition={{duration: 1 , type:'spring'}} 
            viewport={{ amount: 0.3, once: true}}
            
            className='flex flex-col items-center mx-auto'>
            <Image className='mb-3 xl:mb-0 w-2xl' src={'https://alriswong.github.io/MyPortfolio/image/Project/K_Flocking_Wind_Movement_Shader.gif'} width={1663} height={935} alt='HP'></Image>
            <p className='text-contentColor md:text-xl text-center p-3'> 
              The underwater environment was enhanced using post-processing effects and a variety of shaders, including those for simulating light rays and the swaying motion of underwater plants
            </p>
          </motion.div>

          <motion.div 
            initial= {{x:-30 , opacity:0}} 
            whileInView={{x:0 , opacity:1}}
            transition={{duration: 1 , type:'spring'}} 
            viewport={{ amount: 0.3, once: true}}
            
            className='flex flex-col items-center mx-auto'>
            <Image className='mb-3 xl:mb-0 w-2xl' src={'https://alriswong.github.io/MyPortfolio/image/Project/Karma_AnimMural.gif'} width={1663} height={935} alt='Level Design'></Image>
            <p className='text-contentColor md:text-xl text-center p-3'> 
              Created dynamic wall murals with animated elements to enhance environmental storytelling.
            </p>
          </motion.div>

          <motion.div 
            initial= {{x:-30 , opacity:0}} 
            whileInView={{x:0 , opacity:1}}
            transition={{duration: 1 , type:'spring'}} 
            viewport={{ amount: 0.3, once: true}}
            
            className='flex flex-col items-center mx-auto'>
            <Image className='mb-3 xl:mb-0 w-2xl' src={'https://alriswong.github.io/MyPortfolio/image/Project/K_Facial_feature_resize.gif'} width={1663} height={935} alt='Level Design'></Image>
            <p className=' text-contentColor md:text-xl text-center p-3'> 
              Used scripting to control Blender shape keys for resizing facial features. Players can hold down a button to resize specific features according to their preferences.
            </p>
          </motion.div>

          <motion.div 
            initial= {{x:-30 , opacity:0}} 
            whileInView={{x:0 , opacity:1}}
            transition={{duration: 1 , type:'spring'}} 
            viewport={{ amount: 0.3, once: true}}
            
            className='flex flex-col items-center mx-auto'>
            <Image className='mb-3 xl:mb-0 w-2xl' src={'https://alriswong.github.io/MyPortfolio/image/Project/Karma_Occlusion.gif'} width={1663} height={935} alt='Level Design'></Image>
            <p className='text-contentColor md:text-xl text-center p-3'> 
              Implemented occlusion culling in Unity to optimize performance by minimizing unnecessary rendering, thereby reducing CPU and GPU workload during real-time gameplay.
            </p>
          </motion.div>
        </div>

      </div> 

      {/* <div className='mt-30'>
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
      </div> */}
    </section>
  )
}

export default K_GameplaySection