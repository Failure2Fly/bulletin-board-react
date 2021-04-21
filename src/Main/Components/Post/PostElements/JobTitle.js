import React from 'react';

class PostJobTitle extends React.Component {

    render() {
        return (
            <div className="form-group">
                <h5>Job Title</h5>
                <input type="text" className="form-control" id="job-title" placeholder="Job Title" name="Post_JobTitle" value={this.props.PostElement.Post_JobTitle} onChange={this.props.handleChange}></input>
            </div>
        )
    }   
}

export default PostJobTitle;