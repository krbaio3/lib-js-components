import { defineCustomElements } from '../../../../loader';

export default {
  title: 'Atoms/Bitmap',
  tags: ['autodocs'],
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

const Template = ({ first, last }) => `<my-component first="${first}" last="${last}"></my-component>`;

export const Default = Template.bind({});
Default.args = {
  first: 'John',
  last: 'Doe',
};
