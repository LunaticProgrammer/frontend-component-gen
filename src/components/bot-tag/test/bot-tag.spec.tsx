import { newSpecPage } from '@stencil/core/testing';
import { BotTag } from '../bot-tag';

describe('bot-tag', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BotTag],
      html: `<bot-tag></bot-tag>`,
    });
    expect(page.root).toEqualHtml(`
      <bot-tag>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bot-tag>
    `);
  });
});
