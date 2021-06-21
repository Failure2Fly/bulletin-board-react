import React from 'react';

export default function PostShiftTimeAvailable({setPostShiftTimeAvailable}){

    return (
        <div className="form-group">
            <h5>Shifts Available to Cover</h5>
        <div>
            <input type="datetime-local" className="form-control" id="Shifts-available" placeholder="Shifts Available to Cover" name="Post_ShiftTimeAvailable1" onChange={e => setPostShiftTimeAvailable(e.target.value)}></input>
        </div>
            <button type="button">
                Add Shift 
            </button> 
        </div>
    )  
}
