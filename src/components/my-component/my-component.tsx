import { Component, Prop, h,  } from '@stencil/core';

import Darkmode from 'darkmode-js';


@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: false,
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
  @Prop() _id;
  
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


  
  switcher(){
    
    const darkmode =  new Darkmode();
    
    
    
    if(!darkmode.isActivated())
    {
      darkmode.toggle();
    }    
  }
 
  increaseFontSize(){
    
    var style=window.getComputedStyle(document.body,null).getPropertyValue('font-size');
    var currentsize=parseFloat(style);
    document.body.style.fontSize=(currentsize+1)+'px';
    console.log(style);
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
      
      <div class="radiobtn">
      
      <button onClick={()=>this.switcher()} class="fontsize" >Switch Theme</button>
      </div>
      <div class="fontchange">
      <button onClick={()=>this.increaseFontSize()} class="fontsize">+</button>
      <button onClick={()=>this.decreaseFontSize()} class="fontsize"> -</button>
      </div>
    </div>);   
  }
}