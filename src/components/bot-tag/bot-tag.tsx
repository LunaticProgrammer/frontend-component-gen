import { Component,Prop, h } from '@stencil/core';


@Component({
  tag: 'bot-tag',
  styleUrl: 'bot-tag.css',
  shadow: false,
})
export class BotTag {
  @Prop() _id;
botinput!:HTMLInputElement;


  render() {
    return (<div class="container">
      <iframe src="http://127.0.0.1:5000/" frameborder="0" style={{height:'500px', width:'500px'}}></iframe>

    </div>);
  }

}
