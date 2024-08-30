import { newE2EPage } from '@stencil/core/testing';

describe('css-panel-raised', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<css-panel-raised></css-panel-raised>');

    const element = await page.find('css-panel-raised');
    expect(element).toHaveClass('hydrated');
  });

  it('renders content inside the panel', async () => {
    const page = await newE2EPage();
    await page.setContent('<css-panel-raised>Test content</css-panel-raised>');

    const element = await page.find('css-panel-raised >>> div');
    expect(element.textContent).toBe('Test content');
  });
});
