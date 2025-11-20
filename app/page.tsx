import Header from './components/Header'
import Hero from './components/Hero'
import QuienesSomos from './components/QuienesSomos'
import Proyectos from './components/Proyectos'
import Crecimiento from './components/Crecimiento'
import Valores from './components/Valores'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <QuienesSomos />
      <Proyectos />
      <Crecimiento />
      <Valores />
      <Contacto />
      <Footer />
    </main>
  )
}

