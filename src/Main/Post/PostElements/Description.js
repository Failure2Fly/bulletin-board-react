import React from 'react';

class PostDescription extends React.Component {

    render() {
        return (
            <div className="form-group">
            <h5>Description</h5>
              <textarea className="form-control" rows="3">
              </textarea>
          </div>
        )
    }   
}

export default PostDescription;