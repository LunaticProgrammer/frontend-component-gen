import { newSpecPage } from '@stencil/core/testing';
import { MainTag } from '../main-tag';

describe('main-tag', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MainTag],
      html: `<main-tag></main-tag>`,
    });
    expect(page.root).toEqualHtml(`
      <main-tag>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </main-tag>
    `);
  });
});
