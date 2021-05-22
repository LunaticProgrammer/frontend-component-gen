import { newE2EPage } from '@stencil/core/testing';

describe('main-tag', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<main-tag></main-tag>');

    const element = await page.find('main-tag');
    expect(element).toHaveClass('hydrated');
  });
});
