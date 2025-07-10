'use client'
import React, {useTransition, useState} from 'react';
import Image from 'next/image';
import TabButton from './TabButton';
import { motion } from "motion/react"


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
        <li>CapCut</li>
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
    <section id='about' className='py-10 2xl:pt-30'>
      <div className='max-2xl:hidden grid grid-cols-6 item-center px-4 '>
        <motion.div 
          initial= {{x: -50 , opacity:0}} 
          whileInView={{x: 0 , opacity:1}}
          transition={{duration: 1.8 , type:'spring'}} 
          viewport={{ amount: 0.3, once: false}}

          className='col-span-2 mt-20 place-items-center '>
            <Image className='' src="/image/MyProfilePic.png" width={350} height={350} alt="AboutMe Pic"/>
        </motion.div>
        

        <div className='col-span-4'>
          <motion.div 
            initial= {{x: 50 , opacity:0}} 
            whileInView={{x: 0 , opacity:1}}
            transition={{duration: 1.8 , type:'spring'}} 
            viewport={{ amount: 0.3, once: false}}

            className='flex flex-col mt-0 text-left'>
              <h2 className='text-4xl font-extrabold mb-4'><span className='text-transparent bg-clip-text bg-linear-to-r  from-BTcolorOne to-BTcolorTwo'>About Me</span></h2>
              <p className='text-contentColor text-lg'>I hold a Bachelor’s degree in Interaction Design and an Associate degree in Psychology, 
                combining creative design thinking with a deep understanding of user behavior.
                I’m driven by the challenge of crafting innovative, engaging, and meaningful game experiences. <br />
              <br/>
              During my university studies, I gained hands-on experience in game development through my academic projects, including game design, programming, UI/UX design, 3D modeling, and animation. 
              These projects not only deepened my understanding of gameplay systems and user interaction but also significantly strengthened my programming skills. Through building prototypes, 
              implementing mechanics in Unity with C#, and solving real-time gameplay issues, I developed a strong ability to write clean, 
              efficient code and to approach technical challenges with critical thinking and problem-solving strategies. <br />
              <br />
              During my internship as a game tester, I gained valuable insights into improving gameplay experiences through hands-on testing. By identifying issues such as overpowered bosses or unintuitive mechanics, 
              I learned how to provide constructive feedback to enhance game balance and player learning curves. I also learned how to identify and improve game performance, gaining practical experience in optimization techniques.
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
        </div>
        


      {/* Mobile Size----------------------------------------------------------------------------------------------------------------------- */}

      <div className='2xl:hidden'>
        <motion.div 
          initial= "hidden" 
          whileInView="visible"
          variants={aboutmeVariants}
          transition={{duration: 1.8 , type:'spring'}} 
          viewport={{ amount: 0.3, once: false}}

          className='my-10 md:mt-10 flex justify-center'>
            <Image src="/image/MyProfilePic.png" width={250} height={250} alt="AboutMe Pic" className='w-60'/>
        </motion.div>
        

        <motion.div 
        initial= "hidden" 
        whileInView="visible"
        variants={aboutmeVariants}
        transition={{duration: 1.8 , type:'spring'}} 
        viewport={{ amount: 0.1, once: false}}

        className='flex flex-col mt-4 md:mt-0 text-left'>
          <h2 className='text-4xl font-extrabold text-center mb-4'><span className='text-transparent bg-clip-text bg-linear-to-r  from-BTcolorOne to-BTcolorTwo'>About Me</span></h2>
          <p className='text-contentColor text-center md:text-lg'>I hold a Bachelor’s degree in Interaction Design and an Associate degree in Psychology, 
                combining creative design thinking with a deep understanding of user behavior.
                I’m driven by the challenge of crafting innovative, engaging, and meaningful game experiences. <br />
              <br/>
              During my university studies, I gained hands-on experience in game development through my academic projects, including game design, programming, UI/UX design, 3D modeling, and animation. 
              These projects not only deepened my understanding of gameplay systems and user interaction but also significantly strengthened my programming skills. Through building prototypes, 
              implementing mechanics in Unity with C#, and solving real-time gameplay issues, I developed a strong ability to write clean, 
              efficient code and to approach technical challenges with critical thinking and problem-solving strategies. <br />
              <br />
              During my internship as a game tester, I gained valuable insights into improving gameplay experiences through hands-on testing. By identifying issues such as overpowered bosses or unintuitive mechanics, 
              I learned how to provide constructive feedback to enhance game balance and player learning curves. I also learned how to identify and improve game performance, gaining practical experience in optimization techniques.
              </p>

          <div className='flex flex-col mx-auto'>
            <div className='flex flex-row justify-center mt-8'>
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
          </div>
        </motion.div>
      </div>
    </section>
    
  )
}

export default AboutSection