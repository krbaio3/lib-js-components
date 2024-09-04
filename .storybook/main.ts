/** @type { import('@storybook/html-vite').StorybookConfig } */
import { StorybookConfig } from '@storybook/web-components-vite';
import path from 'path';
import { defineCustomElements } from '../loader';
import tailwind     from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import cssnanoPlugin from 'cssnano';
import postcssPurgeCss from '@fullhuman/postcss-purgecss';

defineCustomElements();

const purgeCss = postcssPurgeCss({
  content: ["./src/**/*.tsx", "./src/**/*.css", "./src/index.html"],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    {
      name: "storybook-addon-stencil",
      options: {
        stencilOptions: {},
      },
    },
  ],

  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  core: {
    builder: '@storybook/builder-vite',
  },
  viteFinal: async (config) => {
    return {
      ...config,
      build: {
        sourcemap: false,  // Desactiva la generación de sourcemaps
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '../src'),
        },
      },
      optimizeDeps: {
        include: ['lit'],  // Asegura que Vite optimice y resuelva correctamente lit
      },
      css: {
        postcss: {
          plugins: [
            tailwind,
            autoprefixer,
            ...(process.env.NODE_ENV === "production"
              ? [purgeCss, cssnanoPlugin({ preset: 'default' })]
              : [])
          ],
        },
        preprocessorOptions: {
          scss: {
            additionalData: `@import "src/styles.scss";`, // Importa los estilos globales SCSS
          },
        },
      },
      logLevel: 'info', // Establece el nivel de log a "info"
    };
  },
  docs: {},
};

export default config;
