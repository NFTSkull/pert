import Link from 'next/link'

export default function Hero() {
  const metrics = [
    { value: 'Desde 2020', label: 'Años de experiencia' },
    { value: '+30', label: 'Colaboradores administrativos' },
    { value: 'Jalisco y Nayarit', label: 'Proyectos ejecutados' },
  ]

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(rgba(11, 31, 51, 0.7), rgba(11, 31, 51, 0.7)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Título principal */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            PERT Servicios Constructivos
          </h1>

          {/* Subtítulo */}
          <p className="text-xl sm:text-2xl md:text-3xl mb-6 text-gray-100 font-light">
            Construimos proyectos exitosos, con calidad, innovación y confianza.
          </p>

          {/* Texto descriptivo */}
          <p className="text-base sm:text-lg md:text-xl mb-10 text-gray-200 max-w-3xl mx-auto">
            Desde el 20 de diciembre de 2020, contribuyendo al desarrollo de
            nuestros clientes a través de soluciones constructivas a la medida.
          </p>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              href="#proyectos"
              className="bg-accent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-dark transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Ver proyectos ejecutados
            </Link>
            <Link
              href="#quienes-somos"
              className="bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-200"
            >
              Conocer a la empresa
            </Link>
          </div>

          {/* Franja de métricas */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 pt-12 border-t border-white/20">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">
                  {metric.value}
                </div>
                <div className="text-sm sm:text-base text-gray-300">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

