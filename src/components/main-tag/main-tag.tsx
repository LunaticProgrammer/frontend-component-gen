import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'main-tag',
  styleUrl: 'main-tag.css',
  shadow: false,
})

export class MainTag {
  @State() swi:boolean = false;
  @Prop() _id;

  @Prop() _hs1;
  @Prop() _hs2: boolean;
  @Prop() hs3: boolean;
  @Prop() hs4:boolean;

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
    document.getElementById('four').style.display="none";

    console.log(document.getElementById('one'))  ;
  }
  
  if(cName=='two')
  {
    document.getElementById(cName).style.display = "block";
    document.getElementById('one').style.display="none";
    document.getElementById('three').style.display="none";
    document.getElementById('four').style.display="none";
      
  }
 
  if(cName=='three')
  {
    document.getElementById(cName).style.display = "block";
    document.getElementById('two').style.display="none";
    document.getElementById('one').style.display="none";
    document.getElementById('four').style.display="none";
      
  }
  if(cName=='four')
  {
    document.getElementById('three').style.display = "none";
    document.getElementById('two').style.display="none";
    document.getElementById('one').style.display="none";
    document.getElementById('four').style.display="block";
      
  }
  console.log(cName);
  
  }

  render() { {console.log(this._hs2)}
    return (
      <div class="overflow-hidden">
        <button class="button btn" onClick={()=>(this.viewhide())} >Konnex </button>
        
        <div id="modal" style={{display:'none'}}>
        <div class="w3-bar w3-black">
      
         <button class="w3-bar-item w3-button" onClick={()=>(this.openCompo('one'))}>Themes</button>

         <button class="w3-bar-item w3-button" onClick={()=>(this.openCompo('two'))}>Report Bug</button>
        
         <button class="w3-bar-item w3-button" onClick={()=>(this.openCompo('three'))}>Feedback</button>
       
         <button class="w3-bar-item w3-button" onClick={()=>(this.openCompo('four'))}>Chat</button>
                 
        </div>
        </div>
     {/*   <div id="one" class="center" style={{display:'none'}}>
         {this._hs1 ? (
        <my-component class="text-center" _id={this._id}></my-component>
        ) : (
          <my-component class="text-center" _id={this._id} style={{visibility:'hidden'}}></my-component>
        )}  
        </div>
        <div id="two" class="center" style={{display:'none'}}>
        
         {this._hs2 ? (
         <my-theme _id={this._id}></my-theme>
        ) : (
          <my-theme  _id={this._id} style={{visibility:'hidden'}}></my-theme>
        )}
        </div>
        <div id="three" class="text-center" style={{display:'none'}}>
        {this.hs3 ? (
        <feedback-tag _id={this._id}></feedback-tag>
        ) : (
          <feedback-tag  _id={this._id} style={{visibility:'hidden'}}></feedback-tag>
        )}
        </div>
        <div id="four" class="text-center" style={{display:'none'}}>
        {this.hs4 ? (
       <bot-tag _id={this._id}></bot-tag>
        ) : (
          <bot-tag  _id={this._id} style={{visibility:'hidden'}}></bot-tag>
        )} */}


        <div id="one" class="center" style={{display:'none'}}>
          <my-component class="text-center" _id={this._id}></my-component></div>
        <div id="two" class="center" style={{display:'none'}}>
          <my-theme _id={this._id}></my-theme></div>
        <div id="three" class="text-center" style={{display:'none'}}>
          <feedback-tag _id={this._id}></feedback-tag></div>
        <div id="four" class="text-center" style={{display:'none'}}>
          <bot-tag _id={this._id}></bot-tag></div>
        </div>

    );
  }

}
