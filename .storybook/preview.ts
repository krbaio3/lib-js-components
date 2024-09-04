/** @type { import('@storybook/html').Preview } */
// import '../src/styles.scss';

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
