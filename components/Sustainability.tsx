'use client'

import { motion } from 'framer-motion'
import { Leaf, Recycle, Target, Globe } from 'lucide-react'

const Sustainability = () => {
  const initiatives = [
    {
      icon: Leaf,
      title: 'Carbon Neutrality',
      description: 'Working towards our goal of carbon neutrality by 2030.',
      progress: 75
    },
    {
      icon: Recycle,
      title: 'Circular Economy',
      description: 'Making 100% of our packaging reusable, recyclable, or compostable.',
      progress: 85
    },
    {
      icon: Target,
      title: 'Sustainable Materials',
      description: 'Protecting natural resources by using environmentally friendly materials.',
      progress: 90
    },
    {
      icon: Globe,
      title: 'Water Conservation',
      description: 'Optimizing water usage in our production processes.',
      progress: 80
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-nurpet-dark-gray mb-6">
            Sustainability
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We fulfill our environmental responsibilities to create a sustainable 
            world for future generations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-nurpet-dark-gray mb-6">
              Our Environmental Commitments
            </h3>
            <p className="text-lg text-gray-700 mb-8">
              As Nurpet Packaging, we are determined to play a leading role in 
              sustainability in the packaging industry. We develop active solutions 
              for climate change, waste management, and natural resource conservation.
            </p>
            <div className="space-y-4">
              {initiatives.map((initiative, index) => (
                <motion.div
                  key={initiative.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-12 h-12 bg-nurpet-blue rounded-lg flex items-center justify-center">
                    <initiative.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-nurpet-dark-gray mb-1">
                      {initiative.title}
                    </h4>
                    <p className="text-sm text-gray-600 mb-2">
                      {initiative.description}
                    </p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${initiative.progress}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-nurpet-blue h-2 rounded-full"
                      />
                    </div>
                    <span className="text-xs text-gray-500 mt-1">
                      %{initiative.progress} completed
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 text-white"
          >
            <h4 className="text-2xl font-bold mb-4">Our 2025 Goals</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">1</span>
                </div>
                <span>Reduce carbon emissions by 30%</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">2</span>
                </div>
                <span>Reduce water usage by 25%</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">3</span>
                </div>
                <span>Reduce waste production by 50%</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">4</span>
                </div>
                <span>100% sustainable packaging solutions</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-nurpet-gray rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-3xl font-bold text-nurpet-dark-gray mb-4">
            Let's Work Together for a Sustainable Future
          </h3>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            We minimize our environmental impact by developing sustainable packaging 
            solutions together with our customers.
          </p>
          <button className="bg-nurpet-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-nurpet-light-blue transition-colors duration-200">
            View Our Sustainability Report
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Sustainability 