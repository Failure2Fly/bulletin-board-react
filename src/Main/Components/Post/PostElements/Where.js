import React from 'react';

class PostWhere extends React.Component {

    state = {
        address: ''
    }


    setAddress = () =>  {
        this.setState ({
            address: document.getElementById("address").innerHTML
        })
        console.log(this.state.address)
        console.log(document.getElementById("address").innerHTML)
    }


    render() {
        return (
            <div className="form-group">
                <h5>Location</h5>
                <div id="map-container-google-1" className="z-depth-1-half map-container">
                <iframe className="google-map" src="https://maps.google.com/maps?q={this.state.address}&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" allowfullscreen></iframe>
                <input onchange={() => {this.setAddress()}} type="text" className="form-control" id="address" placeholder="Address"></input>
                </div>
            </div>
        )
    }   
}

export default PostWhere;