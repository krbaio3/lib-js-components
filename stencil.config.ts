import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import autoprefixer from 'autoprefixer';
import postcss from 'postcss';
import tailwind from 'stencil-tailwind-plugin';
import postcssImport from 'postcss-import';
import postcssPurgeCss from '@fullhuman/postcss-purgecss';
import tailwindConf from './tailwind.config';
import cssnanoPlugin from 'cssnano';

const purgeCss = postcssPurgeCss({
  content: ["./src/**/*.tsx", "./src/**/*.css", "./src/index.html"],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

export const config: Config = {
  namespace: 'toy-story',
  plugins: [
    sass(),
    tailwind({tailwindConf}),
    postcss([
      postcssImport(),
      autoprefixer(),
      ...(process.env.NODE_ENV === "production"
        ? [purgeCss, cssnanoPlugin({ preset: 'default' })]
        : [])
    ]),
  ],
  cacheDir: '.cache',
  srcDir: 'src',
  globalStyle: 'src/styles.scss',
  outputTargets: [
    {
      type: 'dist',
      dir: 'static-files',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'docs-json',
      file: 'custom-elements.json', // Especifica el nombre y la ubicación del archivo JSON
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserHeadless: "new",
  },
  devServer: {
    openBrowser: false,
    reloadStrategy: 'pageReload', // Esto asegurará que la página se recargue cuando haya cambios en los estilos
  },
};
