import { newE2EPage } from '@stencil/core/testing';

describe('css-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<css-input></css-input>');

    const element = await page.find('css-input');
    expect(element).toHaveClass('hydrated');
  });

  it('renders with correct value', async () => {
    const page = await newE2EPage();
    await page.setContent('<css-input value="Default text"></css-input>');

    const input = await page.find('css-input >>> input');
    expect(input.getAttribute('value')).toBe('Default text');
  });
});
