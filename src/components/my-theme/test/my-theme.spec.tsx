import { newSpecPage } from '@stencil/core/testing';
import { MyTheme } from '../my-theme';

describe('my-theme', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyTheme],
      html: `<my-theme></my-theme>`,
    });
    expect(page.root).toEqualHtml(`
      <my-theme>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-theme>
    `);
  });
});
