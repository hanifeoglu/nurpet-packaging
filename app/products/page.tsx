'use client'

import { motion } from 'framer-motion'
import { Package, FlaskConical, Pill, Heart, Home, ArrowRight } from 'lucide-react'

const Products = () => {
  const products = [
    {
      title: 'Food Packaging',
      description: 'Innovative packaging solutions for food industry with extended shelf life and safety standards.',
      icon: Package,
      features: ['Extended Shelf Life', 'Food Safety', 'Sustainable Materials', 'Custom Solutions']
    },
    {
      title: 'Beverage Packaging',
      description: 'Advanced PET bottle solutions for beverages with superior clarity and durability.',
      icon: FlaskConical,
      features: ['Crystal Clear PET', 'Lightweight Design', 'Recyclable Materials', 'Custom Shapes']
    },
    {
      title: 'Pharmaceutical Packaging',
      description: 'Medical-grade packaging solutions ensuring product integrity and patient safety.',
      icon: Pill,
      features: ['Medical Grade', 'Tamper Evident', 'Child Resistant', 'Compliance Ready']
    },
    {
      title: 'Personal Care',
      description: 'Elegant packaging for personal care products with premium finish and functionality.',
      icon: Heart,
      features: ['Premium Finish', 'Ergonomic Design', 'Moisture Barrier', 'Aesthetic Appeal']
    },
    {
      title: 'Home Care',
      description: 'Durable packaging solutions for household cleaning and maintenance products.',
      icon: Home,
      features: ['Chemical Resistance', 'Durable Design', 'Easy Handling', 'Cost Effective']
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
              Our Products
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
              Comprehensive packaging solutions for every industry need
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-nurpet-orange p-3 rounded-lg">
                      <product.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-nurpet-dark-gray ml-4">
                      {product.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    {product.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature) => (
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
              Ready to Transform Your Packaging?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact our team to discuss your specific packaging requirements and discover how we can help optimize your product presentation.
            </p>
            <button className="bg-nurpet-orange text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-600 transition-colors duration-200">
              Get Started Today
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Products 