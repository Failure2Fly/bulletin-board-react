import React from 'react';

export default function PostPrice({setPostPrice}){

    return (
        <div className="form-group">
            <h5>Price</h5>
            <input type="number" className="form-control" id="price" placeholder="Price" name="Post_Price" onChange={e => setPostPrice(e.target.value)}></input>
        </div>
    ) 
}
