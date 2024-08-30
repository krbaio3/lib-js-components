import { newE2EPage } from '@stencil/core/testing';

describe('css-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<css-button></css-button>');

    const element = await page.find('css-button');
    expect(element).toHaveClass('hydrated');
  });

  it('renders with correct label', async () => {
    const page = await newE2EPage();
    await page.setContent('<css-button label="Click me"></css-button>');

    const button = await page.find('css-button >>> button');
    expect(button.textContent).toBe('Click me');
  });
});
