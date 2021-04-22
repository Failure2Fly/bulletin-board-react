import React from 'react';

class PostJobDescription extends React.Component {

    render() {
        return (
            <div className="form-group">
            <h5>Job Requirements</h5>
              <textarea className="form-control" rows="3" name="Post_JobRequirements" value={this.props.PostElement.Post_JobRequirements} onChange={this.props.handleChange}>
              </textarea>
          </div>
        )
    }   
}

export default PostJobDescription;