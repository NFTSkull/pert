export default function Crecimiento() {
  const hitos = [
    {
      año: '2020',
      titulo: 'Fundación',
      descripcion: 'Iniciamos operaciones con un equipo de 10 colaboradores administrativos.',
      empleados: 10,
    },
    {
      año: '2022',
      titulo: 'Consolidación y expansión',
      descripcion:
        'Una vez consolidada la empresa, comenzamos a ampliar nuestro personal.',
      empleados: 20,
    },
    {
      año: '2025',
      titulo: 'Crecimiento constante',
      descripcion:
        'Actualmente contamos con 30 empleados administrativos, con expectativas de seguir expandiéndonos durante el próximo año.',
      empleados: 30,
    },
  ]

  const maxEmpleados = 30

  return (
    <section
      id="crecimiento"
      className="py-16 sm:py-20 lg:py-24 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Encabezado */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark mb-4">
              Crecimiento 2020–2025
            </h2>
            <div className="max-w-3xl mx-auto space-y-4 text-lg text-gray-700">
              <p>
                Iniciamos operaciones con un equipo de 10 colaboradores
                administrativos. En 2022, una vez consolidada la empresa,
                comenzamos a ampliar nuestro personal.
              </p>
              <p>
                Con el paso de los años hemos mantenido un crecimiento constante
                y actualmente contamos con 30 empleados administrativos, con
                expectativas de seguir expandiéndonos durante el próximo año.
              </p>
            </div>
          </div>

          {/* Timeline horizontal */}
          <div className="relative">
            {/* Línea de tiempo */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gray-200">
              <div className="h-full bg-accent" style={{ width: '100%' }}></div>
            </div>

            {/* Hitos */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
              {hitos.map((hito, index) => (
                <div key={index} className="relative">
                  {/* Punto en la línea */}
                  <div className="hidden md:flex absolute top-20 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-accent rounded-full border-4 border-white shadow-lg z-10"></div>

                  {/* Card del hito */}
                  <div className="bg-background-light rounded-xl p-6 lg:p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 mt-12 md:mt-0">
                    {/* Año */}
                    <div className="text-3xl font-bold text-accent mb-2">
                      {hito.año}
                    </div>

                    {/* Título */}
                    <h3 className="text-xl font-bold text-primary-dark mb-3">
                      {hito.titulo}
                    </h3>

                    {/* Descripción */}
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {hito.descripcion}
                    </p>

                    {/* Barra de empleados */}
                    <div className="mt-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold text-gray-600">
                          Colaboradores
                        </span>
                        <span className="text-lg font-bold text-primary-dark">
                          {hito.empleados}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-accent h-3 rounded-full transition-all duration-500"
                          style={{
                            width: `${(hito.empleados / maxEmpleados) * 100}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

