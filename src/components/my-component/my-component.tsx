import { Component, Prop, h,ComponentWillLoad,  } from '@stencil/core';
import { format } from '../../utils/utils';
import Darkmode from 'darkmode-js';


@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  componentWillLoad(){
    fetch('https://run.mocky.io/v3/a6f57b3a-ec66-45ba-9011-6dafd7000b0f').then(response => response.json())
    .then(data => {
      console.log(data['toggle-theme']);
      console.log(data);
      
      if(data['toggle-theme'])
      {this.switcher();}
      
    });
    console.log(window.performance);
  }
  
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;


  private getText(): string {
    return format(this.first, this.middle, this.last);
  }
  switcher(){
    
    const darkmode =  new Darkmode();
    
    
    
    if(!darkmode.isActivated())
    {
      darkmode.toggle();
    }    
  }
  viewhide(){
    document.getElementsByClassName('radiobtn')[0].getRootNode().firstChild;
  }
  increaseFontSize(){
    var style=window.getComputedStyle(document.body,null).getPropertyValue('font-size');
    var currentsize=parseFloat(style);
    document.body.style.fontSize=(currentsize+1)+'px';
  }
  decreaseFontSize(){
    var style=window.getComputedStyle(document.body,null).getPropertyValue('font-size');
    var currentsize=parseFloat(style);
    document.body.style.fontSize=(currentsize-1)+'px';
  }
  
  @Prop() header: string;


  

  
//onClick={()=>this.switcher()}
  render() {
    return (
    
    <div class="access">
      <button class="button" onClick={()=>this.viewhide()} >Konnex {this.getText()}</button>
      <div class="radiobtn" id="modal">
      <input type='radio' name='a' onChange={this.switcher} />Dark
      <input type='radio' name='a' onChange={this.switcher} /> Light
      </div>
      <button onClick={()=>this.increaseFontSize()} class="fontsize">+</button>
      <button onClick={()=>this.decreaseFontSize()} class="fontsize"> -</button>
    
    </div>);
   
  }
}
