"use client";
import React , {useRef} from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "motion/react"
import Link from 'next/link'

const HeroSection = () => {
    
  return (
    <section id='home' className="py-0 md:py-20 xl:py-30 2xl:py-40">
        <div className="flex flex-row max-sm:flex-col-reverse " >
            <motion.div 
            initial= {{opacity: 0}} 
            whileInView={{ opacity: 1}}
            transition={{duration: 1}} 
            viewport={{ amount: 0.8, once: false}}
            className="basis-2/3 place-self-center text-center sm:text-left justify-self-start max-sm:mt-55">
                <h1 className="text-white mb-10 text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-BTcolorOne to-BTcolorTwo">Hello, I'm{""}</span> 
                    <br/>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Alris',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Game Programmer',
                            1000,
                            'Front-end Developer',
                            1000,
                        ]}
                        wrapper="span"
                        speed={10}
                        repeat={Infinity}
                    />
                </h1>

                <motion.p 
                initial= {{y:-20 , opacity: 0}} 
                whileInView={{y:0 ,  opacity: 1}}
                transition={{duration: 1, delay:0.3}} 
                className="text-contentColor text-base md:text-lg mb-6 xl:text-2xl"> 
                    Specialize in creating immersive VR games and building responsive websites. 
                    Passionate about crafting engaging digital experiences that merge creativity with functionality through innovative coding and thoughtful user-centered design.
                </motion.p>

                <div>
                    <Link href="#portfolio">
                        <motion.button 
                        initial= {{scale:0 , opacity: 0}} 
                        whileInView={{scale:1,  opacity: 1}}
                        transition={{duration:0.5, type:'spring', stiffness:70, delay:0.8}}
                        className="px-6 py-3 w-full sm:w-fit rounded-full mr-4  text-black bg-gradient-to-br  from-BTcolorOne to-BTcolorTwo hover:scale-110 hover:transition-all hover:duration-300 cursor-pointer">
                        See my projects
                        </motion.button>
                    </Link>
                    
                    
                    <motion.button 
                    initial= {{scale:0 , opacity: 0}} 
                    whileInView={{scale:1 ,  opacity: 1}}
                    transition={{duration:0.5, type:'spring', stiffness:70, delay:1.2}}
                    className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br hover:scale-110 hover:transition-all hover:duration-300 from-BTcolorOne to-BTcolorTwo text-white mt-3 cursor-pointer">
                        <span className="block bg-black rounded-full px-6 py-2">Download CV</span>
                    </motion.button>
                </div>
            </motion.div>
            


            <motion.div 
            initial= {{opacity: 0 , scale: 0.3}} 
            whileInView={{ opacity: 1 , scale: 1}}
            transition={{duration: 1, type:'tween'}} 
            className="relative basis-1/3 mt-8 md:mt-0 ">
                
                <div className="absolute top-0 bottom-0 left-0 right-0 mx-auto w-[180px] h-[180px]">

                    <div className="absolute top-0 bottom-0 left-0 right-0 mx-auto max-sm:right-10 animate-codingSymbolAnimation w-[130px] h-[130px] lg:w-[200px] lg:h-[200px]">                   
                        <Image 
                        src="https://alriswong.github.io/MyPortfolio/image/3D_Programming_Icon.png" 
                        alt="profilePic" 
                        width={350} 
                        height={350}/>
                    </div>

                    <div className="absolute top-20 bottom-0 left-25 right-0 mx-auto max-sm:top-15 max-sm:left-20 animate-vrSymbolAnimation w-[100px] h-[100px] lg:w-[180px] lg:h-[180px]">
                        <Image 
                        src="https://alriswong.github.io/MyPortfolio/image/3D_VR.png" 
                        alt="profilePic" 
                        width={250} 
                        height={250} />
                    </div>

                </div>
            </motion.div>
        </div>
                         
        
        
    </section>
  );
};    

export default HeroSection;