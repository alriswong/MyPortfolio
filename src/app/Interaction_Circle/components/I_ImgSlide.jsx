"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {Carousel,CarouselContent,CarouselItem,CarouselNext,CarouselPrevious, CarouselApi} from "@/components/ui/carousel"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from "embla-carousel-autoplay"

const image = [
    "/image/project/IMG_8999_low.jpg",
    "/image/project/IMG_8998_low.jpg",
    "/image/project/IMG_1358_low.jpg"
  ]

const I_ImgSlide = () => {
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
      <Carousel plugins={[Autoplay({delay: 3000,stopOnInteraction: false, stopOnMouseEnter: true})]} setApi={setApi} className="w-60 md:w-lg 2xl:w-xl" > 
        <CarouselContent>
        
            {image.map((_, index) => (
              <CarouselItem key={index}>
                <Image src={image[index]} width={800} height={500} alt="photos" className="h-full w-full object-cover"></Image>
                {/* <img src={image[index]} width={800} height={500} alt="photos" className="h-100 w-lg object-cover"></img> */}
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

export default I_ImgSlide