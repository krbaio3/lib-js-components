export default {
  title: 'Design System/Atoms/Button',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
  },
  loaders: [
    async () => {
      return {};
    },
  ],
};

const Template = ({ label }) => `<css-button label="${label}"></css-button>`;

export const Default = Template.bind({});
Default.args = {
  label: 'Click me',
};
