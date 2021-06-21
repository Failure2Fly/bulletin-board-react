import React from 'react';

export default function PostPhoneNumber({setPostPhoneNumber}){

    return (
        <div className="form-group">
            <h5>Phone Number</h5>
            <input type="tel" className="form-control" id="phoneNumber" placeholder="Phone Number" name="Post_PhoneNumber" onChange={e => setPostPhoneNumber(e.target.value)}></input>
        </div>
    )
}
