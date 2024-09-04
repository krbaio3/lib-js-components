// import { defineCustomElements } from '../../../../loader';
import { html }                 from 'lit';

export default {
  title: 'Design System/Atoms/Input',
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'text' },
    value: { control: 'text' },
    state: {
      options: ['success', 'error'],
      control: { type: 'select' }, // Automatically inferred when 'options' is defined
    },
    theme: {
      options: ['dark', 'light'],
      control: { type: 'radio' },
    },
  },
  loaders: [
    // async () => defineCustomElements(),
  ],
};

const Template = ({ type, value }) => html`<css-input type="${type}" value="${value}"></css-input>`;

export const Default = Template.bind({});

Default.args = {
  type: 'text',
  value: 'texto de prueba2',
};

export const Password = Template.bind({});
  Password.args = {
  type: 'password',
  value: 'password de prueba',
};

export const Email = Template.bind({});
Email.args = {
  type: 'email',
  value: 'ejemplo@midominio.com',
};


export const Number = Template.bind({});
Number.args = {
  type: 'number',
  value: '123456',
};

export const Date = Template.bind({});
Date.args = {
  type: 'date',
  value: '2021-01-01',
};

export const Time = Template.bind({});
Time.args = {
  type: 'time',
  value: '12:00',
};

export const DateTime = Template.bind({});
DateTime.args = {
  type: 'datetime-local',
  value: '2021-01-01T12:00',
};

export const Search = Template.bind({});
Search.args = {
  type: 'search',
  value: 'buscar',
};

export const Tel = Template.bind({});
Tel.args = {
  type: 'tel',
  value: '1234567890',
};

const DarkTemplate = ({ type, value, theme, state }) => html`<css-input type="${type}" value="${value}" theme="${theme}" state="${state}"></css-input>`;
export const Dark = DarkTemplate.bind({});
Dark.args = {

  type: 'text',
  value: 'Esto es un ejemplo',
};
