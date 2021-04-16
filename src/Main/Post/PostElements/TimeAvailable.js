import React from 'react';

class PostTimeAvailable extends React.Component {

    render() {
        return (
            <div className="form-group">
                <h5>Time Available</h5>
                <div className="time-available">
                <p>FROM: </p><input type="time" className="form-control" id="time-available" placeholder="Time"></input>
                </div>
                <div className="time-available">
                <p>TO: </p><input type="time" className="form-control" id="time-available" placeholder="Time"></input>
                </div>
            </div>
        )
    }   
}

export default PostTimeAvailable;