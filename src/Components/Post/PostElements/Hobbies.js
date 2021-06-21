import React from 'react';

export default function PostHobbies({setPostHobbies}){

    return (
        <div className="form-group">
        <h5>Hobbies</h5>
            <textarea className="form-control" rows="3" name="Post_Hobbies" onChange={e => setPostHobbies(e.target.value)}>
            </textarea>
        </div>
    ) 
}