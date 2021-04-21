import React from 'react';


class PostComplete extends React.Component{
  
  render() {
    return (
        <div className="post-complete">
            <div className="form-group post-title">
                <h2>{this.props.PostComplete.Post_Title}</h2>
            </div>
            <div className="post-inputs">
                <div>{this.props.PostComplete.Post_Image}</div>
                <div>{this.props.PostComplete.Post_Description}</div>
                <div>{this.props.PostComplete.Post_Email}</div>
                <div>{this.props.PostComplete.Post_PhoneNumber}</div>
                <div>{this.props.PostComplete.Post_Reward}</div>
                <div>{this.props.PostComplete.Post_Game}</div>
            </div>
        </div>
    )
  }
}

export default PostComplete;








