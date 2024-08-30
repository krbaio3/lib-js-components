# Librería de WebComponents (ui-kit)

Este repositorio contiene una biblioteca de componentes web desarrollados con Stencil y Storybook, siguiendo la
metodología Atomic Design. Los componentes están organizados por niveles atómicos (átomos, moléculas, organismos, etc.)
para facilitar su desarrollo y mantenimiento.

## Estructura del Proyecto

- src/components: Contiene los componentes organizados en carpetas según su nivel de Atomic Design (atoms, molecules,
  organisms, etc.).
- src/stories: Contiene las historias de Storybook para cada componente, organizadas también por niveles de Atomic
  Design.
- styles/: Carpeta donde se encuentran los archivos SCSS, organizados por funcionalidad.
- src/utils/: Contiene utilidades que pueden ser utilizadas por los componentes.
- src/index.html: Archivo HTML principal.
- src/index.ts: Archivo TypeScript principal.
- src/styles.scss: Archivo de estilos principal.

## Scripts Disponibles

- npm run build: Construye el proyecto de Stencil.
- npm run watch: Construye y observa cambios en el proyecto.
- npm run start: Inicia el servidor de desarrollo.
- npm run test: Ejecuta las pruebas unitarias y de extremo a extremo.
- npm run generate: Genera un nuevo componente utilizando Stencil.
- npm run storybook: Inicia el servidor de Storybook para visualizar los componentes.
- npm run build-storybook: Genera una versión estática de Storybook para despliegue.
- npm run docker:build: Construye la imagen Docker para la CDN local.
- npm run docker:run: Ejecuta la imagen Docker para la CDN local.

## Guía de Desarrollo de Componentes

### Creación de un Nuevo Componente

Para añadir un nuevo componente a la biblioteca, sigue estos pasos:

1. Generación del Componente:

- Ejecuta el comando npm run generate y sigue las instrucciones para crear un nuevo componente.
- Coloca el nuevo componente dentro de su respectiva carpeta según el nivel de Atomic Design (src/components/atoms,
  src/components/molecules, etc.).

2. Archivos del Componente:

- <componente>.tsx: Componente Stencil.
- <componente>.scss: Estilos específicos del componente.
- <componente>.spec.ts: Pruebas unitarias para el componente.
- <componente>.e2e.ts: Pruebas de extremo a extremo.
- readme.md: Documentación del componente.

3. Estilos:

- Añade los estilos específicos del componente en el archivo .scss correspondiente dentro de la carpeta styles.

4. Storybook:
   Crea una nueva historia para el componente en src/stories, siguiendo la misma organización de Atomic Design.
   La historia debe ser exportada como un archivo .stories.tsx.

### Ejemplo de Storybook para un Componente

```tsx
import { defineCustomElements } from '../../../../loader';

export default {
  title: 'Atoms/Bitmap',
  tags: [ 'autodocs' ],
  argTypes: {
    first: { control: 'text' },
    last: { control: 'text' },
  },
  loaders: [
    async () => {
      await defineCustomElements();
      return {};
    },
  ],
};

const Template = ({ first, last }) => `<my-component first="${ first }" last="${ last }"></my-component>`;

export const Default = Template.bind( {} );
Default.args = {
  first: 'John',
  last: 'Doe',
};
```

## Despliegue y Uso de la CDN Local

Para simular una CDN local, se ha configurado un contenedor Docker con NGINX. Puedes construir y ejecutar la CDN local
con los siguientes comandos:

1. Construir la imagen Docker:

```bash
npm run docker:build
```

2. Ejecutar la imagen Docker:

```bash
npm run docker:run
```

La CDN local estará disponible en http://localhost:5000.