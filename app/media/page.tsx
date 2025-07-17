'use client'

import { motion } from 'framer-motion'
import { Newspaper, BookOpen, Play, Calendar, Download, ArrowRight } from 'lucide-react'

const Media = () => {
  const mediaItems = [
    {
      title: 'News',
      description: 'Stay updated with the latest news, industry insights, and company updates.',
      icon: Newspaper,
      link: '/media/news',
      color: 'bg-blue-500'
    },
    {
      title: 'E-Catalog',
      description: 'Browse our comprehensive product catalogs and download detailed specifications.',
      icon: BookOpen,
      link: '/media/e-catalog',
      color: 'bg-green-500'
    },
    {
      title: 'Promotional Video',
      description: 'Watch our latest promotional videos showcasing our products and capabilities.',
      icon: Play,
      link: '/media/promotional-video',
      color: 'bg-red-500'
    },
    {
      title: 'Exhibitions',
      description: 'Discover where you can meet us at upcoming trade shows and exhibitions.',
      icon: Calendar,
      link: '/media/exhibitions',
      color: 'bg-purple-500'
    }
  ]

  const catalogs = [
    {
      title: 'Preform Catalogue 2022',
      description: 'Comprehensive guide to our preform products and specifications.',
      image: '/api/placeholder/300/200',
      downloadUrl: '#'
    },
    {
      title: '2017 Catalog',
      description: 'Complete product catalog featuring our latest innovations.',
      image: '/api/placeholder/300/200',
      downloadUrl: '#'
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
              Media Center
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
              Stay connected with our latest news, catalogs, and promotional content
            </p>
          </motion.div>
        </div>
      </section>

      {/* Media Categories */}
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
              Media Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access our latest content, catalogs, and promotional materials
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mediaItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`${item.color} p-3 rounded-lg`}>
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-nurpet-dark-gray ml-4">
                      {item.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    {item.description}
                  </p>
                  
                  <a 
                    href={item.link}
                    className="flex items-center text-nurpet-blue hover:text-nurpet-light-blue transition-colors duration-200"
                  >
                    Explore
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* E-Catalog Section */}
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
              E-Catalogs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Download our comprehensive product catalogs and specifications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {catalogs.map((catalog, index) => (
              <motion.div
                key={catalog.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-nurpet-orange to-red-600 flex items-center justify-center">
                  <BookOpen className="h-16 w-16 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-nurpet-dark-gray mb-2">
                    {catalog.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {catalog.description}
                  </p>
                  <button className="flex items-center bg-nurpet-blue text-white px-4 py-2 rounded-lg hover:bg-nurpet-light-blue transition-colors duration-200">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Preview */}
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
              Latest News
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with our latest company news and industry insights
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'New Sustainable Packaging Initiative',
                excerpt: 'We are proud to announce our latest initiative towards more sustainable packaging solutions...',
                date: 'December 15, 2024'
              },
              {
                title: 'Expansion of Production Facilities',
                excerpt: 'Nurpet Packaging expands its production capabilities to meet growing market demand...',
                date: 'December 10, 2024'
              },
              {
                title: 'Industry Recognition Award',
                excerpt: 'Nurpet Packaging receives prestigious industry award for innovation in packaging...',
                date: 'December 5, 2024'
              }
            ].map((news, index) => (
              <motion.div
                key={news.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-nurpet-blue to-nurpet-light-blue flex items-center justify-center">
                  <Newspaper className="h-16 w-16 text-white" />
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{news.date}</div>
                  <h3 className="text-lg font-bold text-nurpet-dark-gray mb-2">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {news.excerpt}
                  </p>
                  <a 
                    href="/media/news"
                    className="text-nurpet-blue hover:text-nurpet-light-blue transition-colors duration-200 font-semibold"
                  >
                    Read More →
                  </a>
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
              Stay Connected
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest updates, news, and promotional content directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-nurpet-orange"
              />
              <button className="bg-nurpet-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Media 