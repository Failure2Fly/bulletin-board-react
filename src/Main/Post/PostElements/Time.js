import React from 'react';

class PostTime extends React.Component {

    render() {
        return (
            <div className="form-group">
                <h5>Time</h5>
                    <input type="time" className="form-control" id="time" placeholder="Time"></input>
            </div>
        )
    }   
}

export default PostTime;