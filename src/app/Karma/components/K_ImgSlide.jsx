"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {Carousel,CarouselContent,CarouselItem,CarouselNext,CarouselPrevious, CarouselApi} from "@/components/ui/carousel"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from "embla-carousel-autoplay"

const image = [
    "/image/project/Karma_expo_3.jpg",
    "/image/project/Karma_expo_1.gif",
    "/image/project/Karma_expo_2.JPG"
]

const K_ImgSlide = () => {
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
      <Carousel plugins={[Autoplay({delay: 3000,stopOnInteraction: false, stopOnMouseEnter: true})]} setApi={setApi} className="max-sm:w-3xs md:w-md xl:w-lg 2xl:w-xl">
        <CarouselContent>
        
            {image.map((_, index) => (
              <CarouselItem key={index}>
                <img src={image[index]} width={500} height={300} alt="photos" className="h-50 md:h-80 xl:h-100 w-full object-cover "></img>
                
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

export default K_ImgSlide