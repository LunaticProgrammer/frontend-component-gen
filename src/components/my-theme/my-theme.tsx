import { Component,h, Prop } from '@stencil/core';

 
@Component({
  tag: 'my-theme',
  styleUrl: 'my-theme.css',
  shadow: false,
})
export class MyTheme {
  @Prop() _id;
  categ:string;
  fn1(){
    this.categ="UI";
  }
  fn2(){
    this.categ="Server";
  }
  bugTitle!: HTMLInputElement;
  bugDesc!: HTMLInputElement;
  bugEmail!: HTMLInputElement;
  
  async submit (event){
    event.preventDefault();
    var t1=this.categ;
    var t2=this.bugTitle.value;
    var t3=this.bugDesc.value;
    var t4=this.bugEmail.value;
  //  const data = {
  //     "category": this.categ,
  //     "description": this.bugDesc.value,
  //     "heading": this.bugTitle.value,
  //     "raisedEmail": this.bugEmail.value,
  // };
    
    console.log(this.bugTitle.value);
    await fetch("http://4e54551b65e5.ngrok.io/bug/create", {
    method: 'POST',
    body: JSON.stringify({}),
    headers: {
        'Content-Type': 'application/json',
        'id':this._id
    }
   
    
}).then((response)=>{return response.json();}).then((data)=>{console.log(data)});
//console.log(response);
  }

  render() {
    return (<div class="container">
      <h2>Want to report a BUG</h2>
      <div class="bug-type">
        <button onClick={()=>this.fn1()}>UI</button>
        <button onClick={()=>this.fn2()}>Functionality</button>
      </div>
      <div class="inputbug" >
      <input type="text" placeholder="Enter Heading" id="bug_title" ref={(el) => this.bugTitle = el as HTMLInputElement} />
      <input type="text" placeholder="Decribe the Bug"  ref={(el) => this.bugDesc = el as HTMLInputElement}/>
      </div>
      <div class="submission">
        <input type="email" placeholder="Enter your email to get notified" id="bug_email" ref={(el) => this.bugDesc = el as HTMLInputElement}/>
        <button onClick={(event)=>(this.submit(event))}>Submit</button>
      </div>

    </div>);
   
  }

}
