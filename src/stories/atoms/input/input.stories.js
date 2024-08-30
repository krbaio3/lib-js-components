import { defineCustomElements } from '../../../../loader';

export default {
  title: 'Atoms/Input',
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'text' },
    value: { control: 'text' },
  },
  loaders: [
    async () => {
      await defineCustomElements();
      return {};
    },
  ],
};

const Template = ({ type, value }) => ` <css-input type="${type}" value="${value}"></css-input>`;

export const Default = Template.bind({});

Default.args = {
  type: 'text',
  value: 'texto de prueba',
};

export const Password = Template.bind({
  type: 'password',
  value: 'password de prueba',
});

export const Email = Template.bind({
  type: 'email',
  value: 'ejemplo@midominio.com',
});

export const Number = Template.bind({
  type: 'number',
  value: '123456',
});

export const Date = Template.bind({
  type: 'date',
  value: '2021-01-01',
});

export const Time = Template.bind({
  type: 'time',
  value: '12:00',
});

export const DateTime = Template.bind({
  type: 'datetime-local',
  value: '2021-01-01T12:00',
});

export const Search = Template.bind({
  type: 'search',
  value: 'buscar',
});

export const Tel = Template.bind({
  type: 'tel',
  value: '1234567890',
});
