import { defineCustomElements } from '../../../../loader';

export default {
  title: 'Atoms/Button',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
  },
  loaders: [
    async () => {
      await defineCustomElements();
      return {};
    },
  ],
};

const Template = ({ label }) => `<css-button label="${label}"></css-button>`;

export const Default = Template.bind({});
Default.args = {
  label: 'Click me',
};
