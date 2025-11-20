export default function Valores() {
  const valores = [
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
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: 'Enfoque en la calidad',
      description:
        'Cada proyecto se ejecuta con los más altos estándares de calidad y excelencia.',
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
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      title: 'Innovación tecnológica y constructiva',
      description:
        'Implementamos las últimas tecnologías y metodologías del sector para optimizar resultados.',
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
      title: 'Acompañamiento cercano al cliente',
      description:
        'Mantenemos comunicación constante y transparente durante todo el proceso constructivo.',
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
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: 'Cumplimiento y responsabilidad',
      description:
        'Nos comprometemos a cumplir con los tiempos y alcances acordados en cada proyecto.',
    },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Encabezado */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark mb-4">
              Nuestra forma de trabajar
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Principios que guían cada proyecto y garantizan resultados
              exitosos.
            </p>
          </div>

          {/* Grid de valores */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {valores.map((valor, index) => (
              <div
                key={index}
                className="bg-white p-6 lg:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
              >
                <div className="text-accent mb-4 flex justify-center">
                  {valor.icon}
                </div>
                <h3 className="text-xl font-bold text-primary-dark mb-3">
                  {valor.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {valor.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

