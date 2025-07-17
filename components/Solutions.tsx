'use client'

import { motion } from 'framer-motion'
import { Coffee, Pill, Droplets, Heart, Home, Sparkles } from 'lucide-react'

const Solutions = () => {
  const solutions = [
    {
      icon: Coffee,
      title: 'Food Packaging',
      description: 'Innovative packaging solutions that enhance food safety and extend shelf life.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Droplets,
      title: 'Beverage Packaging',
      description: 'Sustainable and convenient beverage packaging that enhances customer experience.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Pill,
      title: 'Pharmaceutical Packaging',
      description: 'Specially designed packaging solutions for drug safety and compliance.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Heart,
      title: 'Personal Care',
      description: 'Elegant and functional packaging for cosmetic and personal care products.',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Home,
      title: 'Home Care',
      description: 'Durable and practical packaging solutions for home cleaning and care products.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Sparkles,
      title: 'Custom Solutions',
      description: 'Packaging solutions specially developed for customer needs.',
      color: 'from-indigo-500 to-purple-500'
    }
  ]

  return (
    <section className="py-20 bg-nurpet-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-nurpet-dark-gray mb-6">
            Our Packaging Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer sustainable and innovative packaging solutions specially designed for every sector.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <solution.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-nurpet-dark-gray mb-3">
                {solution.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {solution.description}
              </p>
              <a 
                href="#" 
                className="text-nurpet-blue font-semibold hover:text-nurpet-light-blue transition-colors duration-200 inline-flex items-center"
              >
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-nurpet-blue rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">
              Contact Us for Custom Solutions
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Consult with our expert team to develop custom packaging solutions 
              for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-nurpet-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Get Quote
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-nurpet-blue transition-colors duration-200">
                Contact Us
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Solutions 