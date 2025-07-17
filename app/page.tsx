import Header from '@/components/Header'
import Banner from '@/components/Banner'
import About from '@/components/About'
import Hero from '@/components/Hero'
import Solutions from '@/components/Solutions'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Banner />
      <About />
      <Hero />
      <Solutions />
      <Footer />
    </main>
  )
} 