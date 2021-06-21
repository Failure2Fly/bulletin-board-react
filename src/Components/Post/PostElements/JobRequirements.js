import React from 'react';

export default function PostJobRequirements({setPostJobRequirements}){

    return (
        <div className="form-group">
        <h5>Job Requirements</h5>
            <textarea className="form-control" rows="3" name="Post_JobRequirements" onChange={e => setPostJobRequirements(e.target.value)}>
            </textarea>
        </div>
    )  
}
