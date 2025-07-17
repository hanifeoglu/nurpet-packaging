'use client'

import { motion } from 'framer-motion'
import { Globe, Users, Award, Leaf } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: Globe,
      title: 'Global Presence',
      description: 'Operating in 3 countries with offices in Turkey, USA, and worldwide distribution.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Professional team with 25+ years of packaging industry experience.'
    },
    {
      icon: Award,
      title: 'Industry Leader',
      description: 'Leading packaging solutions provider with innovative technologies.'
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Environmentally responsible and circular economy focused solutions.'
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
            About Nurpet Packaging
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nurpet Packaging Inc. is a global leader in developing and producing 
            responsible packaging solutions for food, beverage, pharmaceutical, 
            medical, home and personal care products worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
                              <div className="w-16 h-16 bg-nurpet-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
                                <h3 className="text-xl font-semibold text-nurpet-dark-gray mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
                      className="mt-16 bg-nurpet-gray rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-nurpet-dark-gray mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                To protect our customers' products, ensure safety, and provide 
                packaging solutions for a sustainable future.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-nurpet-blue rounded-full mr-3"></span>
                  Innovative packaging technologies
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-nurpet-blue rounded-full mr-3"></span>
                  Sustainable material usage
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-nurpet-blue rounded-full mr-3"></span>
                  Circular economy focused solutions
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-nurpet-blue to-nurpet-light-blue rounded-xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-4">Our Vision</h4>
              <p className="text-lg opacity-90">
                To be the world's most trusted packaging solutions provider, 
                leading sustainability and innovation in the packaging industry.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 