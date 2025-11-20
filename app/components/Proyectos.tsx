import Image from 'next/image'

interface Proyecto {
  nombre: string
  ubicacion: string
  tipo: string
  categoria: 'Residencial' | 'Comercial' | 'Infraestructura' | 'Desarrollo Social'
  imagen: string
}

export default function Proyectos() {
  const proyectos: Proyecto[] = [
    {
      nombre: 'Ajijic Casa #20',
      ubicacion: 'Ajijic, Jalisco',
      tipo: 'Casa habitación',
      categoria: 'Residencial',
      imagen: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80',
    },
    {
      nombre: 'Arama Bay',
      ubicacion: 'Bucerías, Nayarit',
      tipo: 'Torre de departamentos',
      categoria: 'Residencial',
      imagen: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80',
    },
    {
      nombre: 'Brisamare',
      ubicacion: 'Bucerías, Nayarit',
      tipo: 'Showroom',
      categoria: 'Comercial',
      imagen: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
    },
    {
      nombre: 'Huaxtla',
      ubicacion: 'El Arenal, Jalisco',
      tipo: 'Muro perimetral',
      categoria: 'Infraestructura',
      imagen: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80',
    },
    {
      nombre: 'Lancor',
      ubicacion: 'El Capulín, Jalisco',
      tipo: 'Caseta de ingreso',
      categoria: 'Infraestructura',
      imagen: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
    },
    {
      nombre: 'Mayama',
      ubicacion: 'Tonalá, Jalisco',
      tipo: 'Centro de desarrollo',
      categoria: 'Desarrollo Social',
      imagen: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
    },
  ]

  const categoriaColors: Record<string, string> = {
    Residencial: 'bg-blue-100 text-blue-800',
    Comercial: 'bg-green-100 text-green-800',
    Infraestructura: 'bg-orange-100 text-orange-800',
    'Desarrollo Social': 'bg-purple-100 text-purple-800',
  }

  return (
    <section
      id="proyectos"
      className="py-16 sm:py-20 lg:py-24 bg-background-light"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Encabezado de sección */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark mb-4">
              Proyectos ejecutados
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hemos participado en proyectos residenciales, de servicios y de
              desarrollo social en distintos puntos del país.
            </p>
          </div>

          {/* Grid de proyectos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {proyectos.map((proyecto, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group"
              >
                {/* Imagen del proyecto */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={proyecto.imagen}
                    alt={proyecto.nombre}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 right-4 z-10">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        categoriaColors[proyecto.categoria]
                      }`}
                    >
                      {proyecto.categoria}
                    </span>
                  </div>
                </div>

                {/* Contenido de la card */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary-dark mb-2">
                    {proyecto.nombre}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="text-sm">{proyecto.ubicacion}</span>
                  </div>
                  <p className="text-gray-700 font-medium">{proyecto.tipo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

