import { newSpecPage } from '@stencil/core/testing';
import { Bitmap } from './Bitmap';

describe('css-bitmap', () => {
  it('renders with default values', async () => {
    const page = await newSpecPage({
      components: [Bitmap],
      html: `<css-bitmap></css-bitmap>`,
    });
    expect(page.root).toEqualHtml(`
      <css-bitmap>
        <shadow-root>
          <img src="" alt="" />
        </shadow-root>
      </css-bitmap>
    `);
  });

  it('renders with provided values', async () => {
    const page = await newSpecPage({
      components: [Bitmap],
      html: `<css-bitmap icon-path="path/to/icon.png" icon-alt="Icon description"></css-bitmap>`,
    });
    expect(page.root).toEqualHtml(`
      <css-bitmap icon-path="path/to/icon.png" icon-alt="Icon description">
        <shadow-root>
          <img src="path/to/icon.png" alt="Icon description" />
        </shadow-root>
      </css-bitmap>
    `);
  });
});
