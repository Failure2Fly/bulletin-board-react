import React from 'react';

class PostJobTitle extends React.Component {

    render() {
        return (
            <div className="form-group">
                <h5>Job Title</h5>
                <input type="text" className="form-control" id="job-title" placeholder="Job Title"></input>
            </div>
        )
    }   
}

export default PostJobTitle;