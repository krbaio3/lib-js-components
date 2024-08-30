import { newSpecPage } from '@stencil/core/testing';
import { PanelRaised } from './PanelRaised';

describe('css-panel-raised', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PanelRaised],
      html: `<css-panel-raised></css-panel-raised>`,
    });
    expect(page.root).toEqualHtml(`
      <css-panel-raised>
        <mock:shadow-root>
          <div class="panel-raised">
            <slot></slot>
          </div>
        </mock:shadow-root>
      </css-panel-raised>
    `);
  });

  it('renders content inside the panel', async () => {
    const page = await newSpecPage({
      components: [PanelRaised],
      html: `<css-panel-raised>Test content</css-panel-raised>`,
    });
    expect(page.root.shadowRoot.querySelector('div').textContent).toBe('Test content');
  });
});
