/** @type { import('@storybook/html').Preview } */

import { defineCustomElements } from '../loader';

defineCustomElements();

const preview: import('@storybook/html').Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  tags: ["autodocs"]
};

export default preview;
