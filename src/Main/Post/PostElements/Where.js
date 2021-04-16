import React from 'react';

class PostWhere extends React.Component {

    render() {
        return (
            <div className="form-group">
                <h5>Location</h5>
                <div id="map-container-google-1" className="z-depth-1-half map-container">
                <iframe className="google-map" src="https://maps.google.com/maps?q=phoenix&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
        )
    }   
}

export default PostWhere;