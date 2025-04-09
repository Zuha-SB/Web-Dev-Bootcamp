import Head from 'next/head'
import Hero from '../components/Hero'
import About from '../components/About'
import Schedule from '../components/Schedule'
import Footer from '../components/Footer'
import Countdown from '../components/Countdown'
import RegistrationForm from '../components/RegistrationForm'

export default function Home() {
  return (
    <>
      <Head>
        <title>Summer Web Dev Bootcamp 2025</title>
        <meta name="description" content="Join our immersive summer bootcamp to kickstart your career in web development." />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>
      <main className="bg-white text-gray-800">
        <Hero />
        <Countdown />
        <About />
        <Schedule />
        <RegistrationForm />
        <Footer />
      </main>
    </>
  )
}
