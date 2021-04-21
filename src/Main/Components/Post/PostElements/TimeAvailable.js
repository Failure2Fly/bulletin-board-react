import React from 'react';

class PostTimeAvailable extends React.Component {

    render() {
        return (
            <div className="form-group">
                <h5>Time Available</h5>
                <div className="time-available">
                <p>FROM: </p><input type="time" className="form-control" id="time-available" placeholder="Time" name="Post_TimeAvailableFrom" value={this.props.PostElement.Post_TimeAvailableFrom} onChange={this.props.handleChange}></input>
                </div>
                <div className="time-available">
                <p>TO: </p><input type="time" className="form-control" id="time-available" placeholder="Time" name="Post_TimeAvailableTo" value={this.props.PostElement.Post_TimeAvailableTo} onChange={this.props.handleChange}></input>
                </div>
            </div>
        )
    }   
}

export default PostTimeAvailable;