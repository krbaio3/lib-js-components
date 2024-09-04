import { newSpecPage } from '@stencil/core/testing';
import { Input }       from './Input';

describe('css-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Input],
      html: `<css-input></css-input>`,
    });
    expect(page.root).toEqualHtml(`
      <css-input>
        <mock:shadow-root>
          <input class="css-input" type="text">
        </mock:shadow-root>
      </css-input>
    `);
  });

  it('renders with correct value', async () => {
    const page = await newSpecPage({
      components: [Input],
      html: `<css-input value="Default text"></css-input>`,
    });
    expect(page.root.shadowRoot.querySelector('input').getAttribute('value')).toBe('Default text');
  });
});
