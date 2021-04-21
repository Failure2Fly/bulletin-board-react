import React from 'react';

class PostDescription extends React.Component {

    render() {
        return (
            <div className="form-group">
            <h5>Description</h5>
              <textarea className="form-control" rows="3" name="Post_Description" value={this.props.PostElement.Post_Description} onChange={this.props.handleChange}>
              </textarea>
          </div>
        )
    }   
}

export default PostDescription;