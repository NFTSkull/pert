import Image from 'next/image'

export default function QuienesSomos() {
  const pilares = [
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: 'Calidad del servicio',
      description:
        'Comprometidos con la excelencia en cada proyecto que ejecutamos.',
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: 'Innovación tecnológica y constructiva',
      description:
        'Aplicamos las mejores prácticas y tecnologías del sector constructivo.',
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: 'Relación de confianza con el cliente',
      description:
        'Fomentamos una relación cercana y transparente con cada cliente.',
    },
  ]

  return (
    <section
      id="quienes-somos"
      className="py-16 sm:py-20 lg:py-24 bg-background-light"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Layout de dos columnas */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            {/* Columna izquierda: Texto */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark mb-6">
                ¿Quiénes somos?
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  Somos una constructora que contribuye al desarrollo de nuestros
                  clientes a través de la ejecución de proyectos exitosos, basados
                  en la calidad del servicio y respaldados por un equipo de trabajo
                  comprometido con la excelencia.
                </p>
                <p>
                  Nuestra prioridad es mantener la calidad, la innovación
                  tecnológica y constructiva, fomentando una relación de confianza
                  fuerte y cercana con cada cliente.
                </p>
              </div>
            </div>

            {/* Columna derecha: Imagen */}
            <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                alt="Equipo de trabajo y planos de construcción"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Pilares en cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {pilares.map((pilar, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <div className="text-accent mb-4">{pilar.icon}</div>
                <h3 className="text-xl font-bold text-primary-dark mb-3">
                  {pilar.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {pilar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

