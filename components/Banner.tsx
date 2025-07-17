'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      image: '/images/slider1.webp',
      alt: 'Plastic bottle production process',
      title: 'Plastic Bottle Production',
      subtitle: 'Advanced Manufacturing Process',
      description: 'From preforms to finished bottles - our complete production line'
    },
    {
      id: 2,
      image: '/images/slider2.png',
      alt: 'Various plastic containers and bottles',
      title: 'Sustainable Packaging',
      subtitle: 'Eco-Friendly Solutions',
      description: 'Diverse range of containers for every industry need'
    },
    {
      id: 3,
      image: '/images/slider3.webp',
      alt: 'PET bottle manufacturing stages',
      title: 'PET Manufacturing',
      subtitle: 'Innovation in Action',
      description: 'State-of-the-art PET bottle production technology'
    },
    {
      id: 4,
      image: '/images/slider4.png',
      alt: 'Plastic bottle production line',
      title: 'Production Excellence',
      subtitle: 'Quality & Precision',
      description: 'Automated production lines ensuring consistent quality'
    },
    {
      id: 5,
      image: '/images/slider5.webp',
      alt: 'Plastic bottle manufacturing process',
      title: 'Global Solutions',
      subtitle: 'Worldwide Impact',
      description: 'Advanced manufacturing processes for global markets'
    },
    {
      id: 6,
      image: '/images/slider6.webp',
      alt: 'Plastic bottle production stages',
      title: 'Future of Packaging',
      subtitle: 'Tomorrow\'s Technology',
      description: 'Innovative packaging solutions for the future'
    },
    {
      id: 7,
      image: '/images/slider7.webp',
      alt: 'Advanced packaging solutions',
      title: 'Innovation & Technology',
      subtitle: 'Cutting-Edge Solutions',
      description: 'Leading-edge technology in packaging industry'
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <motion.div
            key={slide.id}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: index === currentSlide ? 1 : 0,
              scale: index === currentSlide ? 1 : 1.1
            }}
            transition={{ duration: 0.8 }}
            className={`absolute inset-0 ${
              index === currentSlide ? 'z-10' : 'z-0'
            }`}
          >
            <div 
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>
              
              {/* Content */}
              <div className="relative z-20 h-full flex items-center justify-center">
                <div className="text-center text-white max-w-4xl mx-auto px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ 
                      opacity: index === currentSlide ? 1 : 0,
                      y: index === currentSlide ? 0 : 30
                    }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-4"
                  >
                    <h3 className="text-2xl md:text-3xl font-light mb-2 opacity-90">
                      {slide.title}
                    </h3>
                    <p className="text-lg md:text-xl opacity-75 mb-2">
                      {slide.subtitle}
                    </p>
                    <p className="text-sm md:text-base opacity-60">
                      {slide.description}
                    </p>
                  </motion.div>
                  
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ 
                      opacity: index === currentSlide ? 1 : 0,
                      y: index === currentSlide ? 0 : 30
                    }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-4xl md:text-6xl font-bold mb-6"
                  >
                    Professional Packaging
                    <span className="block text-3xl md:text-5xl font-light mt-2">
                      Solutions for Tomorrow
                    </span>
                  </motion.h1>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ 
                      opacity: index === currentSlide ? 1 : 0,
                      y: index === currentSlide ? 0 : 30
                    }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-xl md:text-2xl mb-8 opacity-90"
                  >
                    Nurpet Packaging Inc. is a global leader in developing and producing 
                    responsible packaging solutions for food, beverage, pharmaceutical, 
                    and personal care products worldwide.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ 
                      opacity: index === currentSlide ? 1 : 0,
                      y: index === currentSlide ? 0 : 30
                    }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
                  >
                    <button className="bg-white text-nurpet-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200">
                      Explore Our Solutions
                    </button>
                    
                    <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-nurpet-blue transition-colors duration-200">
                      Watch Our Story
                    </button>
                  </motion.div>

                  {/* Stats */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ 
                      opacity: index === currentSlide ? 1 : 0,
                      y: index === currentSlide ? 0 : 30
                    }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-1 max-w-4xl mx-auto text-center mt-32"
                  >
                    <div className="text-center text-white">
                      <div className="text-3xl md:text-4xl font-bold mb-2">25+</div>
                      <div className="text-lg opacity-80">Years Experience</div>
                    </div>
                    <div className="text-center text-white">
                      <div className="text-3xl md:text-4xl font-bold mb-2">3</div>
                      <div className="text-lg opacity-80">Global Offices</div>
                    </div>
                    <div className="text-center text-white">
                      <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
                      <div className="text-lg opacity-80">Happy Clients</div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>


    </section>
  )
}

export default Banner 