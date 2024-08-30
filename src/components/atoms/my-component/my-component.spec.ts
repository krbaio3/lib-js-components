import { newSpecPage } from '@stencil/core/testing';
import { MyComponent } from './css-component';

describe('css-component', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: '<css-component></css-component>',
    });
    expect(root).toEqualHtml(`
      <css-component>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </css-component>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: `<css-component first="Stencil" last="'Don't call me a framework' JS"></css-component>`,
    });
    expect(root).toEqualHtml(`
      <css-component first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </css-component>
    `);
  });
});
