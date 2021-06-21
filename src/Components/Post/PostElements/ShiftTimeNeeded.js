import React from 'react';

export default function PostShiftTimeNeeded({setPostShiftTimeNeeded}){

    return (
        <div className="form-group">
            <h5>Shift Needing Covered</h5>
            <input type="datetime-local" className="form-control" id="shift-needed" placeholder="Shift Needing Covered" name="Post_ShiftTimeNeeded" onChange={e => setPostShiftTimeNeeded(e.target.value)}></input>
        </div>
    ) 
}