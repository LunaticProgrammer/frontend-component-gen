import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'main-tag',
  styleUrl: 'main-tag.css',
  shadow: false,
})

export class MainTag {
  @State() swi:boolean = false;
  @Prop() _id;
  viewhide(){
    if(this.swi==false){
  document.getElementById('modal').style.display='none';
  document.getElementById('one').style.display = "none";
  document.getElementById('two').style.display="none";
  document.getElementById('three').style.display="none";
  this.swi = !this.swi
}else{
  document.getElementById('modal').style.display='flex';
  this.swi = !this.swi

}
  }
  openCompo(cName){
    
  if(cName=='one')
  {
    document.getElementById('one').style.display = "block";
    document.getElementById('two').style.display="none";
    document.getElementById('three').style.display="none";

    console.log(document.getElementById('one'))  ;
  }
  
  if(cName=='two')
  {
    document.getElementById(cName).style.display = "block";
    document.getElementById('one').style.display="none";
    document.getElementById('three').style.display="none";
      
  }
 
  if(cName=='three')
  {
    document.getElementById(cName).style.display = "block";
    document.getElementById('two').style.display="none";
    document.getElementById('one').style.display="none";
      
  }
  
  console.log(cName);
  
  }

  render() {
    return (
      <div>
        <button class="button btn" onClick={()=>(this.viewhide())} >Konnex </button>
        {/* <div id="modal">
        <my-component></my-component>
        <my-theme></my-theme>
        </div> */}
        <div id="modal" style={{display:'none'}}>
        <div class="w3-bar w3-black">
          <button class="w3-bar-item w3-button" onClick={()=>(this.openCompo('one'))}>Themes</button>
          <button class="w3-bar-item w3-button" onClick={()=>(this.openCompo('two'))}>Report Bug</button>
          <button class="w3-bar-item w3-button" onClick={()=>(this.openCompo('three'))}>Feedback</button>
        </div>
        </div>
        <div id="one" class="center" style={{display:'none'}}>
          <my-component class="text-center" _id={this._id}></my-component>
        </div>
        <div id="two" class="center" style={{display:'none'}}>
         <my-theme></my-theme>
        </div>
        <div id="three" class="text-center" style={{display:'none'}}>
          <feedback-tag></feedback-tag>
         
        </div>

      </div>
    );
  }

}
