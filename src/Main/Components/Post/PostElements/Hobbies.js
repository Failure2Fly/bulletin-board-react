import React from 'react';

class PostHobbies extends React.Component {

    render() {
        return (
            <div className="form-group">
            <h5>Hobbies</h5>
              <textarea className="form-control" rows="3" name="Post_Hobbies" value={this.props.PostElement.Post_Hobbies} onChange={this.props.handleChange}>
              </textarea>
          </div>
        )
    }   
}

export default PostHobbies;