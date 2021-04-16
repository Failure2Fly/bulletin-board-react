import React from 'react';

class PostShiftTimeNeeded extends React.Component {

    render() {
        return (
            <div className="form-group">
                <h5>Shifts Available to Cover</h5>
            <div>
                <input type="datetime-local" className="form-control" id="Shifts-available" placeholder="Shifts Available to Cover"></input>
            </div>
                <button type="button">
                    Add Shift 
                </button> 
            </div>
        )
    }   
}

export default PostShiftTimeNeeded;