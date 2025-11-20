# PERT Servicios Constructivos - Landing Page

Landing page institucional estática para PERT Servicios Constructivos, empresa constructora mexicana.

## Características

- **Sitio estático HTML/CSS/JavaScript puro**
- **Tailwind CSS vía CDN** - Sin necesidad de build
- **Totalmente responsive** (mobile first)
- **Navegación suave por anclas**
- **Formulario de contacto funcional**
- **Diseño moderno y profesional**

## Estructura

```
/
├── index.html          # Página principal (todo el contenido)
├── script.js           # JavaScript para funcionalidad interactiva
└── README.md           # Este archivo
```

## Uso

### Opción 1: Abrir directamente
Simplemente abre `index.html` en tu navegador.

### Opción 2: Servidor local
Puedes usar cualquier servidor HTTP simple:

```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (http-server)
npx http-server

# Con PHP
php -S localhost:8000
```

Luego abre `http://localhost:8000` en tu navegador.

## Despliegue

Este sitio estático puede desplegarse en cualquier hosting:

- **GitHub Pages**: Simplemente sube los archivos y activa GitHub Pages
- **Netlify**: Arrastra la carpeta o conecta el repositorio
- **Vercel**: Conecta el repositorio (detectará automáticamente)
- **Cualquier hosting estático**: Sube los archivos vía FTP/SFTP

## Personalización

### Información de Contacto

Edita `index.html` y busca los siguientes placeholders:

- `[Teléfono de contacto]` - Reemplaza con el teléfono real
- `[Correo de contacto]` - Reemplaza con el correo real
- `[correo]` y `[telefono]` en los enlaces del footer

### Imágenes

Las imágenes actualmente usan URLs de Unsplash. Para reemplazarlas:

1. Coloca tus imágenes en una carpeta `images/`
2. Reemplaza las URLs en `index.html` con rutas relativas: `images/tu-imagen.jpg`

### Colores

Los colores están configurados en el `<script>` de Tailwind dentro de `index.html`:

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: { dark: '#0B1F33' },
                accent: { DEFAULT: '#F59E0B', dark: '#D97706' },
                background: { light: '#F3F4F6' },
            },
        },
    },
}
```

## Secciones

1. **Header/Navbar** - Navegación fija con menú responsive
2. **Hero** - Sección principal con call-to-action
3. **¿Quiénes somos?** - Información institucional y pilares
4. **Proyectos** - Grid de proyectos ejecutados
5. **Crecimiento** - Timeline 2020-2025
6. **Valores** - Forma de trabajar
7. **Contacto** - Formulario e información de contacto
8. **Footer** - Enlaces y derechos reservados

## Tecnologías

- HTML5
- Tailwind CSS (vía CDN)
- JavaScript Vanilla
- Sin dependencias de Node.js o build tools

## Compatibilidad

- Navegadores modernos (Chrome, Firefox, Safari, Edge)
- Totalmente responsive
- Funciona sin conexión (excepto imágenes externas)

## Notas

- El formulario de contacto actualmente muestra un alert. Puedes conectarlo a un servicio de backend o email service.
- Las imágenes usan Unsplash como placeholder. Reemplázalas con imágenes reales del proyecto.
