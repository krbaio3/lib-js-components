export default {
  title: 'Design System/Atoms/Bitmap',
  tags: ['autodocs'],
  argTypes: {
    imgSrc: { control: 'text' },
    imgAlt: { control: 'text' },
  },
};

const Template = ({ imgSrc, imgAlt }) => `<css-bitmap img-src="${imgSrc}" img-alt="${imgAlt}"></css-bitmap>`;

export const Default = Template.bind({});
Default.args = {
  imgSrc: 'https://loremflickr.com/150/150/cat',
  imgAlt: 'imagen de prueba',
};
