import React from 'react';

export default function PostDescription({setPostDescription}){

    return (
        <div className="form-group">
        <h5>Description</h5>
            <textarea className="form-control" rows="3" name="PostDescription" onChange={e => setPostDescription(e.target.value)}>
            </textarea>
        </div>
    )
   
}
