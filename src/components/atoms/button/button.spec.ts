import { newSpecPage } from '@stencil/core/testing';
import { Button } from './Button';

describe('css-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<css-button></css-button>`,
    });
    expect(page.root).toEqualHtml(`
      <css-button>
        <mock:shadow-root>
          <button class="css-button"></button>
        </mock:shadow-root>
      </css-button>
    `);
  });

  it('renders with correct label', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<css-button label="Click me"></css-button>`,
    });
    expect(page.root.shadowRoot.querySelector('button').textContent).toBe('Click me');
  });
});
