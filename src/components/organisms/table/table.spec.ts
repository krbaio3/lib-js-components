import { newSpecPage } from '@stencil/core/testing';
import { Table } from './Table';

describe('css-table', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Table],
      html: `<css-table></css-table>`,
    });
    expect(page.root).toEqualHtml(`
      <css-table>
        <mock:shadow-root>
          <table class="css-table">
            <thead>
              <tr></tr>
            </thead>
            <tbody></tbody>
          </table>
        </mock:shadow-root>
      </css-table>
    `);
  });

  it('renders table headers and rows', async () => {
    const page = await newSpecPage({
      components: [Table],
      html: `<css-table headers='["Name", "Age"]' rows='[["John", "30"], ["Jane", "25"]]'></css-table>`,
    });
    expect(page.root.shadowRoot.querySelectorAll('th').length).toBe(2);
    expect(page.root.shadowRoot.querySelectorAll('td').length).toBe(4);
  });
});
