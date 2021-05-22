import { newE2EPage } from '@stencil/core/testing';

describe('feedback-tag', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<feedback-tag></feedback-tag>');

    const element = await page.find('feedback-tag');
    expect(element).toHaveClass('hydrated');
  });
});
