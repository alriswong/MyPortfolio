import React from 'react'


const ProjectTag = ({name, onClick, isSelected}) => {
    const buttonStyles = isSelected 
    ? 'text-black bg-linear-to-r  from-BTcolorOne to-BTcolorTwo'
    :'text-contentColor border-contentColor hover:border-white hover:text-white'
  return (
    <button className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() =>onClick(name)}>
        {name}

    </button>
  )
}

export default ProjectTag