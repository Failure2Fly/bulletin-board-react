import React from 'react';

export default function PostWhere({setPostWhere}){

    return (
        <div className="form-group">
            <h5>Location</h5>
            <div id="map-container-google-1" className="z-depth-1-half map-container">
            <iframe title="googleMap" className="google-map" src="https://maps.google.com/maps?q={this.state.address}&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" allowfullscreen></iframe>
            <input type="text" className="form-control" id="address" placeholder="Address" name="Post_Where" onChange={e => setPostWhere(e.target.value)}></input>
            </div>
        </div>
    )
}
