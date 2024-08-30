import { newSpecPage } from '@stencil/core/testing';
import { Checkbox } from './Checkbox';

describe('css-checkbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Checkbox],
      html: `<css-checkbox></css-checkbox>`,
    });
    expect(page.root).toEqualHtml(`
      <css-checkbox>
        <mock:shadow-root>
          <label class="css-checkbox">
            <input type="checkbox">
          </label>
        </mock:shadow-root>
      </css-checkbox>
    `);
  });

  it('renders with correct label', async () => {
    const page = await newSpecPage({
      components: [Checkbox],
      html: `<css-checkbox label="Check me"></css-checkbox>`,
    });
    expect(page.root.shadowRoot.querySelector('label').textContent).toBe('Check me');
  });

  it('can be checked', async () => {
    const page = await newSpecPage({
      components: [Checkbox],
      html: `<css-checkbox checked></css-checkbox>`,
    });
    expect(page.root.shadowRoot.querySelector('input')).toHaveAttribute('checked');
  });
});
