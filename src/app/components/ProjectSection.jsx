"use client"
import React , {useState, useRef}from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { motion , useInView} from "motion/react"


const projectData = [
    {
        id: 4,
        title: "Karma",
        description: "Team Leader, Game Programmer",
        technologies: ["UnityURP","C#","XR Interaction Toolkit","SteamVR"], 
        image: "https://alriswong.github.io/MyPortfolio/image/Project/Karma_website.jpg",
        tag: ["All","Games"],
        
        previewUrl:"/Karma",
    },
    {
        id: 3,
        title: "Catja",
        description: "Game Programmer",
        technologies: ["Unity","C#","XR Interaction Toolkit"], 
        image: "https://alriswong.github.io/MyPortfolio/image/Project/Catja_Cover.png",
        tag: ["All","Games"],
        
        previewUrl:"/Catja",
    },
    {
        id: 2,
        title: "互動環",
        description: "Game Programmer, Gameplay Design, Controller Design & Programming",
        technologies: ["Unity","C#","Playfab", "Arduino"], 
        image: "https://alriswong.github.io/MyPortfolio/image/Project/InteractionCircle_GameCover.png",
        tag: ["All","Games"],
        
        previewUrl:"/Interaction_Circle",
    },
    {
        id: 1,
        title: "醫護Fighting!",
        description: "Game Programmer",
        technologies: ["Unity","C#","AR Foundation", "Manomotion SDK", "Android"], 
        image: "https://alriswong.github.io/MyPortfolio/image/Project/醫護fighting_poster.png",
        tag: ["All","Games"],
        
        previewUrl:"/Doctor_fighting",
    },
    {
        id: 7,
        title: "My Portfolio Website",
        description: "Frontend Developer",
        technologies: ["Next.js","TailwindCSS","Farmer Motion","EmailJS","Shadcn/ui"], 
        image: "https://alriswong.github.io/MyPortfolio/image/Project/Alris_My_portfolio.png",
        tag: ["All","Website"],
        
        previewUrl:"/",
    },
    {
        id: 5,
        title: "Square Pattern Wallpaper Creator",
        description: "Web Developer",
        technologies: ["Html","CSS","p5.js"], 
        image: "https://alriswong.github.io/MyPortfolio/image/Project/SquarePatternWallpaperCreator2.png",
        tag: ["All","Website"],
        
        previewUrl:"https://codepen.io/Alris-Wong/pen/zxxXYPj",
    },
    {
        id: 6,
        title: "Hot Spring Dashboard",
        description: "Frontend Developer",
        technologies: ["Html","CSS","JavaScript","Python","Mapbox","Apache ECarts"], 
        image: "https://alriswong.github.io/MyPortfolio/image/Project/HotSpring_Dashboard.png",
        tag: ["All","Website"],
        
        previewUrl:"https://www.youtube.com/watch?v=ZMHLLIs0lLw",
    },
];

const ProjectSection = () => {
    const[tag,setTag] = useState("All");

    const ref = useRef(null);
    const isInview = useInView(ref, { once: false });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectData.filter((project) => project.tag.includes(tag));

    const cardVariants = {
        initial: {y: 50, opacity: 0,},
        animate: {y: 0, opacity: 1},
    };

  return (
    <section id='portfolio' className='py-20 md:py-35'>
        <div >
            <motion.h2 
            initial= {{opacity: 0 , scale:0.1}} 
            whileInView={{ opacity: 1 , scale:1}}
            transition={{duration: 0.8 , type:'spring', stiffness:80}} 
            viewport={{ amount: 0.8, once: false}}
            className='text-center text-4xl font-extrabold mt-4 mb-8 md:mb-12'>
                <span className='text-transparent bg-clip-text bg-linear-to-r  from-BTcolorOne to-BTcolorTwo'>My Projects</span>
            </motion.h2>

            <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
                <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"}/>
                <ProjectTag onClick={handleTagChange} name="Games" isSelected={tag === "Games"}/>
                <ProjectTag onClick={handleTagChange} name="Website" isSelected={tag === "Website"}/>
            </div>

            <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
                {filteredProjects.map((project, index) => (
                    <motion.li key={index} variants={cardVariants} initial="initial" animate={isInview ? "animate" : "initial"} transition={{duration: 0.8, delay: index * 0.4}}>
                    <ProjectCard 
                    key={project.id} 
                    title={project.title} 
                    description={project.description} 
                    technologies={project.technologies}
                    imgUrl={project.image} 
                    gitUrl={project.gitUrl}
                    previewUrl={project.previewUrl}/>
                    </motion.li>
                ))} 
            </ul>
        </div>
    </section>
  );
}

export default ProjectSection