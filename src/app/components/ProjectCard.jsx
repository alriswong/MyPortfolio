'use client'
import {React, useState} from 'react';
import { EyeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const ProjectCard = ({imgUrl, title, description,technologies, gitUrl, previewUrl}) => {
    const [showOverlay, setShowOverlay] = useState(false);
    const handleToggleOverlay = () => setShowOverlay(v => !v);
  return (
        <div>
            <div className='group h-52 md:h-72 rounder-t-xl relative' 
                style={{background:`url(${imgUrl})`,backgroundSize:"cover" ,backgroundPosition:"center"}}
                onClick={handleToggleOverlay}
            >
                <div className={`overlay items-center justify-center top-0 left-0 w-full h-full bg-[#181818] transition-all duration-500
                    ${showOverlay ? 'flex bg-[#181818]/80' : 'hidden'}
                    group-hover:flex group-hover:bg-[#181818]/80`
                }>
                    <Link href={previewUrl} className='relative h-14 w-14 border-2 rounded-full border-[#ADB7BE] hover:white group/link'>
                        <EyeIcon className='w-10 h-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white'/>
                        
                    </Link>
                </div>

            </div>

            <div className='text-white rounded-b-xl mt-0 bg-[#181818] py-6 px-4'>
                <h5 className='text-xl font-semibold mb-2'>{title}</h5>
                <p className='text-contentColor'>{description}</p>
                
                <div className="flex flex-wrap gap-2 my-2">
                    {technologies.map((tech, index) => (
                    <span
                        key={index}
                        className="text-xs px-2 py-1 bg-neutral-700 text-BTcolorOne rounded"
                        >
                        {tech}
                    </span>
                    ))}
                </div> 
                
          
        
            </div>
        </div>


    )
}

export default ProjectCard