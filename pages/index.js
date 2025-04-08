import Head from 'next/head'
import Hero from '../components/Hero'
import About from '../components/About'
import Schedule from '../components/Schedule'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import Countdown from '../components/Countdown'
import RegistrationForm from '../components/RegistrationForm'

export default function Home() {
  return (
    <>
      <Head>
        <title>Summer Web Dev Bootcamp 2025</title>
        <meta name="description" content="Join our immersive summer bootcamp to kickstart your career in web development." />
      </Head>
      <main className="bg-white text-gray-800">
        <Hero />
        <Countdown />
        <About />
        <Schedule />
        <RegistrationForm />
        <CTA />
        <Footer />
      </main>
    </>
  )
}
