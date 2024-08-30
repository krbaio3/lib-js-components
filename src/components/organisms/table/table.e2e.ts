import { newE2EPage } from '@stencil/core/testing';

describe('css-table', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<css-table></css-table>');

    const element = await page.find('css-table');
    expect(element).toHaveClass('hydrated');
  });

  it('renders table headers and rows', async () => {
    const page = await newE2EPage();
    await page.setContent("<css-table headers=\"['Name', 'Age']\" rows=\"['['John', '30'], ['Jane', '25']']\"></css-table>");

    const headers = await page.findAll('css-table >>> th');
    expect(headers.length).toBe(2);
    expect(headers[0].textContent).toBe('Name');
    expect(headers[1].textContent).toBe('Age');

    const rows = await page.findAll('css-table >>> td');
    expect(rows.length).toBe(4);
    expect(rows[0].textContent).toBe('John');
    expect(rows[1].textContent).toBe('30');
    expect(rows[2].textContent).toBe('Jane');
    expect(rows[3].textContent).toBe('25');
  });
});
