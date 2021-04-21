import React from 'react';

class PostShiftTimeNeeded extends React.Component {

    render() {
        return (
            <div className="form-group">
                <h5>Shifts Available to Cover</h5>
            <div>
                <input type="datetime-local" className="form-control" id="Shifts-available" placeholder="Shifts Available to Cover" name="Post_ShiftTimeAvailable1" value={this.props.PostElement.Post_ShiftTimeAvailable1} onChange={this.props.handleChange}></input>
            </div>
                <button type="button">
                    Add Shift 
                </button> 
            </div>
        )
    }   
}

export default PostShiftTimeNeeded;