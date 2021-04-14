import React from 'react';
import './Post.css';

  
  class Post extends React.Component {
  
    constructor(props){
      super(props)
    }

    hidePost = e => {
      this.props.ShowPost.show = false;
      this.setState({

      });
    };
  
    render() {
      if (!this.props.ShowPost.show){
        return null
      }
      else {
        return (
        <div className="Post-full">
        <form>
          <div className="form-group">
            <label htmlFor="exampleFormControlFile1"></label>
            <h5>{this.props.ShowPost.Post_Title}</h5>
              <input type="file" className="form-control-file" id="exampleFormControlFile1"></input>
          </div>
          <div className="form-group">
            <h5>{this.props.ShowPost.PostDescription}</h5>
              <textarea className="form-control" rows="3">
              </textarea>
          </div>
          <div className="form-group">
            <h5>{this.props.ShowPost.PostEmail}</h5>
            <input type="email" className="form-control" id="emailAddress" placeholder="Email"></input>
          </div>
          <div className="form-group">
          <h5>{this.props.ShowPost.PostPhoneNumber}</h5>
            <input type="phoneNumber" className="form-control" id="phoneNumber" placeholder="Phone Number"></input>
          </div>
        </form>
        <button>
          Submit 
        </button> 
        <button
        onClick={e => {
          this.hidePost()}}
        >
          Close 
        </button>    
        </div>
        );
      }
    }
  }

 export default Post;
