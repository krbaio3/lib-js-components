import { newE2EPage } from '@stencil/core/testing';

describe('css-checkbox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<css-checkbox></css-checkbox>');

    const element = await page.find('css-checkbox');
    expect(element).toHaveClass('hydrated');
  });

  it('renders with correct label', async () => {
    const page = await newE2EPage();
    await page.setContent('<css-checkbox label="Check me"></css-checkbox>');

    const label = await page.find('css-checkbox >>> label');
    expect(label.textContent).toBe('Check me');
  });

  it('can be checked', async () => {
    const page = await newE2EPage();
    await page.setContent('<css-checkbox checked></css-checkbox>');

    const input = await page.find('css-checkbox >>> input');
    expect(input).toHaveAttribute('checked');
  });
});
