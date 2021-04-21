import React from 'react';

class PostShiftTimeNeeded extends React.Component {

    render() {
        return (
            <div className="form-group">
                <h5>Shift Needing Covered</h5>
                    <input type="datetime-local" className="form-control" id="shift-needed" placeholder="Shift Needing Covered" name="Post_ShiftTimeNeeded" value={this.props.PostElement.Post_ShiftTimeNeeded} onChange={this.props.handleChange}></input>
            </div>
        )
    }   
}

export default PostShiftTimeNeeded;