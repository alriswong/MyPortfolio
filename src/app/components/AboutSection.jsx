'use client'
import React, {useRef, useTransition, useState} from 'react';
import Image from 'next/image';
import TabButton from './TabButton';
import { motion } from "motion/react"
import { Scale } from 'lucide-react';

const TAB_DATA = [
  {
    title: 'Languages',
    id: 'languages',
    content: (
      <ul className='list-disc pl-5'>
        <li>C#</li>
        <li>Html</li>
        <li>CSS</li>
        <li>Tailwind CSS</li>
        <li>Javascript</li>
        <li>Python</li>
      </ul>
    )
  },
  {
    title: 'Engines & Software',
    id: 'engines',
    content: (
      <ul className='list-disc pl-5'>
        <li>Unity</li>
        <li>VS Code</li>
        <li>Visual Studio</li>
        <li>Blender</li>
        <li>Autodesk 3D Max</li>
        <li>Photoshop</li>
        <li>After Effect</li>
      </ul>
    )
  },
  {
    title: 'Frameworks',
    id: 'frameworks',
    content: (
      <ul className='list-disc pl-5'>
        <li>Github</li>
        <li>Next.js</li>
        <li>Farmer Motion</li>
        <li>Three.js</li>
        <li>Mapbox</li>
        <li>Apache ECarts</li>
        <li>P5.js</li>
        <li>ManoMotion SDK</li>
        <li>Playfab</li>
        <li>Firebase</li>
      </ul>
      
    )
  },
  
]



const AboutSection = () => {
  const[tab, setTab] = useState('languages');
  const[isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  }

  const aboutmeVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };

  return ( 
    <section className='py-10 md:py-40' id='about'>
      <div className='hidden md:grid md:grid-cols-2 gap-8 item-center px-4 xl:gap-16 xl:px-16'>
        <motion.div 
        initial= {{x: -50 , opacity:0}} 
        whileInView={{x: 0 , opacity:1}}
        transition={{duration: 1.8 , type:'spring'}} 
        viewport={{ amount: 0.3, once: false}}

        className='mt-10 place-self-start'>
          <Image src="https://alriswong.github.io/MyPortfolio/image/AboutMePhoto.png" width={350} height={350} alt="AboutMe Pic" className='rounded-4xl'/>
        </motion.div>
        

        <motion.div 
        initial= {{x: 50 , opacity:0}} 
        whileInView={{x: 0 , opacity:1}}
        transition={{duration: 1.8 , type:'spring'}} 
        viewport={{ amount: 0.3, once: false}}

        className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-extrabold  mb-4'><span className='text-transparent bg-clip-text bg-linear-to-r  from-BTcolorOne to-BTcolorTwo'>About Me</span></h2>
          <p className='text-white test-base lg:text-lg'>I hold a Bachelor’s degree in Interaction Design and an Associate degree in Psychology, combining creative design thinking with a deep understanding of user behavior.
          I specialize in developing immersive VR games using Unity(C#) and XR Interaction Toolkit. I’m driven by the challenge of crafting innovative, engaging, and meaningful game experiences. 
          <br/>
          In addition to game development, I also build responsive, 
          functional websites using Next.js and three.js — blending technical skill with playful design to bring digital ideas to life across platforms.
          </p>

          <div className='flex flex-row justify-start mt-8'>
            <TabButton selectTab={() => handleTabChange('languages')} 
              active={tab === 'languages'}>Languages
            </TabButton>

            <TabButton selectTab={() => handleTabChange('engines')} 
              active={tab === 'engines'}>Engines & Software
            </TabButton>

            <TabButton selectTab={() => handleTabChange('frameworks')}
              active={tab === 'frameworks'}>Frameworks 
            </TabButton> 

            
          </div>

          <div className='text-white mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
        </motion.div>
      </div>


      {/* Mobile Size----------------------------------------------------------------------------------------------------------------------- */}

      <div className='md:hidden'>
        <motion.div 
        initial= "hidden" 
        whileInView="visible"
        variants={aboutmeVariants}
        transition={{duration: 1.8 , type:'spring'}} 
        viewport={{ amount: 0.3, once: false}}

        className='mt-10 flex flex-row justify-center'>
          <Image src="https://alriswong.github.io/MyPortfolio/image/AboutMePhoto.png" width={300} height={300} alt="AboutMe Pic" className='rounded-4xl '/>
        </motion.div>
        

        <motion.div 
        initial= "hidden" 
        whileInView="visible"
        variants={aboutmeVariants}
        transition={{duration: 1.8 , type:'spring'}} 
        viewport={{ amount: 0.3, once: false}}

        className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-extrabold  mb-4'><span className='text-transparent bg-clip-text bg-linear-to-r  from-BTcolorOne to-BTcolorTwo'>About Me</span></h2>
          <p className='text-white test-base lg:text-lg'>I hold a Bachelor’s degree in Interaction Design and an Associate degree in Psychology, combining creative design thinking with a deep understanding of user behavior.
          I specialize in developing immersive VR games using Unity(C#) and XR Interaction Toolkit. I’m driven by the challenge of crafting innovative, engaging, and meaningful game experiences. 
          <br/>
          In addition to game development, I also build responsive, 
          functional websites using Next.js and three.js — blending technical skill with playful design to bring digital ideas to life across platforms.
          </p>

          <div className='flex flex-row justify-start mt-8'>
            <TabButton selectTab={() => handleTabChange('languages')} 
              active={tab === 'languages'}>Languages
            </TabButton>

            <TabButton selectTab={() => handleTabChange('engines')} 
              active={tab === 'engines'}>Engines & Software
            </TabButton>

            <TabButton selectTab={() => handleTabChange('frameworks')}
              active={tab === 'frameworks'}>Frameworks 
            </TabButton> 

            
          </div>

          <div className='text-white mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
        </motion.div>
      </div>
    </section>
    
  )
}

export default AboutSection