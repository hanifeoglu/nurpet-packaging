'use client'

import { motion } from 'framer-motion'
import { Building, Users, Target, Award, Leaf, Heart, MapPin, Phone, Mail } from 'lucide-react'

const About = () => {
  const sections = [
    {
      title: 'Company Profile',
      description: 'Learn about our journey, values, and commitment to excellence in packaging solutions.',
      icon: Building,
      link: '/about/company-profile'
    },
    {
      title: 'Quality and Product Safety Policy',
      description: 'Our commitment to maintaining the highest standards in quality and safety.',
      icon: Award,
      link: '/about/quality-policy'
    },
    {
      title: 'Human Resources',
      description: 'Join our team of dedicated professionals and grow with us.',
      icon: Users,
      link: '/about/human-resources'
    },
    {
      title: 'Mission and Vision',
      description: 'Our purpose and future aspirations in the packaging industry.',
      icon: Target,
      link: '/about/mission-vision'
    },
    {
      title: 'Environmental Policy',
      description: 'Our commitment to sustainability and environmental responsibility.',
      icon: Leaf,
      link: '/about/environmental-policy'
    },
    {
      title: 'Social Responsibility',
      description: 'How we contribute to society and make a positive impact.',
      icon: Heart,
      link: '/about/social-responsibility'
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
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
              Leading the future of sustainable packaging solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-nurpet-dark-gray mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Nurpet Packaging is a global leader in innovative packaging solutions, 
                committed to delivering sustainable, high-quality products that meet 
                the evolving needs of our customers and the environment.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                With decades of experience and cutting-edge technology, we serve 
                industries worldwide, providing customized packaging solutions that 
                enhance product presentation, ensure safety, and promote sustainability.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-nurpet-orange mb-2">25+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-nurpet-orange mb-2">50+</div>
                  <div className="text-gray-600">Countries Served</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold text-nurpet-dark-gray mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-nurpet-orange mr-3" />
                  <span className="text-gray-600">398 Lincoln Blvd, Middlesex, NJ 08846</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-nurpet-orange mr-3" />
                  <span className="text-gray-600">+1 (862) 403-1958</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-nurpet-orange mr-3" />
                  <span className="text-gray-600">info@nurpetpackaging.com</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Sections Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-nurpet-dark-gray mb-6">
              Learn More About Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our values, policies, and commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-nurpet-orange p-3 rounded-lg">
                    <section.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-nurpet-dark-gray ml-4">
                    {section.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  {section.description}
                </p>
                <a 
                  href={section.link}
                  className="text-nurpet-blue hover:text-nurpet-light-blue transition-colors duration-200 font-semibold"
                >
                  Learn More →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-nurpet-dark-gray mb-6">
              Our Core Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: 'Innovation', desc: 'Continuously pushing boundaries in packaging technology' },
              { title: 'Quality', desc: 'Maintaining the highest standards in all our products' },
              { title: 'Sustainability', desc: 'Committed to environmental responsibility' },
              { title: 'Customer Focus', desc: 'Putting our customers\' needs first' }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-nurpet-orange text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-nurpet-dark-gray mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About 