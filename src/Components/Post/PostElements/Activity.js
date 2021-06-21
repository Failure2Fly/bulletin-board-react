import React from 'react';

export default function PostActivity({setPostActivity}){

    return (
        <div className="form-group">
            <h5>Activity</h5>
            <input type="text" className="form-control" id="activity" placeholder="Activity" name="Post_Game" onChange={e => setPostActivity(e.target.value)}></input>
        </div>
    )  
}
