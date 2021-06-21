import React from 'react';

export default function PostDate({setPostDate}){

    return (
        <div className="form-group">
            <h5>Date</h5>
                <input type="date" className="form-control" id="date" placeholder="Date" name="Post_Date" onChange={e => setPostDate(e.target.value)}></input>
        </div>
    )  
}
