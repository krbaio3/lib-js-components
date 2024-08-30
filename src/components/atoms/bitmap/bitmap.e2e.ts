import { newE2EPage } from '@stencil/core/testing';

describe('css-bitmap', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<css--bitmap></css--bitmap>');

    const element = await page.find('css--bitmap');
    expect(element).toHaveClass('hydrated');
  });

  it('renders an image with src and alt attributes', async () => {
    const page = await newE2EPage();
    await page.setContent('<css--bitmap icon-path="path/to/icon.png" icon-alt="Icon description"></css--bitmap>');

    const img = await page.find('css--bitmap >>> img');
    expect(img.getAttribute('src')).toBe('path/to/icon.png');
    expect(img.getAttribute('alt')).toBe('Icon description');
  });
});
