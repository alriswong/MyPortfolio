"use client"

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {Carousel,CarouselContent,CarouselItem,CarouselNext,CarouselPrevious, CarouselApi} from "@/components/ui/carousel"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from "embla-carousel-autoplay"


const image = [
  "/image/project/DoctorFighting_menu.jpg",
  "/image/project/DoctorFighting_Intro.jpg",
  "/image/project/DoctorFighting_sentence.jpg"
]

const D_ImgSlide = () => {
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
    <Carousel plugins={[Autoplay({delay: 3000,stopOnInteraction: false, stopOnMouseEnter: true})]} setApi={setApi} className="w-65 md:w-50 lg:w-60 xl:w-80 mx-auto">
      <CarouselContent>
      
          {image.map((_, index) => (
            <CarouselItem key={index}>
              <img src={image[current-1]} className="object-cover"></img>
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

export default D_ImgSlide