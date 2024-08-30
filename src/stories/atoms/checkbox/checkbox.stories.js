import { defineCustomElements } from '../../../../loader';

export default {
  title: 'Atoms/Checkbox',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
  },
  loaders: [
    async () => {
      await defineCustomElements();
      return {};
    },
  ],
};

const Template = ({ label, checked }) => `<css-checkbox label="${label}" checked="${checked}"></css-checkbox>`;

export const Default = Template.bind({});
Default.args = {
  label: 'Check me',
  checked: false,
};

export const Checked = Template.bind({});
Checked.args = {
  label: 'Checked',
  checked: true,
};
