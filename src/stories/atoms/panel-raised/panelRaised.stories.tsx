// import { defineCustomElements } from '../../../../loader';

export default {
  title: 'Design System/Atoms/Panel Raised',
  tags: ['autodocs'],
  loaders: [
    async () => {
      // defineCustomElements();
      return {};
    },
  ],
};

const Template = () => '<my-panel-raised>Content inside a raised panel</my-panel-raised>';

export const Default = Template.bind({});
