"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {Carousel,CarouselContent,CarouselItem,CarouselNext,CarouselPrevious, CarouselApi} from "@/components/ui/carousel"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from "embla-carousel-autoplay"

const image = [
    "https://alriswong.github.io/MyPortfolio/image/project/C_GameScene1.png",
    "https://alriswong.github.io/MyPortfolio/image/project/C_DisplayDemo1.jpeg",
    "https://alriswong.github.io/MyPortfolio/image/project/C_DisplayDemo2.jpeg"
]

const C_ImgSlide = () => {
    const [api, setApi] = useState(null)
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)
  
  
    useEffect(() => {
      if (!api) {
        return
      }
   
      setCount(api.scrollSnapList().length)
      setCurrent(api.selectedScrollSnap() + 1)
   
      api.on("select", () => {
        setCurrent(api.selectedScrollSnap() + 1)
      })
    }, [api])
  
    return (
      <Carousel plugins={[Autoplay({delay: 3000,stopOnInteraction: false, stopOnMouseEnter: true})]} setApi={setApi} className="w-55 md:w-xl" >
        <CarouselContent>
        
            {image.map((_, index) => (
              <CarouselItem key={index}>
                
                <img src={image[index]} width={500} height={300} alt="photos" className="h-full w-full object-cover"></img>
              </CarouselItem>
            ))}
          
        </CarouselContent>
  
        <CarouselPrevious />
        <CarouselNext />
  
        <div className="py-2 text-center text-md text-muted-foreground">
          {current} of {count}
        </div>
      </Carousel>
    )
}

export default C_ImgSlide