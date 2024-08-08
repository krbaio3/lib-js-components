// const path = require('path');
//
// /** @type { import('@storybook/html-vite').StorybookConfig } */
// const config = {
//   stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
//
//   addons: [
//     '@storybook/addon-links',
//     '@storybook/addon-essentials',
//     '@chromatic-com/storybook',
//     // {
//     //   name: 'storybook-addon-stencil',
//     //   options: {
//     //     stencilOptions: {},
//     //   },
//     // },
//     '@storybook/addon-interactions',
//     '@storybook/addon-mdx-gfm'
//   ],
//
//   framework: {
//     name: '@storybook/web-components-vite',
//     options: {},
//   },
//
//   viteFinal: async (config, { configType }) => {
//     return {
//       ...config,
//       resolve: {
//         alias: {
//           '@': path.resolve(__dirname, '../src'),
//         },
//       },
//     };
//   },
//
//   docs: {}
// };
// export default config;

// --------
// import { defineConfig } from 'vite';
// import path from 'path';
// import { sass } from '@stencil/sass';
//
//
// /** @type { import('@storybook/html-vite').StorybookConfig } */
// const config = defineConfig({
//   stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
//   addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@chromatic-com/storybook', '@storybook/addon-interactions', '@storybook/addon-mdx-gfm'],
//   framework: {
//     name: '@storybook/web-components-vite',
//     options: {},
//   },
//   core: {
//     builder: '@storybook/builder-vite',
//   },
//   viteFinal: async (config, { configType }) => {
//     return {
//       ...config,
//       plugins: [sass()],
//       resolve: {
//         alias: {
//           '@': path.resolve(__dirname, '../src'),
//         },
//       },
//     };
//   },
//   docs: {},
// });
//
// export default config;
// -----

import { StorybookConfig } from '@storybook/web-components-vite';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@chromatic-com/storybook', '@storybook/addon-interactions', '@storybook/addon-mdx-gfm'],
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
