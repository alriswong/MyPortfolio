"use client"
import React, { useState } from 'react';
import Link from 'next/link'
import { motion, hover, animate } from "motion/react"
import { ArrowCircleLeft } from "@phosphor-icons/react";

const C_Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(true);
        setTimeout(() => setIsActive(false), 1000); // effect lasts 200ms
    };
    
    return (
        <nav className='fixed mx-auto border border-[#33353F] border-l-transparent border-r-transparent top-0 left-0 right-0 z-50 bg-black bg-opacity-100'>
            <div className='group flex flex-row justify-start px-4 py-4 md:px-10 xl:px-20 2xl:px-30 '>
                <Link href='/#portfolio' className="flex flex-row items-center text-white gap-3 duration-175 hover:text-2xl focus:text-2xl max-2xl:active:bg-BTcolorOne/50 group/link">
                
                    <motion.div
                    initial = {{x:-8 , opacity:0.5}}
                    animate={{x:0, opacity:1}}
                    transition={{duration: 1.5 , ease: ["easeInOut"], repeat: Infinity}} 
                    className="text-[#c4c4c4]">
                        <ArrowCircleLeft size={32} />
                    </motion.div>
                
               
                Back
                </Link>
               
            </div>
        </nav>      
      )
}

export default C_Navbar