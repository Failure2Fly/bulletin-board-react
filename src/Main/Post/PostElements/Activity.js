import React from 'react';

class PostActivity extends React.Component {

    render() {
        return (
            <div className="form-group">
                <h5>Activity</h5>
                <input type="text" className="form-control" id="activity" placeholder="Activity"></input>
            </div>
        )
    }   
}

export default PostActivity;