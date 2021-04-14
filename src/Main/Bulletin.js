import React from 'react';
import './css/Bulletin.css';
import Post from '../Main/Post/Post'

class Bulletin extends React.Component{
  
  constructor(props){
    super(props)

  }

  render() {
    return (
      <div className="bulletin col col-lg-10">
        <Post ShowPost = {this.props.ShowPost}/>
      </div>
    );
  }
}

export default Bulletin;