import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#quienes-somos', label: '¿Quiénes somos?' },
    { href: '#proyectos', label: 'Proyectos' },
    { href: '#crecimiento', label: 'Crecimiento' },
    { href: '#contacto', label: 'Contacto' },
  ]

  return (
    <footer className="bg-primary-dark text-white py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-8">
            {/* Información de la empresa */}
            <div>
              <div className="mb-4">
                <span className="text-2xl font-bold">PERT</span>
                <span className="text-sm block text-gray-300">
                  Servicios Constructivos
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-2">Desde 2020</p>
              <p className="text-gray-400 text-sm">
                Construimos proyectos exitosos con calidad, innovación y
                confianza.
              </p>
            </div>

            {/* Enlaces rápidos */}
            <div>
              <h3 className="text-lg font-bold mb-4">Enlaces rápidos</h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-accent transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Información adicional */}
            <div>
              <h3 className="text-lg font-bold mb-4">Contacto</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Jalisco y Nayarit, México</li>
                <li>
                  <a
                    href="mailto:[correo]"
                    className="hover:text-accent transition-colors duration-200"
                  >
                    [Correo de contacto]
                  </a>
                </li>
                <li>
                  <a
                    href="tel:[telefono]"
                    className="hover:text-accent transition-colors duration-200"
                  >
                    [Teléfono de contacto]
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Línea divisoria */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
              <p>
                © {currentYear} PERT Servicios Constructivos. Todos los derechos
                reservados.
              </p>
              <p className="mt-2 md:mt-0">
                Desde el 20 de diciembre de 2020
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

