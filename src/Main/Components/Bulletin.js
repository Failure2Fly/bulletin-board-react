import React from 'react';
import './css/Bulletin.css';
import './Post/Post.css';
import PostComplete from "./Post/Posts/PostComplete";
class Bulletin extends React.Component{

  render() {
    return (
      <div className="bulletin col col-lg-10">
          <PostComplete PostComplete={this.props.PostInfo}/>
      </div>
    )
  }
}

export default Bulletin;