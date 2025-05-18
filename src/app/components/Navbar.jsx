'use client'
import Link from 'next/link';
import NavLink from "./NavLink";
import React , {useEffect,useState, useRef }from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const navLinks = [
    {
      title: "About",
      path: "#about",
    },
    {
      title: "Portfolio",
      path: "#portfolio",
    },
    {
      title: "Contact",
      path: "#contact",
    },
];
const sectionIds = ["about", "portfolio", "contact"];

const Navbar = () => {
    const sideMenuRef = useRef();

    const menuOpen = ()=>{
        sideMenuRef.current.style.transform = 'translate(-16rem)'
    }

    const menuClose = ()=>{
        sideMenuRef.current.style.transform = 'translate(16rem)'
    }

    const [activeSection, setActiveSection] = useState(null);
    
    useEffect(() => {
        const handleScroll = () => {
            let found = null;
            for (const id of sectionIds) {
            const el = document.getElementById(id);
            if (el) {
                const rect = el.getBoundingClientRect();
                if (rect.top <= window.innerHeight * 0.2 && rect.bottom >= window.innerHeight * 0.5) {
                found = id;
                break;
                }
            }
            }
            setActiveSection(found);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // Initial check

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <nav className='fixed mx-auto border border-[#33353F] border-l-transparent border-r-transparent top-0 left-0 right-0 z-50 bg-black bg-opacity-100'>
        <div className='flex flex-wrap items-center justify-between mx-auto px-5 md:px-15 xl:px-20 py-4 2xl:px-30 lg:py-4'>
            <Link href={"#top"} className='text-2xl xl:text-5xl text-white font-semibold'>AW</Link>

            <div id="navbar" className='menu hidden md:flex items-center justify-between'>
                <div>
                    <ul className="flex flex-row space-x-8 mt-0">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                        <NavLink href={link.path} title={link.title} isActive={activeSection === link.path.replace('#', '')}
                            />
                        </li>
                    ))}
                    </ul>
                </div>

            </div>

            <div className='mobile-menu md:hidden'>
                <div onClick={menuOpen} className='flex items-center px-3 py-2 border rounded border-subHeadingColor text-subHeadingColor hover:text-white hover:border-white cursor-pointer'>
                    <Bars3Icon className="h-5 w-5" />
                </div>     
            </div>            
        
        </div>

        {/* ---------------Mobile Menu---------------- */}
        <div ref={sideMenuRef} className='flex md:hidden flex-col gap-10 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-black transition duration-500'>
            <div onClick={menuClose} className='absolute right-6 top-6 flex items-center px-3 py-2 border rounded border-subHeadingColor text-subHeadingColor hover:text-white hover:border-white cursor-pointer'>
                <XMarkIcon className="h-5 w-5" />
            </div>
            
            <div className="menu" id="navbar">
                <ul className="flex flex-col space-y-8 mt-5" onClick={menuClose}>
                    {navLinks.map((link, index) => (
                    <li key={index}>
                        <NavLink href={link.path} title={link.title} isActive={activeSection === link.path.replace('#', '')}
                            onClick={menuClose}/>
                    </li>
                    ))}
                </ul>
            </div>

            
        </div>

                  
    </nav>
    
  )
}

export default Navbar