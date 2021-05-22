import { newSpecPage } from '@stencil/core/testing';
import { FeedbackTag } from '../feedback-tag';

describe('feedback-tag', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FeedbackTag],
      html: `<feedback-tag></feedback-tag>`,
    });
    expect(page.root).toEqualHtml(`
      <feedback-tag>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </feedback-tag>
    `);
  });
});
