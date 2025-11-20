# Contenido Editable - PERT Servicios Constructivos

Este documento indica dónde se encuentran los elementos editables en la landing page.

## Información de Contacto

### En el componente Contacto (`app/components/Contacto.tsx`)

Busca los siguientes placeholders y reemplázalos con la información real:

- **Teléfono**: Línea 75 - `[Teléfono de contacto]`
- **Correo electrónico**: Línea 90 - `[Correo de contacto]`

### En el componente Footer (`app/components/Footer.tsx`)

- **Correo**: Línea 50 - `[correo]` y `[Correo de contacto]`
- **Teléfono**: Línea 55 - `[telefono]` y `[Teléfono de contacto]`

## Proyectos

Los proyectos se encuentran en `app/components/Proyectos.tsx`, en el array `proyectos` (líneas 8-50).

Para agregar o modificar proyectos, edita el array siguiendo esta estructura:

```typescript
{
  nombre: 'Nombre del proyecto',
  ubicacion: 'Ciudad, Estado',
  tipo: 'Tipo de obra',
  categoria: 'Residencial' | 'Comercial' | 'Infraestructura' | 'Desarrollo Social',
  imagen: 'URL de la imagen',
}
```

## Imágenes

Las imágenes actualmente usan URLs de Unsplash como placeholders. Para reemplazarlas:

1. **Hero**: `app/components/Hero.tsx` - Línea 12
2. **Quiénes Somos**: `app/components/QuienesSomos.tsx` - Línea 50
3. **Proyectos**: `app/components/Proyectos.tsx` - Cada proyecto tiene su campo `imagen`
4. **Contacto**: `app/components/Contacto.tsx` - Línea 9

Puedes:
- Colocar imágenes en `/public/images/` y referenciarlas como `/images/nombre.jpg`
- Usar URLs de servicios de imágenes (Cloudinary, Imgur, etc.)
- Usar Next.js Image Optimization con imágenes locales

## Colores y Estilos

Los colores principales están definidos en `tailwind.config.ts`:

- **Primary Dark**: `#0B1F33` (azul oscuro)
- **Accent**: `#F59E0B` (amarillo/mostaza)
- **Background Light**: `#F3F4F6` (gris claro)

Para cambiar la paleta, edita el archivo `tailwind.config.ts`.

## Textos Institucionales

Los textos principales están en:

- **Hero**: `app/components/Hero.tsx`
- **Quiénes Somos**: `app/components/QuienesSomos.tsx` (líneas 25-35)
- **Crecimiento**: `app/components/Crecimiento.tsx` (líneas 18-30)

## Métricas del Hero

Las métricas se encuentran en `app/components/Hero.tsx`, líneas 5-9. Puedes modificar el array `metrics` para cambiar los valores mostrados.

## Timeline de Crecimiento

Los hitos del crecimiento están en `app/components/Crecimiento.tsx`, en el array `hitos` (líneas 5-25).

