import React from 'react';

export default function PostTime({setPostTime}){

    return (
        <div className="form-group">
            <h5>Time</h5>
                <input type="time" className="form-control" id="time" placeholder="Time" name="Post_Time" onChange={e => setPostTime(e.target.value)}></input>
        </div>
    )  
}
