import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'bot-tag',
  styleUrl: 'bot-tag.css',
  shadow: true,
})
export class BotTag {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
