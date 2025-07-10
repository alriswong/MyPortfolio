"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from "motion/react"
import { CopyBlock, dracula,a11yDark } from 'react-code-blocks'

const codeboxJumping = [
    "IEnumerator jump()",
    "{",
    "float elapsedTime = 0f;",
        
    "Vector2 startPosition = transform.position;",
    "moveToTarget = new Vector2(transform.position.x - targetPosition.x , transform.position.y + targetPosition.y);",
    "while (elapsedTime < 1f) // Move for 1 second (or adjust as needed)",
    "{",
    "// Lerp (Linear Interpolation) between the starting and target positions",
    "transform.position = Vector2.Lerp(startPosition, moveToTarget, elapsedTime / duration);",
    "elapsedTime += Time.deltaTime;",
    "// Adjust speed",

    "yield return null; // Wait for the next frame",
        
    "}",
    "isJumping= false;",
    "jumpAnimation.SetBool(\"Jump\", false);",
    
    "}",
]

const I_GameplaySection = () => {
  return (
    <section className='my-10 md:my-20'>
        
        <motion.div 
        initial= {{scale:0 , opacity:0}} 
          whileInView={{scale:1 , opacity:1}}
          transition={{duration: 1 , type:'spring'}} 
          viewport={{ amount: 0.3, once: false}}
        
        className='py-5 text-center'><span className='text-transparent text-4xl md:text-5xl font-extrabold bg-clip-text bg-gradient-to-r from-BTcolorOne to-BTcolorTwo'>Feature Highlights</span>
        </motion.div>

        <div className='grid 2xl:grid-cols-2 gap-10 my-10'>
            {/* <motion.div 
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
            </motion.div> */}
           
            
            {/* <motion.div 
            initial= {{x:-30 , opacity:0}} 
            whileInView={{x:0 , opacity:1}}
            transition={{duration: 1 , type:'spring'}} 
            viewport={{ amount: 0.3, once: true}}
            
            className='flex flex-col items-center mx-auto'>
                <Image className='md:w-4xl w-full' src={"https://alriswong.github.io/MyPortfolio/image/Project/Controller_Choosing.png"} width={800} height={600} alt='ControlGroup'></Image>
                <p className=' text-subHeadingColor text-xl mt-5'>There are two controller combinations: the larger controller is designed for adults, while the smaller controller is intended for children. 
                    <br />
                    In Combination 1, the larger controller is used to perform the gripping action, and the smaller controller is used for the swinging action. 
                    <br />
                    In Combination 2, the larger controller is used for swinging, while the smaller controller is used for gripping.</p>
            </motion.div> */}

            <motion.div 
            initial= {{x:-30 , opacity:0}} 
            whileInView={{x:0 , opacity:1}}
            transition={{duration: 1 , type:'spring', delay:0.3}} 
            viewport={{ amount: 0.3, once: true}}
            
            className='flex flex-col items-center mx-auto'>
                
                <Image className='md:w-4xl w-full' src={"https://alriswong.github.io/MyPortfolio/image/Project/Interaction_Circle_grip.gif"} width={800} height={600} alt='Grip'></Image>
                <p className='text-contentColor md:text-xl mt-5'>To control the character’s jump, one player must first grip the controller to charge the energy meter.</p>
                
            </motion.div>

            <motion.div 
            initial= {{x:-30 , opacity:0}} 
            whileInView={{x:0 , opacity:1}}
            transition={{duration: 1 , type:'spring', delay:0.3}} 
            viewport={{ amount: 0.3, once: true}}
            
            className='flex flex-col items-center mx-auto'>
                <Image className='md:w-4xl w-full' src={"https://alriswong.github.io/MyPortfolio/image/Project/Interaction_Circle_swing.gif"} width={800} height={600} alt='Swing'></Image>
                <p className='text-contentColor md:text-xl mt-5'>Once fully charged, the other player swings the controller to execute the jump.</p>
                
            </motion.div>

            {/* <div className='xl:grid xl:col-span-12 my-5'>
                <h1 className='bg-emerald-950 text-2xl text-white p-2'>CODE SNIPPET - Jumping with hand gesture</h1>
                <CopyBlock
                
                text={codeboxJumping.join('\n')}
                language='csharp'
                showLineNumbers={true}
                wrapLines
                theme={a11yDark}
                />
            </div> */}

            <motion.div 
            initial= {{x:-30 , opacity:0}} 
            whileInView={{x:0 , opacity:1}}
            transition={{duration: 1 , type:'spring', delay:0.3}} 
            viewport={{ amount: 0.3, once: true}}
            
            className='flex flex-col items-center mx-auto'>
                <Image className='md:w-4xl w-full' src={"https://alriswong.github.io/MyPortfolio/image/Project/I_Login.png"} width={800} height={600} alt='Login'></Image>
                <p className='text-contentColor md:text-xl mt-5'>PlayFab was integrated to manage user training data, allowing players to create accounts, log in, and track their personal training records.</p>
                
            </motion.div>

            <motion.div 
            initial= {{x:-30 , opacity:0}} 
            whileInView={{x:0 , opacity:1}}
            transition={{duration: 1 , type:'spring', delay:0.3}} 
            viewport={{ amount: 0.3, once: true}}
            
            className='flex flex-col items-center mx-auto'>
                <Image className='md:w-4xl w-full' src={"https://alriswong.github.io/MyPortfolio/image/Project/Leaderboard.png"} width={800} height={600} alt='Leaderboard'></Image>
                <p className='text-contentColor md:text-xl mt-5'>Upon completing the game, the player's score is automatically uploaded to the leaderboard.</p>
                
            </motion.div>

            {/* <motion.div 
            initial= {{x:-30 , opacity:0}} 
            whileInView={{x:0 , opacity:1}}
            transition={{duration: 1 , type:'spring', delay:0.3}} 
            viewport={{ amount: 0.3, once: true}}
            
            className='flex flex-col items-center mx-auto'>
                <Image className='md:w-4xl w-full' src={"https://alriswong.github.io/MyPortfolio/image/Project/Single&Mutiplay.png"} width={800} height={600} alt='Single&Mutiplay'></Image>
                <p className='text-subHeadingColor text-xl mt-5'>A single-player mode is also available.</p>
                
            </motion.div> */}

            <motion.div 
            initial= {{x:-30 , opacity:0}} 
            whileInView={{x:0 , opacity:1}}
            transition={{duration: 1 , type:'spring', delay:0.3}} 
            viewport={{ amount: 0.3, once: true}}
            
            className='flex flex-col items-center mx-auto'>
                <Image className='md:w-4xl w-full' src={"https://alriswong.github.io/MyPortfolio/image/Project/Type_of_Training.png"} width={800} height={600} alt='Training'></Image>
                <p className='text-contentColor md:text-xl mt-5'>A single-player mode includes both grip strength training and swinging training.</p>
                
            </motion.div>

            {/* <motion.div 
            initial= {{x:-30 , opacity:0}} 
            whileInView={{x:0 , opacity:1}}
            transition={{duration: 1 , type:'spring', delay:0.3}} 
            viewport={{ amount: 0.3, once: true}}
            
            className='flex flex-col items-center mx-auto'>
                <Image className='md:w-4xl 2xl:w-full' src={"https://alriswong.github.io/MyPortfolio/image/Project/Timer.png"} width={800} height={600} alt='Timer'></Image>
                <p className='text-subHeadingColor text-xl mt-5'>
                    A countdown timer can be set to customize the duration of the training session.</p>
                
            </motion.div> */}

            <motion.div 
            initial= {{x:-30 , opacity:0}} 
            whileInView={{x:0 , opacity:1}}
            transition={{duration: 1 , type:'spring', delay:0.3}} 
            viewport={{ amount: 0.3, once: true}}
            
            className='flex flex-col items-center mx-auto'>
                <Image className='md:w-4xl w-full' src={"https://alriswong.github.io/MyPortfolio/image/Project/Record_of_training.png"} width={800} height={600} alt='Record of Training'></Image>
                <p className='text-contentColor md:text-xl mt-5'>
                    The game records both the measured grip strength and the number of swings as part of the final training results.</p>
                
            </motion.div>
            
        </div>
    </section>
  )
}

export default I_GameplaySection