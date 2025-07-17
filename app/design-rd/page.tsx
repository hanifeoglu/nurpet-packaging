'use client'

import { motion } from 'framer-motion'
import { Beaker, TestTube, Lightbulb, Award, ArrowRight } from 'lucide-react'

const DesignRD = () => {
  const services = [
    {
      title: 'R&D Department',
      description: 'State-of-the-art research facilities with cutting-edge technology for innovative packaging solutions.',
      icon: Beaker,
      features: ['Advanced Testing', 'Material Research', 'Prototype Development', 'Quality Analysis']
    },
    {
      title: 'Technology Development',
      description: 'Continuous innovation in packaging technology to meet evolving industry standards.',
      icon: TestTube,
      features: ['Process Innovation', 'Equipment Upgrades', 'Efficiency Optimization', 'Technology Transfer']
    },
    {
      title: 'Product Innovation',
      description: 'Creative design solutions that combine functionality with aesthetic appeal.',
      icon: Lightbulb,
      features: ['Design Excellence', 'Market Research', 'Consumer Insights', 'Trend Analysis']
    },
    {
      title: 'Quality Standards',
      description: 'Rigorous quality control processes ensuring the highest standards in packaging.',
      icon: Award,
      features: ['ISO Certification', 'Quality Assurance', 'Testing Protocols', 'Compliance Management']
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-nurpet-blue to-nurpet-light-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Design & R&D
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
              Innovation at the core of our packaging solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-nurpet-orange p-3 rounded-lg">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-nurpet-dark-gray ml-4">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-nurpet-orange rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="flex items-center text-nurpet-blue hover:text-nurpet-light-blue transition-colors duration-200">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-nurpet-dark-gray mb-6">
              Our Innovation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to production, we follow a systematic approach to deliver innovative packaging solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Research', desc: 'Market analysis and trend research' },
              { step: '02', title: 'Design', desc: 'Creative concept development' },
              { step: '03', title: 'Prototype', desc: 'Testing and validation' },
              { step: '04', title: 'Production', desc: 'Scale-up and manufacturing' }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-nurpet-orange text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-nurpet-dark-gray mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-nurpet-dark-gray text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Innovate Together?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Partner with our R&D team to create cutting-edge packaging solutions that set your products apart.
            </p>
            <button className="bg-nurpet-orange text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-600 transition-colors duration-200">
              Start Your Project
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default DesignRD 