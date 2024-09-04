import { defineCustomElements } from '../../../../loader';

export default {
  title: 'Design System/Organism/Table',
  tags: ['autodocs'],
  argTypes: {
    headers: { control: 'array' },
    rows: { control: 'array' },
  },
  loaders: [
    async () => {
      await defineCustomElements();
      return {};
    },
  ],
};

const Template = ({ headers, rows }) => `<my-table headers='${JSON.stringify(headers)}' rows='${JSON.stringify(rows)}'></my-table>`;

export const Default = Template.bind({});
Default.args = {
  headers: ['Name', 'Age'],
  rows: [['John', '30'], ['Jane', '25']],
};
