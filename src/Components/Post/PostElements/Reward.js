import React from 'react';

export default function PostReward({setPostReward}){

    return (
        <div className="form-group">
            <h5>Reward</h5>
            <input type="text" className="form-control" id="reward" placeholder="Reward" name="Post_Reward" onChange={e => setPostReward(e.target.value)}></input>
        </div>
    )
 
}
