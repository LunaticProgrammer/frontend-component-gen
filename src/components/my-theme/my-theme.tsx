import { Component,h } from '@stencil/core';
 
@Component({
  tag: 'my-theme',
  styleUrl: 'my-theme.css',
  shadow: true,
})
export class MyTheme {
  visible: boolean= false;
  display(){
    this.visible=true;

  }

  render() {
    return (<div class="container">
      <h2>Want to report a BUG</h2>
      <div class="bug-type">
        <button onClick={()=>this.display()}>UI</button>
        <button>Functionality</button>
      </div>
      <div class="inputbug" >
      <input type="text" placeholder="Enter Heading"/>
      <textarea placeholder="Decribe the Bug"></textarea>
      </div>
      <div class="submission">
        <input type="email" placeholder="Enter your email to get notified"/>
        <button>Submit</button>
      </div>

    </div>);
   
  }

}
