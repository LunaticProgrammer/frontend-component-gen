import { Component, h ,Prop} from '@stencil/core';

@Component({
  tag: 'feedback-tag',
  styleUrl: 'feedback-tag.css',
  shadow: true,
})
export class FeedbackTag {
  @Prop() _id;
  
  orgId: string;

  
  heading: string;

 
  description: string;


  contactEmail?: string;

  category: string;
  feedmail:HTMLInputElement;
  feedcomment:HTMLInputElement;
  feeedservice:HTMLSelectElement;
  async submit (event){
    event.preventDefault();
    
   const data = {
      "contactEmail": this.feedmail.value,
      "description": this.feedcomment.value,
      "category": this.feeedservice.value,
  };
    
    //console.log(this.bugTitle.value);
    await fetch("http://84d0783fcbec.ngrok.io/feedback/create", {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json',
        'id':this._id
    }
   
    
}).then((response)=>{return response.json();}).then((data)=>{console.log(data)});
//console.log(response);
  }

  render() {
    return (
      <div class="containerr">
        <span class="form-name"> Konnex Feedback Form </span>
        <div>
        <div class="form-group">
          <h3>Email: </h3>
          <input
            type="email"
            name="customer"
            placeholder="Email of customer"
            ref={(el) => this.feedmail = el as HTMLInputElement}
          />
        </div>
        <div class="form-group">
          <h3>Service</h3>
          <select name="service"  ref={(el) => this.feeedservice = el as HTMLSelectElement}>
            <option value="">Select Types of Service</option>
            <option value="Entertainment, News and iCloud">Entertainment, News and iCloud</option>
            <option value="iOS and iPadOS Apps">iOS and iPadOS Apps
            </option>
            <option value="Hardware Products
            ">Hardware Products</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div class="form-group">
          <h3> Please Rate Your Experience (<span><i class="fa fa-star"></i></span>): </h3>
          <input type="radio" name="rating" value="1" /> 1 
          <input type="radio" name="rating" value="2" /> 2 
          <input type="radio" name="rating" value="3" /> 3 
          <input type="radio" name="rating" value="4" /> 4 
          <input type="radio" name="rating" value="5" checked/> 5  

        </div>
        <div class="form-group">
          <h3>Comments:</h3>
          <input
          type="text"
            name="comments"
            placeholder="Tell us about your experience"
            ref={(el) => this.feedcomment = el as HTMLInputElement}
          />
        </div>
        <button class="btn" onClick={(event)=>(this.submit(event))}>Submit</button>
        </div>
       
      </div>
    );
  }

}
