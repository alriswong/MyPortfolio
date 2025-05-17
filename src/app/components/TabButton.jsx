import React from 'react'
import { motion } from "motion/react"

const variants = {
  default: {width: 0},
  active: {width: "calc(100% - 2rem)"},
}

const TabButton = ({active, selectTab, children}) => {
    const buttonClass = active ? "text-white" : "text-contentColor"

    return (
        <button onClick={selectTab} className="cursor-pointer">
            <p className={`mr-8 font-semibold hover:text-white ${buttonClass}`}>
                {children}
            </p>
            <motion.div animate={active? "active": "default"} variants={variants} className='h-0.5 bg-BTcolorOne mt-2 mr-3'></motion.div>    
        </button>
    );
};

export default TabButton