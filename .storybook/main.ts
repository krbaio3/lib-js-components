import { StorybookConfig } from '@storybook/web-components-vite';
import path from 'path';
import { defineCustomElements } from '../loader';

defineCustomElements(); // Registra todos los web components de Stencil

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-mdx-gfm',
    'storybook-addon-stencil',
    {
      name: 'storybook-addon-stencil',
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
  viteFinal: async config => {
    return {
      ...config,
      // plugins: [sass()],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '../src'),
        },
      },
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: `@import "src/styles.scss";`, // Importa los estilos globales SCSS
          },
        },
      },
    };
  },
  docs: {},
};

export default config;
