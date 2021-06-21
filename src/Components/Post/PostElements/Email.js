import React from 'react';

export default function PostEmail({setPostEmail}) {

    return (
        <div className="form-group">
            <h5>Email</h5>
            <input type="email" className="form-control" id="emailAddress" placeholder="Email" name="Post_Email" onChange={e => setPostEmail(e.target.value)}></input>
        </div>
    )
}
