import { newE2EPage } from '@stencil/core/testing';

describe('bot-tag', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bot-tag></bot-tag>');

    const element = await page.find('bot-tag');
    expect(element).toHaveClass('hydrated');
  });
});
