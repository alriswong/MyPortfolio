"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from "motion/react"

const I_GameplaySection = () => {
  return (
    <section className='my-10 md:my-20'>
        
        <motion.div 
        initial= {{ opacity:0}} 
        whileInView={{ opacity:1}}
        transition={{duration: 1 , type:'spring'}} 
        viewport={{ amount: 0.3, once: true}}
        className='mx-5'>
            <h1 className='text-white text-2xl md:text-4xl font-bold text-center'>
            <span className='border-b-1 border-BTcolorOne'>Software</span>
            </h1>
        </motion.div>

        <div className='flex flex-col justify-center my-10'>
            <motion.div 
            initial= {{y:-30 , opacity:0}} 
            whileInView={{y:0 , opacity:1}}
            transition={{duration: 1 , type:'spring', delay:0.5}} 
            viewport={{ amount: 0.3, once: true}}
            className='group relative bg-neutral-900 rounded-xl p-6 md:p-15 flex flex-col items-center mb-15'>
                <p className='max-sm:text-center text-subHeadingColor md:text-xl'>
                    The gameplay is designed to encourage grandparents and grandchildren to play together. 
                    In two-player mode, cooperation is required to control the character. 
                    The game is inspired by the traditional game - Hopscotch. The controls are intuitive and easy to learn. 
                    Players earn higher scores by jumping across as many squares as possible within a limited time, with scores uploaded to a leaderboard to compete with other players.
                </p>
            </motion.div>
           
            <div className='grid grid-cols-1 gap-10 md:px-15 xl:px-8'>
                <motion.div 
                initial= {{x:-30 , opacity:0}} 
                whileInView={{x:0 , opacity:1}}
                transition={{duration: 1 , type:'spring'}} 
                viewport={{ amount: 0.3, once: true}}
                
                className='xl:grid xl:grid-cols-12 place-items-center mx-auto'>
                    <Image className='col-span-7 mb-5 xl:mb-0 w-full' src={"https://alriswong.github.io/MyPortfolio/image/Project/Controller_Choosing.png"} width={800} height={600} alt='ControlGroup'></Image>
                    <p className='col-span-4 xl:col-start-9 text-subHeadingColor text-xl mb-5'>There are two controller combinations: the larger controller is designed for adults, while the smaller controller is intended for children. 
                        <br />
                        In Combination 1, the larger controller is used to perform the gripping action, and the smaller controller is used for the swinging action. 
                        <br />
                        In Combination 2, the larger controller is used for swinging, while the smaller controller is used for gripping.</p>
                </motion.div>

                <motion.div 
                initial= {{x:-30 , opacity:0}} 
                whileInView={{x:0 , opacity:1}}
                transition={{duration: 1 , type:'spring', delay:0.3}} 
                viewport={{ amount: 0.3, once: true}}
                
                className='xl:grid xl:grid-cols-12 items-center'>
                    
                    <Image className='col-span-7 mb-5 xl:mb-0 w-full' src={"https://alriswong.github.io/MyPortfolio/image/Project/Interaction_Circle_grip.gif"} width={800} height={600} alt='Grip'></Image>
                    <p className='col-span-4 col-start-9 text-subHeadingColor text-xl mb-5'>To control the character’s jump, one player must first grip the controller to charge the energy meter.</p>
                   
                </motion.div>

                <motion.div 
                initial= {{x:-30 , opacity:0}} 
                whileInView={{x:0 , opacity:1}}
                transition={{duration: 1 , type:'spring', delay:0.3}} 
                viewport={{ amount: 0.3, once: true}}
                
                className='xl:grid xl:grid-cols-12 items-center'>
                    <Image className='col-span-7 mb-5 xl:mb-0 w-full' src={"https://alriswong.github.io/MyPortfolio/image/Project/Interaction_Circle_swing.gif"} width={800} height={600} alt='Swing'></Image>
                    <p className='col-span-4 col-start-9 text-subHeadingColor text-xl mb-5'>Once fully charged, the other player swings the controller to execute the jump.</p>
                    
                </motion.div>

                <motion.div 
                initial= {{x:-30 , opacity:0}} 
                whileInView={{x:0 , opacity:1}}
                transition={{duration: 1 , type:'spring', delay:0.3}} 
                viewport={{ amount: 0.3, once: true}}
                
                className='xl:grid xl:grid-cols-12 items-center'>
                    <Image className='col-span-7 mb-5 xl:mb-0 w-full' src={"https://alriswong.github.io/MyPortfolio/image/Project/I_Login.png"} width={800} height={600} alt='Login'></Image>
                    <p className='col-span-4 col-start-9 text-subHeadingColor text-xl mb-5'>PlayFab was integrated to manage user training data, allowing players to create accounts, log in, and track their personal training records.</p>
                    
                </motion.div>

                <motion.div 
                initial= {{x:-30 , opacity:0}} 
                whileInView={{x:0 , opacity:1}}
                transition={{duration: 1 , type:'spring', delay:0.3}} 
                viewport={{ amount: 0.3, once: true}}
                
                className='xl:grid xl:grid-cols-12 items-center'>
                    <Image className='col-span-7 mb-5 xl:mb-0 w-full' src={"https://alriswong.github.io/MyPortfolio/image/Project/Leaderboard.png"} width={800} height={600} alt='Leaderboard'></Image>
                    <p className='col-span-4 col-start-9 text-subHeadingColor text-xl mb-5'>Upon completing the game, the player's score is automatically uploaded to the leaderboard.</p>
                    
                </motion.div>

                <motion.div 
                initial= {{x:-30 , opacity:0}} 
                whileInView={{x:0 , opacity:1}}
                transition={{duration: 1 , type:'spring', delay:0.3}} 
                viewport={{ amount: 0.3, once: true}}
                
                className='xl:grid xl:grid-cols-12 items-center'>
                    <Image className='col-span-7 mb-5 xl:mb-0 w-full' src={"https://alriswong.github.io/MyPortfolio/image/Project/Single&Mutiplay.png"} width={800} height={600} alt='Single&Mutiplay'></Image>
                    <p className='col-span-4 col-start-9 text-subHeadingColor text-xl mb-5'>A single-player mode is also available.</p>
                    
                </motion.div>

                <motion.div 
                initial= {{x:-30 , opacity:0}} 
                whileInView={{x:0 , opacity:1}}
                transition={{duration: 1 , type:'spring', delay:0.3}} 
                viewport={{ amount: 0.3, once: true}}
                
                className='xl:grid xl:grid-cols-12 items-center'>
                    <Image className='col-span-7 mb-5 xl:mb-0 w-full' src={"https://alriswong.github.io/MyPortfolio/image/Project/Type_of_Training.png"} width={800} height={600} alt='Training'></Image>
                    <p className='col-span-4 col-start-9 text-subHeadingColor text-xl mb-5'>The game includes both grip strength training and swinging training, while maintaining the hopscotch-based gameplay.</p>
                    
                </motion.div>

                <motion.div 
                initial= {{x:-30 , opacity:0}} 
                whileInView={{x:0 , opacity:1}}
                transition={{duration: 1 , type:'spring', delay:0.3}} 
                viewport={{ amount: 0.3, once: true}}
                
                className='xl:grid xl:grid-cols-12 items-center'>
                    <Image className='col-span-7 mb-5 xl:mb-0 w-full' src={"https://alriswong.github.io/MyPortfolio/image/Project/Timer.png"} width={800} height={600} alt='Timer'></Image>
                    <p className='col-span-4 col-start-9 text-subHeadingColor text-xl mb-5'>
                        A countdown timer can be set to customize the duration of the training session.</p>
                    
                </motion.div>

                <motion.div 
                initial= {{x:-30 , opacity:0}} 
                whileInView={{x:0 , opacity:1}}
                transition={{duration: 1 , type:'spring', delay:0.3}} 
                viewport={{ amount: 0.3, once: true}}
                
                className='xl:grid xl:grid-cols-12 items-center'>
                    <Image className='col-span-7 mb-5 xl:mb-0 w-full' src={"https://alriswong.github.io/MyPortfolio/image/Project/Record_of_training.png"} width={800} height={600} alt='Record of Training'></Image>
                    <p className='col-span-4 col-start-9 text-subHeadingColor text-xl mb-5'>
                        The game records both the measured grip strength and the number of swings as part of the final training results.</p>
                    
                </motion.div>
            </div>
            

            
        </div>
    </section>
  )
}

export default I_GameplaySection