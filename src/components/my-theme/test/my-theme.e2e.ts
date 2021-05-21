import { newE2EPage } from '@stencil/core/testing';

describe('my-theme', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-theme></my-theme>');

    const element = await page.find('my-theme');
    expect(element).toHaveClass('hydrated');
  });
});
