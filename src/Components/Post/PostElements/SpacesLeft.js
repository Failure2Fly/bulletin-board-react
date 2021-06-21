import React from 'react';

export default function PostSpacesLeft({setPostSpacesLeft}){

    return (
        <div className="form-group">
            <h5>Spaces Left</h5>
                <input type="number" className="form-control" id="spaces-left" placeholder="Spaces Left" name="Post_SpacesLeft" onChange={e => setPostSpacesLeft(e.target.value)}></input>
        </div>
    )  
}
