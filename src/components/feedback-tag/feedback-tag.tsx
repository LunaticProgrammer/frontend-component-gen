import { Component, h ,Prop} from '@stencil/core';

@Component({
  tag: 'feedback-tag',
  styleUrl: 'feedback-tag.css',
  shadow: true,
})
export class FeedbackTag {
  @Prop() _id;

  render() {
    return (
      <div class="containerr">
        <span class="form-name"> Konnex Feedback Form </span>
        <form action="/submit" method="POST">
        <div class="form-group">
          <h3>Name: </h3>
          <input
            type="text"
            name="customer"
            placeholder="Name of customer"
          />
        </div>
        <div class="form-group">
          <h3>Service</h3>
          <select name="service">
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
          <textarea
            name="comments"
            placeholder="Tell us about your experience"
          ></textarea>
        </div>
        <input type="submit" value="submit" class="btn" />
        </form>
       
      </div>
    );
  }

}
