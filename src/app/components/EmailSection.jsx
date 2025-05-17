"use client"
import React, { use, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import GithubIcon from '../../../public/image/github.png'
import LinkedinIcon from '../../../public/image/linkedin.png'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from "motion/react"


const EmailSection = () => {

    const ref = useRef();
    const [success, setSuccess] = useState(null);
    
    const handleSubmit = e => {
        e.preventDefault();


        emailjs
      .sendForm('service_8r5nfd1', 'template_mf5lifn', ref.current, {
        publicKey: 'l6J1fqPmyGBygfxPO',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSuccess(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setSuccess(false);
        },
      );
    }



  return (
    <section className='grid md:grid-cols-2 my-5 md:my-12 py-24 gap-12 sm:gap-8 relative' id='contact'>
        {/* ----------------- Circle ----------------- */}
        <div className='bg-radial-[at_50%_75%] from-BTcolorTwo/50 to-BTcolorOne/50 to-90% rounded-full h-80 w-80 z-0 blur-lg absolute top-9/10 -left-45 transform -translate-x-1/2 -translate-1/2 max-sm:-left-35 max-sm:h-50'></div>
        <div className='bg-radial-[at_50%_75%] from-BTcolorTwo/50 to-BTcolorOne/50 to-90% rounded-full h-80 w-80 z-0 blur-lg absolute top-2/10 -right-125 transform -translate-x-1/2 -translate-1/2 max-sm:-right-105 max-sm:h-50'></div>

        <div className='z-10'>
            <motion.h5 
            initial = {{y:-50 , opacity:0}}
            whileInView={{ y:0, opacity:1 }}
            transition={{duration: 0.7 , type:'tween' , stiffness:50}} 
            viewport={{ amount: 0.8, once: false}}
            className='text-2xl font-bold text-white py-2'>Let's Connect</motion.h5>

            <motion.p 
            initial = {{x:-50 , opacity:0}}
            whileInView={{x:0 , opacity:1 }}
            transition={{duration: 0.8 , delay:0.2}} 
            viewport={{ amount: 0.8, once: false}}
            className='text-subHeadingColor mb-4 max-w-md'>
                I'm always open to new opportunities, my inbox is always open. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </motion.p>

            <div className='social flex flex-row gap-2'>
                <motion.div
                initial = {{scale:0}}
                whileInView={{scale:1 }}
                transition={{duration: 0.5 , type:'spring' , stiffness:100 ,delay:0.4}} 
                viewport={{ amount: 0.8, once: false}}
                className='hover:scale-110 hover:transition-all hover:duration-300'
                >
                <Link href="https://github.com/alriswong">
                    <Image src={GithubIcon} alt="GithubIcon" width={40} height={40} />
                </Link>
                </motion.div>
                
                <motion.div
                initial = {{scale:0}}
                whileInView={{scale:1 }}
                transition={{duration: 0.5 , type:'spring' , stiffness:100 ,delay:0.6}} 
                viewport={{ amount: 0.8, once: false}}
                className='hover:scale-110 hover:transition-all hover:duration-300'
                >
                <Link href="https://www.linkedin.com/in/wsw-5226782b3/">
                    <Image src={LinkedinIcon} alt="LinkedinIcon" width={40} height={40} />
                </Link>
                </motion.div>
                
            </div>

            <div className='my-4'>
                <motion.h6 
                initial = {{y:50 , opacity:0}}
                whileInView={{y:0, opacity:1 }}
                transition={{duration: 0.5 , type:'spring' , stiffness:100 ,delay:0.8}} 
                viewport={{ amount: 0.8, once: false}}
                className='text-white'><span className='border-l-2 border-l-BTcolorOne pr-2'></span><span className='font-bold'>Email:</span> wongsw.tw@gmail.com</motion.h6>
            </div>

        </div>

        <motion.div 
        initial = {{opacity:0}}
        whileInView={{opacity:1 }}
        transition={{duration: 0.5, delay:1}} 
        viewport={{ amount: 0.1, once: false}}
        >
            <form ref={ref} className='flex flex-col lg:px-10' onSubmit={handleSubmit}>
                <div className='mb-6'>
                    <label htmlFor='email' className='text-white block mb-2 text-sm font-medium'>Your email</label>
                    <input type='email' required placeholder='abc@gmail.com' name="email"
                        className="text-white bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9]  text-sm rounded-lg block w-full p-2.5"
                    />
                </div>

                <div className='mb-6'>
                    <label htmlFor='subject' className='text-white block mb-2 text-sm font-medium'>Subject</label>
                    <input type='text' required placeholder='Just saying hi!' name="name"
                        className="text-white bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-sm rounded-lg block w-full p-2.5"
                    />
                </div>

                <div className='mb-6'>
                    <label htmlFor='message' className='text-white block mb-2 text-sm font-medium'>Message</label>
                    <textarea name="message" required placeholder="Let's talk about..." 
                        className="text-white bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9]  text-sm rounded-lg block w-full p-2.5"
                    />
                </div>

                <button type='submit' className=' text-black bg-gradient-to-br from-BTcolorOne to-BTcolorTwo hover:scale-105 hover:transition-all hover:duration-300 font-mediam py-2.5 px-5 rounded-lg w-full cursor-pointer'>
                    Send Me Message
                </button>

                
                {success && <p className='text-green-500 mt-4'>Message sent successfully!</p>}
            </form>
        </motion.div>
    </section>
  )
}

export default EmailSection