import React from 'react';

export default function PostJobTitle({setPostJobTitle}){

    return (
        <div className="form-group">
            <h5>Job Title</h5>
            <input type="text" className="form-control" id="job-title" placeholder="Job Title" name="Post_JobTitle" onChange={e => setPostJobTitle(e.target.value)}></input>
        </div>
    )  
}
