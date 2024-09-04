import { defineCustomElements } from '../../../../loader';

defineCustomElements();

export default {
  title: 'Atoms/Bitmap',
  tags: ['autodocs'],
  argTypes: {
    imgSrc: { control: 'text' },
    imgAlt: { control: 'text' },
  },
  // loaders: [
  //   async () => {
  //     await defineCustomElements();
  //     return {};
  //   },
  // ],
};

const Template = ({ imgSrc, imgAlt }) => `<css-bitmap img-src="${imgSrc}" img-alt="${imgAlt}"></css-bitmap>`;

export const Default = Template.bind({});
Default.args = {
  imgSrc: 'https://via.placeholder.com/150',
  imgAlt: 'imagen de prueba',
};
