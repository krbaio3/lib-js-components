import { defineCustomElements } from '../../../../loader';

export default {
  title: 'Components/Panel Raised',
  tags: ['autodocs'],
  loaders: [
    async () => {
      await defineCustomElements();
      return {};
    },
  ],
};

const Template = () => '<my-panel-raised>Content inside a raised panel</my-panel-raised>';

export const Default = Template.bind({});
